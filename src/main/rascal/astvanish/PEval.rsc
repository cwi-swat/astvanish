module astvanish::PEval

import astvanish::MatchJS;

import IO;
import ParseTree;
import String;
import Set;
import List;
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
        start[Source] js = peval(root + path, env, func, logging); 
        loc l = jsLoc(func, sources[path][func]);  
        if (logging) {
            println("LOG: writing to <l>");
        }
        writeFile(l, js);
    }
}

start[Source] peval(loc l, Env env, str func, bool logging)
    = peval(parseAV(l), env, func, logging);

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
    Admin admin = newAdmin(code, f, logging);
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
Admin newAdmin(start[Source] code, str func, bool logging) {
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
    Id fid = [Id]func;
    Id fid0 = [Id]"<func>$0";
    start[Source] gen = (start[Source])`export {<Id fid0> as <Id fid>};
                                       '`;

    Id declare_(Id prefix, list[Id] ids, Statement* body, Env env) {

        // if we have specialized before with the same code arguments, 
        // return the memoized function name
        str key = hash(prefix, env);
        if (key in memo) {
            return memo[key];
        }

        str name = "<prefix>";
        if (name notin idCounters) {
            idCounters[name] = 0;
        }
        Id newId = [Id]"<name>$<idCounters[name]>";
        idCounters[name] += 1;

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
    
    Env staticEnv = ( "<p>" : v | <Id p, Expression a> <- paired, [Value v] := tryEval(a, env) );

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
    admin.log("function: <f>(<fs>)");
    <newEnv, dynArgs> = partition(fs, args, env, admin);

    Statement* newBody = peval(body, newEnv, admin);

    if ([Expression e] := isInlineable(newBody, newEnv)) {
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
            
        // static expressions are folded, unless they evaluate to code
        case Expression e => v
            when [expr(Expression v)] := tryEval(e, env)

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
            when [expr(Expression val)] := tryEval(cond, env)

        case (Statement)`if (<Expression cond>) <Statement s>` 
            => (Statement)`if (<Expression cond2>) <Statement s2>`
            when Expression cond2 := peval(cond, env, admin),
                Statement s2 := peval(s, env, admin)


        case (Statement)`if (<Expression cond>) <Statement s1> else <Statement s2>` 
            => truthy(val) ? peval(s1, env, admin) : peval(s2, env, admin)
            when [expr(Expression val)] := tryEval(cond, env)


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
                admin.alert(error("pattern did not match `<env["<x>"].code>`", p.src));
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




@synopsis{Thrown by `eval` when an expression cannot be (faithfully) evaluated statically}
data NotStatic = notStatic(Expression e);

@synopsis{Evaluate an expression if it is static (the list encodes optionality)}
list[Value] tryEval(Expression e, Env env) {
    try {
        return [eval(e, env)];
    }
    catch notStatic(_): {
        return [];
    }
}

@synopsis{Determine if an expression is statically known (and assumed to have no side-effects)}
@description{
An expression is static precisely when `eval` succeeds on it, so the two can never disagree.
Whenever `eval` cannot compute a result that is faithful to Javascript's semantics,
it throws `notStatic`, and the expression is residualized instead.
}
bool isStatic(Expression e, Env env) = tryEval(e, env) != [];


@synopsis{Evaluate an expression, throws `notStatic` if it is not static}

Value eval((Expression)`<Id x>`, Env env) = env["<x>"]
    when "<x>" in env;

Value eval(e:(Expression)`<Literal _>`, Env _) = expr(e);

Value eval((Expression)`(<Expression e>)`, Env env) = eval(e, env);

Value eval(e:(Expression)`[<{Expression ","}* es>]`, Env env)
    = expr((Expression)`[<{Expression ","}* args>]`)
    when {Expression ","}* args := makeArgs([ evalExpr(x, env) | Expression x <- es ]);

Value eval(e:(Expression)`<Expression obj>.toString()`, Env env) {
    switch (eval(obj, env)) {
        case code(Tree t): return expr(fromVal("<t>"));
        case expr(Expression v): return expr(fromVal(toStr(toVal(v), e)));
    }
    throw notStatic(e);
}

Value eval((Expression)`<Id x>.src`, Env env) = expr([Expression]toObj(t.src))
    when code(Tree t) := eval((Expression)`<Id x>`, env);

Value eval(e:(Expression)`<Expression obj>.length`, Env env) {
    Expression v = evalExpr(obj, env);
    if ((Expression)`[<{Expression ","}* es>]` := v) {
        return expr(fromVal(size([ x | Expression x <- es ])));
    }
    if (str s := toVal(v), bmp(s)) {
        return expr(fromVal(size(s)));
    }
    throw notStatic(e);
}

Value eval(e:(Expression)`<Expression arr>[<Expression idx>]`, Env env) {
    if ((Expression)`[<{Expression ","}* es>]` := evalExpr(arr, env), int i := val(idx, env)) {
        list[Expression] elts = [ x | Expression x <- es ];
        if (i >= 0, i < size(elts)) {
            return expr(elts[i]);
        }
    }
    throw notStatic(e);
}

Value eval(e:(Expression)`+<Expression arg>`, Env env)
    = expr(fromVal(toNumber(val(arg, env), e)));

Value eval(e:(Expression)`-<Expression arg>`, Env env) {
    int n = toNumber(val(arg, env), e);
    if (n == 0) { // -0 is not representable
        throw notStatic(e);
    }
    return expr(fromVal(-n));
}

Value eval((Expression)`!<Expression arg>`, Env env)
    = expr(fromVal(falsy(val(arg, env))));

Value eval(e:(Expression)`<Expression lhs> + <Expression rhs>`, Env env) {
    value a = val(lhs, env);
    value b = val(rhs, env);
    if (str _ := a || str _ := b) {
        return expr(fromVal(toStr(a, e) + toStr(b, e)));
    }
    return expr(fromVal(safe(toNumber(a, e) + toNumber(b, e), e)));
}

Value eval(e:(Expression)`<Expression lhs> - <Expression rhs>`, Env env)
    = expr(fromVal(safe(toNumber(val(lhs, env), e) - toNumber(val(rhs, env), e), e)));

Value eval(e:(Expression)`<Expression lhs> * <Expression rhs>`, Env env) {
    int a = toNumber(val(lhs, env), e);
    int b = toNumber(val(rhs, env), e);
    if (a * b == 0, a < 0 || b < 0) { // -0
        throw notStatic(e);
    }
    return expr(fromVal(safe(a * b, e)));
}

Value eval(e:(Expression)`<Expression lhs> / <Expression rhs>`, Env env) {
    int a = toNumber(val(lhs, env), e);
    int b = toNumber(val(rhs, env), e);
    // only exact integer division; no Infinity, NaN, -0 or fractions
    if (b == 0 || rem(a, b) != 0 || (a == 0 && b < 0)) {
        throw notStatic(e);
    }
    return expr(fromVal((a - rem(a, b)) / b));
}

Value eval(e:(Expression)`<Expression lhs> % <Expression rhs>`, Env env) {
    int a = toNumber(val(lhs, env), e);
    int b = toNumber(val(rhs, env), e);
    if (b == 0 || (a < 0 && rem(a, b) == 0)) { // NaN or -0
        throw notStatic(e);
    }
    return expr(fromVal(rem(a, b)));
}

// && and || short-circuit, and return one of their operands (like in JS)
Value eval((Expression)`<Expression lhs> && <Expression rhs>`, Env env) {
    Expression a = evalExpr(lhs, env);
    return falsy(toVal(a)) ? expr(a) : eval(rhs, env);
}

Value eval((Expression)`<Expression lhs> || <Expression rhs>`, Env env) {
    Expression a = evalExpr(lhs, env);
    return falsy(toVal(a)) ? eval(rhs, env) : expr(a);
}

// the ternary is static if the condition is, and the branch that is selected
Value eval((Expression)`<Expression cond> ? <Expression then> : <Expression els>`, Env env)
    = falsy(val(cond, env)) ? eval(els, env) : eval(then, env);

Value eval(e:(Expression)`<Expression lhs> == <Expression rhs>`, Env env)
    = expr(fromVal(looseEq(val(lhs, env), val(rhs, env), e)));

Value eval(e:(Expression)`<Expression lhs> != <Expression rhs>`, Env env)
    = expr(fromVal(!looseEq(val(lhs, env), val(rhs, env), e)));

Value eval(e:(Expression)`<Expression lhs> === <Expression rhs>`, Env env)
    = expr(fromVal(strictEq(val(lhs, env), val(rhs, env), e)));

Value eval(e:(Expression)`<Expression lhs> !== <Expression rhs>`, Env env)
    = expr(fromVal(!strictEq(val(lhs, env), val(rhs, env), e)));

Value eval(e:(Expression)`<Expression lhs> \<= <Expression rhs>`, Env env)
    = expr(fromVal(compare(val(lhs, env), val(rhs, env), e) <= 0));

Value eval(e:(Expression)`<Expression lhs> \< <Expression rhs>`, Env env)
    = expr(fromVal(compare(val(lhs, env), val(rhs, env), e) < 0));

Value eval(e:(Expression)`<Expression lhs> \>= <Expression rhs>`, Env env)
    = expr(fromVal(compare(val(lhs, env), val(rhs, env), e) >= 0));

Value eval(e:(Expression)`<Expression lhs> \> <Expression rhs>`, Env env)
    = expr(fromVal(compare(val(lhs, env), val(rhs, env), e) > 0));

// all other expressions are not static
default Value eval(Expression e, Env _) {
    throw notStatic(e);
}


@synopsis{Evaluate to a (literal) Javascript expression; code values are not JS values}
Expression evalExpr(Expression e, Env env) {
    if (expr(Expression v) := eval(e, env)) {
        return v;
    }
    throw notStatic(e);
}

@synopsis{Evaluate to the Rascal representation of a Javascript value}
value val(Expression e, Env env) = toVal(evalExpr(e, env));


@synopsis{Javascript values that have no direct Rascal counterpart}
@description{
Next to these, booleans are represented as `bool`, integers as `int`, and strings as `str`.
Non-integer numbers are kept opaque, since we do not want to compute with doubles.
Arrays, objects and regular expressions are opaque too, since they have reference semantics.
}
data JSValue
    = jsnull()
    | jsundefined()
    | jsnum(str src)
    | jsobject()
    ;

@synopsis{Convert a Javascript literal expression (the result of `eval`) to a Rascal value}
value toVal((Expression)`<Boolean b>`) = (Boolean)`true` := b;
value toVal((Expression)`<Numeric n>`) = toNum("<n>");
value toVal((Expression)`<String s>`) = unescape("<s>"[1..-1]);
value toVal((Expression)`null`) = jsnull();
value toVal((Expression)`undefined`) = jsundefined();
value toVal((Expression)`-<Expression e>`) = -n
    when int n := toVal(e);
value toVal(Expression e) = jsobject()
    when e is array || e is objectDefinition || (e is literal && e.literal is regexp);

default value toVal(Expression e) {
    throw "internal error: `<e>` is not a value";
}

value toNum(str s) {
    if (/^0[xX]<hex:[0-9a-fA-F]+>$/ := s) {
        return toInt(hex, 16);
    }
    if (/^[0-9]+$/ := s) {
        return toInt(s);
    }
    return jsnum(s);
}

@synopsis{Convert a Rascal value to a Javascript literal expression}
Expression fromVal(int x) = [Expression]"<x>";
Expression fromVal(str x) = [Expression]"\'<escape(x)>\'";
Expression fromVal(bool x) = [Expression]"<x>";


@synopsis{Javascript's falsiness}
bool falsy(false) = true;
bool falsy(0) = true;
bool falsy("") = true;
bool falsy(jsnull()) = true;
bool falsy(jsundefined()) = true;
bool falsy(jsnum(str s)) = toReal(s) == 0.0;
default bool falsy(value _) = false;

@synopsis{Javascript's truthiness of a (literal) expression}
bool truthy(Expression e) = !falsy(toVal(e));

@synopsis{Javascript's ToNumber, restricted to integers}
int toNumber(value v, Expression e) {
    switch (v) {
        case int n: return n;
        case bool b: return b ? 1 : 0;
        case jsnull(): return 0;
    }
    throw notStatic(e);
}

@synopsis{Javascript's ToString, restricted to primitives (except non-integer numbers)}
str toStr(value v, Expression e) {
    switch (v) {
        case str s: return s;
        case int n: return "<n>";
        case bool b: return "<b>";
        case jsnull(): return "null";
        case jsundefined(): return "undefined";
    }
    throw notStatic(e);
}

@synopsis{Javascript's typeof, restricted to the primitives we can compare}
str jsType(value v, Expression e) {
    switch (v) {
        case str _: return "string";
        case int _: return "number";
        case bool _: return "boolean";
        case jsnull(): return "null";
        case jsundefined(): return "undefined";
    }
    throw notStatic(e);
}

@synopsis{Javascript's ===}
bool strictEq(value a, value b, Expression e)
    = jsType(a, e) == jsType(b, e) && a == b;

@synopsis{Javascript's ==, except where it involves type coercion}
bool looseEq(value a, value b, Expression e) {
    str ta = jsType(a, e);
    str tb = jsType(b, e);
    if (ta == tb) {
        return a == b;
    }
    set[str] nullish = {"null", "undefined"};
    if (ta in nullish || tb in nullish) {
        return ta in nullish && tb in nullish;
    }
    throw notStatic(e);
}

@synopsis{Javascript's relational comparison, for numbers and strings (without coercion)}
int compare(int a, int b, Expression _) = a < b ? -1 : (a == b ? 0 : 1);
int compare(str a, str b, Expression _) = a < b ? -1 : (a == b ? 0 : 1)
    when bmp(a), bmp(b);
default int compare(value _, value _, Expression e) {
    throw notStatic(e);
}

@synopsis{Integer remainder with the sign of the dividend (like JS's %)}
int rem(int a, int b) {
    int r = abs(a) % abs(b);
    return a < 0 ? -r : r;
}

int abs(int n) = n < 0 ? -n : n;

@synopsis{Integers beyond 2^53 are not exactly representable as JS numbers}
int safe(int n, Expression e) {
    if (n > 9007199254740991 || n < -9007199254740991) {
        throw notStatic(e);
    }
    return n;
}

@synopsis{Is a string within the Basic Multilingual Plane (so length and order agree with UTF-16)}
bool bmp(str s) = all(int c <- chars(s), c < 0x10000);

@synopsis{Escape a string for use in a single-quoted JS string literal}
str escape(str s) = (s | replaceAll(it, a, b) | <str a, str b>  <- m )
    when lrel[str, str] m := [<"\\", "\\\\">, <"\n", "\\n">, <"\r", "\\r">, <"\'", "\\\'">, <"\t", "\\t">];

@synopsis{Unescape the contents of a JS string literal}
@description{
Returns `jsobject()` (i.e., an opaque, but truthy, value) for escapes we do not support
(legacy octal escapes, `\u{...}`, and lone surrogates).
}
value unescape(str s) {
    str r = "";
    int i = 0;
    int n = size(s);
    while (i < n) {
        str c = s[i];
        if (c != "\\" || i + 1 == n) {
            r += c;
            i += 1;
            continue;
        }
        str d = s[i + 1];
        i += 2;
        switch (d) {
            case "n": r += "\n";
            case "t": r += "\t";
            case "r": r += "\r";
            case "b": r += stringChar(8);
            case "f": r += stringChar(12);
            case "v": r += stringChar(11);
            case "\n": ; // line continuation
            case "\r": {
                if (i < n, s[i] == "\n") {
                    i += 1;
                }
            }
            case "x": {
                r += stringChar(toInt(substring(s, i, i + 2), 16));
                i += 2;
            }
            case "u": {
                if (i + 4 > n || /^[0-9a-fA-F]{4}$/ !:= substring(s, i, i + 4)) {
                    return jsobject();
                }
                int cp = toInt(substring(s, i, i + 4), 16);
                if (cp >= 0xD800, cp <= 0xDFFF) {
                    return jsobject();
                }
                r += stringChar(cp);
                i += 4;
            }
            case "0": {
                if (i < n, /[0-9]/ := s[i]) {
                    return jsobject();
                }
                r += stringChar(0);
            }
            default: {
                if (/[1-9]/ := d) {
                    return jsobject();
                }
                r += d;
            }
        }
    }
    return r;
}
