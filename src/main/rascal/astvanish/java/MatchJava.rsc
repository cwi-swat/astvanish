module astvanish::java::MatchJava

extend astvanish::Pattern;
extend astvanish::java::Java15;

import ParseTree;
import List;
import String;
import IO;

syntax Stm
    = "match" "(" Expr ")" "{" MatchCase* "}"
    | "with" "(" Pattern ":" Expr ")" Stm
    ;

syntax MatchCase
    = "case" Pattern ":" Stm*;

start[CompilationUnit] parseAVJava(loc l) = parse(#start[CompilationUnit], l, allowAmbiguity=true);
