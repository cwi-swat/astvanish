module astvanish::demo::Schema

extend lang::std::Layout;
extend lang::std::Id;

start syntax Schema
    = schema: "schema" Id name Class* classes;

syntax Class = class: "class" Id name "{" Field* fields "}";

syntax Field = field: Id name ":" Type typ;

syntax Type
    = integer: "int"
    | boolean: "bool"
    | string: "str";


Schema aSchema() =  (Schema)`schema Example
'class Person {
'   name: str 
'   age: int   
'}
'
'class Address {
'  street: str
'  number: int
'  central: bool
'}`;