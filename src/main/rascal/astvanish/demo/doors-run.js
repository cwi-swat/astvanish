function run(state, event) {
    console.log({ offset: 37, length: 38 });
    if ('closed' === state.current) {
        if ('open' === event) {
            state.current = 'opened';
        } return;
    }
    console.log({ offset: 78, length: 39 });
    if ('opened' === state.current) {
        if ('close' === event) {
            state.current = 'closed';
        } return;
    }
}