module astvanish::PEval

import astvanish::Match;

import IO;
import ParseTree;
import String;
import Set;

@synopsis{A `Value` represent a statically known value: either code, or a (constant) expression}
data Value
    = code(Tree code)
    | expr(Expression expr);

@synopsis{The environment capturing statically known bindings}
alias Env = map[str, Value];


@synopsis{Partial evaluate function `f` in "match"-enhanced Javascript `code` given `static` arguments}
start[Source] peval(start[Source] code, Env static, str f) {
    Admin admin = newAdmin(code);
    if ([Function func] := admin.lookup(f)) {
        list[Expression] args = [ "<x>" in static 
            ? (Expression)`<Id x>` 
            : (Expression)`undefined` | Id x <- func.parameters ];
        peval(func, static, makeArgs(args), admin);
        return spliceBlocks(admin.code());
    }
    throw "could not find function <f> in source code";
}

@synopsis{Splice out superfluous curlies for nicer code}
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
    list[Function](str) lookup, // list as optional, we might not find it
    Id(Id, list[Id], Statement*, Env) declare,
    start[Source]() code
];

@synopsis{Constructor for the `Admin` interface}
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

    // counters per partially evaluated function to generated fresh identifiers
    map[str, int] idCounters = ();

    // memo table to not specialize the same expression multiple time
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

    // todo: skip this step if admin already knows its specialization
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

    // todo: this does not work with the `opt` regular
    int step = size(seq.prod.def.separators);

    for (int i <- [0,step+1..size(seq.args)]) {
        if ((Statement)`{<Statement* ss>}` := unrolled) {
            Statement new = peval(s, env + ("<x>": code(seq.args[i])), admin);
            unrolled = (Statement)`{<Statement* ss> <Statement new>}`;
        }
    }
    
    return unrolled;
}


@synopsis{And identifier "is" code if it refers to code in the environment}
bool isCode(Id x, Env env) = "<x>" in env && env["<x>"] is code;

Statement* peval(Statement* ss, Env env, Admin admin) {
    return top-down-break visit (ss) {
        case Statement s => peval(s, env, admin)
    }
}

@synopsis{Partially evaluate a statement}
Statement peval(Statement s, Env env, Admin admin) {
    //println("PEVAL: <s>");
    return top-down-break visit (s) {
        case (Expression)`<Id f>(<{Expression ","}* args>)` 
            => peval(func, env, args, admin) 
                when any(Expression e <- args, isStatic(e, env)), 
                    [Function func] := admin.lookup("<f>")

        case Expression e => eval(e, env).expr
            when isStatic(e, env)

        // catch-all clause: if not dealt with by earlier cases, it's an error
        case (Expression)`<Id x>` : {
            if (isCode(x, env)) {
                throw "code cannot escape into the dynamic world (<x>, <x.src>)";
            }
        }

        case (Statement)`if (<Expression cond>) <Statement s>` 
            => truthy(val) ? peval(s, env, admin) : (Statement)`;`
            when isStatic(cond, env), expr(Expression val) := eval(cond, env)

        case (Statement)`if (<Expression cond>) <Statement s1> else <Statement s2>` 
            => truthy(val) ? peval(s1, env, admin) : peval(s2, env, admin)
            when isStatic(cond, env), expr(Expression val) := eval(cond, env)

        case (Statement)`for (const <Id x> of <Id y>) <Statement s>` 
            => unroll(x, s, env["<y>"].code, env, admin)
            when isCode(y, env)

        case (Statement)`for (let <Id x> of <Id y>) <Statement s>` 
            => unroll(x, s, env["<y>"].code, env, admin)
            when isCode(y, env)

        // the with statement is non-conditional, it assumes the `e` arg *will* match the pattern
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

@synopsis{Turn a location into a JS object string}
str toObj(loc l) = "{offset: <l.offset>, length: <l.length>}";



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

bool isStatic((Expression)`+<Expression e>`, Env env) = isStatic(e, env);

bool isStatic((Expression)`-<Expression e>`, Env env) = isStatic(e, env);

bool isStatic((Expression)`<Expression lhs> + <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> - <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> * <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> / <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> % <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`!<Expression e>`, Env env) = isStatic(e, env);

bool isStatic((Expression)`<Expression lhs> && <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> || <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression cond> ? <Expression then> : <Expression els>`, Env env) {
    // this is funky: if the condition is static, we can evaluate it
    // and depending on the result, only one of the branches has to be static
    // and the other one doesn't have to be...
    if (isStatic(cond, env), expr(Expression e) := eval(cond, env)) {
        if (truthy(e)) {
            return isStatic(then, env);
        }
        return isStatic(els, env);
    }
    return false;
}


bool isStatic((Expression)`<Expression lhs> == <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> === <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> != <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> !== <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);
    
bool isStatic((Expression)`<Expression lhs> \>= <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> \> <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> \<= <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);

bool isStatic((Expression)`<Expression lhs> \< <Expression rhs>`, Env env) =
    isStatic(lhs, env) && isStatic(rhs, env);


// all other expressions are not static
default bool isStatic(Expression _, Env _) = false;


@synopsis{Evaluate an expression (assuming `isStatic` holds)}
Value eval((Expression)`<Expression e>.toString()`, Env env) = expr([Expression]"\'<txt>\'") 
    when code(Tree t) := eval(e, env),
        str txt := replaceAll("<t>", "\n", "\\n"); // todo: fix escaping

Value eval((Expression)`<Id x>.src`, Env env) = expr([Expression]toObj(t.src))
    when code(Tree t) := eval((Expression)`<Id x>`, env);

Value eval((Expression)`<Id x>`, Env env) = env["<x>"]
    when "<x>" in env;

Value eval(e:(Expression)`<Literal _>`, Env _) = expr(e);

Value eval((Expression)`(<Expression e>)`, Env env) = eval(e, env);

Value eval((Expression)`+<Expression e>`, Env env) = expr(fromVal(n))
    when int n := toVal(eval(e, env).expr);

Value eval((Expression)`-<Expression e>`, Env env) = expr(fromVal(-n))
    when int n := toVal(eval(e, env).expr);

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

Value eval((Expression)`<Expression lhs> % <Expression rhs>`, Env env) = expr(fromVal(a % b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`!<Expression e>`, Env env) = expr(fromVal(!b))
    when bool b := toVal(eval(e, env).expr);

Value eval((Expression)`<Expression lhs> && <Expression rhs>`, Env env) = expr(fromVal(a && b))
    when bool a := toVal(eval(lhs, env).expr),
        bool b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> || <Expression rhs>`, Env env) = expr(fromVal(a || b))
    when bool a := toVal(eval(lhs, env).expr),
        bool b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression cond> ? <Expression then> : <Expression els>`, Env env) {
    Value v = eval(cond, env);
    if (truthy(v.expr)) {
        return eval(then, env);
    }
    return eval(els, env);
}

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

Value eval((Expression)`<Expression lhs> \<= <Expression rhs>`, Env env) = expr(fromVal(a <= b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> \< <Expression rhs>`, Env env) = expr(fromVal(a < b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> \>= <Expression rhs>`, Env env) = expr(fromVal(a >= b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);

Value eval((Expression)`<Expression lhs> \> <Expression rhs>`, Env env) = expr(fromVal(a > b))
    when int a := toVal(eval(lhs, env).expr),
        int b := toVal(eval(rhs, env).expr);


// the contract is: eval *must* eval, if isStatic returned true
// and eval can only be called if isStatic holds.
default Value eval(Expression e, Env env) {
    throw "expected `<e>` to be static, but could not evaluate (env was: <env>)";
}




@synopsis{Convert a Javascript literal expression to a Rascal value}
value toVal((Expression)`<Boolean b>`) = (Boolean)`true` := b;
value toVal((Expression)`<Numeric n>`) = toInt("<n>"); // for now only ints
value toVal((Expression)`<String s>`) = "<"<s>"[1..-1]>"; // todo: unescaping

@synopsis{Convert a Rascal value to a Javascript literal expression}
Expression fromVal(int x) = [Expression]"<x>";
Expression fromVal(str x) = [Expression]"\'<x>\'"; // todo: escaping
Expression fromVal(bool x) = [Expression]"<x>";


@synopsis{Javascript's truthiness}
bool truthy(Expression e) = !falsy(e);

@synopsis{Javascript's falsiness}
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
