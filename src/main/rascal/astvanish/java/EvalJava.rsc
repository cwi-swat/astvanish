module astvanish::java::EvalJava

import astvanish::java::MatchJava;
import astvanish::java::PEvalJava; // for helpers on Java trees

import ParseTree;
import List;
import Set;
import String;
import IO;

/*
 * This module turns an ASTVanish (match/with-enhanced) Java source file
 * into a plain Java interpreter over JSON-like ASTs, as produced by PT2JSON
 * (and read with, e.g., Gson): nodes are `Map<String,Object>` with a `_tag`
 * field for the constructor, lists are `List<...>`, and lexicals are `String`s.
 * It is the Java counterpart of Eval.rsc.
 */

@synopsis{Mapping static parameter names to syntactic types}
alias Sigs = map[str, Symbol];

@synopsis{Signatures per (interpreter) method that needs to be converted}
alias AEnv = map[str, Sigs];

@synopsis{What a static variable denotes in the vanilla interpreter}
data Binding
    = var(Symbol sym)                          // a variable holding a JSON value
    | field(Expr owner, str name, Symbol sym); // a field of a JSON object (from match/with)

alias SEnv = map[str, Binding];


@synopsis{Convert the interpreter methods in `src` to vanilla Java, renaming the class to `cls`}
str toEvalJava(loc src, AEnv sigs, type[&T<:Tree] grammar, str cls)
    = toEvalJava(parseAVJava(src), sigs, grammar, cls);

str toEvalJava(start[CompilationUnit] cu, AEnv sigs, type[&T<:Tree] grammar, str cls) {
    cu = disambiguate(cu);
    assert sigs != () : "no interpreter methods given";
    ClassDec target = findClass(cu, getOneFrom(sigs<0>));
    str oldName = "<className(target)>";

    cu = top-down-break visit (cu) {
        case MethodDec md => toEval(md, sigs["<methodName(md)>"] ? (), grammar)
            when md.args[0] is methodDecHead, isInterpreterMethod(md)
    };

    Id newCls = [Id]cls;
    cu = visit (cu) {
        case Id x => newCls when "<x>" == oldName
    };

    return reindent("<cu>");
}


@synopsis{Convert a method to an interpreter, given the syntactic types of its static parameters}
MethodDec toEval(MethodDec md, Sigs sigs, type[&T<:Tree] grammar) {
    SEnv env = ();
    list[FormalParam] ps = [];
    for (FormalParam p <- params(md)) {
        if (isStaticParam(p)) {
            str x = "<paramId(p)>";
            if (x notin sigs) {
                throw "no syntactic type given for static parameter <x> of <methodName(md)>";
            }
            env[x] = var(sigs[x]);
            p = withType(p, javaType(sigs[x]));
        }
        ps += [p];
    }

    if (Block body := xform(methodBody(md), env, grammar)) {
        return rebuild(md, methodName(md), ps, flattenBlocks(body));
    }
    throw "internal error";
}

@synopsis{Replace the type of a formal parameter}
FormalParam withType(FormalParam p, Type t) {
    if (VarDecId x := p.args[4]) {
        FormalParam p2 = (FormalParam)`<Type t> <VarDecId x>`;
        // keep annotations and modifiers (e.g., final)
        if (FormalParam p3 := appl(p2.prod, p.args[0..2] + p2.args[2..])) {
            return p3;
        }
    }
    throw "internal error";
}

@synopsis{Remove superfluous nesting of blocks}
@description{
A nested block is spliced into the enclosing one if it does not declare anything,
or if it is the only statement of the enclosing block.
}
&T<:Tree flattenBlocks(&T<:Tree t) {
    return visit (t) {
        case (Block)`{<BlockStm* bs>}` => makeBlock(flatten([ b | BlockStm b <- bs ]))
    };
}

list[BlockStm] flatten([(BlockStm)`{<BlockStm* inner>}`]) = [ b | BlockStm b <- inner ];
default list[BlockStm] flatten(list[BlockStm] bs) = [ *splice(b) | BlockStm b <- bs ];

list[BlockStm] splice((BlockStm)`{<BlockStm* inner>}`) = [ i | BlockStm i <- inner ]
    when all(BlockStm i <- inner, (BlockStm)`<Stm _>` := i);
default list[BlockStm] splice(BlockStm b) = [b];


@synopsis{Transform statements and expressions, given what the static variables denote}
Tree xform(Tree t, SEnv env, type[&T<:Tree] grammar) {
    if (t is char || !(t has prod) || t.prod.def is lex || t.prod.def is layouts) {
        return t;
    }

    if (Stm s := t) {
        switch (s) {
            case (Stm)`for ($ <Id x> : <Expr e>) <Stm body>`: {
                Symbol elt = eltType(symOf(e, env));
                Type ty = javaType(elt);
                Expr e2 = toJava(e, env);
                if (Stm body2 := xform(body, env + ("<x>": var(elt)), grammar)) {
                    return (Stm)`for (<Type ty> <Id x> : <Expr e2>) <Stm body2>`;
                }
            }

            // with is non-conditional: the pattern only introduces bindings to fields
            case (Stm)`with (<Pattern p> : <Expr e>) <Stm body>`: {
                if (/z:prod(_, _, _) := alternatives(symOf(e, env), grammar),
                        success(str _, list[Symbol] bs) := matchProd(p, z)) {
                    return xform(body, bindFields(env, toJava(e, env), bs, p), grammar);
                }
                throw "no production found for pattern `<p>` (<p.src>)";
            }

            case (Stm)`match (<Expr e>) {<MatchCase* cases>}`:
                return toSwitch(e, [ c | MatchCase c <- cases ], env, grammar);
        }
    }

    if (Expr e := t) {
        switch (e) {
            case (Expr)`<Id x>`:
                if (field(_, _, _) := env["<x>"] ? var(lit(""))) {
                    return toJava(e, env);
                }

            // method calls on fields, e.g., $1.toString()
            case (Expr)`<Id x>.<Id m>(<{Expr ","}* args>)`:
                if (field(Expr owner, str name, _) := env["<x>"] ? var(lit(""))) {
                    Expr key = [Expr]"\"<name>\"";
                    // no need to cast for methods of Object
                    Expr recv = "<m>" in {"toString", "equals", "hashCode"}
                        ? (Expr)`<Expr owner>.get(<Expr key>)`
                        : toJava((Expr)`<Id x>`, env);
                    if ({Expr ","}* args2 := xform(args, env, grammar)) {
                        return (Expr)`<Expr recv>.<Id m>(<{Expr ","}* args2>)`;
                    }
                }
        }
    }

    if (appl(Production p, list[Tree] kids) := t) {
        return appl(p, [ xform(k, env, grammar) | Tree k <- kids ]);
    }
    return t;
}


@synopsis{Convert `match`'s cases to an ordinary switch statement on the `_tag` field}
Stm toSwitch(Expr e, list[MatchCase] cases, SEnv env, type[&T<:Tree] grammar) {
    Expr owner = toJava(e, env);
    Expr subject = (Expr)`(String) <Expr owner>.get("_tag")`;
    Stm sw = (Stm)`switch (<Expr subject>) {}`;
    set[str] seen = {};

    for ((MatchCase)`case <Pattern p>: <Stm* ss>` <- cases) {
        if (/z:prod(_, _, _) := alternatives(symOf(e, env), grammar),
                success(str cons, list[Symbol] bs) := matchProd(p, z)) {
            if (cons in seen) {
                throw "multiple cases for constructor <cons> (<p.src>)";
            }
            seen += {cons};

            Expr guard = [Expr]"\"<cons>\"";
            // each case gets its own block, to scope local variables
            list[Stm] stms = [ s | Stm s <- ss ];
            Stm caseBody = ([Stm s0] := stms && (Stm)`{<BlockStm* _>}` := s0) ? s0 : blockOf(stms);
            if (Stm body := xform(caseBody, bindFields(env, owner, bs, p), grammar),
                    (Stm)`switch (<Expr c>) {<SwitchGroup* gs>}` := sw) {
                // a break after a body that cannot complete normally would be unreachable
                sw = canCompleteNormally(body)
                    ? (Stm)`switch (<Expr c>) {
                           '<SwitchGroup* gs>
                           'case <Expr guard>: <Stm body>
                           'break;
                           '}`
                    : (Stm)`switch (<Expr c>) {
                           '<SwitchGroup* gs>
                           'case <Expr guard>: <Stm body>
                           '}`;
            }
        }
        else {
            throw "no production found for pattern `<p>` (<p.src>)";
        }
    }

    return sw;
}


@synopsis{Bind $1, $2, ... to the fields of `owner` as per the symbols matched by a pattern}
SEnv bindFields(SEnv env, Expr owner, list[Symbol] bs, Pattern p) {
    for (int i <- index(bs)) {
        str name = nameOf(bs[i]);
        if (name == "$unknown") {
            throw "pattern variable $<i+1> binds an unlabeled symbol <bs[i]> (<p.src>)";
        }
        env["$<i+1>"] = field(owner, name, bs[i]);
    }
    return env;
}

@synopsis{The syntactic type of a static variable}
Symbol symOf(Expr e, SEnv env) {
    if ((Expr)`<Id x>` := e, "<x>" in env) {
        return env["<x>"].sym;
    }
    throw "only static variables are allowed in match/with/for (not `<e>`, <e.src>)";
}

@synopsis{The vanilla Java expression for a static variable}
Expr toJava(e:(Expr)`<Id x>`, SEnv env) {
    switch (env["<x>"]) {
        case var(_):
            return e;
        case field(Expr owner, str name, Symbol sym): {
            RefType t = javaRefType(sym);
            Expr key = [Expr]"\"<name>\"";
            return (Expr)`((<RefType t>) <Expr owner>.get(<Expr key>))`;
        }
    }
    throw "internal error";
}

@synopsis{The productions of a (non-terminal) symbol}
value alternatives(Symbol s, type[&T<:Tree] grammar) {
    Symbol u = unlabel(s);
    if (u notin grammar.definitions) {
        throw "no productions for <s>";
    }
    return grammar.definitions[u];
}


@synopsis{The Java type corresponding to the JSON representation (cf. PT2JSON) of a symbol}
str javaTypeStr(label(_, Symbol s)) = javaTypeStr(s);
str javaTypeStr(conditional(Symbol s, _)) = javaTypeStr(s);
str javaTypeStr(\iter-star-seps(Symbol s, _)) = "List\<<javaTypeStr(s)>\>";
str javaTypeStr(\iter-seps(Symbol s, _)) = "List\<<javaTypeStr(s)>\>";
str javaTypeStr(sort(_)) = "Map\<String,Object\>";
str javaTypeStr(\parameterized-sort(_, _)) = "Map\<String,Object\>";
default str javaTypeStr(Symbol _) = "String"; // lexicals, keywords, ...

Type javaType(Symbol s) = [Type]javaTypeStr(s);
RefType javaRefType(Symbol s) = [RefType]javaTypeStr(s);

@synopsis{Determine the element type of a regular symbol}
Symbol eltType(label(_, Symbol s)) = eltType(s);
Symbol eltType(conditional(Symbol s, _)) = eltType(s);
Symbol eltType(\iter-star-seps(Symbol s, _)) = s;
Symbol eltType(\iter-seps(Symbol s, _)) = s;
Symbol eltType(\iter-star(Symbol s)) = s;
Symbol eltType(\iter(Symbol s)) = s;
default Symbol eltType(Symbol s) {
    throw "cannot iterate over <s>";
}

Symbol unlabel(label(_, Symbol s)) = unlabel(s);
Symbol unlabel(conditional(Symbol s, _)) = unlabel(s);
default Symbol unlabel(Symbol s) = s;
