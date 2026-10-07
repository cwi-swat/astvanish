module astvanish::PEval

import astvanish::Match;

import IO;
import ParseTree;
import String;
import Set;
import Message;

@synopsis{A `Value` represent a statically known value: either code, or a (constant) expression}
data Value
    = code(Tree code)
    | expr(Expression expr);

@synopsis{The environment capturing statically known bindings}
alias Env = map[str, Value];

@synopsis{Partially evaluate as per one or more payload directives with one or more sources}
void peval(Tree prog, list[Tree] with=[], loc root=|project://astvanish/|, bool logging=false) {
    peval([prog, *with], root, logging);
}

@synopsis{Partially evaluate as per a one or more payload directives in one or more sources (writes to disk)}
void peval(list[Tree] progs, loc root, bool logging) {
    assert all(Tree prog <- progs, prog.prod.def is \start) : "must provide a start-syntax trees";

    map[str path, map[str func, Env statics] calls] tasks = ();
    map[str, map[str, list[loc]] ] sources = ();

    for (Tree prog <- progs, <str path, str func, str static> <- extractPayload(prog)) {
        if (path notin tasks) {
            tasks[path] = ();
            sources[path] = ();
        }
        if (func notin tasks[path]) {
            tasks[path][func] = ();
            sources[path][func] = [];
        }
        if (static in tasks[path][func]) {
            throw "duplicate binding for static param <static> (<path> / <func>)";
        }

        // here envs are merged to allow for different source files
        // to be input to the same interpreter via different parameters.
        tasks[path][func] += (static: code(prog.top));
        sources[path][func] += [prog.src];
    }

    for (str path <- tasks, str func <- tasks[path]) {
        Env env = tasks[path][func];
        start[Source] js = peval(parseAV(root + path), env, func, logging); 
        loc l = jsLoc(func, sources[path][func]);  
        if (logging) {
            println("LOG: writing to <l>");
        }
        writeFile(l, js);
    }
}

@synopsis{Create a JS output file loc based on the semantics `func` and the input source `srcs`}
loc jsLoc(str func, list[loc] srcs) {
    assert size(srcs) >= 1;
    // take first one as "root" 
    str base = split(".", srcs[0].file)[0];
    return srcs[0][file=base + "-" + func][extension="js"].top;
}
        

alias PEvalTask = tuple[str path, str func, str static];
alias Payload = set[PEvalTask];

@synopsis{Extract the payload //@@ <file>: <func>(<static>) directive from comments}
Payload extractPayload(Tree code) {
    Payload pl = {};
    visit (code) {
        // assuming Comment from lang::std::Comment
        case Comment c: {
            if (/^\/\/@@ <path:[^:\ ]*>: <f:[a-zA-Z0-9_]+>\(<par:\$[a-zA-Z0-9_]*>\)/ := "<c>") {
                pl += {<path, f, par>};
            }
        }
    }
    return pl;
}


@synopsis{Partially evaluate function `f` in match/with-enhanced Javascript `code` given `static` arguments}
start[Source] peval(start[Source] code, Env static, str f, bool logging) {
    Admin admin = newAdmin(code, logging);
    if ([Function func] := admin.lookup(f)) {
        list[Expression] args = [ "<x>" in static 
            ? (Expression)`<Id x>` 
            : (Expression)`undefined` | Id x <- func.parameters ];
        peval(func, static, makeArgs(args), admin);
        return spliceBlocksAndCommas(admin.code());
    }
    throw "could not find function <f> in source code";
}

@synopsis{Splice out superfluous curlies and commas for nicer code}
start[Source] spliceBlocksAndCommas(start[Source] s) {
    solve (s) {
        s = visit (s) {
            case (Statement)`{<Statement* s0> {<Statement* ss>} <Statement* s1>}`
                => (Statement)`{
                              '  <Statement* s0>
                              '  <Statement* ss> 
                              '  <Statement* s1>
                              '}`
            case (Function)`function (<{Id ","}* fs>) {<Statement* s0> {<Statement* ss>} <Statement* s1>}`
                => (Function)`function (<{Id ","}* fs>) {
                             '  <Statement* s0> 
                             '  <Statement* ss> 
                             '  <Statement* s1>
                             '}`
            case (Function)`function <Id f>(<{Id ","}* fs>) {<Statement* s0> {<Statement* ss>} <Statement* s1>}`
                => (Function)`function <Id f>(<{Id ","}* fs>) {
                             '  <Statement* s0> 
                             '  <Statement* ss> 
                             '  <Statement* s1>
                             '}`

            // somehow the interpreter does not like using the same match variables in the 
            // following three cases
            case (Statement)`{<Statement* sa> ; <Statement* sb>}`
                => (Statement)`{
                              '  <Statement* sa>
                              '  <Statement* sb>
                              '}`
            case (Function)`function (<{Id ","}* fs_>) {<Statement* s01> ; <Statement* s11>}`
                => (Function)`function (<{Id ","}* fs_>) {
                             '  <Statement* s01> 
                             '  <Statement* s11>
                             '}`
            case (Function)`function <Id f>(<{Id ","}* fs__>) {<Statement* s02> ; <Statement* s12>}`
                => (Function)`function <Id f>(<{Id ","}* fs__>) {
                             '  <Statement* s02> 
                             '  <Statement* s12>
                             '}`

        }
    }
    return s;
}

@synopsis{Object interface to do code admin: lookup functions and declare new specialized ones}
alias Admin = tuple[
    list[Function](str) lookup, // list as optional, we might not find it
    Id(Id, list[Id], Statement*, Env) declare,
    void(Message) alert,
    start[Source]() code,
    set[Message]() msgs,
    void(value) log
];

@synopsis{Constructor for the `Admin` interface}
Admin newAdmin(start[Source] code, bool logging) {
    map[str, Function] funcs = ();
    top-down-break visit (code) {
        case Function f: {
            if (f has name) {
                funcs["<f.name>"] = f;
            }
        }
    }

    list[Function] lookup_(str name) = name in funcs ? [funcs[name]] : [];

    // counters per partially evaluated function to generate fresh identifiers
    map[str, int] idCounters = ();

    // memo table to not specialize the same function multiple times for the same statics
    map[str, Id] memo = ();

    str yield(code(Tree t)) = "<t>";
    str yield(expr(Expression e)) = "<e>";

    // we memoize on the function prefix `x` and the static args
    str hash(Id x, Env env) = ( "<x>" | it + " " 
        + squeeze(yield(env[k]), #[\ \t\n]) | str k <- sort(env<0>) );

    // the generated source code
    start[Source] gen = (start[Source])``;

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

        // eval has special meaning in JS so we avoid conflicts
        if ((Id)`eval` := newId) {
            newId = (Id)`eval_`;
        }

        memo[key] = newId;

        if ((start[Source])`<Statement* ss>` := gen) {
            {Id ","}* rest = makeParams(ids);
            gen = (start[Source])`<Statement* ss>
                                 'function <Id newId>(<{Id ","}* rest>) {
                                 '  <Statement* body>
                                 '}`;
        }
        return newId;
    }

    set[Message] msgs = {};
    void alert_(Message m) {
        msgs += {m};
    }

    start[Source] code_() = gen;

    set[Message] msgs_() = msgs;

    void log_(value v) {
        if (logging) {
            println("LOG: <v>");
            if (msgs != {}) {
                iprintln(msgs);
            }
        }
    }

    return <lookup_, declare_, alert_, code_, msgs_, log_>;
}



@synopsis{Partition formal parameters and actual arguments into static environment and dynamic args}
tuple[Env, lrel[Id, Expression]] partition({Id ","}* params, {Expression ","}* args, Env env, Admin admin) {
    lrel[Id, Expression] paired = zip2([ p | Id p <- params ], [ e | Expression e <- args ]);
    
    Env staticEnv = ( "<p>" : eval(a, env) | <Id p, Expression a> <- paired, isStatic(a, env) );

    lrel[Id, Expression] dynArgs = [ <x, peval(a, env, admin)> | <Id x, Expression a> <- paired, !isStatic(a, env)];

    return <staticEnv, dynArgs>;
}

@synopsis{Predicate to determine that a sequence of statements is empty (semantically)}
bool isEmptyBody(Statement* ss) = (true | it && isEmptyBody(s) | Statement s <- ss);
bool isEmptyBody((Statement)`{}`) = true;
bool isEmptyBody((Statement)`;`) = true;
default bool isEmptyBody(Statement _) = false;

@synopsis{Is a sequence of statements inlineable and to what?}
list[Expression] isInlineable(Statement* body, Env env) {
    if (isEmptyBody(body)) {
        return [(Expression)`undefined`];
    }
    if ([Statement subj] := [ s | Statement s <- body ]) {
        return isInlineable(subj, env);
    }
    return [];
}

@synopsis{Is a statement inlineable and to what?}
list[Expression] isInlineable((Statement)`;`, Env env)
    = [(Expression)`undefined`];

list[Expression] isInlineable((Statement)`{}`, Env env)
    = [(Expression)`undefined`];

list[Expression] isInlineable((Statement)`{<Statement s>}`, Env env) 
    = isInlineable(s, env);

list[Expression] isInlineable((Statement)`return <Expression e>;`, Env env) = [e]
    when isStatic(e, env);

default list[Expression] isInlineable(Statement _, Env _) = [];


@synopsis{Partially evaluate a function definition given the current static environment and call-site arguments}
Expression peval((Function)`function <Id f>(<{Id ","}* fs>) {<Statement* body>}`, Env env, {Expression ","}* args, Admin admin) {
    <newEnv, dynArgs> = partition(fs, args, env, admin);

    Statement* newBody = peval(body, newEnv, admin);

    if ([Expression e] := isInlineable(newBody, env)) {
        admin.log("Inlining <e>");
        return e;
    }

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

    if (seq.prod.def is opt) {
        throw "unsupported regular <seq.prod.def>";
    }

    int step = size(seq.prod.def.separators);
    
    for (int i <- [0,step+1..size(seq.args)]) {
        if ((Statement)`{<Statement* ss>}` := unrolled) {
            Statement new = peval(s, env + ("<x>": code(seq.args[i])), admin);
            unrolled = (Statement)`{<Statement* ss>
                                  '<Statement new>}`;
        }
    }
    
    return unrolled;
}


@synopsis{An identifier "is" code if it refers to code in the environment}
bool isCode(Id x, Env env) = "<x>" in env && env["<x>"] is code;

bool isCode((Expression)`<Id x>`, Env env) = isCode(x, env);

default bool isCode(Expression _, Env _) = false;

Statement* peval(Statement* ss, Env env, Admin admin) {
    return top-down-break visit (ss) {
        case Statement s => peval(s, env, admin)
    }
}

@synopsis{Partially evaluate an expression}
Expression peval(Expression e, Env env, Admin admin) {
    admin.log("expression: <e>");
    return top-down-break visit (e) {
        // todo: something doesn't feel right about having two cases here
        case (Expression)`<Id f>(<{Expression ","}* args>)` 
            => peval(func, env, args, admin) 
                when any(Expression e <- args, isStatic(e, env)), 
                    [Function func] := admin.lookup("<f>")

        case (Expression)`<Id f>(<{Expression ","}* args>)`: {
            args = top-down-break visit (args) {
                case Expression e => peval(e, env, admin)
            }
            insert (Expression)`<Id f>(<{Expression ","}* args>)`;
        }
        
        case (Expression)`<Function f>`: {
            f.statements = peval(f.statements, env, admin);
            insert (Expression)`<Function f>`;
        }
            
        case Expression e => eval(e, env).expr
            when isStatic(e, env), !isCode(e, env)

        // catch-all clause: if not dealt with by earlier cases, it's an error
        // because static data (code) is leaking into the dynamic world.
        case (Expression)`<Id x>` : {
            if (isCode(x, env)) {
                throw "code cannot escape into the dynamic world (<x>, <x.src>)";
            }
        }
    };
}

@synopsis{Partially evaluate a statement}
Statement peval(Statement s, Env env, Admin admin) {
    admin.log("statement <s>");
    return top-down-break visit (s) {

        case (Statement)`if (<Expression cond>) <Statement s>` 
            => truthy(val) ? peval(s, env, admin) : (Statement)`;`
            when isStatic(cond, env), expr(Expression val) := eval(cond, env)

        case (Statement)`if (<Expression cond>) <Statement s>` 
            => (Statement)`if (<Expression cond2>) <Statement s2>`
            when Expression cond2 := peval(cond, env, admin),
                Statement s2 := peval(s, env, admin)


        case (Statement)`if (<Expression cond>) <Statement s1> else <Statement s2>` 
            => truthy(val) ? peval(s1, env, admin) : peval(s2, env, admin)
            when isStatic(cond, env), expr(Expression val) := eval(cond, env)


        case (Statement)`if (<Expression cond>) <Statement s1> else <Statement s2>` 
            => (Statement)`if (<Expression cond2>) 
                          '   <Statement s12> 
                          'else 
                          '   <Statement s22>` 
            when Expression cond2 := peval(cond, env, admin),
                Statement s12 := peval(s1, env, admin),
                Statement s22 := peval(s2, env, admin)

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
                admin.alert(error("pattern did not match `<env["<x>"].code>`", p.src));;   
            }
            else {
                throw "only static variables are allowed in match conditions (not `<e>`)";
            }
        }

        case s:(Statement)`match (<Expression e>) {<MatchCase* cases>}`: {
            admin.log("match statement: <e>");
            if ((Expression)`<Id x>` := e, isCode(x, env)) {                        
                for ((MatchCase)`case <Pattern p>: <Statement* ss>` <- cases) {
                    if (success(list[Tree] bs) := matchTree(p, env["<x>"].code)) {
                        insert peval((Statement)`{<Statement* ss>}`, 
                            env + ( "$<i+1>": code(bs[i]) | int i <- [0..size(bs)] ), admin);
                    }
                }
                admin.alert(error("no matching case found for `<env["<x>"].code>`", s.src));
            }
            else {
                throw "only static variables are allowed in match conditions (not `<e>`)";
            }
        }

        // for some reason this is needed, the top-down does not go into
        // {} to find nested match statements...
        case (Statement)`{<Statement* ss>}`: {
            ss = peval(ss, env, admin);
            insert (Statement)`{
                              '   <Statement* ss>
                              '}`;
        }

        case (Statement)`<Expression e>;` => (Expression)`undefined` := e2 
                ? (Statement)`;` : (Statement)`<Expression e2>;`
            when Expression e2 := peval(e, env, admin)

        case Expression e => peval(e, env, admin)
    }        
}

@synopsis{Turn a location into a JS object string}
str toObj(loc l) = "{offset: <l.offset>, length: <l.length>}";



// Helper functions to turn lists into iter-star-sep trees
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



@synopsis{Determine if an expression is statically known (and assumed to have no side-effects)}
bool isStatic((Expression)`<Expression e>.toString()`, Env env) = isStatic(e, env);

bool isStatic((Expression)`<Expression e>.length`, Env env) = isStatic(e, env);

bool isStatic((Expression)`<Id x>.src`, Env env) = isStatic((Expression)`<Id x>`, env);

bool isStatic((Expression)`<Id x>`, Env env) = "<x>" in env;

bool isStatic((Expression)`<Literal _>`, Env _) = true;

bool isStatic((Expression)`[<{Expression ","}* es>]`, Env env) 
    = ( true | it && isStatic(e, env) | Expression e <- es );

bool isStatic((Expression)`<Expression arr>[<Expression idx>]`, Env env)
    = isStatic(arr, env) && isStatic(idx, env);

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
    // and the other one doesn't have to be... (same as with if-statements)
    if (isStatic(cond, env), expr(Expression e) := eval(cond, env)) {
        return truthy(e) ? isStatic(then, env) : isStatic(els, env);
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

Value eval((Expression)`<Expression e>.length`, Env env) = expr(fromVal(size([ e | Expression e <- es ])))
    when expr((Expression)`[<{Expression ","}* es>]`) := eval(e, env);

Value eval((Expression)`<Id x>`, Env env) = env["<x>"]
    when "<x>" in env;

Value eval(e:(Expression)`<Literal _>`, Env _) = expr(e);

Value eval(e:(Expression)`[<{Expression ","}* es>]`, Env env)
    = expr(fromVal([toVal(v.expr) | Value v <- vs]))
    when list[Value] vs := [ eval(e, env) | Expression e <- es ];

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


// the contract is: eval *must* eval if isStatic returns true;
// and eval should only be called if isStatic holds.
default Value eval(Expression e, Env env) {
    throw "expected `<e>` to be static, but could not evaluate (env was: <env>)";
}




@synopsis{Convert a Javascript literal expression to a Rascal value}
value toVal((Expression)`<Boolean b>`) = (Boolean)`true` := b;
value toVal((Expression)`<Numeric n>`) = toInt("<n>"); // for now only ints
value toVal((Expression)`<String s>`) = "<"<s>"[1..-1]>"; // todo: unescaping
value toVal((Expression)`[<{Expression ","}* es>]`)
    = [ toVal(e) | Expression e <- es ];

@synopsis{Convert a Rascal value to a Javascript literal expression}
Expression fromVal(int x) = [Expression]"<x>";
Expression fromVal(str x) = [Expression]"\'<x>\'"; // todo: escaping
Expression fromVal(bool x) = [Expression]"<x>";
Expression fromVal(list[value] vs) = (Expression)`[<{Expression ","}* args>]`
    when list[Expression] es := [ fromVal(v) | value v <- vs ],
        {Expression ","}* args := makeArgs(es);


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
