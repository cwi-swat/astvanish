module astvanish::Eval

import astvanish::Match;
import ParseTree;
import lang::json::IO;
import List;
import String;
import IO;

start[Source] toEval(start[Source] src, type[&T<:Tree] grammar) {
    Symbol root = grammar.symbol;
    return top-down-break visit (src) {
         case Function f => toEval(f, (firstParam(f): root), grammar)
    }
}

alias AEnv = map[str, Symbol];

str firstParam(Function f) = [ "<x>" | Id x <- f.parameters ][0]; 

Function toEval((Function)`function <Id f>(<Id z>, <{Id ","}* rest>) {<Statement* body>}`, AEnv env, type[&T<:Tree] grammar) {
    //println("toEval: <f>");
    newBody = toEval(body, env, z, grammar);
    return (Function)`function <Id f>(<Id z>, <{Id ","}* rest>) {<Statement* newBody>}`;
}

Statement* toEval(Statement* stmts, AEnv env, Id owner, type[&T<:Tree] grammar) {
    return top-down-break visit (stmts) {
        case Statement s => toEval(s, env, owner, grammar)
    }
}

Expression toField(Id owner, Id sub, AEnv env) = [Expression]"<owner>.<nameOf(env["<sub>"])>"
    when /^\$[0-9]+$/ := "<sub>";

// this is ugly, $ vars always implicitly deref owner, but ordinary vars that represent asts don't 
default Expression toField(Id owner, Id sub, AEnv env) = (Expression)`<Id sub>`;

Statement toEval(Statement stmt, AEnv env, Id owner, type[&T<:Tree] grammar) {
    //println("toEval <stmt> / <env>");
    return top-down-break visit (stmt) {
        case (Expression)`<Id f>(<Id sub>, <{Expression ","}* args>)` 
            => (Expression)`<Id f>(<Expression fld>, <{Expression ","}* args>)` 
                when "<sub>" in env, Expression fld := toField(owner, sub, env)

        // how to obtain the yield generally from the AST?
        case (Expression)`<Id sub>.toString()` => fld
            when "<sub>" in env, Expression fld := toField(owner, sub, env)

        case (Expression)`<Id sub>.src` => (Expression)`<Expression fld>.src`
            when "<sub>" in env, Expression fld := toField(owner, sub, env)

        case (Statement)`for (<Id x> in <Id y>) <Statement s>` 
            => (Statement)`for (<Id x> in <Expression fld>) <Statement s2>` 
            when "<y>" in env, Expression fld := toField(owner, y, env),
                Statement s2 := toEval(s, env + ("<x>": eltType(env["<y>"])), owner, grammar)

        case (Statement)`match (<Id x>) {<MatchCase* cases>}` => toSwitch(x, cases, env, grammar)                   
            when "<x>" in env 
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
                            '}`;
        }
    }

    set[Production] alts = grammar.definitions[env["<x>"]].alternatives;
    
    for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
        if (/z:prod(_, _, _) := alts, aSuccess(str cons, map[int, Symbol] bs) := matchProd(p, z)) {
            addCase([Expression]"\'<cons>\'", toEval(ss, env + ("$<i>": bs[i] | int i <- bs ), x, grammar));
        }
        else {
            throw "no production found for pattern `<p>`";
        }
    }

    return sw;
}

data AMatchResult
    = aSuccess(str cons, map[int, Symbol] bindings)
    | aFailure()
    ;

str nameOf(label(str n, _)) = n;
default str nameOf(Symbol _) = "$unknown";

AMatchResult matchProd(Pattern p, prod(label(str cons, Symbol _), list[Symbol] ss, _)) {

    map[int, Symbol] bindings = ();
    
    list[Token] toks = [ tok | Token tok <- p.tokens ];

    if (size(toks) * 2 - 1 != size(ss)) {
        return aFailure();
    }

    int i = 0;
    int j = 1;
    for (Token tok <- toks) {
        //println("tok = `<tok>` J = <j>");
        switch (tok) {
            case (Token)`_`: {
                bindings[j] = ss[i];
                j += 1;
                i += 2;
            }
            
            case (Token)`_@<Id x>`: {
                Symbol kid = ss[i];
                if (typeOf2(kid) == "<x>") {
                    bindings[j] = ss[i];
                    j += 1;
                    i += 2;
                }
                else {
                    return aFailure();
                }
            }
            
            default: {
                if (ss[i].string != unescapeToken("<tok>")) {
                    return aFailure();
                }
                i += 2;
            }
        }
    }
    println(bindings);
    return aSuccess(cons, bindings);
}

default AMatchResult matchPattern(Pattern _, Production _) 
    = aFailure();