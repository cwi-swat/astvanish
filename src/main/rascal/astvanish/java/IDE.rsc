module astvanish::java::IDE

import astvanish::java::MatchJava;

import util::LanguageServer;
import util::Reflective;


import ParseTree;


set[LanguageService] myContributor() = {
    parsing(avjavaParser(), usesSpecialCaseHighlighting = false)
};


Tree (str, loc) avjavaParser() = ParseTree::parser(#start[CompilationUnit], allowAmbiguity=true);


void main() {
    registerLanguage(
        language(
            pathConfig(srcs = [|std:///|, |project://astvanish/src/main/rascal|]),
            "ASTVanish (Java)",
            {"javaa"},
            "astvanish::java::IDE",
            "myContributor"
        )
    );
}

