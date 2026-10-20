module astvanish::Pattern

import ParseTree;
import List;
import String;
import IO;

// ugly workaround because layout merging seems not to work
syntax Pattern = {Token " "}+ tokens;

lexical TokenChar
    = ![_:\\@\ \t\n]
    | "\\" [_:\\@]
    ;

lexical PatternId = [a-z A-Z 0-9 _] !<< [a-z A-Z][a-z A-Z 0-9 _]* !>> [a-z A-Z 0-9 _];


lexical Token
    = @category="string" TokenChar+ !>> ![_:\\@\ \t\n]
    | @category="regexp" "_"
    | @category="regexp" "_@" PatternId
    ;


/*
 * Concrete matching, against parse trees
 */ 

@synopsis{Matching can either fail or succeed with a list of bindings ($1, $2, ...)}
data MatchResult // for both kinds of matching :D
    = success(list[Tree] bindings)
    | success(str cons, list[Symbol] symbols)
    | failure()
    ;

@synopsis{Matching a concrete syntax tree against a pattern}
MatchResult matchTree(Pattern p, Tree t) {
    //println("<p> := `<t>`");
    list[Tree] bindings = [];
    list[Token] toks = [ tok | Token tok <- p.tokens ];

    if (size(toks) * 2 - 1 != size(t.args)) {
        return failure();
    }

    int i = 0;
    for (Token tok <- toks) {
        switch (tok) {
            case (Token)`_`: {
                Tree kid = t.args[i];
                if (!(kid.prod.def is lit)) {
                    bindings += [kid];
                    i += 2;
                }
                else {
                    return failure();
                }
            }
            
            case (Token)`_@<PatternId x>`: {
                Tree kid = t.args[i];
                //rprintln(kid);
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


@synopsis{Determining the type of a tree (typically, its sort)}
str kindOf(Tree t) = kindOf(t.prod.def)
    when t has prod;

str kindOf(lex(str s)) = s;

str kindOf(label(_, Symbol s)) = kindOf(s);

str kindOf(conditional(Symbol s, _)) = kindOf(s);

default str kindOf(Symbol s) = s has name ? s.name : "";

str unescapeToken(str tok) 
    = ( tok | replaceAll(it, x, y) | <str x, str y> <- m )
    when lrel[str, str] m := [ <"\\\\", "\\">, <"\\:", ":">,  <"\\@", "@"> ];


/*
 * Abstract matching / against grammar prods 
 */ 


str nameOf(label(str n, _)) = n;

str nameOf(conditional(Symbol s, _)) = nameOf(s);

default str nameOf(Symbol s) = "$unknown";

@synopsis{Matching a pattern against a grammar production}
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
                if (!(ss[i] is lit)) {
                    bindings += [ss[i]];
                    i += 2;
                }
                else {
                    return failure();
                }
            }
            
            case (Token)`_@<PatternId x>`: 
                if (kindOf(ss[i]) == "<x>") {
                    bindings += [ss[i]];
                    i += 2;
                }
                else {
                    return failure();
                }
            
            default: 
                if (ss[i] is lit, ss[i].string == unescapeToken("<tok>")) {
                    i += 2;
                }
                else {
                    return failure();
                }
        }
    }
    return success(cons, bindings);
}

default MatchResult matchProd(Pattern _, Production _) = failure();