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
        CallGraph cg = extractCallGraph(code);
        msgs += checkRecursion(cg);
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
        case (Function)`function <Id f>(<{Id ","}* params>) {<Statement* ss>}`: {
            env["<f>"] = [ startsWith(x, "$") ? <x, static()> : <x, dyn()> 
                | Id p <- params, str x := "<p>" ];
        }
    }
    return env;
}


bool isStatic(Id x) = isStatic("<x>");
bool isStatic(str x) = startsWith(x, "$");

@synopsis{Call graph from function def to call site (`src` is call site)}
alias CallGraph = rel[Node from, loc src, Node to];

@synopsis{Node in the call graph; `args` represents the arguments as in "a.$1.$2" etc to indicate "decreasingness"}
alias Node = tuple[str func, list[str] args];

@synopsis{Check for fully non-decreasing recursive call chains}
set[Message] checkRecursion(CallGraph cg) {
    rel[Node, Node] base = cg<0, 2>;
    set[Message] msgs = {};

    for (<Node f, f> <- base+) { // NB: transitive closure here; not in def of base
        println("f = <f>");

        for (list[Node] path <- paths(f, base), size(path) > 1, path[0] == path[-1]) {
            println("PATH = <path>");
            bool good = false;
            list[loc] offenders = [];

            for (int i <- [0..size(path)-1]) {
                Node from = path[i];
                Node to = path[i+1];
                for (<from, loc l, to> <- cg) {
                    // this is a bit convoluted, but the intuition is
                    // "one good recursion on the recurive call chain is enough"
                    if (!isBadRecursion(from, to)) {
                        good = true;
                    }
                    else {
                        offenders += [l];
                    }
                }
            }

            if (!good) {
                msgs += {error("non-decreasing recursion", l) | loc l <- offenders };
            }
        }
    }

    return msgs;
}

@synopsis{Bad recursion happens if all combinations of formal vs actual are non-decreasing}
bool isBadRecursion(Node from, Node to) {
    // todo: make this into a nice reducer, if possible
    for (str a1 <- from.args, str a2 <- to.args) {
        // we require at least one strictly decreasing argument pass
        println("a1 = <a1>");
        println("a2 = <a2>");
        println("isDecreasing: <isDecreasing(a1, a2)>");
        if (isDecreasing(a1, a2)) {
            return false;
        }
    }
    return true;
}

@synopsis{Determine whether an argument `to` is strictly decreasing w.r.t. formal param `from`}
bool isDecreasing(str from, str to) = isDecreasing(split(".", from), split(".", to));

// the second is longer, it is "decreasing" because we go deeper into a term.
bool isDecreasing([], [_, *_]) = true;

// equal length (base case) means non-decreasing
bool isDecreasing([], []) = false;

// if the head of each argument is the same, the tail determines isDecreasing
bool isDecreasing([str x, *xs], [x, *ys]) = isDecreasing(xs, ys);

// otherwise, its non-decreasing
default bool isDecreasing(list[str] _, list[str] _) = false;


@synopsis{Extract the call-graph from `code` with decreasing arguments annotations}
CallGraph extractCallGraph(start[Source] code) {
    CallGraph cg = {};

    CallGraph extract(Statement* ss, Node from, map[str, list[str]] env) {
        CallGraph g = {};
        top-down-break visit (ss) {
            case Statement s: 
                g += extract(s, from, env);
        }
        return g;
    }

    CallGraph extract(Statement s, Node from, map[str, list[str]] env) {   
        CallGraph g = {};
        top-down-break visit (s) {
            case (Statement)`match (<Id x>) {<MatchCase* cs>}`: {
                for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cs) {
                    list[Token] vars = [ t | Token t <- p.tokens, isVar(t) ];
                    g += extract(ss, from, env + ( "$<i+1>": env["<x>"] + ["$<i+1>"] | int i <- [0..size(vars)]));
                }
            }

            case (Statement)`with(<Pattern p>: <Id x>) <Statement s>`: {
                list[Token] vars = [ t | Token t <- p.tokens, isVar(t) ];
                g += extract(s, from, env + ( "$<i+1>": env["<x>"] + ["$<i+1>"] | int i <- [0..size(vars)]));
            }

            case (Statement)`for (const <Id k> of <Id x>) <Statement s>`: {
                g += extract(s, from, env + ( "<k>" : env["<x>"] + ["<k>"] ));
            }

            case (Statement)`for (let <Id k> of <Id x>) <Statement s>`: {
                g += extract(s, from, env + ( "<k>" : env["<x>"] + ["<k>"] ));
            }

            case e:(Expression)`<Id f>(<{Expression ","}* args>)`: {
                g += {<from, e.src, <"<f>", [ intercalate(".", env["<a>"]) | Expression a <- args, "<a>" in env ]>>};
            }
        }
        return g;
    }

    top-down-break visit (code) {
        case (Function)`function <Id f>(<{Id ","}* xs>) {<Statement* ss>}`: {
            Node from = <"<f>", [ "<x>" | Id x <- xs, isStatic(x) ]>;
            cg += extract(ss, from, ( "<x>": ["<x>"] | Id x <- xs, isStatic(x) ));
        }
    }

    return cg;
}


@synopsis{Enumerate all paths starting at `n` in graph `g` (cycles allowed)}
set[list[&T]] paths(&T n, rel[&T, &T] g) {
    set[list[&T]] results = {};
    list[&T] path = [n];
    set[&T] onPath = {n};          

    void dfs(&T x) {
        results += {path};
        bool hasSucc = false;

        for (<x, &T next> <- g) {
            hasSucc = true;
            if (next in onPath) {
                path += [next];
                results += {path};
                path = path[0..-1];
            }
            else {
                path += [next];
                onPath += {next};
                dfs(next);
                path = path[0..-1];
                onPath -= {next};
            }
        }

        if (!hasSucc) {
            results += {path};
        }

    }

    dfs(n);

    return results;
}
