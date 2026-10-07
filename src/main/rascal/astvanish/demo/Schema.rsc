module astvanish::demo::Schema

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;
import astvanish::Eval;

start syntax Schema
    = schema: "schema" Id name Class* classes;

syntax Class = class: "class" Id name "{" Field* fields "}";

syntax Field = field: Id name ":" Type typ;

syntax Type
    = integer: "int"
    | boolean: "bool"
    | string: "str";


start[Schema] aSchema() 
    = parse(#start[Schema], |project://astvanish/src/main/rascal/astvanish/demo/persons.schema|);

void dumpSchemaEval() {
    writeFile(|project://astvanish/src/main/rascal/astvanish/demo/schema-interp.js|, 
        toEval(|project://astvanish/src/classes.av|, (
            "factory": ("$schema": sort("Schema")),
            "checkType": ("$type": sort("Type")),
            "sql": ("$schema": sort("Schema")),
            "field2sql": ("$field": sort("Field"), "$cname": sort("Id")),
            "toType": ("$type": sort("Type"))
        ), #start[Schema]));
}