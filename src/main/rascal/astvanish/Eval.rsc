module astvanish::Eval

import astvanish::Match;
import ParseTree;
import lang::json::IO;
import List;
import String;
import IO;

/*
 * This module turns an ASTVanish (match/with-enhanced) Javascript source file
 * into a plain Javascript source file; it contains some ugly hacks
 * but we plan to only use it for performance benchmarking anyway.
 */

// mapping parameter names to syntactic types
alias Sigs = map[str, Symbol]; 

// capture signatures per function that needs to be converted
alias AEnv = map[str, Sigs];

@synopsis{Convert top-level, named functions to interpreters, given the types of the static args}
start[Source] toEval(start[Source] src, AEnv sigs, type[&T<:Tree] grammar) {
    return top-down-break visit (src) {
         case Function f => toEval(f, sigs["<f.name>"], grammar)
            when f has name, "<f.name>" in sigs
    }
}


@synopsis{Convert a function to an interpreter, given the types of its static args}
Function toEval((Function)`function <Id f>(<{Id ","}* fs>) {<Statement* body>}`, Sigs env, type[&T<:Tree] grammar) {
    //println("toEval: <f>");
    newBody = toEval(body, env, grammar);
    return (Function)`function <Id f>(<{Id ","}* fs>) {<Statement* newBody>}`;
}

Statement* toEval(Statement* stmts, Sigs env, type[&T<:Tree] grammar) {
    return top-down-break visit (stmts) {
        case Statement s => toEval(s, env, grammar)
    }
}

Expression toField(Id x, Sigs env) = [Expression]"<owner>.<field>"
    // ugly hack: using sort symbol to carry over the owner variable
    when str owner := env[""].name, 
        str field := nameOf(env["<x>"]);

bool isKid(Id x) = /^\$[0-9]+$/ := "<x>";

Statement toEval(Statement stmt, Sigs env, type[&T<:Tree] grammar) {
    //println("toEval <stmt> / <env>");
    return top-down-break visit (stmt) {
        case (Expression)`<Id f>(<{Expression ","}* args>)`: {
            args = visit (args) {
                case (Expression)`<Id x>` => toField(x, env)
                    // bit ugly; should check that f is in top-level sigs mapping
                    when isKid(x) 
            }
            
            insert (Expression)`<Id f>(<{Expression ","}* args>)`;   
        }

        case (Expression)`<Id sub>.toString()` => toField(sub, env)
            when isKid(sub)

        case (Expression)`<Id sub>.src` => (Expression)`<Expression fld>._src`
            when isKid(sub), Expression fld := toField(sub, env)

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` 
            => (Statement)`for (const <Id x> of <Expression fld>) <Statement s2>` 
            when isKid(y), Expression fld := toField(y, env),
                Statement s2 := toEval(s, env + ("<x>": eltType(env["<y>"])), grammar)

        
        case (Statement)`match (<Id x>) {<MatchCase* cases>}` 
            // ugly hack: using the key "" to propagate the x object
            => toSwitch(x, cases, env + ("": sort("<x>")), grammar)                   

        case (Statement)`with (<Pattern p>: <Id x>) <Statement s>`: {
            set[Production] alts = grammar.definitions[env["<x>"]].alternatives;
    
            if (/z:prod(_, _, _) := alts, success(str _, list[Symbol] bs) := matchProd(p, z)) {
                insert toEval(s, env + ("": sort("<x>")) + ("$<i+1>": bs[i] | int i <- [0..size(bs)] ), grammar);
            }
            else {
                throw "no production found for pattern `<p>`";
            }
        }

    }
}

@synopsis{Determine the element type of a regular symbol (iters and optionals)}
Symbol eltType(label(_, Symbol s)) = eltType(s);
Symbol eltType(\iter-star-seps(Symbol s, _)) = s;
Symbol eltType(\iter-seps(Symbol s, _)) = s;
Symbol eltType(\iter-star(Symbol s)) = s;
Symbol eltType(\iter(Symbol s)) = s;
Symbol eltType(opt(Symbol s)) = s;

@synopsis{Convert `match`'s cases to an ordinary switch statement}
Statement toSwitch(Id x, MatchCase* cases, Sigs env, type[&T<:Tree] grammar) {
    Statement sw = (Statement)`switch (<Id x>._tag) {}`;
    
    void addCase(Expression guard, Statement* ss) {
        if ((Statement)`switch (<Expression cond>) {<CaseClause* cc>}` := sw) {
            sw = (Statement)`switch (<Expression cond>) {
                            '<CaseClause* cc>
                            'case <Expression guard>: 
                            '   <Statement* ss>
                            '   break;
                            '}`;
        }
    }

    set[Production] alts = grammar.definitions[env["<x>"]].alternatives;
    
    for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
        if (/z:prod(_, _, _) := alts, success(str cons, list[Symbol] bs) := matchProd(p, z)) {
            addCase([Expression]"\'<cons>\'", toEval(ss, env + ("$<i+1>": bs[i] | int i <- [0..size(bs)] ), grammar));
        }
        else {
            throw "no production found for pattern `<p>`";
        }
    }

    return sw;
}

