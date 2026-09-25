module astvanish::demo::Func

extend lang::std::Layout;
extend lang::std::Id;


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

start[Prog] aProg() = (start[Prog])
    `//@@ src/func.av: Run($prog)
    '
    'def factorial(n) =
    '   if n \> 1 then
    '        n * factorial(n - 1)
    '   else
    '        1
    '   fi;
    '
    '
    'def power(x, n) =
    '  if n \> 1 then
    '     x * power(x, n - 1)
    '  else 
    '     n
    '  fi ;
    '
    'factorial(power(2, 3))`;
