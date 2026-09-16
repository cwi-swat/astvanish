module astvanish::Expr

extend lang::std::Layout;

syntax Expr
    = Num
    | left Expr "*" Expr
    > left Expr "+" Expr
    ;

lexical Num = [0-9]+;

Expr anExpr() = (Expr)`1 + 2 * 3`;