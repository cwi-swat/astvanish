module astvanish::IDE

import astvanish::Match;


import util::LanguageServer;
import util::Reflective;

import ParseTree;

Tree(str, loc) getParser(type[&T<:Tree] t)
  = Tree(str input, loc l) { return parse(t, input, l); };

set[LanguageService] myContributor() 
    = {parser(getParser(#start[Source]))};



Language getLanguage()
  = language(pathConfig(srcs = [|std:///|, |project://astvanish/src/main/rascal|]),
            "ASTVanish", "av", "astvanish::IDE", "myContributor");

void main() {
    registerLanguage(getLanguage());
}
