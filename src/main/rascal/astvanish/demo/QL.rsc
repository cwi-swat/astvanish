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
  = ifThen: "if" "(" Expr cond ")" Question then () empty !>> "else" 
  | ifThenElse: "if" "(" Expr cond ")" Question then "else" Question els
  | block: "{" Question* questions "}"
  | answerable: Str prompt Id name ":" Type type
  | computed: Str prompt Id name ":" Type type "=" Expr expr
  ;


syntax Expr
  = var: Id name \ "true" \"false"
  | integer: Int theInt
  | string: Str theStr
  | boolean: Bool theBool
  | bracket parens: "(" Expr arg ")"
  | not: "!" Expr arg
  > left (
      mul: Expr lhs "*" Expr rhs
    | div: Expr lhs "/" Expr rhs
  )
  > left (
      add: Expr lhs "+" Expr rhs
    | sub: Expr lhs "-" Expr rhs
  )
  > non-assoc (
      eq: Expr lhs "==" Expr rhs
    | neq: Expr lhs "!=" Expr rhs
    | gt: Expr lhs "\>" Expr rhs
    | lt: Expr lhs "\<" Expr rhs
    | leq: Expr lhs "\<=" Expr rhs
    | geq: Expr lhs "\>=" Expr rhs
  )
  > left and: Expr lhs "&&" Expr rhs
  > left or: Expr lhs "||" Expr rhs
  ;

start[Form] aForm() 
    = parse(#start[Form], |project://astvanish/src/main/rascal/astvanish/demo/tax.ql|);


start[Form] loanApproval() 
    = parse(#start[Form], |project://astvanish/src/main/rascal/astvanish/demo/loan.ql|);

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
            "updateVisibility": ("$q": sort("Question")),
            "updateValue": ("$name": sort("Id"), "$type": sort("Type")),
            "widget": ("$type": sort("Type"), "$label": sort("Str"), "$name": sort("Id")),
            "eve": ("$e": sort("Expr"))
        ), #start[Form]));
}