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

data MatchResult 
    = success(list[Tree] bindings)
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

data AMatchResult
    = aSuccess(str cons, map[int, Symbol] bindings)
    | aFailure()
    ;

str nameOf(label(str n, _)) = n;
default str nameOf(Symbol _) = "$unknown";

AMatchResult matchProd(Pattern p, prod(label(str cons, Symbol _), list[Symbol] ss, _)) {

    map[int, Symbol] bindings = ();
    
    list[Token] toks = [ tok | Token tok <- p.tokens ];

    if (size(toks) * 2 - 1 != size(ss)) {
        return aFailure();
    }

    int i = 0;
    int j = 1;
    for (Token tok <- toks) {
        //println("tok = `<tok>` J = <j>");
        switch (tok) {
            case (Token)`_`: {
                bindings[j] = ss[i];
                j += 1;
                i += 2;
            }
            
            case (Token)`_@<Id x>`: {
                Symbol kid = ss[i];
                if (kindOf(kid) == "<x>") {
                    bindings[j] = ss[i];
                    j += 1;
                    i += 2;
                }
                else {
                    return aFailure();
                }
            }
            
            default: {
                if (ss[i].string != unescapeToken("<tok>")) {
                    return aFailure();
                }
                i += 2;
            }
        }
    }
    //println(bindings);
    return aSuccess(cons, bindings);
}

default AMatchResult matchPattern(Pattern _, Production _) 
    = aFailure();