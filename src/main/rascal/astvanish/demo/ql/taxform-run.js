export {run$0 as run};
function initializeQuestion$0(env) {
  env['hasBoughtHouse'] = false;
}
function initializeQuestion$1(env) {
  env['hasMaintLoan'] = false;
}
function initializeQuestion$2(env) {
  env['hasSoldHouse'] = false;
}
function initializeQuestion$3(env) {
  env['sellingPrice'] = 0;
}
function initializeQuestion$4(env) {
  env['privateDebt'] = 0;
}
function initializeQuestion$5(env) {
  env['valueResidue'] = 0;
}
function initializeQuestion$6(env) {
  initializeQuestion$3(env); 
  initializeQuestion$4(env); 
  initializeQuestion$5(env);
}
function initializeQuestion$7(env) {
  initializeQuestion$6(env);
}
function initialize$0(env) {
  initializeQuestion$0(env);
initializeQuestion$1(env);
initializeQuestion$2(env);
initializeQuestion$7(env);
}
function widget$0(env, func) {
  page.append('"Did you buy a house in 2010?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['hasBoughtHouse']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$0(env) {
  widget$0(env, function (x) { update('hasBoughtHouse', x.value); });
}
function widget$1(env, func) {
  page.append('"Did you enter a loan?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['hasMaintLoan']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$1(env) {
  widget$1(env, function (x) { update('hasMaintLoan', x.value); });
}
function widget$2(env, func) {
  page.append('"Did you sell a house in 2010?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['hasSoldHouse']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$2(env) {
  widget$2(env, function (x) { update('hasSoldHouse', x.value); });
}
function widget$3(env, func) {
  page.append('"What was the selling price?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['sellingPrice']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$3(env) {
  widget$3(env, function (x) { update('sellingPrice', x.value); });
}
function widget$4(env, func) {
  page.append('"Private debts for the sold house:"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['privateDebt']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$4(env) {
  widget$4(env, function (x) { update('privateDebt', x.value); });
}
function widget$5(env) {
  page.append('"Value residue:"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['valueResidue']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$5(env) {
  widget$5(env);
}
function renderQuestion$6(env) {
  renderQuestion$3(env); 
  renderQuestion$4(env); 
  renderQuestion$5(env);
}
function renderQuestion$7(env) {
  renderQuestion$6(env);
}
function render$0(env) {
  renderQuestion$0(env);
renderQuestion$1(env);
renderQuestion$2(env);
renderQuestion$7(env);
}
function updateVisibility$0(vis, env) {
  var elt = getElementById('hasBoughtHouse-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$1(vis, env) {
  var elt = getElementById('hasMaintLoan-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$2(vis, env) {
  var elt = getElementById('hasSoldHouse-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function eve$0(env) {
  return env['hasSoldHouse'];
}
function updateVisibility$3(vis, env) {
  var elt = getElementById('sellingPrice-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$4(vis, env) {
  var elt = getElementById('privateDebt-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$5(vis, env) {
  var elt = getElementById('valueResidue-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$6(vis, env) {
  updateVisibility$3(vis, env); 
  updateVisibility$4(vis, env); 
  updateVisibility$5(vis, env);
}
function updateVisibility$7(vis, env) {
  updateVisibility$6(eve$0(env), env);
}
function eve$1(env) {
  return env['sellingPrice'];
}
function eve$2(env) {
  return env['privateDebt'];
}
function eve$3(env) {
  return eve$1(env) - eve$2(env);
}
function updateValue$0(val) {
  var elt = getElementById('valueResidue-widget'); 
  elt.value = val;
}
function computeQuestion$0(env) {
  var val = eve$3(env);
            if (val !== env['valueResidue']) {
   env['valueResidue'] = val;
                updateValue$0(val);
                return true;
}
}
function computeQuestion$1(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || computeQuestion$0(env); 
  return change;
}
function computeQuestion$2(env) {
  if (eve$0(env)) {
   return computeQuestion$1(env);
}
}
function compute$0(env) {
  return function (x, val) {
  env[x] = val;
            do {
  var change = false;
  change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$2(env);
}
            while (change);
            var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$7(vis, env);
};
}
function run$0() {
  var env = {};
    initialize$0(env);
    render$0(env);
    var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$7(vis, env); 
  update = compute$0(env);
}