


function run($m, $acts, state, event) {
    {
        for (const s of $m.states) {
            console.log(s.src);
            if (handleState(s, $acts, state, event)) {
                return;
            }
        }
    }
}


function handleState($s, $actions, state, event) {
    {
        if ($s.name === state.current) {
            return doTrans($s.trans, $actions, state, event);
        }
        return false;
    }
}

function doTrans($ts, $actions, state, event) {
    for (const t of $ts) {
        {
            if (t.event === event) {
                state.current = t.target;
                doActions(t.target, $actions);
                return true;
            }
        }
    }
    return false;
}

function doActions($name, $actions) {
    {
        for (const a of $actions.actions) {
            {
                // this for-loop plus if implements a kind of lookup
                // it matches up states and their action clauses
                // (related to "the trick" in peval folklore)
                if (a.name == $name.toString()) {
                    for (const c of a.cmds) {
                        switch (c._tag) {
                            case 'beep':
                                console.log('beep');
                                break;
                            case 'print':
                                console.log('print');
                                break;
                            case 'send':
                                console.log('send');
                                break;
                        }
                    }
                }
            }
        }
    }
}