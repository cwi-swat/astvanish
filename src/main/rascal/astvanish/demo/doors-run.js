export { run$0 as run };
function doActions$0() {
  console.log('print');
}
function doTrans$0(state, event) {
  if ('open' === event) {
    state.current = 'opened';
    doActions$0();
    return true;
  }
  return false;
}
function handleState$0(state, event) {
  if ('closed' === state.current) {
    return doTrans$0(state, event);
  } return false;
}
function doActions$1() {
  console.log('beep');
  console.log('beep');
}
function doTrans$1(state, event) {
  if ('close' === event) {
    state.current = 'closed';
    doActions$1();
    return true;
  }
  return false;
}
function handleState$1(state, event) {
  if ('opened' === state.current) {
    return doTrans$1(state, event);
  } return false;
}
function run$0(state, event) {
  console.log({ offset: 37, length: 38 });
  if (handleState$0(state, event)) {
    return;
  }
  console.log({ offset: 78, length: 39 });
  if (handleState$1(state, event)) {
    return;
  }
}