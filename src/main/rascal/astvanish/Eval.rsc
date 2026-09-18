module astvanish::Eval

import astvanish::Match;
import ParseTree;
import lang::json::IO;
import List;
import String;
import IO;

start[Source] toEval(start[Source] src, AEnv statics, type[&T<:Tree] grammar) {
    return top-down-break visit (src) {
         case Function f => toEval(f, statics, grammar)
    }
}

alias AEnv = map[str, Symbol];


Function toEval((Function)`function <Id f>(<{Id ","}* fs>) {<Statement* body>}`, AEnv env, type[&T<:Tree] grammar) {
    //println("toEval: <f>");
    newBody = toEval(body, env, grammar);
    return (Function)`function <Id f>(<{Id ","}* fs>) {<Statement* newBody>}`;
}

Statement* toEval(Statement* stmts, AEnv env, type[&T<:Tree] grammar) {
    return top-down-break visit (stmts) {
        case Statement s => toEval(s, env, grammar)
    }
}

Expression toField(Id x, AEnv env) = [Expression]"<owner>.<field>"
    when str owner := env[""].name, 
        str field := nameOf(env["<x>"]);

bool isKid(Id x) = /^\$[0-9]+$/ := "<x>";

Statement toEval(Statement stmt, AEnv env, type[&T<:Tree] grammar) {
    //println("toEval <stmt> / <env>");
    return top-down-break visit (stmt) {
        case (Expression)`<Id f>(<{Expression ","}* args>)`: {
            args = visit (args) {
                case (Expression)`<Id x>` => toField(x, env)
                    when isKid(x)
            }
            
            insert (Expression)`<Id f>(<{Expression ","}* args>)`;   
        }

        case (Expression)`<Id sub>.toString()` => toField(sub, env)
            when isKid(sub)

        case (Expression)`<Id sub>.src` => (Expression)`<Expression fld>.src`
            when isKid(sub), Expression fld := toField(sub, env)

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` 
            => (Statement)`for (const <Id x> of <Expression fld>) <Statement s2>` 
            when isKid(y), Expression fld := toField(y, env),
                Statement s2 := toEval(s, env + ("<x>": eltType(env["<y>"])), grammar)

        case (Statement)`match (<Id x>) {<MatchCase* cases>}` 
            => toSwitch(x, cases, env + ("": sort("<x>")), grammar)                   
    }
}

Symbol eltType(label(_, Symbol s)) = eltType(s);
Symbol eltType(\iter-star-seps(Symbol s, _)) = s;
Symbol eltType(\iter-seps(Symbol s, _)) = s;
Symbol eltType(\iter-star(Symbol s)) = s;
Symbol eltType(\iter(Symbol s)) = s;
Symbol eltType(opt(Symbol s)) = s;


Statement toSwitch(Id x, MatchCase* cases, AEnv env, type[&T<:Tree] grammar) {
    Statement sw = (Statement)`switch (<Id x>.tag) {}`;

    
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

