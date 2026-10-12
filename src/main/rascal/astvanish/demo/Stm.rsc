module astvanish::demo::Stm

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import IO;
import String;
import util::Math;
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


void dumpStmEval(loc root=|project://astvanish/src/main/rascal/astvanish/demo/stm/|) {
    writeFile(root + "stm-interp.js", 
        toEval(root + "stm-no-actions.av", (
            "run": 
                ("$m": sort("Machine"), "$acts": sort("Actions")),
            "initialState": 
                ("$m": sort("Machine")),
            "handleState": 
                ("$s": sort("State"), "$actions": sort("Actions")),
            "doTrans": 
                ("$ts": \iter-star-seps(sort("Trans"),[layouts("Standard")]),
                 "$actions": sort("Actions")),
            "doActions": ("$name": sort("Id"), "$actions": sort("Actions"))
        ), #start[Machine]));
}

str events2json(start[Machine] m)
    = "{\"events\": [<intercalate(",\n", [ "\"<e>\"" | str e <- eventsOf(m) ])>]}";

set[str] eventsOf(start[Machine] m) 
    = { "<e>" | /(Trans)`<Id e> =\> <Id _>` := m };


data AState = state(str name, lrel[str, str] trans);

alias AMachine = list[AState];

set[str] namesOf(list[AState] m) = { s.name | AState s <- m };


AMachine genStm(int maxStates = 20,  int maxTrans = maxStates * 2, list[str] prioNames = [], 
                    list[str] stateNames 
                    = readFileLines(|project://astvanish/src/main/rascal/astvanish/demo/stm/animals-adjectives.txt|)) {
    
    list[str] eventNames = readFileLines(|project://astvanish/src/main/rascal/astvanish/demo/stm/verbs.txt|);

    AMachine m = [];

    int numOfStates = arbInt(maxStates) + 1;
    for (int _ <- [0..numOfStates]) {
        str sn = "";
        do {
            list[str] theNames = stateNames;
            int idx = arbInt(size(theNames));

            // sometimes, we take from the prioritized names
            // in order to generate pairs of state machines
            // with shared state names to be renamed.
            if (prioNames != [], arbInt(2) == 0) {
                idx = arbInt(size(prioNames));
                theNames = prioNames;
            }
            
            sn = replaceAll(replaceAll(theNames[idx], " ", "_"), ".", "_");
        } while (sn == "" || sn in namesOf(m));

        m += [state(sn, [])];
    }

    int numOfTrans = arbInt(maxTrans) + 1;
    for (int _ <- [0..numOfTrans]) {
        int owner = arbInt(size(m));
        int to = arbInt(size(m));
        str event = replaceAll(eventNames[arbInt(size(eventNames))], ".", "_");
        if (/^[a-zA-Z][a-zA-Z0-9_]*$/ !:= event) {
            event = "bla";
        }
        m[owner].trans += [<event, m[to].name>];
    }

    return m;
}

str ppMachine(AMachine m) 
    = "machine<for (AState s <- m) {>
      '  state <s.name><for (<str e, str t> <- s.trans) {>
      '     <e> =\> <t><}>
      '  end
      '<}>
      'end";
