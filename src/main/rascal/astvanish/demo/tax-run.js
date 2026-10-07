function initializeQuestion(env) {
    env['hasBoughtHouse'] = false;
}
function initializeQuestion$0(env) {
    env['hasMaintLoan'] = false;
}
function initializeQuestion$1(env) {
    env['hasSoldHouse'] = false;
}
function initializeQuestion$2(env) {
    env['sellingPrice'] = 0;
}
function initializeQuestion$3(env) {
    env['privateDebt'] = 0;
}
function initializeQuestion$4(env) {
    env['valueResidue'] = 0;
}
function initializeQuestion$5(env) {
    initializeQuestion$2(env);
    initializeQuestion$3(env);
    initializeQuestion$4(env);
}
function initializeQuestion$6(env) {
    initializeQuestion$5(env);
}
function initialize(env) {
    initializeQuestion(env);
    initializeQuestion$0(env);
    initializeQuestion$1(env);
    initializeQuestion$6(env);
}
function widget(env, func) {
    page.append('"Did you buy a house in 2010?"');
    var elt = createElement("input");
    elt.setAttribute("type", "checkbox");
    elt.checked = env['hasBoughtHouse'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion(env) {
    widget(env, function (x) { update('hasBoughtHouse', x.value); });
}
function widget$0(env, func) {
    page.append('"Did you enter a loan?"');
    var elt = createElement("input");
    elt.setAttribute("type", "checkbox");
    elt.checked = env['hasMaintLoan'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$0(env) {
    widget$0(env, function (x) { update('hasMaintLoan', x.value); });
}
function widget$1(env, func) {
    page.append('"Did you sell a house in 2010?"');
    var elt = createElement("input");
    elt.setAttribute("type", "checkbox");
    elt.checked = env['hasSoldHouse'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$1(env) {
    widget$1(env, function (x) { update('hasSoldHouse', x.value); });
}
function eve(env) {
    return env['hasSoldHouse'];
}
function widget$2(env, func) {
    page.append('"What was the selling price?"');
    var elt = createElement("input");
    elt.setAttribute("type", "number");
    elt.value = env['sellingPrice'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$2(env) {
    widget$2(env, function (x) { update('sellingPrice', x.value); });
}
function widget$3(env, func) {
    page.append('"Private debts for the sold house:"');
    var elt = createElement("input");
    elt.setAttribute("type", "number");
    elt.value = env['privateDebt'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$3(env) {
    widget$3(env, function (x) { update('privateDebt', x.value); });
}
function widget$4(env) {
    page.append('"Value residue:"');
    var elt = createElement("input");
    elt.setAttribute("type", "number");
    elt.value = env['valueResidue'];
    page.append(elt);
    elt.disabled = true;
}
function renderQuestion$4(env) {
    widget$4(env);
}
function renderQuestion$5(env) {
    renderQuestion$2(env);
    renderQuestion$3(env);
    renderQuestion$4(env);
}
function renderQuestion$6(env) {
    if (eve(env)) {
        renderQuestion$5(env);
    }
}
function render(env) {
    renderQuestion(env);
    renderQuestion$0(env);
    renderQuestion$1(env);
    renderQuestion$6(env);
}
function eve$0(env) {
    return env['sellingPrice'];
}
function eve$1(env) {
    return env['privateDebt'];
}
function eve$2(env) {
    return eve$0(env) - eve$1(env);
}
function computeQuestion(env) {
    var val = eve$2(env);
    if (val !== env['valueResidue']) {
        env['valueResidue'] = val;
        return true;
    }
}
function computeQuestion$0(env) {
    var change = false;
    change = change || false;
    change = change || false;
    change = change || computeQuestion(env);
    return change;
}
function computeQuestion$1(env) {
    if (eve(env)) {
        return computeQuestion$0(env);
    }
}
function compute(env) {
    return function (x, val) {
        env[x] = val;
        do {
            var change = false;
            change = change || false;
            change = change || false;
            change = change || false;
            change = change || computeQuestion$1(env);
        }
        while (change);
    };
}
function run() {
    var env = {};
    initialize(env);
    render(env);
    update = compute(env);
}