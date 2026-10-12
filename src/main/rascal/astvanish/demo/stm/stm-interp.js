

export {initialState as initialState, run as run};

function initialState($m) {{
        for (const s of $m.states) {
            {
                return s.name;
            }
        }
    }}

function run($m, state, event) {{
        for (const s of $m.states) {
            if (handleState(s, state, event)) {
                return;
            }
        }
    }}


function handleState($s, state, event) {{
        if ($s.name === state.current) {
            return doTrans($s.trans, state, event);
        }
        return false;
    }}

function doTrans($ts, state, event) {for (const t of $ts) {
        {
            if (t.event === event) {
                state.current = t.target;
                return true;
            }
        }
    }
    return false;}

