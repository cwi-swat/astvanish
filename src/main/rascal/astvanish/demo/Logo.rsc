module astvanish::demo::Logo

extend lang::std::Layout;


start syntax Logo = logo: Stmt* stats;

syntax Stmt
    = forward: "forward" Expr pixels
    | turn: "turn" Expr degrees
    | repeat: "repeat" Expr times "{" Stmt* body "}"
    ;


syntax Expr = integer: Int theInt;

lexical Int = [\-]?[0-9]+;
