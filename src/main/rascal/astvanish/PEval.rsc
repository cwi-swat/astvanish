module astvanish::PEval

import astvanish::Match;

import IO;
import ParseTree;
import String;
import Set;


@synopsis{Partial evaluate function `f`  in "match"-enhanced Javascript given `static` arguments}
start[Source] peval(start[Source] code, Env static, str f) {
    Admin admin = newAdmin(code);
    Function func = admin.lookup(f);
    list[Expression] args = [ "<x>" in static ? (Expression)`<Id x>` : (Expression)`$$` | Id x <- func.parameters ];
    peval(func, static, makeArgs(args), admin);
    return admin.code();
}

@synopsis{Object interface to do code admin: lookup functions and declare new ones}
alias Admin = tuple[
    Function(str) lookup,
    Id(Id, list[Id], Statement*, Env) declare,
    start[Source]() code
];

Admin newAdmin(start[Source] code) {
    start[Source] gen = (start[Source])``;

    Function lookup_(str name) {
        top-down visit (code) {
            case Function f: {
                if (name := "<f.name>") {
                    return f;
                }
            }
        }
        throw "couldn\'t find function <name>";
    }

    int idCounter = 0;

    map[str, Id] memo = ();

    str hash(Id x, Env env) = ( "<x>" | it + " " + squeeze("<env[k].code>", #[\ \t\n]) | str k <- sort(env<0>) );

    Id declare_(Id prefix, list[Id] ids, Statement* body, Env env) {
        str key = hash(prefix, env);
        if (key in memo) {
            return memo[key];
        }

        Id newId = [Id]"<prefix>$<idCounter>";
        memo[key] = newId;

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


@synopsis{A `Value` represent a statically known value: either code, or a (constant) expression}
data Value
    = code(Tree code)
    | expr(Expression e);

@synopsis{The environment capturing statically known bindings}
alias Env = map[str, Value];


@synopsis{Partition formal parameters and actual arguments into static environment and dynamic args}
tuple[Env, lrel[Id, Expression]] partition({Id ","}* params, {Expression ","}* args, Env env) {
    Value toValue((Expression)`<Id x>`, Env env) = env["<x>"];
    default Value toValue(Expression e, Env _) = expr(e);

    lrel[Id, Expression] paired = zip2([ p | Id p <- params ], [ e | Expression e <- args ]);
    
    Env staticEnv = ( "<p>" : toValue(a, env) | <Id p, Expression a> <- paired, isStatic(a, env) );
    lrel[Id, Expression] dynArgs = [ <x, a> | <Id x, Expression a> <- paired, !isStatic(a, env)];

    return <staticEnv, dynArgs>;
}

@synopsis{Partially evaluate a function definition given the current static environment and call-site arguments}
Expression peval((Function)`function <Id f>(<{Id ","}* fs>) {<Statement* body>}`, Env env, {Expression ","}* args, Admin admin) {
    <newEnv, dynArgs> = partition(fs, args, env);
    Statement* newBody = peval(body, newEnv, admin);

    Id newName = admin.declare(f, dynArgs<0>, newBody, newEnv);
    {Expression ","}* restArgs = makeArgs(dynArgs<1>);
    return (Expression)`<Id newName>(<{Expression ","}* restArgs>)`;
}


@synopsis{Unroll a for-each loop over a sequence of parse trees}
Statement unroll(Id x, Statement s, Tree seq, Env env, Admin admin) {
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

@synopsis{Determine if an expression is statically known}
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

@synopsis{Partially evaluate a statement}
Statement peval(Statement s, Env env, Admin admin) {
    return top-down-break visit (s) {
        case (Expression)`<Id f>(<{Expression ","}* args>)` 
            => peval(func, env, args, admin) 
                when any(Expression e <- args, isStatic(e, env)), 
                    Function func := admin.lookup("<f>")

            
        // todo: complete the escaping 
        case (Expression)`<Id sub>.toString()` => [Expression]"\'<txt>\'"
            when isCode(sub, env), Tree src := env["<sub>"].code,
                str txt := replaceAll("<src>", "\n", "\\n")

        case (Expression)`<Id x>` : {
            if (isCode(x, env)) {
                throw "code cannot escape into the dynamic world (<x>, <x.src>)";
            }
        }

        case (Expression)`<Id sub>.src` => [Expression]toJSON(src)
            when isCode(sub, env), loc src := env["<sub>"].code.src

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` => unroll(x, s, env["<y>"].code, env, admin)
            when isCode(y, env)

        case (Statement)`match (<Expression e>) {<MatchCase* cases>}`: {
            if ((Expression)`<Id x>` := e, isCode(x, env)) {                        
                for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
                    if (success(list[Tree] bs) := matchPattern(p, env["<x>"].code)) {
                        insert peval((Statement)`{<Statement* ss>}`, 
                            env + ( "$<i+1>": code(bs[i]) | int i <- [0..size(bs)] ), admin);
                    }
                }
                throw "no matching pattern for <env["<x>"].code>";
            }
            else {
                throw "only static variables are allowed in match conditions (not `<e>``)";
            }
        }
    }        
}

str toJSON(loc l) = "{offset: <l.offset>, length: <l.length>}";



// Helper functions to turns lists into iter-star-sep trees
{Id ","}* makeParams(list[Id] fs) {
    Function dummy = (Function)`function (){}`;
    for (Id f <- fs, (Function)`function (<{Id ","}* ids>) {}` := dummy) {
        dummy = (Function)`function (<{Id ","}* ids>, <Id f>) {}`;
    }
    return dummy.parameters;
}

{Expression ","}* makeArgs(list[Expression] es) {
    Expression dummy = (Expression)`f()`;
    for (Expression e <- es, (Expression)`f(<{Expression ","}* args>)` := dummy) {
        dummy = (Expression)`f(<{Expression ","}* args>, <Expression e>)`;
    }
    return dummy.params;
}
