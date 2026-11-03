module astvanish::java::Demo

import astvanish::java::PEvalJava;
import astvanish::demo::Func;
import astvanish::demo::Schema;

import ParseTree;

loc javaInterp(str name) = |project://astvanish/src/main/rascal/astvanish/java/| + name;

@synopsis{Partially evaluate the Java interpreters for the Func and Schema demos}
void dumpJava(bool logging=false) {
    start[Prog] prog = aProg();
    pevalJavaTo(javaInterp("Func.javaa"), "run", ("prog": code(prog.top)), [prog.src], logging=logging);

    start[Schema] schema = aSchema();
    pevalJavaTo(javaInterp("Factory.javaa"), "factory", ("schema": code(schema.top)), [schema.src], logging=logging);
}
