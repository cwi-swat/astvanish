module astvanish::java::Demo

import astvanish::java::PEvalJava;
import astvanish::java::EvalJava;
import astvanish::demo::Func;
import astvanish::demo::Schema;
import astvanish::demo::Regexp;
import astvanish::PT2JSON;

import ParseTree;
import IO;

//loc javaInterp(str name) = |project://astvanish/src/main/rascal/astvanish/java/| + name;

@synopsis{Partially evaluate the Java interpreters for the Func and Schema demos}
void dumpJava(bool logging=false) {
    start[Prog] prog = aProg();
    loc func = |project://astvanish/src/main/java/astvanish/demo/func/|;
    
    pevalJavaTo(func + "Func.javaa", "run", ("prog": code(prog.top)), [prog.src], logging=logging);

    
    start[RE] re = aRegexp();
    loc regexp = |project://astvanish/src/main/java/astvanish/demo/regexp/|;
    
    pevalJavaTo(regexp + "Regexp.javaa", "match", ("re": code(re.top)), [re.src], logging=logging);

    start[Schema] schema = aSchema();
    loc demo = |project://astvanish/src/main/java/astvanish/demo/schema|;
    
    pevalJavaTo(demo + "Factory.javaa", "factory", ("schema": code(schema.top)), [schema.src], logging=logging);
}

@synopsis{Desugar the Java interpreters for the Func and Schema demos to vanilla Java (over JSON ASTs)}
void dumpJavaInterp() {
    loc func = |project://astvanish/src/main/java/astvanish/demo/func/|;
    writeFile(func + "factorial.json", pt2json(aProg()));
    writeFile(func + "FuncInterp.java",
        toEvalJava(func + "Func.javaa", (
            "run": ("prog": sort("Prog")),
            "eve": ("exp": sort("Expr"))
        ), #start[Prog], "FuncInterp"));

    loc regexp = |project://astvanish/src/main/java/astvanish/demo/regexp/|;
    writeFile(regexp + "example.json", pt2json(aRegexp()));
    writeFile(regexp + "RegexpInterp.java",
        toEvalJava(regexp + "Regexp.javaa", (
            "match": ("re": sort("RE")),
            "match_": ("re": sort("Regexp"))
        ), #start[RE], "RegexpInterp"));

    loc demo = |project://astvanish/src/main/java/astvanish/demo/schema|;
    writeFile(demo + "persons.json", pt2json(aSchema()));
    writeFile(demo + "FactoryInterp.java",
        toEvalJava(demo + "Factory.javaa", (
            "factory": ("schema": sort("Schema")),
            "initialize": ("type": sort("Type")),
            "checkType": ("type": sort("Type"))
        ), #start[Schema], "FactoryInterp"));
}
