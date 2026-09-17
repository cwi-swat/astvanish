module astvanish::Expr

extend lang::std::Layout;

syntax Expr
    = number: Num
    | left mul: Expr lhs "*" Expr rhs
    > left add: Expr lhs "+" Expr rhs
    ;

lexical Num = digits: [0-9]+;

Expr anExpr() = (Expr)`1 + 2 * 3`;


