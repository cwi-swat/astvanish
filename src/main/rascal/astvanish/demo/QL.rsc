module astvanish::demo::QL


extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;

import astvanish::Eval;

start syntax Form 
  = form: "form" Str title "{" Question* questions "}"; 

lexical Str = [\"]![\"]* [\"];

lexical Bool = "true" | "false";

lexical Int = [\-]?[0-9]+;

syntax Type = integer: "int" | boolean: "bool" | string: "str";


syntax Question 
  = ifThen: "if" "(" Expr cond ")" Question then () !>> "else" 
  | ifThenElse: "if" "(" Expr cond ")" Question then "else" Question els
  | block: "{" Question* questions "}"
  | answerable: Str prompt Id name ":" Type type
  | computed: Str prompt Id name ":" Type type "=" Expr expr
  ;


syntax Expr
  = var: Id name \ "true" \"false"
  | integer: Int
  | string: Str
  | boolean: Bool
  | bracket parens: "(" Expr ")"
  | not: "!" Expr
  > left (
      mul: Expr "*" Expr
    | div: Expr "/" Expr
  )
  > left (
      add: Expr "+" Expr
    | sub: Expr "-" Expr
  )
  > non-assoc (
      eq: Expr "==" Expr
    | neq: Expr "!=" Expr
    | gt: Expr "\>" Expr
    | lt: Expr "\<" Expr
    | leq: Expr "\<=" Expr
    | geq: Expr "\>=" Expr
  )
  > left and: Expr "&&" Expr
  > left or: Expr "||" Expr
  ;

start[Form] aForm() 
    = parse(#start[Form], |project://astvanish/src/main/rascal/astvanish/demo/tax.ql|);


void dumpQlEval() {
    writeFile(|project://astvanish/src/main/rascal/astvanish/demo/ql-interp.js|, 
        toEval(|project://astvanish/src/ql.av|, (
            "run": ("$ql": sort("Form")),
            "initialize": ("$ql": sort("Form")),
            "defaultFor": ("$type": sort("Type")),
            "initializeQuestion": ("$q": sort("Question")),
            "render": ("$ql": sort("Form")),
            "compute": ("$ql": sort("Form")),
            "computeQuestion": ("$q": sort("Question")),
            "renderQuestion": ("$q": sort("Question")),
            "widget": ("$type": sort("Type"), "$label": sort("Str"), "$name": sort("Id")),
            "eve": ("$e": sort("Expr"))
        ), #start[Form]));
}