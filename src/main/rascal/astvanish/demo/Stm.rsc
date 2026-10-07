module astvanish::demo::Stm

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;
import astvanish::Eval;

start syntax Machine = machine: "machine" State* states "end";

syntax State = state: "state" Id name Trans* trans "end";

syntax Trans = trans: Id event "=\>" Id target;

start syntax Actions = actions: Action* actions;

syntax Action = action: "on" Id name "do" "{" Cmd* cmds "}" ;

syntax Cmd = beep: "beep" | print: "print" | send: "send";



start[Machine] anStm() 
    = parse(#start[Machine], |project://astvanish/src/main/rascal/astvanish/demo/doors.stm|);

start[Actions] anActs() 
    = parse(#start[Actions], |project://astvanish/src/main/rascal/astvanish/demo/actions.stm|);


void dumpStmEval() {
    writeFile(|project://astvanish/src/main/rascal/astvanish/demo/stm-interp.js|, 
        toEval(|project://astvanish/src/stm.av|, (
            "run": 
                ("$m": sort("Machine"), "$acts": sort("Actions")),
            "handleState": 
                ("$s": sort("State"), "$actions": sort("Actions")),
            "doTrans": 
                ("$ts": \iter-star-seps(sort("Trans"),[layouts("Standard")]),
                 "$actions": sort("Actions")),
            "doActions": ("$name": sort("Id"), "$actions": sort("Actions"))
        ), #start[Machine]));
}