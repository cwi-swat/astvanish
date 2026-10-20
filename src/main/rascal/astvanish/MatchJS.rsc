module astvanish::MatchJS

extend lang::javascript::saner::Syntax;
extend astvanish::Pattern;

import ParseTree;
import List;
import String;
import IO;

syntax Statement
    = "match" "(" Expression ")" "{" MatchCase* "}"
    | "for" "(" "const" Id "of" Expression ")" Statement body
    | "for" "(" "let" Id "of" Expression ")" Statement body
    | "with" "(" Pattern ":" Expression ")" Statement
    | "yield" Expression ";"
    | "export" "{" {Export ","}* "}"
    ;

syntax Export
    = Id "as" Id
    ;


syntax Function
    = "function" "*" "(" {Id ","}* ")" "{" Statement* "}"
    | "function" "*" Id "(" {Id ","}* ")" "{" Statement* "}"
    ;

syntax MatchCase
    = "case" Pattern ":" Statement*;

start[Source] parseAV(loc l) = parse(#start[Source], l);
