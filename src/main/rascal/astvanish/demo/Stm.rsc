module astvanish::demo::Stm

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;

start syntax Machine = machine: "machine" State* states Action* actions "end";

syntax State = state: "state" Id name Trans* trans "end";

syntax Trans = trans: Id event "=\>" Id target;

syntax Action = "on" Id name "do" "{" Cmd* "}" ;

syntax Cmd = "beep" | "print" | "send";


start[Machine] anStm() 
    = parse(#start[Machine], |project://astvanish/src/main/rascal/astvanish/demo/doors.stm|);

