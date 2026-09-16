module astvanish::Stm

extend lang::std::Layout;
extend lang::std::Id;

start syntax Machine = "machine" State* "end";

syntax State = "state" Id Trans* "end";

syntax Trans = Id "=\>" Id;


Machine doors() = (Machine)`machine 
                           '  state closed
                           '     open =\> opened
                           '  end
                           '  state opened
                           '     close =\> closed
                           '  end
                           'end`;