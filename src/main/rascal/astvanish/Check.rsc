module astvanish::Check

import astvanish::Match;
import Message;
import List;
import ParseTree;
import IO;
import String;


@synopsis{Signatures indicating whether parameters are static or dynamic}
alias Sig = lrel[str, BindingTime];

@synopsis{Mapping function names to signatures}
alias FEnv = map[str, Sig];

@synopsis{The set of variables that are static (parameters and $n variables from match and with)}
alias Env = set[str];

@synopsis{Binding time can be either static or dynamic}
data BindingTime
    = static()
    | dyn()
    ;


@synopsis{Check every function according to its signature with binding times}
set[Message] check(start[Source] code) {
    FEnv env = extractBindingTimes(code);
    set[Message] msgs = {};

    top-down-break visit (code) {
        case Function f: {
            if ("<f.name>" in env) {
                msgs += check(f, { x | <str x, static()> <- env["<f.name>"] }, env["<f.name>"], env);
            }
        }
    }

    // we only check recursion when the rest is ok, since it assumes certain properties of the program
    if (msgs == {}) {
        msgs += checkForBadRecursion(code);
    }

    return msgs;
}

set[Message] check(Function f, Env env, Sig bt, FEnv fenv) = check(f.statements, env, bt, fenv);

set[Message] check(Statement* ss, Env env, Sig bt, FEnv fenv)
    = { *check(s, env, bt, fenv) | Statement s <- ss };

@synopsis{Check that the flow of static/dynamic data is correct in a statement}
set[Message] check(Statement s, Env env, Sig bt, FEnv fenv) {
    set[Message] msgs = {};
    top-down-break visit (s) {
        case (Statement)`match (<Expression e>) {<MatchCase* cases>}`: {
            if ((Expression)`<Id x>` := e) {
                if ("<x>" notin env) {
                    msgs += {error("non-static variable in match", e.src)};
                }
            }
            else {
                msgs += {error("only (static) variables allowed in match", e.src)};
            }
            msgs += { *check(c, env, bt, fenv) | MatchCase c <- cases };
        }

        case (Statement)`with (<Pattern p> : <Expression e>) <Statement s>`: {
            if ((Expression)`<Id x>` := e) {
                if ("<x>" notin env) {
                    msgs += {error("non-static variable in with", e.src)};
                }
            }
            else {
                msgs += {error("only (static) variables allowed in with", e.src)};
            }
            list[Token] vars = [ tok | Token tok <- p.tokens, isVar(tok) ];
            msgs += check(s, env + { "$<i + 1>"  | int i <- [0..size(vars)] }, bt, fenv);
        }

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>`: {
            if ("<y>" in env) {
                msgs += check(s, env + "<x>", bt, fenv);
            }
        }

        case (Statement)`for (let <Id x> of <Id y>) <Statement s>`: {
            if ("<y>" in env) {
                msgs += check(s, env + "<x>", bt, fenv);
            }
        }

        case (Expression)`<Id f>(<{Expression ","}* args>)`: {
            if ("<f>" in fenv) {
                Sig fbt = fenv["<f>"];
                list[Expression] argsLst = [ a | Expression a <- args ];
                if (size(fbt) != size(argsLst)) {
                    msgs += {error("wrong number of arguments, expected <size(fbt)>, got <size(argsLst)>", f.src)};
                    return msgs;
                }
                
                lrel[Expression, tuple[str, BindingTime]] paired = zip2(argsLst, fbt);

                for (<Expression arg, <str formal, BindingTime b>> <- paired) {
                    if ((Expression)`<Id x>` := arg) {
                        if ("<x>" in env, b == dyn()) {
                            msgs += {error("passing static variable to dynamic parameter <formal>", x.src)};
                        }
                        if ("<x>" notin env, b == static()) {
                            msgs += {error("passing dynamic variable to static parameter <formal>", x.src)};
                        }
                    }
                    else if (b == static()) {
                        msgs += {error("passing arbitrary expression to static parameter", arg.src)};
                    }
                }

            }
            // else ignore
        } 

        // these two cases are special because they have meaning both statically and dynamically
        case (Expression)`<Expression _>.toString()`: ;
        case (Expression)`<Expression _>.src`: ;

        // after previous cases failed, a static variable is an error 
        case (Expression)`<Id x>`: {
            if ("<x>" in env) {
                msgs += {error("static variable leaking into dynamic world", x.src)};
            }
        }
    }
    return msgs;
}

@synopsis{Determine if a token is variable placeholder}
bool isVar((Token)`_`) = true;
bool isVar((Token)`_@<Id _>`) = true;
default bool isVar(Token _) = false;

@synopsis{Check a case-clause, bringing the matched variables in as statics to the statements}
set[Message] check((MatchCase)`case <Pattern p>: <Statement* ss>`, Env env, Sig bt, FEnv fenv) {
    list[Token] vars = [ tok | Token tok <- p.tokens, isVar(tok) ];
    return check(ss, env + { "$<i + 1>" | int i <- [0..size(vars)] }, bt, fenv);
}


@synopsis{Extract the static parameters according to variable convention: $ means static}
FEnv extractBindingTimes(start[Source] code) {
    FEnv env = ();
    top-down-break visit (code) {
        case (Function)`function <Id f>(<{Id ","}* params>) {<Statement* _>}`: {
            env["<f>"] = [ isStatic(x) ? <x, static()> : <x, dyn()> 
                | Id p <- params, str x := "<p>" ];
        }
    }
    return env;
}

@synopsis{Determine if an identifier is static according to the $-naming convention}
bool isStatic(Id x) = isStatic("<x>");
bool isStatic(str x) = startsWith(x, "$");


@synopsis{Determine whether whether any of the passed parameters are strictly decreasing}
bool isDecreasing(map[str, list[str]] env1, map[str, list[str]] env2) {
    // isDecreasing is should always be called on the recursive 
    // endpoints (start till recursion) of the same func
    assert env1<0> == env2<0>: "bad environment signatures: <env1> vs <env2>";

    // if any one of the parameters is decreasing it's enough
    return ( false | it || isDecreasing(env1[k], env2[k]) | str k <- env1 );
}

// the second is longer, it is "decreasing" because we go deeper into a term.
bool isDecreasing([], [_, *_]) = true;

// equal length (base case) means non-decreasing
bool isDecreasing([], []) = false;

// if the head of each argument is the same, the tail determines isDecreasing
bool isDecreasing([str x, *xs], [x, *ys]) = isDecreasing(xs, ys);

// otherwise, its non-decreasing
default bool isDecreasing(list[str] _, list[str] _) = false;

@synopsis{The abstract parameter environment abstracting "size" through "nests"}
alias PEnv = map[str name, list[str] nests];

@synopsis{Abstract stack frames}
alias Frame = tuple[str func, PEnv env];


@synopsis{Detect non-decreasing recursive call chains using abstract interpretation}
set[Message] checkForBadRecursion(start[Source] code) {
    // memoize on call sites, so that this analysis terminates itself
    set[loc] memo = {};

    // the abstract call stack
    list[Frame] stack = [];   

    set[Message] msgs = {};

    map[str, Function] funcs = ();

    top-down-break visit (code) {
        case Function f: {
            if (f has name) {
                funcs["<f.name>"] = f;
            }
        }
    }

    void eval(Statement* ss, PEnv env) {
        top-down-break visit (ss) {
            case Statement s: 
                eval(s, env);
        }
    }

    void eval(Statement s, PEnv env) {   
        v0: top-down-break visit (s) {
            case (Statement)`match (<Id x>) {<MatchCase* cs>}`: {
                for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cs) {
                    list[Token] vars = [ t | Token t <- p.tokens, isVar(t) ];
                    eval(ss, env + ( "$<i+1>": env["<x>"] + ["$<i+1>"] | int i <- [0..size(vars)]));
                }
            }

            case (Statement)`with(<Pattern p>: <Id x>) <Statement s>`: {
                list[Token] vars = [ t | Token t <- p.tokens, isVar(t) ];
                eval(s, env + ( "$<i+1>": env["<x>"] + ["$<i+1>"] | int i <- [0..size(vars)]));
            }

            case (Statement)`for (const <Id k> of <Id x>) <Statement s>`: {
                eval(s, env + ( "<k>" : env["<x>"] + ["<k>"] ));
            }

            case (Statement)`for (let <Id k> of <Id x>) <Statement s>`: {
                eval(s, env + ( "<k>" : env["<x>"] + ["<k>"] ));
            }

            case e:(Expression)`<Id f>(<{Expression ","}* args>)`: {
                if (e.src in memo) {
                    fail v0; // fail causes visit to go into args, which might contain further calls.
                }
                memo += {e.src};
                if ("<f>" in funcs) {
                    Function func = funcs["<f>"];
                    list[Expression] as = [ a | Expression a <- args ];
                    list[Id] ps = [ p | Id p <- func.parameters ];
                    assert size(as) == size(ps);

                    newEnv = ( "<p>" : env["<a>"] | <Id p, Expression a> <- zip2(ps, as), isStatic(p), "<a>" in env);
                    recurse(func.name, func.statements, newEnv);
                }
            }
        }
    }


    void recurse(Id f, Statement* ss, PEnv env) {
        str name = "<f>";
        stack += [<name, env>];
        
        // find the earliest stack frame (before the current one) that caused recursion 
        if (int i <- [0..size(stack)-1], <name, PEnv prevEnv> := stack[i]) {
            // we are in a recursive call chain starting at i, (transitively) causing the current frame
            if (!isDecreasing(prevEnv, stack[-1].env)) {
                str chain = intercalate("-\>", [ stack[j].func | int j <- [i..size(stack)] ]);
                msgs += {error("bad recursion: <chain>", f.src)};
            }
        }
            
        eval(ss, env);
        stack = stack[0..-1];
    }

    for (str f <- funcs) {
        list[Id] ps = [ p | Id p <- funcs[f].parameters ];
        recurse(funcs[f].name, funcs[f].statements, ( "<p>" : ["<p>"] | Id p <- ps, isStatic(p)));
    }


    return msgs;
}

