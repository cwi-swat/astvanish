module astvanish::demo::Schema

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;

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

