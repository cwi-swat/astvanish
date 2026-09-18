module astvanish::Match

extend lang::javascript::saner::Syntax;

import ParseTree;
import List;
import String;
import IO;

syntax Statement
    = "match" "(" Expression ")" "{" MatchCase* "}"
    | "for" "(" "const" Id "of" Expression ")" Statement body
    | "for" "(" "let" Id "of" Expression ")" Statement body
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

/*
 * Concrete matching, against parse trees
 */ 

data MatchResult // for both kinds of matching :D
    = success(list[Tree] bindings)
    | success(str cons, list[Symbol] symbols)
    | failure()
    ;

MatchResult matchPattern(Pattern p, Tree t) {
    list[Tree] bindings = [];
    list[Token] toks = [ tok | Token tok <- p.tokens ];

    if (size(toks) * 2 - 1 != size(t.args)) {
        return failure();
    }

    int i = 0;
    for (Token tok <- toks) {
        switch (tok) {
            case (Token)`_`: {
                bindings += [t.args[i]];
                i += 2;
            }
            
            case (Token)`_@<Id x>`: {
                Tree kid = t.args[i];
                if (kindOf(kid) == "<x>") {
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


str kindOf(Tree t) = kindOf(t.prod.def);

str kindOf(label(_, Symbol s)) = kindOf(s);

default str kindOf(Symbol s) = s.name;

str unescapeToken(str tok) 
    = ( tok | replaceAll(it, x, m[x]) | str x <- m )
    when map[str, str] m := ("\\:": ":", "\\\\": "\\", "\\@": "@");

test bool matchTest() 
    = matchPattern((Pattern)`case _ \\: _`, (MatchCase)`case _ : `) is success;

test bool matchType()
    = matchPattern((Pattern)`_@Id`, (Expression)`x`) is success;

start[Source] parseAV(loc l) = parse(#start[Source], l);

/*
 * Abtract matching / against grammar prods 
 */ 


str nameOf(label(str n, _)) = n;
default str nameOf(Symbol _) = "$unknown";

MatchResult matchProd(Pattern p, prod(label(str cons, Symbol _), list[Symbol] ss, _)) {
    list[Symbol] bindings = [];
    
    list[Token] toks = [ tok | Token tok <- p.tokens ];

    if (size(toks) * 2 - 1 != size(ss)) {
        return failure();
    }

    int i = 0;
    for (Token tok <- toks) {
        switch (tok) {
            case (Token)`_`: {
                bindings += [ss[i]];
                i += 2;
            }
            
            case (Token)`_@<Id x>`: {
                if (kindOf(ss[i]) == "<x>") {
                    bindings += [ss[i]];
                    i += 2;
                }
                else {
                    return failure();
                }
            }
            
            default: {
                if (ss[i] is lit, ss[i].string == unescapeToken("<tok>")) {
                    i += 2;
                }
                else {
                    return failure();
                }
            }
        }
    }
    //println(bindings);
    return success(cons, bindings);
}

default MatchResult matchPattern(Pattern _, Production _) = failure();