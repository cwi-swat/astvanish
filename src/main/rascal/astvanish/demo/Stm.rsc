module astvanish::demo::Stm

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;

start syntax Machine = machine: "machine" State* states "end";

syntax State = state: "state" Id name Trans* trans "end";

syntax Trans = trans: Id event "=\>" Id target;


start[Machine] anStm() 
    = parse(#start[Machine], |project://astvanish/src/main/rascal/astvanish/demo/doors.stm|);

