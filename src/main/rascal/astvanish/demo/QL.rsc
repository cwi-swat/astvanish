module astvanish::demo::QL


extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;
import String;

import astvanish::Eval;
import astvanish::PEval;
import astvanish::PT2JSON;


start syntax Form 
  = form: "form" Str title "{" Question* questions "}"; 

lexical Str = [\"]![\"]* [\"];

lexical Bool = "true" | "false";

lexical Int = [\-]?[0-9]+;

syntax Type 
  = integer: "integer"
  | boolean: "boolean"
  | string: "string";


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

start[Form] parseQL(loc l) = parse(#start[Form], l);

start[Form] aForm() 
    = parse(#start[Form], |project://astvanish/src/main/rascal/astvanish/demo/ql/taxform.ql|);


start[Form] loanApproval() 
    = parse(#start[Form], |project://astvanish/src/main/rascal/astvanish/demo/ql/loanapproval.ql|);

void dumpQlEval(loc root=|project://astvanish/src/main/rascal/astvanish/demo/ql/|) {
    peval(aForm());
    peval(loanApproval());
    writeFile(root + "taxform.json", pt2json(aForm()));
    writeFile(root + "loanapproval.json", pt2json(loanApproval()));
    writeFile(root + "ql-interp.js", 
        toEval(root + "ql.av", (
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
            "updater": ("$name": sort("Id"), "$type": sort("Type")),
            "eve": ("$e": sort("Expr"))
        ), #start[Form]));
}

void stressTestPrep(bool json=false, bool doPeval=false, bool genPevalHtml=false, bool genInterpHtml=false) {
    loc dir = |project://astvanish/src/main/rascal/astvanish/demo/ql/stress/|;
    for (loc l <- dir.ls, l.extension == "myql", !startsWith(l.file, "acs_")) {
        println("processing <l>");
        start[Form] f = parseQL(l);
        if (json) {
            writeFile(l[extension="json"], pt2json(f));
        }
        if (doPeval) {
            js = peval(|project://astvanish/src/main/rascal/astvanish/demo/ql/ql.av|, 
                ("$ql": code(f.top)), "run", false); 
            writeFile(l[extension="js"], js);
        }
        if (genPevalHtml) {
            str h = "\<html\>
                    '\<head\>
                    '\<script type=\"module\"\>
                    '    import { run } from \'./<l[extension="js"].file>\';
                    '    run();
                    '\</script\>
                    '\</head\>
                    '\<body\>
                    '\</body\>
                    '\</html\>";
            writeFile(l[extension="html"], h);
        }

        if (genInterpHtml) {
          str h = "\<html\>
                    '\<head\>
                    '\<script type=\"module\"\>
                    '    import { run } from \'../ql-interp.js\';
                    '    import ast from \'./<l[extension="json"].file>\' with {type: \'json\'};
                    '    run(ast);
                    '\</script\>
                    '\</head\>
                    '\<body\>
                    '\</body\>
                    '\</html\>";
            writeFile(l[file="interp-" + l.file][extension="html"], h);
        }
    }
}