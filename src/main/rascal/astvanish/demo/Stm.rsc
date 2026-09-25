module astvanish::demo::Stm

extend lang::std::Layout;
extend lang::std::Id;

start syntax Machine = machine: "machine" State* states "end";

syntax State = state: "state" Id name Trans* trans "end";

syntax Trans = trans: Id event "=\>" Id target;


start[Machine] doors() = (start[Machine])
    `//@@ src/stm.av: run($m)
    '
    'machine 
    '  state closed
    '     open =\> opened
    '  end
    '  state opened
    '     close =\> closed
    '  end
    'end`;