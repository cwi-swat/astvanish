module astvanish::demo::Func

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;
import astvanish::Eval;
import astvanish::PEval;
import astvanish::PT2JSON;

start syntax Prog = prog: Def* defs Id main;

syntax Def = def: "def" Id name "(" {Id ","}* params ")" "=" Expr body ";";

syntax Expr
    = var: Id name \ Reserved
    | number: Num number
    | \true: "true"
    | \false: "false"
    | call: Id name "(" {Expr ","}* actuals ")"
    | ifThenElse: "if" Expr cond "then" Expr then "else" Expr els "fi"
    | let: "let" Id name "=" Expr exp "in" Expr body "end"
    | bracket paren: "(" Expr arg ")"
    > neg: "-" Expr arg
    | not: "!" Expr arg
    > left (
          mul: Expr lhs "*" Expr rhs
        | div: Expr lhs "/" Expr rhs
        | \mod: Expr lhs "%" Expr rhs
    )
    > left (
          add: Expr lhs "+" Expr rhs
        | sub: Expr lhs "-" Expr rhs
    )
    > non-assoc (
          lt: Expr lhs "\<" Expr rhs
        | leq: Expr lhs "\<=" Expr rhs
        | gt: Expr lhs "\>" Expr rhs
        | geq: Expr lhs "\>=" Expr rhs
    )
    > non-assoc (
          eq: Expr lhs "==" Expr rhs
        | neq: Expr lhs "!=" Expr rhs
    )
    > left and: Expr lhs "&&" Expr rhs
    > left or: Expr lhs "||" Expr rhs
    ;

keyword Reserved = "def" | "if" | "then" | "else" | "fi" | "let" | "in" | "end" | "true" | "false";

lexical Num = [0-9]+;

start[Prog] aProg() 
    = parse(#start[Prog], |project://astvanish/src/main/rascal/astvanish/demo/func/factorial.func|);

start[Prog] anExprsProg() 
    = parse(#start[Prog], |project://astvanish/src/main/rascal/astvanish/demo/func/exprs.func|);

start[Prog] aBenchmarkProg() 
    = parse(#start[Prog], |project://astvanish/src/main/rascal/astvanish/demo/func/benchmark.func|);




void dumpFuncEval(loc root = |project://astvanish/src/main/rascal/astvanish/demo/func/|) {
    peval(aProg());
    writeFile(root + "factorial.json", pt2json(aProg()));
    peval(anExprsProg());
    writeFile(root + "exprs.json", pt2json(anExprsProg()));
    peval(aBenchmarkProg());
    writeFile(root + "benchmark.json", pt2json(aBenchmarkProg()));
    writeFile(root + "func-interp.js", 
        toEval(root + "func.js.av", (
            "run": ("$prog": sort("Prog")),
            "eve": ("$exp": sort("Expr")),
            "format": ("$prog": sort("Prog")),
            "formatExp": ("$exp": sort("Expr"))
        ), #start[Prog]));
}