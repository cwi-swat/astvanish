function doActions() {
    console.log('print');
}
function doTrans(state, event) {
    if ('open' === event) {
        state.current = 'opened';
        doActions();
        return true;
    }
    return false;
}
function handleState(state, event) {
    if ('closed' === state.current) {
        return doTrans(state, event);
    } return false;
}
function doActions$0() {
    console.log('beep');
    console.log('beep');
}
function doTrans$0(state, event) {
    if ('close' === event) {
        state.current = 'closed';
        doActions$0();
        return true;
    }
    return false;
}
function handleState$0(state, event) {
    if ('opened' === state.current) {
        return doTrans$0(state, event);
    } return false;
}
function run(state, event) {
    console.log({ offset: 37, length: 38 });
    if (handleState(state, event)) {
        return;
    }
    console.log({ offset: 78, length: 39 });
    if (handleState$0(state, event)) {
        return;
    }
}

export {run$0};