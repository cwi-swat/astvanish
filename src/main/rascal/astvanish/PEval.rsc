module astvanish::PEval

import astvanish::Match;

import IO;
import ParseTree;
import String;

tuple[Expression, start[Source]] peval(start[Source] code, Tree t, Expression theCall=(Expression)`main(event)`) {
    if ((Expression)`<Id name>(<{Expression ","}* args>)` := theCall) {
        Admin admin = newAdmin(code);
        Function f = admin.lookup(name);
        Expression e = peval(f, (firstParam(f): t), args, admin);
        return <e, admin.code()>;
    }
    throw "bad call: <theCall>";
}

void printIt(tuple[Expression, start[Source]] result) {
    println("NEW CODE:");
    println(result[1]);
    println("CALL: <result[0]>");
}

str firstParam(Function f) = [ "<x>" | Id x <- f.parameters ][0]; 


alias Admin = tuple[
    Function(Id) lookup,
    Id(Id, {Id ","}*, Statement*, Tree) declare,
    start[Source]() code
];

Admin newAdmin(start[Source] code) {

    start[Source] gen = (start[Source])``;

    Function lookup_(Id name) {
        visit (code) {
            case Function f: {
                if (name := f.name) {
                    return f;
                }
            }
        }
        throw "couldn\'t find function <name>";
    }

    Id declare_(Id prefix, {Id ","}* rest, Statement* body, Tree src) {
        Id newId = [Id]"<prefix>$<src.src.offset>$<src.src.length>";
        if ((start[Source])`<Statement* ss>` := gen) {
            gen = (start[Source])`<Statement* ss>
                                  'function <Id newId>(<{Id ","}* rest>) {<Statement* body>}`;
        }
        return newId;
    }

    return <lookup_, declare_, start[Source]() { return gen; }>;
}

alias Env = map[str, Tree];


Expression peval((Function)`function <Id f>(<Id z>, <{Id ","}* rest>) {<Statement* body>}`, Env env, {Expression ","}* args, Admin admin) {
    newBody = peval((Statement)`{<Statement* body>}`, env, admin).statements;
    Id newName = admin.declare(f, rest, newBody, env["<z>"]);
    return (Expression)`<Id newName>(<{Expression ","}* args>)`;
}


Statement unroll(Id x, Statement s, Tree seq, Env env, Admin admin) {
    //println("PEVAL loop: <x> <s>");
    Statement unrolled = (Statement)`{}`;

    for (int i <- [0,2..size(seq.args)]) {
        if ((Statement)`{<Statement* ss>}` := unrolled) {
            Statement new = peval(s, env + ("<x>": seq.args[i]), admin);
            unrolled = (Statement)`{<Statement* ss> <Statement new>}`;
        }
    }
    
    return unrolled;
}

Statement peval(Statement s, Env env, Admin admin) {
    //println("PEVAL: <s>");
    return top-down-break visit (s) {
        case (Expression)`<Id f>(<Id sub>, <{Expression ","}* args>)` 
            => peval(func, (firstParam(func): env["<sub>"]), args, admin)
                when "<sub>" in env, Function func := admin.lookup(f)

        case (Expression)`<Id sub>.toString()` => [Expression]"\'<src>\'"
            when "<sub>" in env, str src := "<env["<sub>"]>"

        case (Statement)`for (<Id x> in <Id y>) <Statement s>` => unroll(x, s, env["<y>"], env, admin)
            when "<y>" in env

        case (Statement)`match (<Id x>) {<MatchCase* cases>}`: {                        
            if ("<x>" notin env) {
                throw "unbound variable in match: <x>";
            }

            for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
                if (success(list[Tree] bs) := matchPattern(p, env["<x>"])) {
                    env += ( "$<i+1>": bs[i] | int i <- [0..size(bs)] );
                    insert peval((Statement)`{<Statement* ss>}`, env, admin);
                }
            }

            throw "no match found for <env["<x>"]>";
        }
    }        
}


