module astvanish::PEval

import astvanish::Match;

import IO;
import ParseTree;
import String;

/*
TODO: specialize on multiple params
just put in the env what is statically known
(toplevel: derive from the prototype)
propagate literal constants and .toString and .src
evaluate expressions, loops, and conditionals
as far as possible. 
*/


data Value
    = code(Tree src)
    | expr(Expression e);

//start[Source] peval(start[Source] code, map[str,Value] statics, Id f);


tuple[Expression, start[Source]] peval(start[Source] code, Tree t, Expression proto=(Expression)`main()`) {
    if ((Expression)`<Id name>(<{Expression ","}* args>)` := proto) {
        Admin admin = newAdmin(code);
        Function f = admin.lookup(name);
        Expression e = peval(f, (firstParam(f): t), args, admin);
        return <e, admin.code()>;
    }
    throw "bad call: <proto>";
}

void printIt(tuple[Expression, start[Source]] result) {
    println("NEW CODE:");
    println(result[1]);
    println("CALL: <result[0]>");
}

str firstParam(Function f) = [ "<x>" | Id x <- f.parameters ][0]; 


alias Admin = tuple[
    Function(Id) lookup,
    Id(Id, {Id ","}*, Statement*) declare,
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

    int idCounter = 0;

    Id declare_(Id prefix, {Id ","}* rest, Statement* body) {
        Id newId = [Id]"<prefix>$<idCounter>";
        idCounter += 1;
        if ((start[Source])`<Statement* ss>` := gen) {
            gen = (start[Source])`<Statement* ss>
                                 'function <Id newId>(<{Id ","}* rest>) {<Statement* body>}`;
        }
        return newId;
    }

    return <lookup_, declare_, start[Source]() { return gen; }>;
}

alias Env = map[str, Tree];


tuple[Env, lrel[Id, Expression]] partition({Id ","}* params, {Expression ","}* args, Env env) {
    Value toValue((Expression)`<Id x>`, Env env) = code(env["<x>"]);
    default Value toValue(Expression e, Env _) = expr(e);

    list[Id] ps = [ p | Id p <- params ];
    list[Expression] es = [ e | Expression e <- args ];
    lrel[Id, Expression] paired = zip2(ps, es);
    
    Env staticEnv = ( "<p>" : toValue(a, env) | <Id p, Expression a> <- paired, isStatic(a, env) );
    lrel[Id, Expression] dynArgs = [ <x, a> | <Id x, Expression a> <- zip2(ps, es), !isStatic(a, staticEnv)];
    return <staticEnv, dynArgs>;
}

Expression peval2((Function)`function <Id f>(<{Id ","}* fs>) {<Statement* body>}`, Env env, {Expression ","}* args, Admin admin) {
    <newEnv, dynArgs> = partition(fs, args, env);
    Statement* newBody = peval(body, newEnv, admin);

    Id newName = admin.declare(f, [ x | <Id x, _>  <- dynEnv ], newBody);
    {Expression ","}* restArgs = makeArgs([ a | <_, Expression a> <- dynArgs ]);
    return (Expression)`<Id newName>(<{Expression ","}* restArgs>)`;
}


Expression peval((Function)`function <Id f>(<Id z>, <{Id ","}* rest>) {<Statement* body>}`, Env env, {Expression ","}* args, Admin admin) {
    newBody = peval((Statement)`{<Statement* body>}`, env, admin).statements;
    Id newName = admin.declare(f, rest, newBody);
    return (Expression)`<Id newName>(<{Expression ","}* args>)`;
}


Statement unroll(Id x, Statement s, Tree seq, Env env, Admin admin) {
    //println("PEVAL loop: <x> <s>");
    Statement unrolled = (Statement)`{}`;

    if (!(seq.prod is regular)) {
        throw "loop unrolling only over regulars, not <seq.prod>";
    }

    for (int i <- [0,2..size(seq.args)]) {
        if ((Statement)`{<Statement* ss>}` := unrolled) {
            Statement new = peval(s, env + ("<x>": seq.args[i]), admin);
            unrolled = (Statement)`{<Statement* ss> <Statement new>}`;
        }
    }
    
    return unrolled;
}

bool isStatic((Expression)`<Id x>`, Env env) = "<x>" in env;
bool isStatic((Expression)`<Literal _>`, Env _) = true;
bool isStatic((Expression)`(<Expression e>)`, Env env) = isStatic(e, env);

default bool isStatic(Expression _, Env _) = false;

Statement peval(Statement s, Env env, Admin admin) {
    println("PEVAL: <s>");
    return top-down-break visit (s) {
        case (Expression)`<Id f>(<Id sub>, <{Expression ","}* args>)` 
            // => peval(func, ( "<x>": env["<x>"] | Id x <- func.params, "<x>" in env ), args, admin)
            //     when "<sub>" in env, Function func := admin.lookup(f)

            => peval(func, (firstParam(func): env["<sub>"]), args, admin)
                when "<sub>" in env, Function func := admin.lookup(f)

        // todo: escaping
        case (Expression)`<Id sub>.toString()` => [Expression]"\'<src>\'"
            when "<sub>" in env, str src := "<env["<sub>"]>"


        case (Expression)`<Id sub>.src` => [Expression]toJSON(env["<sub>"].src)
            when "<sub>" in env

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` => unroll(x, s, env["<y>"], env, admin)
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

str toJSON(loc l) = "{offset: <l.offset>, length: <l.length>}";
