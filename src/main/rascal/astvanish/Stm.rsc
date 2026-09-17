module astvanish::Stm

extend lang::std::Layout;
extend lang::std::Id;

start syntax Machine = machine: "machine" State* states "end";

syntax State = state: "state" Id name Trans* trans "end";

syntax Trans = trans: Id event "=\>" Id target;


Machine doors() = (Machine)`machine 
                           '  state closed
                           '     open =\> opened
                           '  end
                           '  state opened
                           '     close =\> closed
                           '  end
                           'end`;