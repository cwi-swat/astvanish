module astvanish::PT2JSON

import ParseTree;
import List;
import IO;
import String;


bool isAST(lit(_)) = false;
bool isAST(cilit(_)) = false;
default bool isAST(_) = true;

str nameOf(label(str n, _)) = n;
str nameOf(conditional(Symbol s, _)) = nameOf(s);
default str nameOf(Symbol s) = "$unknown";


str pt2json(t:appl(prod(\start(_), list[Symbol] def, _), list[Tree] args))
    = pt2json(args[1]);

str pt2json(t:appl(prod(label(str l, sort(_)), list[Symbol] def, _), list[Tree] args))
    = "{
      '  \"_tag\": \"<l>\",
      '  \"_src\": {\"offset\": <t.src.offset>, \"length\": <t.src.length>},
      '  <intercalate(",\n", [ "\"<nameOf(def[i])>\": <pt2json(args[i])>" | int i <- [0,2..size(def)], isAST(def[i]) ])>
      '}";

str pt2json(appl(regular(\iter-star-seps(_, list[Symbol] seps)), list[Tree] args)) 
    = "[
      '  <intercalate(",\n", [ pt2json(args[i]) | int i <- [0,size(seps)+1..size(args)] ])>
      ']";


str escape(str s) = (s | replaceAll(it, k, m[k]) | str k <- m )
    when map[str,str] m := ("\n": "\\n", "\\": "\\\\", "\"": "\\\"", "\t": "\\t");

default str pt2json(Tree t) = "\"<escape(s)>\""
    when str s := "<t>";