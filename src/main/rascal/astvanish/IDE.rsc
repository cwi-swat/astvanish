module astvanish::IDE

import astvanish::Match;
import astvanish::Check;

import util::LanguageServer;
import util::Reflective;

import ParseTree;


set[LanguageService] myContributor() = {
    parsing(avParser(), usesSpecialCaseHighlighting = false),
    analysis(avCheck, providesImplementations = false)
};


Tree (str, loc) avParser() = ParseTree::parser(#start[Source]);

Summary avCheck(loc l, start[Source] input) {
    Summary s = summary(l);
    s.messages = { <m.at, m> | Message m <- check(input)};
    return s;
}

void main() {
    registerLanguage(
        language(
            pathConfig(srcs = [|std:///|, |project://astvanish/src/main/rascal|]),
            "ASTVanish",
            {"av"},
            "astvanish::IDE",
            "myContributor"
        )
    );
}

