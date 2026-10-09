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
function eve$0(env) {
  return env['hasSoldHouse'];
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
  var elt = document.getElementById('valueResidue-widget'); 
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
function updateVisibility$0(vis, env) {
  var elt = document.getElementById('hasBoughtHouse-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$1(vis, env) {
  var elt = document.getElementById('hasMaintLoan-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$2(vis, env) {
  var elt = document.getElementById('hasSoldHouse-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$3(vis, env) {
  var elt = document.getElementById('sellingPrice-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$4(vis, env) {
  var elt = document.getElementById('privateDebt-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$5(vis, env) {
  var elt = document.getElementById('valueResidue-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$6(vis, env) {
  updateVisibility$3(vis, env); 
  updateVisibility$4(vis, env); 
  updateVisibility$5(vis, env);
}
function updateVisibility$7(vis, env) {
  updateVisibility$6(eve$0(env), env);
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
function widget$0(env, func) {
  var div = document.createElement('div');
    div.id = 'hasBoughtHouse-div';
    div.appendChild(document.createTextNode('"Did you buy a house in 2010?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasBoughtHouse-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasBoughtHouse']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$0(env, upd) {
  widget$0(env, function (x) {
  upd('hasBoughtHouse', x.target.checked);
});
}
function widget$1(env, func) {
  var div = document.createElement('div');
    div.id = 'hasMaintLoan-div';
    div.appendChild(document.createTextNode('"Did you enter a loan?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasMaintLoan-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasMaintLoan']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$1(env, upd) {
  widget$1(env, function (x) {
  upd('hasMaintLoan', x.target.checked);
});
}
function widget$2(env, func) {
  var div = document.createElement('div');
    div.id = 'hasSoldHouse-div';
    div.appendChild(document.createTextNode('"Did you sell a house in 2010?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasSoldHouse-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasSoldHouse']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$2(env, upd) {
  widget$2(env, function (x) {
  upd('hasSoldHouse', x.target.checked);
});
}
function widget$3(env, func) {
  var div = document.createElement('div');
    div.id = 'sellingPrice-div';
    div.appendChild(document.createTextNode('"What was the selling price?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'sellingPrice-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['sellingPrice']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$3(env, upd) {
  widget$3(env, function (x) {
  upd('sellingPrice', x.target.value);
});
}
function widget$4(env, func) {
  var div = document.createElement('div');
    div.id = 'privateDebt-div';
    div.appendChild(document.createTextNode('"Private debts for the sold house:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'privateDebt-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['privateDebt']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$4(env, upd) {
  widget$4(env, function (x) {
  upd('privateDebt', x.target.value);
});
}
function widget$5(env) {
  var div = document.createElement('div');
    div.id = 'valueResidue-div';
    div.appendChild(document.createTextNode('"Value residue:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'valueResidue-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['valueResidue']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$5(env, upd) {
  widget$5(env);
}
function renderQuestion$6(env, upd) {
  renderQuestion$3(env, upd); 
  renderQuestion$4(env, upd); 
  renderQuestion$5(env, upd);
}
function renderQuestion$7(env, upd) {
  renderQuestion$6(env, upd);
}
function render$0(env, upd) {
  renderQuestion$0(env, upd);
renderQuestion$1(env, upd);
renderQuestion$2(env, upd);
renderQuestion$7(env, upd);
}
function run$0() {
  var env = {};
    initialize$0(env);

    var update = compute$0(env);
    render$0(env, update);
    var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$7(vis, env);
}