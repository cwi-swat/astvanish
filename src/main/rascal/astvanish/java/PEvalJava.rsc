module astvanish::java::PEvalJava

import astvanish::java::MatchJava;

import IO;
import ParseTree;
import String;
import List;
import Set;
import Message;

@synopsis{A `Value` represent a statically known value: either code, or a (constant) expression}
data Value
    = code(Tree code)
    | expr(Expr expr);

@synopsis{The environment capturing statically known bindings}
alias Env = map[str, Value];


/*
 * Entry points
 */

@synopsis{Partially evaluate as per one or more payload directives (for .javaa interpreters) in one or more sources}
@description{
The directive has the form `//@@ <path>: <method>(<param>)`, where `<param>` is the name of
a `$`-typed parameter of `<method>` in the interpreter at `<path>` (relative to `root`).
Directives for other targets (e.g., Javascript) are ignored.
}
void pevalJava(Tree prog, list[Tree] with=[], loc root=|project://astvanish/|, bool logging=false) {
    list[Tree] progs = [prog, *with];
    assert all(Tree p <- progs, p.prod.def is \start) : "must provide start-syntax trees";

    map[str path, map[str method, Env statics] calls] tasks = ();
    map[str, map[str, list[loc]]] sources = ();

    for (Tree p <- progs, <str path, str m, str static> <- extractPayload(p), endsWith(path, ".javaa")) {
        if (path notin tasks) {
            tasks[path] = ();
            sources[path] = ();
        }
        if (m notin tasks[path]) {
            tasks[path][m] = ();
            sources[path][m] = [];
        }
        if (static in tasks[path][m]) {
            throw "duplicate binding for static param <static> (<path> / <m>)";
        }
        tasks[path][m] += (static: code(p.top));
        sources[path][m] += [p.src];
    }

    for (str path <- tasks, str m <- tasks[path]) {
        pevalJavaTo(root + path, m, tasks[path][m], sources[path][m], logging=logging);
    }
}

@synopsis{Partially evaluate `method` of the interpreter at `interp`, and write the result next to the first source}
loc pevalJavaTo(loc interp, str method, Env env, list[loc] srcs, bool logging=false) {
    str cls = className(method, srcs);
    str java = pevalJava(parseAVJava(interp), env, method, cls, logging);
    loc l = srcs[0].top.parent + "<cls>.java";
    if (logging) {
        println("LOG: writing to <l>");
    }
    writeFile(l, java);
    return l;
}

@synopsis{The name of the residual class, based on the semantics `method` and the first input source}
str className(str method, list[loc] srcs) {
    assert size(srcs) >= 1;
    str base = split(".", srcs[0].file)[0];
    return javaIdent(capitalize(base)) + javaIdent(capitalize(method));
}

str javaIdent(str s) = ( "" | it + capitalize(part) | str part <- split("_", replaceAll(replaceAll(s, "-", "_"), " ", "_")), part != "" );


alias PEvalTask = tuple[str path, str func, str static];
alias Payload = set[PEvalTask];

@synopsis{Extract the payload //@@ <file>: <method>(<param>) directives from comments}
Payload extractPayload(Tree code) {
    Payload pl = {};
    visit (code) {
        case Tree c: {
            if (c has prod, lex("Comment") := c.prod.def || label(_, lex("Comment")) := c.prod.def,
                /^\/\/@@ <path:[^:\ ]*>: <f:[a-zA-Z0-9_$]+>\(<par:[a-zA-Z0-9_$]+>\)/ := "<c>") {
                pl += {<path, f, par>};
            }
        }
    }
    return pl;
}


@synopsis{Partially evaluate `method` in the (match/with-enhanced) Java `cu` given `static` arguments}
@description{
Returns the source text of the residual compilation unit: the class declaring `method` is renamed
to `cls`, its methods with `$`-typed (static) parameters are removed, and the specialized
methods are added. The specialized entry point keeps the name `method`.
}
str pevalJava(start[CompilationUnit] cu, Env static, str method, str cls, bool logging) {
    cu = disambiguate(cu);
    ClassDec target = findClass(cu, method);
    Admin admin = newAdmin(target, logging);

    if ([MethodDec md] := admin.lookup(method)) {
        list[Expr] args = [ (Expr)`<Id x>` | FormalParam p <- params(md), Id x := paramId(p) ];
        Expr call = specializeCall(md, static, args, admin, forceDeclare=true);
        if ((Expr)`<Id entry>(<{Expr ","}* _>)` := call) {
            for (Message m <- admin.msgs()) {
                println("<m.msg> (<m.at>)");
            }
            list[bool] statics = [ isStaticParam(p) | FormalParam p <- params(md) ];
            return reindent("<residual(cu, target, admin.generated(), "<entry>", method, statics, cls)>");
        }
        throw "internal error: expected call to the specialized entry point, got <call>";
    }
    throw "could not find (unique) method <method> in source code";
}


/*
 * Code administration
 */

@synopsis{Object interface to do code admin: lookup methods and declare new specialized ones}
alias Admin = tuple[
    list[MethodDec](str) lookup, // list as optional, we might not find it (or there are overloads)
    Id(MethodDec, list[FormalParam], Block, Env) declare,
    Id() freshLabel,
    void(Message) alert,
    list[MethodDec]() generated,
    set[Message]() msgs,
    void(value) log
];

@synopsis{Constructor for the `Admin` interface}
Admin newAdmin(ClassDec target, bool logging) {
    map[str, list[MethodDec]] methods = ();
    for (MethodDec md <- members(target)) {
        str name = "<methodName(md)>";
        methods[name] = (methods[name] ? []) + [md];
    }

    list[MethodDec] lookup_(str name) = methods[name] ? [];

    // counters per specialized method to generate fresh identifiers
    map[str, int] idCounters = ();

    // memo table to not specialize the same method multiple times for the same statics
    map[str, Id] memo = ();

    str yield(code(Tree t)) = "<t>";
    str yield(expr(Expr e)) = "<e>";

    // we memoize on the method name `x` and the static args
    str hash(str x, Env env) = ( x | it + " " + k + "="
        + squeeze(yield(env[k]), #[\ \t\n]) | str k <- sort(env<0>) );

    list[MethodDec] gen = [];

    Id declare_(MethodDec md, list[FormalParam] dynParams, Block body, Env env) {
        str prefix = "<methodName(md)>";
        str key = hash(prefix, env);
        if (key in memo) {
            return memo[key];
        }

        int n = idCounters[prefix] ? 0;
        idCounters[prefix] = n + 1;
        Id newId = [Id]"<prefix>$<n>";
        memo[key] = newId;

        gen += [rebuild(md, newId, dynParams, body)];
        return newId;
    }

    int labels = 0;
    Id freshLabel_() {
        Id l = [Id]"match$<labels>";
        labels += 1;
        return l;
    }

    set[Message] msgs = {};
    void alert_(Message m) {
        msgs += {m};
    }

    list[MethodDec] generated_() = gen;

    set[Message] msgs_() = msgs;

    void log_(value v) {
        if (logging) {
            println("LOG: <v>");
        }
    }

    return <lookup_, declare_, freshLabel_, alert_, generated_, msgs_, log_>;
}


/*
 * Specialization of method calls
 */

@synopsis{Specialize a call to method `md` with `args`, in the current static environment}
@description{
Static arguments are bound in the environment for the method body, dynamic ones remain
parameters of the specialized method. Returns either a call to the specialized method,
or, if the specialized body just returns a constant (and no dynamic argument would be lost),
that constant.
}
Expr specializeCall(MethodDec md, Env env, {Expr ","}* args, Admin admin, bool forceDeclare=false)
    = specializeCall(md, env, [ a | Expr a <- args ], admin, forceDeclare=forceDeclare);

Expr specializeCall(MethodDec md, Env env, list[Expr] args, Admin admin, bool forceDeclare=false) {
    admin.log("method: <methodName(md)>(<intercalate(", ", ["<a>" | a <- args])>)");
    list[FormalParam] ps = params(md);
    if (size(ps) != size(args)) {
        throw "wrong number of arguments for <methodName(md)>: expected <size(ps)>, got <size(args)> (<md.src>)";
    }

    Env newEnv = ();
    list[FormalParam] dynParams = [];
    list[Expr] dynArgs = [];
    for (<FormalParam p, Expr a> <- zip2(ps, args)) {
        if (p is varArityParam) {
            throw "varargs are not supported (<p.src>)";
        }
        if ([Value v] := tryEval(a, env)) {
            newEnv["<paramId(p)>"] = v;
        }
        else if (isStaticParam(p)) {
            throw "dynamic argument `<a>` passed to static parameter `<p>` of <methodName(md)>";
        }
        else {
            dynParams += [p];
            dynArgs += [pevalExpr(a, env, admin)];
        }
    }

    Block body = pevalBlock(methodBody(md), newEnv, admin);

    if (!forceDeclare, [Expr e] := isInlineable(body), all(Expr a <- dynArgs, isTrivial(a))) {
        admin.log("inlining <e>");
        return e;
    }

    Id newName = admin.declare(md, dynParams, body, newEnv);
    {Expr ","}* rest = makeArgs(dynArgs);
    return (Expr)`<Id newName>(<{Expr ","}* rest>)`;
}

@synopsis{A body is inlineable if it consists of returning a constant}
list[Expr] isInlineable((Block)`{<BlockStm* bs>}`) {
    if ([(BlockStm)`return <Expr e>;`] := [ b | BlockStm b <- bs ], [expr(_)] := tryEval(e, ())) {
        return [e];
    }
    return [];
}

@synopsis{Trivial expressions can be dropped without losing side-effects}
bool isTrivial((Expr)`<Id _>`) = true;
bool isTrivial((Expr)`<Literal _>`) = true;
bool isTrivial((Expr)`this`) = true;
default bool isTrivial(Expr _) = false;


/*
 * Statements
 */

@synopsis{Partially evaluate a block, removing superfluous nesting and unreachable code}
Block pevalBlock((Block)`{<BlockStm* bs>}`, Env env, Admin admin) {
    list[BlockStm] result = pevalBlockStms([ b | BlockStm b <- bs ], env, admin);
    // a block consisting of a single block is the same as the inner block
    if ([(BlockStm)`{<BlockStm* inner>}`] := result) {
        result = [ b | BlockStm b <- inner ];
    }
    return makeBlock(result);
}

list[BlockStm] pevalBlockStms(list[BlockStm] bs, Env env, Admin admin)
    = prune([ *pevalBlockStm(b, env, admin) | BlockStm b <- bs ]);

list[BlockStm] pevalBlockStm((BlockStm)`<Stm s>`, Env env, Admin admin)
    = splice(pevalStm(s, env, admin));

default list[BlockStm] pevalBlockStm(BlockStm b, Env env, Admin admin) {
    // local variable declarations and local classes
    if (BlockStm b2 := pevalKids(b, env, admin)) {
        return [b2];
    }
    throw "internal error";
}

@synopsis{Partially evaluate a statement}
Stm pevalStm(Stm s, Env env, Admin admin) {
    admin.log("statement: <s>");
    switch (s) {
        case (Stm)`if (<Expr c>) <Stm s1> else <Stm s2>`: {
            if ([expr(Expr v)] := tryEval(c, env), bool b := toVal(v)) {
                return b ? pevalStm(s1, env, admin) : pevalStm(s2, env, admin);
            }
            Expr c2 = pevalExpr(c, env, admin);
            Stm s12 = noDanglingIf(pevalStm(s1, env, admin));
            Stm s22 = pevalStm(s2, env, admin);
            return (Stm)`if (<Expr c2>) <Stm s12> else <Stm s22>`;
        }

        case (Stm)`if (<Expr c>) <Stm s1>`: {
            if ([expr(Expr v)] := tryEval(c, env), bool b := toVal(v)) {
                return b ? pevalStm(s1, env, admin) : (Stm)`;`;
            }
            Expr c2 = pevalExpr(c, env, admin);
            Stm s12 = pevalStm(s1, env, admin);
            return (Stm)`if (<Expr c2>) <Stm s12>`;
        }

        case (Stm)`for ($ <Id x> : <Expr e>) <Stm body>`: {
            if ([code(Tree seq)] := tryEval(e, env)) {
                return unroll(x, body, seq, env, admin);
            }
            throw "static for-loop over non-static (code) value `<e>` (<e.src>)";
        }

        // the with statement is non-conditional, it assumes `e` *will* match the pattern
        case (Stm)`with (<Pattern p> : <Expr e>) <Stm body>`: {
            Tree subject = staticCode(e, env);
            if (success(list[Tree] bs) := matchTree(p, subject)) {
                return pevalStm(body, bind(env, bs), admin);
            }
            admin.alert(error("pattern did not match `<subject>`", p.src));
            return (Stm)`;`;
        }

        // match selects the first matching case; if none matches, nothing is executed
        case (Stm)`match (<Expr e>) {<MatchCase* cases>}`: {
            Tree subject = staticCode(e, env);
            for ((MatchCase)`case <Pattern p>: <Stm* ss>` <- cases) {
                if (success(list[Tree] bs) := matchTree(p, subject)) {
                    return pevalCase([ x | Stm x <- ss ], bind(env, bs), admin);
                }
            }
            admin.alert(warning("no matching case found for `<subject>`", s.src));
            return (Stm)`;`;
        }

        case (Stm)`{<BlockStm* bs>}`: {
            Block b = pevalBlock((Block)`{<BlockStm* bs>}`, env, admin);
            return (Stm)`<Block b>`;
        }

        case (Stm)`<Expr e>;`: {
            Expr e2 = pevalExpr(e, env, admin);
            // a constant is not a valid statement in Java
            return [expr(_)] := tryEval(e2, ()) ? (Stm)`;` : (Stm)`<Expr e2>;`;
        }
    }

    if (Stm s2 := pevalKids(s, env, admin)) {
        return s2;
    }
    throw "internal error";
}

@synopsis{Partially evaluate the body of a match case}
@description{
A `break` in a case body exits the match statement (like in Java's switch). A trailing
break is simply dropped; otherwise the body becomes a labeled block, and breaks are
redirected to that label.
}
Stm pevalCase(list[Stm] ss, Env env, Admin admin) {
    if (ss != [], (Stm)`break;` := last(ss)) {
        ss = prefix(ss);
    }
    if (any(Stm s <- ss, hasCaseBreak(s))) {
        Id lbl = admin.freshLabel();
        Stm body = pevalStm(blockOf([ redirectBreaks(s, lbl) | Stm s <- ss ]), env, admin);
        return (Stm)`<Id lbl>: <Stm body>`;
    }
    return pevalStm(blockOf(ss), env, admin);
}

@synopsis{Does a statement contain a break that targets the enclosing match statement?}
bool hasCaseBreak(Stm s) {
    if ((Stm)`break;` := s) {
        return true;
    }
    if (isBreakTarget(s)) {
        return false;
    }
    bool found = false;
    for (Tree k <- s.args) {
        // find the outermost statements, recursion takes care of the rest
        top-down-break visit (k) {
            case Stm x: found = found || hasCaseBreak(x);
            case ClassBody _: ; // don't go into anonymous classes
        }
    }
    return found;
}

@synopsis{Redirect the breaks that target the enclosing match statement to label `lbl`}
Stm redirectBreaks(Stm s, Id lbl) {
    if ((Stm)`break;` := s) {
        return (Stm)`break <Id lbl>;`;
    }
    if (isBreakTarget(s)) {
        return s;
    }
    list[Tree] kids = [ top-down-break visit (k) {
            case Stm x => redirectBreaks(x, lbl)
            case ClassBody cb => cb
        } | Tree k <- s.args ];
    if (Stm s2 := appl(s.prod, kids)) {
        return s2;
    }
    throw "internal error";
}

@synopsis{Statements that capture unlabeled breaks}
bool isBreakTarget(Stm s)
    = s is \while || s is doWhile || s is \for || s is forEach || s is \switch
    || (Stm)`match (<Expr _>) {<MatchCase* _>}` := s;


@synopsis{Unroll a static for-each loop over a sequence of parse trees}
Stm unroll(Id x, Stm body, Tree seq, Env env, Admin admin) {
    if (!(seq.prod is regular)) {
        throw "loop unrolling only over regulars, not <seq.prod>";
    }
    if (seq.prod.def is opt) {
        throw "unsupported regular <seq.prod.def>";
    }
    if (hasCaseBreak(body) || /(Stm)`continue;` := body) {
        throw "break/continue in static for-loops is not supported (<body.src>)";
    }

    int step = (seq.prod.def has separators) ? size(seq.prod.def.separators) : 0;

    list[BlockStm] iterations = [ *splice(pevalStm(body, env + ("<x>": code(seq.args[i])), admin))
        | int i <- [0, step + 1 .. size(seq.args)] ];

    Block b = makeBlock(prune(iterations));
    return (Stm)`<Block b>`;
}

@synopsis{Extend the environment with the bindings of a pattern match}
Env bind(Env env, list[Tree] bs) = env + ( "$<i+1>": code(bs[i]) | int i <- [0..size(bs)] );

@synopsis{Get the code that a static variable refers to}
Tree staticCode(Expr e, Env env) {
    if ((Expr)`<Id x>` := e, "<x>" in env, code(Tree t) := env["<x>"]) {
        return t;
    }
    throw "only static variables are allowed in match/with (not `<e>`, <e.src>)";
}


/*
 * Expressions
 */

@synopsis{Partially evaluate an expression}
Expr pevalExpr(Expr e, Env env, Admin admin) {
    // static expressions are folded, unless they evaluate to code
    if ([expr(Expr v)] := tryEval(e, env)) {
        return v;
    }

    // calls with static arguments to methods are specialized
    if ((Expr)`<Id f>(<{Expr ","}* args>)` := e, any(Expr a <- args, isStatic(a, env)),
            [MethodDec md] := admin.lookup("<f>")) {
        return specializeCall(md, env, args, admin);
    }

    // method calls on a static (non-code) variable: replace the receiver by its value
    if ((Expr)`<Id x>.<Id m>(<{Expr ","}* args>)` := e, "<x>" in env, expr(Expr v) := env["<x>"]) {
        Expr recv = (Expr)`(<Expr v>)`;
        if ((Expr)`<Literal _>` := v) {
            recv = v;
        }
        {Expr ","}* args2 = pevalArgs(args, env, admin);
        return (Expr)`<Expr recv>.<Id m>(<{Expr ","}* args2>)`;
    }

    if ((Expr)`<Id x>` := e, isCode(x, env)) {
        throw "code cannot escape into the dynamic world (<x>, <x.src>)";
    }

    if (Expr e2 := pevalKids(e, env, admin)) {
        return e2;
    }
    throw "internal error";
}

{Expr ","}* pevalArgs({Expr ","}* args, Env env, Admin admin)
    = makeArgs([ pevalExpr(a, env, admin) | Expr a <- args ]);

@synopsis{Partially evaluate the children of a tree (expressions, statements, blocks)}
Tree pevalKids(Tree t, Env env, Admin admin) {
    if (appl(Production p, list[Tree] kids) := t) {
        return appl(p, [ pevalSub(k, env, admin) | Tree k <- kids ]);
    }
    return t;
}

Tree pevalSub(Tree t, Env env, Admin admin) {
    return top-down-break visit (t) {
        case Stm s => pevalStm(s, env, admin)
        case Block b => pevalBlock(b, env, admin)
        case Expr e => pevalExpr(e, env, admin)
        case AmbName a: {
            if ((AmbName)`<Id x>` := a, isCode(x, env)) {
                throw "code cannot escape into the dynamic world (<x>, <x.src>)";
            }
        }
    };
}

@synopsis{An identifier "is" code if it refers to code in the environment}
bool isCode(Id x, Env env) = "<x>" in env && env["<x>"] is code;


/*
 * Static evaluation
 */

@synopsis{Thrown by `eval` when an expression cannot be (faithfully) evaluated statically}
data NotStatic = notStatic(Expr e);

@synopsis{Evaluate an expression if it is static (the list encodes optionality)}
list[Value] tryEval(Expr e, Env env) {
    try {
        return [eval(e, env)];
    }
    catch notStatic(_): {
        return [];
    }
}

@synopsis{An expression is static precisely when `eval` succeeds on it}
bool isStatic(Expr e, Env env) = tryEval(e, env) != [];


@synopsis{Evaluate an expression according to Java semantics, throws `notStatic` if it is not static}

Value eval((Expr)`<Id x>`, Env env) = env["<x>"]
    when "<x>" in env;

Value eval(e:(Expr)`<Literal _>`, Env _) = expr(e);

Value eval((Expr)`(<Expr e>)`, Env env) = eval(e, env);

Value eval(e:(Expr)`<Id x>.toString()`, Env env) = toStringOf(eval((Expr)`<Id x>`, env), e);

Value eval(e:(Expr)`<Expr obj>.toString()`, Env env) = toStringOf(eval(obj, env), e);

Value eval(e:(Expr)`<Id x>.length()`, Env env) = lengthOf(val((Expr)`<Id x>`, env), e);

Value eval(e:(Expr)`<Expr obj>.length()`, Env env) = lengthOf(val(obj, env), e);

Value eval(e:(Expr)`<Id x>.equals(<Expr arg>)`, Env env) = equalsOf(val((Expr)`<Id x>`, env), val(arg, env), e);

Value eval(e:(Expr)`<Expr obj>.equals(<Expr arg>)`, Env env) = equalsOf(val(obj, env), val(arg, env), e);

Value eval(e:(Expr)`+<Expr arg>`, Env env) = expr(fromVal(asInt(val(arg, env), e)));

Value eval(e:(Expr)`-<Expr arg>`, Env env) = expr(fromVal(wrap(-asInt(val(arg, env), e))));

Value eval(e:(Expr)`!<Expr arg>`, Env env) = expr(fromVal(!asBool(val(arg, env), e)));

Value eval(e:(Expr)`<Expr lhs> + <Expr rhs>`, Env env) {
    value a = val(lhs, env);
    value b = val(rhs, env);
    if (str _ := a || str _ := b) {
        return expr(fromVal(toStr(a, e) + toStr(b, e)));
    }
    return expr(fromVal(wrap(asInt(a, e) + asInt(b, e))));
}

Value eval(e:(Expr)`<Expr lhs> - <Expr rhs>`, Env env)
    = expr(fromVal(wrap(asInt(val(lhs, env), e) - asInt(val(rhs, env), e))));

Value eval(e:(Expr)`<Expr lhs> * <Expr rhs>`, Env env)
    = expr(fromVal(wrap(asInt(val(lhs, env), e) * asInt(val(rhs, env), e))));

Value eval(e:(Expr)`<Expr lhs> / <Expr rhs>`, Env env) {
    int a = asInt(val(lhs, env), e);
    int b = asInt(val(rhs, env), e);
    if (b == 0) { // ArithmeticException at runtime
        throw notStatic(e);
    }
    int q = abs(a) / abs(b); // truncation towards zero
    return expr(fromVal(wrap((a < 0) != (b < 0) ? -q : q)));
}

Value eval(e:(Expr)`<Expr lhs> % <Expr rhs>`, Env env) {
    int a = asInt(val(lhs, env), e);
    int b = asInt(val(rhs, env), e);
    if (b == 0) { // ArithmeticException at runtime
        throw notStatic(e);
    }
    int r = abs(a) % abs(b); // sign of the dividend
    return expr(fromVal(a < 0 ? -r : r));
}

// && and || short-circuit
Value eval(e:(Expr)`<Expr lhs> && <Expr rhs>`, Env env)
    = expr(fromVal(asBool(val(lhs, env), e) && asBool(val(rhs, env), e)));

Value eval(e:(Expr)`<Expr lhs> || <Expr rhs>`, Env env)
    = expr(fromVal(asBool(val(lhs, env), e) || asBool(val(rhs, env), e)));

// the conditional is static if the condition is, and the branch that is selected
Value eval(e:(Expr)`<Expr cond> ? <Expr then> : <Expr els>`, Env env)
    = asBool(val(cond, env), e) ? eval(then, env) : eval(els, env);

Value eval(e:(Expr)`<Expr lhs> == <Expr rhs>`, Env env)
    = expr(fromVal(primEq(val(lhs, env), val(rhs, env), e)));

Value eval(e:(Expr)`<Expr lhs> != <Expr rhs>`, Env env)
    = expr(fromVal(!primEq(val(lhs, env), val(rhs, env), e)));

Value eval(e:(Expr)`<Expr lhs> \<= <Expr rhs>`, Env env)
    = expr(fromVal(asInt(val(lhs, env), e) <= asInt(val(rhs, env), e)));

Value eval(e:(Expr)`<Expr lhs> \< <Expr rhs>`, Env env)
    = expr(fromVal(asInt(val(lhs, env), e) < asInt(val(rhs, env), e)));

Value eval(e:(Expr)`<Expr lhs> \>= <Expr rhs>`, Env env)
    = expr(fromVal(asInt(val(lhs, env), e) >= asInt(val(rhs, env), e)));

Value eval(e:(Expr)`<Expr lhs> \> <Expr rhs>`, Env env)
    = expr(fromVal(asInt(val(lhs, env), e) > asInt(val(rhs, env), e)));

// all other expressions are not static
default Value eval(Expr e, Env _) {
    throw notStatic(e);
}


@synopsis{Evaluate to a (literal) Java expression; code values are not Java values}
Expr evalExpr(Expr e, Env env) {
    if (expr(Expr v) := eval(e, env)) {
        return v;
    }
    throw notStatic(e);
}

@synopsis{Evaluate to the Rascal representation of a Java value}
value val(Expr e, Env env) = toVal(evalExpr(e, env));


Value toStringOf(code(Tree t), Expr _) = expr(fromVal("<t>"));
Value toStringOf(expr(Expr v), Expr _) = expr(v) when str _ := toVal(v);
default Value toStringOf(Value _, Expr e) {
    throw notStatic(e);
}

Value lengthOf(str s, Expr _) = expr(fromVal(size(s))) when bmp(s);
default Value lengthOf(value _, Expr e) {
    throw notStatic(e);
}

Value equalsOf(str a, str b, Expr _) = expr(fromVal(a == b));
default Value equalsOf(value _, value _, Expr e) {
    throw notStatic(e);
}


@synopsis{Java values that have no direct Rascal counterpart}
@description{
Next to these, booleans are represented as `bool`, `int`s as `int`, and `String`s as `str`.
Longs, chars, floats, doubles and class literals are opaque: we do not compute with them.
}
data JavaValue
    = jnull()
    | jopaque()
    ;

@synopsis{Convert a Java literal expression (the result of `eval`) to a Rascal value}
value toVal((Expr)`true`) = true;
value toVal((Expr)`false`) = false;
value toVal((Expr)`null`) = jnull();
value toVal((Expr)`<StringLiteral s>`) = unescape("<s>"[1..-1]);
value toVal(e:(Expr)`<IntLiteral i>`) = toInt("<i>")
    when i is deci, /^[0-9]+$/ := "<i>";
value toVal((Expr)`-<Expr e>`) = wrap(-n)
    when int n := toVal(e);
default value toVal(Expr e) = jopaque();

@synopsis{Convert a Rascal value to a Java literal expression}
Expr fromVal(int x) = [Expr]"<x>";
Expr fromVal(str x) = [Expr]"\"<escape(x)>\"";
Expr fromVal(bool x) = [Expr]"<x>";

int asInt(int n, Expr _) = n;
default int asInt(value _, Expr e) {
    throw notStatic(e);
}

bool asBool(bool b, Expr _) = b;
default bool asBool(value _, Expr e) {
    throw notStatic(e);
}

@synopsis{String conversion as in Java's string concatenation (for the values we support)}
str toStr(str s, Expr _) = s;
str toStr(int n, Expr _) = "<n>";
str toStr(bool b, Expr _) = "<b>";
str toStr(jnull(), Expr _) = "null";
default str toStr(value _, Expr e) {
    throw notStatic(e);
}

@synopsis{Java's == on primitives (and null); objects (including strings) are compared by reference}
bool primEq(int a, int b, Expr _) = a == b;
bool primEq(bool a, bool b, Expr _) = a == b;
bool primEq(jnull(), jnull(), Expr _) = true;
default bool primEq(value _, value _, Expr e) {
    throw notStatic(e);
}

@synopsis{Java's 32-bit two's complement int arithmetic}
int wrap(int n) {
    int m = (n + 2147483648) % 4294967296;
    if (m < 0) {
        m += 4294967296;
    }
    return m - 2147483648;
}

int abs(int n) = n < 0 ? -n : n;

@synopsis{Is a string within the Basic Multilingual Plane (so length agrees with UTF-16)}
bool bmp(str s) = all(int c <- chars(s), c < 0x10000);

@synopsis{Escape a string for use in a Java string literal}
str escape(str s) = ( "" | it + escapeChar(c) | int c <- chars(s) );

str escapeChar(int c) {
    switch (c) {
        case 0x5C: return "\\\\";
        case 0x22: return "\\\"";
        case 0x0A: return "\\n";
        case 0x0D: return "\\r";
        case 0x09: return "\\t";
        case 0x08: return "\\b";
        case 0x0C: return "\\f";
    }
    if (c < 0x20) { // octal escape (unicode escapes are processed before lexing)
        return "\\<c / 64><(c / 8) % 8><c % 8>";
    }
    return stringChar(c);
}

@synopsis{Unescape the contents of a Java string literal}
@description{
Returns `jopaque()` for unicode escapes, which are processed before lexing in Java.
}
value unescape(str s) {
    str r = "";
    int i = 0;
    int n = size(s);
    while (i < n) {
        str c = s[i];
        if (c != "\\" || i + 1 == n) {
            r += c;
            i += 1;
            continue;
        }
        str d = s[i + 1];
        i += 2;
        switch (d) {
            case "n": r += "\n";
            case "t": r += "\t";
            case "r": r += "\r";
            case "b": r += stringChar(8);
            case "f": r += stringChar(12);
            case "u": return jopaque();
            default: {
                if (/[0-7]/ := d) { // octal: at most 3 digits, max \377
                    str oct = d;
                    int maxLen = /[0-3]/ := d ? 3 : 2;
                    while (size(oct) < maxLen, i < n, /[0-7]/ := s[i]) {
                        oct += s[i];
                        i += 1;
                    }
                    r += stringChar(toInt(oct, 8));
                }
                else {
                    r += d; // \" \' \\
                }
            }
        }
    }
    return r;
}


/*
 * Reachability (residual code must compile)
 */

@synopsis{Remove statements after a statement that cannot complete normally (they would be unreachable)}
list[BlockStm] prune(list[BlockStm] bs) {
    list[BlockStm] result = [];
    for (BlockStm b <- bs) {
        result += [b];
        if ((BlockStm)`<Stm s>` := b, !canCompleteNormally(s)) {
            break;
        }
    }
    return result;
}

@synopsis{Approximation of JLS 14.22 for the statements we produce}
bool canCompleteNormally((Stm)`return <Expr _>;`) = false;
bool canCompleteNormally((Stm)`return;`) = false;
bool canCompleteNormally((Stm)`throw <Expr _>;`) = false;
bool canCompleteNormally((Stm)`break;`) = false;
bool canCompleteNormally((Stm)`break <Id _>;`) = false;
bool canCompleteNormally((Stm)`continue;`) = false;
bool canCompleteNormally((Stm)`continue <Id _>;`) = false;
bool canCompleteNormally((Stm)`{<BlockStm* bs>}`) {
    list[BlockStm] l = [ b | BlockStm b <- bs ];
    if (l != [], (BlockStm)`<Stm s>` := last(l)) {
        return canCompleteNormally(s);
    }
    return true;
}
bool canCompleteNormally((Stm)`if (<Expr _>) <Stm s1> else <Stm s2>`)
    = canCompleteNormally(s1) || canCompleteNormally(s2);
bool canCompleteNormally((Stm)`while (true) <Stm body>`) = hasLoopBreak(body);
default bool canCompleteNormally(Stm _) = true;

bool hasLoopBreak(Stm s) = hasCaseBreak(s);


/*
 * Constructing the residual program
 */

@synopsis{Resolve the (expected) ambiguities: generic local variable declarations vs. expression statements}
start[CompilationUnit] disambiguate(start[CompilationUnit] cu) {
    return visit (cu) {
        case a:amb(set[Tree] alts): {
            if (Tree alt <- alts, alt has prod, [sort("LocalVarDecStm")] := alt.prod.symbols) {
                insert alt;
            }
            else {
                throw "unexpected ambiguity: `<a>`";
            }
        }
    }
}

@synopsis{Find the class declaring the method with name `method`}
ClassDec findClass(start[CompilationUnit] cu, str method) {
    set[ClassDec] found = {};
    visit (cu) {
        case ClassDec cd: {
            if (cd is classDec, any(MethodDec md <- members(cd), "<methodName(md)>" == method)) {
                found += {cd};
            }
        }
    }
    if ({ClassDec cd} := found) {
        return cd;
    }
    throw "expected exactly one class declaring method <method>, found <size(found)>";
}

@synopsis{The methods declared directly in a class}
list[MethodDec] members(ClassDec cd)
    = [ md | (ClassBody)`{<ClassBodyDec* decs>}` := classBody(cd), (ClassBodyDec)`<MethodDec md>` <- decs ];

ClassBody classBody(ClassDec cd) {
    if (ClassBody cb := cd.args[2]) {
        return cb;
    }
    throw "internal error";
}

Id className(ClassDec cd) {
    if (Id x := cd.args[0].args[4]) {
        return x;
    }
    throw "internal error";
}

@synopsis{Accessors on method declarations}
Tree methodHead(MethodDec md) {
    Tree head = md.args[0];
    if (!(head is methodDecHead)) {
        throw "unsupported method declaration (<md.src>)";
    }
    return head;
}

Id methodName(MethodDec md) {
    if (Id x := methodHead(md).args[6]) {
        return x;
    }
    throw "internal error";
}

list[FormalParam] params(MethodDec md) {
    if ({FormalParam ","}* ps := methodHead(md).args[10]) {
        return [ p | FormalParam p <- ps ];
    }
    throw "internal error";
}

Block methodBody(MethodDec md) {
    if ((MethodBody)`<Block b>` := md.args[2]) {
        return b;
    }
    throw "method <methodName(md)> has no body";
}

Id paramId(FormalParam p) {
    if (VarDecId vid := p.args[4], (VarDecId)`<Id x>` := vid) {
        return x;
    }
    throw "unsupported parameter <p> (<p.src>)";
}

@synopsis{Static parameters are typed by `$`}
bool isStaticParam(FormalParam p) = trim("<p.args[2]>") == "$";

@synopsis{Is a method an interpreter method (i.e., does it have static parameters)?}
bool isInterpreterMethod(MethodDec md) = any(FormalParam p <- params(md), isStaticParam(p));

@synopsis{Create a specialized method declaration from the original}
MethodDec rebuild(MethodDec md, Id newName, list[FormalParam] dynParams, Block body) {
    Tree head = methodHead(md);
    list[Tree] hargs = head.args;
    hargs[6] = newName;
    hargs[10] = makeParams(dynParams);
    MethodBody mb = (MethodBody)`<Block body>`;
    if (MethodDec result := appl(md.prod, [appl(head.prod, hargs), md.args[1], mb])) {
        return result;
    }
    throw "internal error";
}

@synopsis{The residual compilation unit}
@description{
Calls to the entry point `method` in the remaining (non-interpreter) code drop the
arguments for the static parameters (indicated by `statics`).
}
start[CompilationUnit] residual(start[CompilationUnit] cu, ClassDec target, list[MethodDec] generated,
        str entry, str method, list[bool] statics, str cls) {
    list[ClassBodyDec] kept = [ d | (ClassBody)`{<ClassBodyDec* decs>}` := classBody(target), ClassBodyDec d <- decs,
        !((ClassBodyDec)`<MethodDec md>` := d && isInterpreterMethod(md)) ];

    kept = visit (kept) {
        case (Expr)`<Id f>(<{Expr ","}* args>)` => (Expr)`<Id f>(<{Expr ","}* dynArgs>)`
            when "<f>" == method, list[Expr] as := [ a | Expr a <- args ], size(as) == size(statics),
                {Expr ","}* dynArgs := makeArgs([ as[i] | int i <- index(as), !statics[i] ])
    };

    list[ClassBodyDec] decs = kept + [ (ClassBodyDec)`<MethodDec md>` | MethodDec md <- generated ];

    ClassBody newBody = makeClassBody(decs);
    ClassDec newTarget = target;
    if (ClassDec t := appl(target.prod, target.args[0..2] + [newBody])) {
        newTarget = t;
    }

    str oldName = "<className(target)>";
    Id newCls = [Id]cls;
    Id newEntry = [Id]method;

    cu = top-down-break visit (cu) {
        case ClassDec cd => newTarget when cd.src == target.src
    };

    return visit (cu) {
        case Id x => newCls when "<x>" == oldName
        case Id x => newEntry when "<x>" == entry
    };
}


@synopsis{Re-indent Java source text according to the nesting of braces and parentheses}
@description{
The residual code mixes layout from the original source with generated layout,
so we normalize the indentation. String/char literals and comments are skipped
when counting brackets. Consecutive blank lines are collapsed.
}
str reindent(str src, str indent = "    ") {
    list[str] out = [];
    int depth = 0;
    bool inBlockComment = false;
    bool prevBlank = false;
    for (str line <- split("\n", src)) {
        str t = trim(line);
        if (t == "") {
            if (!prevBlank) {
                out += [""];
            }
            prevBlank = true;
            continue;
        }
        prevBlank = false;

        // count the brackets in the code part of the line
        int opens = 0;
        int closes = 0;
        int leadingCloses = 0;
        bool leading = true;
        int i = 0;
        int n = size(t);
        while (i < n) {
            str c = t[i];
            if (inBlockComment) {
                if (c == "*", i + 1 < n, t[i + 1] == "/") {
                    inBlockComment = false;
                    i += 1;
                }
            }
            else if (c == "/" && i + 1 < n && t[i + 1] == "/") {
                break;
            }
            else if (c == "/" && i + 1 < n && t[i + 1] == "*") {
                inBlockComment = true;
                i += 1;
            }
            else if (c == "\"" || c == "\'") {
                // skip the literal
                i += 1;
                while (i < n, t[i] != c) {
                    i += t[i] == "\\" ? 2 : 1;
                }
            }
            else if (c == "{" || c == "(") {
                opens += 1;
            }
            else if (c == "}" || c == ")") {
                closes += 1;
                if (leading) {
                    leadingCloses += 1;
                }
            }
            if (c != "}" && c != ")" && c != " ") {
                leading = false;
            }
            i += 1;
        }

        int lineDepth = depth - leadingCloses;
        lineDepth = lineDepth < 0 ? 0 : lineDepth;
        out += [ ( "" | it + indent | _ <- [0..lineDepth] ) + t ];
        depth += opens - closes;
        depth = depth < 0 ? 0 : depth;
    }
    return intercalate("\n", out);
}


/*
 * Helper functions to turn lists into regular trees
 */

{FormalParam ","}* makeParams(list[FormalParam] ps) {
    MethodDecHead dummy = (MethodDecHead)`void f()`;
    for (FormalParam p <- ps, (MethodDecHead)`void f(<{FormalParam ","}* fs>)` := dummy) {
        dummy = (MethodDecHead)`void f(<{FormalParam ","}* fs>, <FormalParam p>)`;
    }
    if ((MethodDecHead)`void f(<{FormalParam ","}* fs>)` := dummy) {
        return fs;
    }
    throw "internal error";
}

{Expr ","}* makeArgs(list[Expr] es) {
    Expr dummy = (Expr)`f()`;
    for (Expr e <- es, (Expr)`f(<{Expr ","}* args>)` := dummy) {
        dummy = (Expr)`f(<{Expr ","}* args>, <Expr e>)`;
    }
    if ((Expr)`f(<{Expr ","}* args>)` := dummy) {
        return args;
    }
    throw "internal error";
}

Block makeBlock(list[BlockStm] bs) {
    Block b = (Block)`{}`;
    for (BlockStm s <- bs, (Block)`{<BlockStm* ss>}` := b) {
        b = (Block)`{
                   '  <BlockStm* ss>
                   '  <BlockStm s>
                   '}`;
    }
    return b;
}

Stm blockOf(list[Stm] ss) {
    Block b = makeBlock([ (BlockStm)`<Stm s>` | Stm s <- ss ]);
    return (Stm)`<Block b>`;
}

ClassBody makeClassBody(list[ClassBodyDec] ds) {
    ClassBody b = (ClassBody)`{}`;
    for (ClassBodyDec d <- ds, (ClassBody)`{<ClassBodyDec* ss>}` := b) {
        b = (ClassBody)`{
                       '  <ClassBodyDec* ss>
                       '
                       '  <ClassBodyDec d>
                       '}`;
    }
    return b;
}

@synopsis{Splice a statement into a statement list: drop empty statements, and flatten blocks without declarations}
list[BlockStm] splice((Stm)`;`) = [];
list[BlockStm] splice((Stm)`{<BlockStm* bs>}`) = [ b | BlockStm b <- bs ]
    when !any(BlockStm b <- bs, (BlockStm)`<Stm _>` !:= b);
default list[BlockStm] splice(Stm s) = [(BlockStm)`<Stm s>`];

@synopsis{Avoid the dangling else problem when an if-without-else ends up in a then-branch}
Stm noDanglingIf(s:(Stm)`if (<Expr _>) <Stm _>`) = (Stm)`{<BlockStm b>}`
    when BlockStm b := (BlockStm)`<Stm s>`;
default Stm noDanglingIf(Stm s) = s;
