module astvanish::Match

extend lang::javascript::saner::Syntax;

import ParseTree;
import List;
import String;
import IO;

syntax Statement
    = "match" "(" Expression ")" "{" MatchCase* "}"
    ;

syntax MatchCase
    = "case" Pattern ":" Statement*;

syntax Pattern = Token+ tokens;


lexical TokenChar
    = ![_:\\@\ \t\n]
    | "\\" [_:\\@]
    ;

lexical Token
    = TokenChar+ !>> ![_:\\@\ \t\n]
    | "_"
    | "_@" Id
    ;


data MatchResult 
    = success(list[Tree] bindings)
    | failure()
    ;

MatchResult matchPattern(Pattern p, Tree t) {
    list[Tree] bindings = [];
    int i = 0;
    list[Token] toks = [ tok | Token tok <- p.tokens ];

    if (size(toks) * 2 - 1 != size(t.args)) {
        return failure();
    }

    for (Token tok <- toks) {
        switch (tok) {
            case (Token)`_`: {
                bindings += [t.args[i]];
                i += 2;
            }
            
            case (Token)`_@<Id x>`: {
                Tree kid = t.args[i];
                if (kid.prod.def.name == "<x>") {
                    bindings += [kid];
                    i += 2;
                }
                else {
                    return failure();
                }
            }
            
            default: {
                if ("<t.args[i]>" != unescapeToken("<tok>")) {
                    return failure();
                }
                i += 2;
            }
        }
    }

    return success(bindings);
}

str unescapeToken(str tok) 
    = ( tok | replaceAll(it, x, m[x]) | str x <- m )
    when map[str, str] m := ("\\:": ":", "\\\\": "\\", "\\@": "@");

test bool matchTest() 
    = matchPattern((Pattern)`case _ \\: _`, (MatchCase)`case _ : `) is success;

test bool matchType()
    = matchPattern((Pattern)`_@Id`, (Expression)`x`) is success;

start[Source] parseAV(loc l) = parse(#start[Source], l);