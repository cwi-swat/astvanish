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


//start[Source] peval(start[Source] code, map[str,Value] statics, Id f);


start[Source] peval(start[Source] code, Env static, Id f) {
    Admin admin = newAdmin(code);
    Function func = admin.lookup(f);
    list[Expression] args = [ "<x>" in static ? (Expression)`<Id x>` : (Expression)`$$` | Id x <- func.parameters ];
    peval(func, static, makeArgs(args), admin);
    return admin.code();
}

void printIt(tuple[Expression, start[Source]] result) {
    println("NEW CODE:");
    println(result[1]);
    println("CALL: <result[0]>");
}


alias Admin = tuple[
    Function(Id) lookup,
    Id(Id, list[Id], Statement*) declare,
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


    Id declare_(Id prefix, list[Id] ids, Statement* body) {
        Id newId = [Id]"<prefix>$<idCounter>";
        idCounter += 1;
    
        if ((start[Source])`<Statement* ss>` := gen) {
            {Id ","}* rest = makeParams(ids);
            gen = (start[Source])`<Statement* ss>
                                 'function <Id newId>(<{Id ","}* rest>) {<Statement* body>}`;
        }
        return newId;
    }

    return <lookup_, declare_, start[Source]() { return gen; }>;
}


data Value
    = code(Tree code)
    | expr(Expression e);

alias Env = map[str, Value];


tuple[Env, lrel[Id, Expression]] partition({Id ","}* params, {Expression ","}* args, Env env) {
    Value toValue((Expression)`<Id x>`, Env env) = env["<x>"];
    default Value toValue(Expression e, Env _) = expr(e);

    list[Id] ps = [ p | Id p <- params ];
    list[Expression] es = [ e | Expression e <- args ];
    lrel[Id, Expression] paired = zip2(ps, es);
    
    Env staticEnv = ( "<p>" : toValue(a, env) | <Id p, Expression a> <- paired, isStatic(a, env) );
    lrel[Id, Expression] dynArgs = [ <x, a> | <Id x, Expression a> <- zip2(ps, es), !isStatic(a, staticEnv)];
    return <staticEnv, dynArgs>;
}

Expression peval((Function)`function <Id f>(<{Id ","}* fs>) {<Statement* body>}`, Env env, {Expression ","}* args, Admin admin) {
    println(f);
    println(fs);
    println(args);
    <newEnv, dynArgs> = partition(fs, args, env);
    Statement* newBody = peval(body, newEnv, admin);

    Id newName = admin.declare(f, dynArgs<0>, newBody);
    {Expression ","}* restArgs = makeArgs(dynArgs<1>);
    return (Expression)`<Id newName>(<{Expression ","}* restArgs>)`;
}

{Id ","}* makeParams(list[Id] fs) {
    Function dummy = (Function)`function (){}`;
    for (Id f <- fs) {
        if ((Function)`function (<{Id ","}* ids>) {}` := dummy) {
            dummy = (Function)`function (<{Id ","}* ids>, <Id f>) {}`;
        }
    }
    return dummy.parameters;
}

{Expression ","}* makeArgs(list[Expression] es) {
    Expression dummy = (Expression)`f()`;
    for (Expression e <- es) {
        if ((Expression)`f(<{Expression ","}* args>)` := dummy) {
            dummy = (Expression)`f(<{Expression ","}* args>, <Expression e>)`;
        }
    }
    return dummy.params;
}


Statement unroll(Id x, Statement s, Tree seq, Env env, Admin admin) {
    //println("PEVAL loop: <x> <s>");
    Statement unrolled = (Statement)`{}`;

    if (!(seq.prod is regular)) {
        throw "loop unrolling only over regulars, not <seq.prod>";
    }

    for (int i <- [0,2..size(seq.args)]) {
        if ((Statement)`{<Statement* ss>}` := unrolled) {
            Statement new = peval(s, env + ("<x>": code(seq.args[i])), admin);
            unrolled = (Statement)`{<Statement* ss> <Statement new>}`;
        }
    }
    
    return unrolled;
}

bool isStatic((Expression)`<Id x>`, Env env) = "<x>" in env;
bool isStatic((Expression)`<Literal _>`, Env _) = true;
bool isStatic((Expression)`(<Expression e>)`, Env env) = isStatic(e, env);
// etc.
default bool isStatic(Expression _, Env _) = false;

bool isCode(Id x, Env env) = "<x>" in env && env["<x>"] is code;

Statement* peval(Statement* ss, Env env, Admin admin) {
    return top-down-break visit (ss) {
        case Statement s => peval(s, env, admin)
    }
}

Statement peval(Statement s, Env env, Admin admin) {
    println("PEVAL: <s>");
    return top-down-break visit (s) {
        case (Expression)`<Id f>(<{Expression ","}* args>)` 
            => peval(func, env, args, admin) 
                when any(Expression e <- args, isStatic(e, env)), 
                    Function func := admin.lookup(f)

            
        // todo: escaping
        case (Expression)`<Id sub>.toString()` => [Expression]"\'<src>\'"
            when isCode(sub, env), Tree src := env["<sub>"].code


        case (Expression)`<Id sub>.src` => [Expression]toJSON(src)
            when isCode(sub, env), loc src := env["<sub>"].code.src

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` => unroll(x, s, env["<y>"].code, env, admin)
            when isCode(y, env)

        case (Statement)`match (<Id x>) {<MatchCase* cases>}`: {                        
            if (!isCode(x, env)) {
                throw "unbound variable in match: <x>";
            }

            for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
                if (success(list[Tree] bs) := matchPattern(p, env["<x>"].code)) {
                    env += ( "$<i+1>": code(bs[i]) | int i <- [0..size(bs)] );
                    insert peval((Statement)`{<Statement* ss>}`, env, admin);
                }
            }

            throw "no match found for <env["<x>"]>";
        }
    }        
}

str toJSON(loc l) = "{offset: <l.offset>, length: <l.length>}";
