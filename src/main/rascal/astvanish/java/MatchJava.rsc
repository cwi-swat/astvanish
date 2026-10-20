module astvanish::java::MatchJava

extend astvanish::Pattern;
extend astvanish::java::Java15;

import ParseTree;
import List;
import String;
import IO;

syntax Statement
    = "match" "(" Expr ")" "{" MatchCase* "}"
    | "with" "(" Pattern ":" Expr ")" Statement
    ;

syntax MatchCase
    = "case" Pattern ":" Statement*;

start[CompilationUnit] parseAVJava(loc l) = parse(#start[CompilationUnit], l, allowAmbiguity=true);
