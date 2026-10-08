module astvanish::demo::Regexp

extend lang::std::Layout;
import ParseTree;
import IO;
import astvanish::Eval;
import astvanish::PEval;
import astvanish::PT2JSON;
import util::Math;

start syntax RE = regexp: Regexp re;

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
    = parse(#start[RE], |project://astvanish/src/main/rascal/astvanish/demo/regexp/example.regexp|);


void dumpRegexpEval(loc root = |project://astvanish/src/main/rascal/astvanish/demo/regexp|) {
    writeFile(root + "example.json", pt2json(aRegexp()));
    peval(aRegexp());
    writeFile(root + "regexp-interp.js", 
        toEval(root + "regexp.av", (
            "match": ("$re": sort("RE")),
            "match_": ("$re": sort("Regexp"))
        ), #start[RE]));
}

list[str] genStr(start[RE] re) = genStr(re.top);

list[str] genStr(RE re) = genStr(re.re);

list[str] genStr((Regexp)`<Char c>`) = ["<c>"];

list[str] genStr((Regexp)`(<Regexp re>)`)
    = genStr(re);

list[str] genStr((Regexp)`<Regexp a> <Regexp b>`)
    = genStr(a) + genStr(b);

list[str] genStr((Regexp)`<Regexp a> | <Regexp b>`) 
    = arbInt(2) == 1 ? genStr(a) : genStr(b);

list[str] genStr((Regexp)`<Regexp a>?`) 
    = arbInt(2) == 1 ? genStr(a) : [];

list[str] genStr((Regexp)`<Regexp a>*`)
    = [ *genStr(a) | int _ <- [0..arbInt(1000)] ];