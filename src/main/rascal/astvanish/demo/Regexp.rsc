module astvanish::demo::Regexp

extend lang::std::Layout;
import ParseTree;
import IO;
import astvanish::Eval;

start syntax RE = Regexp;

syntax Regexp 
    = word: Char word
    | bracket parens: "(" Regexp arg ")"
    | iter: Regexp re "*" 
    | opt: Regexp re "?"
    > left seq: Regexp lhs Regexp rhs
    > left alt: Regexp lhs "|" Regexp rhs
    ;

lexical Char = [a-zA-Z];

start[RE] aRegexp() 
    = parse(#start[RE], |project://astvanish/src/main/rascal/astvanish/demo/example.regexp|);


void dumpRegexpEval() {
    writeFile(|project://astvanish/src/main/rascal/astvanish/demo/regexp-interp.js|, 
        toEval(|project://astvanish/src/regexp.av|, (
            "match": ("$re": sort("Regexp")),
            "match_": ("$re": sort("Regexp"))
        ), #start[RE]));
}