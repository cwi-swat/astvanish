module astvanish::PT2JSON

import ParseTree;
import List;
import IO;


bool isAST(lit(_)) = false;
bool isAST(cilit(_)) = false;
default bool isAST(_) = true;

str pt2json(t:appl(prod(label(str l, sort(_)), list[Symbol] def, _), list[Tree] args))
    = "{
      '  \"_tag\": \"<l>\",
      '  \"_src\": {\"offset\": <t.src.offset>, \"length\": <t.src.length>},
      '  <intercalate(",\n", [ "\"<def[i].name>\": <pt2json(args[i])>" | int i <- [0,2..size(def)], isAST(def[i]) ])>
      '}";

str pt2json(appl(regular(\iter-star-seps(_, list[Symbol] seps)), list[Tree] args)) 
    = "[
      '  <intercalate(",\n", [ pt2json(args[i]) | int i <- [0,size(seps)+1..size(args)] ])>
      ']";

default str pt2json(Tree t) = "\"<t>\"";