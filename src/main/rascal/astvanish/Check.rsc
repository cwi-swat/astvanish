module astvanish::Check

import astvanish::Match;
import Message;
import List;
import ParseTree;
import IO;


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
    FEnv env = inferStatics(code);
    set[Message] msgs = {};

    top-down-break visit (code) {
        case Function f: {
            if ("<f.name>" in env) {
                msgs += check(f, { x | <str x, static()> <- env["<f.name>"] }, env["<f.name>"], env);
            }
        }
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

@synopsis{Infer the static parameters per function according to match/with use}
FEnv inferStatics(start[Source] code) {
    FEnv env = ();
    top-down-break visit (code) {
        case (Function)`function <Id f>(<{Id ","}* params>) {<Statement* ss>}`: {

            bool isParam(Id x) = any(Id y <- params, x := y);


            // this has the nasty side-effect that if a user makes a mistake
            // and passes a non-Id expression to match/with it'll cause dynamic here.

            lrel[str, BindingTime] statics = 
                [ <"<x>", static()> | /(Statement)`match (<Id x>) {<MatchCase* _>}` := ss, isParam(x) ]
                + [ <"<x>", static()> | /(Statement)`with (<Pattern _> : <Id x>) <Statement _>` := ss, isParam(x) ];
            
            lrel[str, BindingTime] dyns = [ <"<x>", dyn()> | Id x <- params, "<x>" notin statics<0> ];


            // this is a bit convoluted but we need to preserve the order of parameters.
            tuple[str, BindingTime] bindingTimeOf(str x) = <x, static()>
                when <x, static()> in statics;

            tuple[str, BindingTime] bindingTimeOf(str x) = <x, dyn()>
                when <x, dyn()> in dyns;
                

            lrel[str, BindingTime] sig = [ bindingTimeOf("<x>") | Id x <- params ];

            env += ("<f>" : statics + dyns );
        }
    }
    return env;
}