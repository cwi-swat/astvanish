module astvanish::demo::Func

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;
import astvanish::Eval;

start syntax Prog = prog: Def* defs Expr main;

syntax Def = def: "def" Id name "(" {Id ","}* params ")" "=" Expr body ";";

syntax Expr
    = var: Id name
    | number: Num number
    | left mul: Expr lhs "*" Expr rhs
    > left sub: Expr lhs "-" Expr rhs
    > non-assoc gt: Expr lhs "\>" Expr rhs
    | ifThenElse: "if" Expr cond "then" Expr then "else" Expr els "fi"
    | call: Id name "(" {Expr ","}* actuals ")"
    ;

lexical Num = [0-9]+;

start[Prog] aProg() 
    = parse(#start[Prog], |project://astvanish/src/main/rascal/astvanish/demo/factorial.func|);


void dumpFuncEval() {
    writeFile(|project://astvanish/src/main/rascal/astvanish/demo/func-interp.js|, 
        toEval(|project://astvanish/src/func.av|, (
            "run": ("$prog": sort("Prog")),
            "eval": ("$exp": sort("Expr")),
            "format": ("$prog": sort("Prog")),
            "formatExp": ("$exp": sort("Expr"))
        ), #start[Prog]));
}