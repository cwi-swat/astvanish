module astvanish::demo::Regexp

extend lang::std::Layout;

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

start[RE] aRegexp() = (start[RE])
`//@@ src/regexp.av: main($re)
'
'(a|b)*(abb|a*b)
'`;
