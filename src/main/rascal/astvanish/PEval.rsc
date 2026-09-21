module astvanish::PEval

import astvanish::Match;

import IO;
import ParseTree;
import String;
import Set;


@synopsis{Partial evaluate function `f`  in "match"-enhanced Javascript `code` given `static` arguments}
start[Source] peval(start[Source] code, Env static, str f) {
    Admin admin = newAdmin(code);
    Function func = admin.lookup(f)[0];
    list[Expression] args = [ "<x>" in static ? (Expression)`<Id x>` : (Expression)`$$` | Id x <- func.parameters ];
    peval(func, static, makeArgs(args), admin);
    return spliceBlocks(admin.code());
}

@synopsis{Splice out superfluous curlies for more readable code}
start[Source] spliceBlocks(start[Source] s) {
    solve (s) {
        s = visit (s) {
            case (Statement)`{<Statement* s0> {<Statement* ss>} <Statement* s1>}`
                => (Statement)`{<Statement* s0>
                              '<Statement* ss> 
                              '<Statement* s1>}`
            case (Function)`function (<{Id ","}* fs>) {<Statement* s0> {<Statement* ss>} <Statement* s1>}`
                => (Function)`function (<{Id ","}* fs>) {<Statement* s0> 
                                                        '<Statement* ss> 
                                                        '<Statement* s1>}`
            case (Function)`function <Id f>(<{Id ","}* fs>) {<Statement* s0> {<Statement* ss>} <Statement* s1>}`
                => (Function)`function <Id f>(<{Id ","}* fs>) {<Statement* s0> 
                                                              '<Statement* ss> 
                                                              '<Statement* s1>}`
        }
    }
    return s;
}

@synopsis{Object interface to do code admin: lookup functions and declare new ones}
alias Admin = tuple[
    list[Function](str) lookup, // list as optional
    Id(Id, list[Id], Statement*, Env) declare,
    start[Source]() code
];

Admin newAdmin(start[Source] code) {
    start[Source] gen = (start[Source])``;

    list[Function] lookup_(str name) {
        top-down visit (code) {
            case Function f: {
                if (f has name, name := "<f.name>") {
                    return [f];
                }
            }
        }
        return [];
    }


    map[str, int] idCounters = ();

    map[str, Id] memo = ();

    // we memoize on the function prefix `x` and the static args
    str hash(Id x, Env env) = ( "<x>" | it + " " + squeeze("<env[k].code>", #[\ \t\n]) | str k <- sort(env<0>) );

    Id declare_(Id prefix, list[Id] ids, Statement* body, Env env) {

        // if we have specialized before with the same code arguments, 
        // return the memoized function name
        str key = hash(prefix, env);
        if (key in memo) {
            return memo[key];
        }

        // in the first round, we keep the original name
        // to ensure that top-level calls keep their original names
        Id newId = prefix;
        str name = "<prefix>";
        if (name in idCounters) {
            newId = [Id]"<name>$<idCounters[name]>";
            idCounters[name] += 1;
        }
        else {
            idCounters[name] = 0;
        }

        
        memo[key] = newId;

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
    | expr(Expression expr);

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
                    [Function func] := admin.lookup("<f>")

        case Expression e => eval(e, env).expr
            when isStatic(e, env)

        case (Expression)`<Id x>` : {
            if (isCode(x, env)) {
                throw "code cannot escape into the dynamic world (<x>, <x.src>)";
            }
        }

        case (Statement)`if (<Expression cond>) <Statement s>` => truthy(val) ? s : (Statement)`;`
            when isStatic(cond, env), expr(Expression val) := eval(cond, env)

        case (Statement)`if (<Expression cond>) <Statement s1> else <Statement s2>` => truthy(val) ? s1 : s2
            when isStatic(cond, env), expr(Expression val) := eval(cond, env)

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` => unroll(x, s, env["<y>"].code, env, admin)
            when isCode(y, env)

        case (Statement)`with (<Pattern p>: <Expression e>) <Statement s>`: {
            if ((Expression)`<Id x>` := e, isCode(x, env)) {
                if (success(list[Tree] bs) := matchTree(p, env["<x>"].code)) {
                    insert peval(s, env + ( "$<i+1>": code(bs[i]) | int i <- [0..size(bs)] ), admin);
                }
                throw "no matching pattern for <env["<x>"].code>";   
            }
            else {
                throw "only static variables are allowed in match conditions (not `<e>``)";
            }
        }

        case (Statement)`match (<Expression e>) {<MatchCase* cases>}`: {
            if ((Expression)`<Id x>` := e, isCode(x, env)) {                        
                for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
                    if (success(list[Tree] bs) := matchTree(p, env["<x>"].code)) {
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



@synopsis{Determine if an expression is statically known}
bool isStatic((Expression)`<Expression e>.toString()`, Env env) = isStatic(e, env);

bool isStatic((Expression)`<Id x>.src`, Env env) = isStatic((Expression)`<Id x>`, env);

bool isStatic((Expression)`<Id x>`, Env env) = "<x>" in env;

bool isStatic((Expression)`<Literal _>`, Env _) = true;

bool isStatic((Expression)`(<Expression e>)`, Env env) = isStatic(e, env);

bool isStatic((Expression)`<Expression lhs> + <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> - <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> * <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> / <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> && <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> || <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> == <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> === <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> != <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> !== <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);
    

// etc.
default bool isStatic(Expression _, Env _) = false;

Value eval((Expression)`<Expression e>.toString()`, Env env) = expr([Expression]"\'<txt>\'") 
    when code(Tree t) := eval(e, env),
        str txt := replaceAll("<t>", "\n", "\\n");

Value eval((Expression)`<Id x>.src`, Env env) = expr([Expression]toJSON(t.src))
    when code(Tree t) := eval((Expression)`<Id x>`, env);

Value eval((Expression)`<Id x>`, Env env) = env["<x>"]
    when "<x>" in env;

Value eval(e:(Expression)`<Literal _>`, Env _) = expr(e);

Value eval((Expression)`(<Expression e>)`, Env env) = eval(e, env);

Value eval((Expression)`<Expression lhs> + <Expression rhs>`, Env env) = expr(fromVal(a + b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> + <Expression rhs>`, Env env) = expr(fromVal(a + b))
    when str a := toVal(eval(lhs, env).expr),
        str b := toVal(eval(rhs, env).expr);


Value eval((Expression)`<Expression lhs> - <Expression rhs>`, Env env) = expr(fromVal(a - b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> * <Expression rhs>`, Env env) = expr(fromVal(a * b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> / <Expression rhs>`, Env env) = expr(fromVal(a / b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> && <Expression rhs>`, Env env) = expr(fromVal(a && b))
    when bool a := toVal(eval(lhs, env).expr),
        bool b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> || <Expression rhs>`, Env env) = expr(fromVal(a || b))
    when bool a := toVal(eval(lhs, env).expr),
        bool b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> == <Expression rhs>`, Env env) = expr(fromVal(a == b))
    when value a := toVal(eval(lhs, env).expr),
        value b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> != <Expression rhs>`, Env env) = expr(fromVal(a != b))
    when value a := toVal(eval(lhs, env).expr),
        value b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> === <Expression rhs>`, Env env) = expr(fromVal(a == b))
    when value a := toVal(eval(lhs, env).expr),
        value b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> !== <Expression rhs>`, Env env) = expr(fromVal(a != b))
    when value a := toVal(eval(lhs, env).expr),
        value b := toVal(eval(rhs, env).expr);

default Value eval(Expression e, Env _) = expr(e);



value toVal((Expression)`<Boolean b>`) = (Boolean)`true` := b;
value toVal((Expression)`<Numeric n>`) = toInt("<n>"); // for now only ints
value toVal((Expression)`<String s>`) = "<"<s>"[1..-1]>"; // todo: unescaping

Expression fromVal(int x) = [Expression]"<x>";
Expression fromVal(str x) = [Expression]"\'<x>\'"; // todo: escaping
Expression fromVal(bool x) = [Expression]"<x>";

bool truthy(Expression e) = !falsy(e);

bool falsy((Expression)`false`) = true;
bool falsy((Expression)`0`) = true;
bool falsy((Expression)`-0`) = true;
bool falsy((Expression)`""`) = true;
bool falsy((Expression)`''`) = true;
bool falsy((Expression)`null`) = true;
bool falsy((Expression)`undefined`) = true;
bool falsy((Expression)`NaN`) = true;
default bool falsy(Expression _) = false;


//bool falsy((Expression)`0n`) = true;
