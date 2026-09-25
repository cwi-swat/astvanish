function defaultFor() { return false; }
function initializeQuestion(env) { env['hasBoughtHouse'] = defaultFor(); }
function initializeQuestion$0(env) { env['hasMaintLoan'] = defaultFor(); }
function initializeQuestion$1(env) { env['hasSoldHouse'] = defaultFor(); }
function defaultFor$0() { return 0; }
function initializeQuestion$2(env) { env['sellingPrice'] = defaultFor$0(); }
function initializeQuestion$3(env) { env['privateDebt'] = defaultFor$0(); }
function initializeQuestion$4(env) { env['valueResidue'] = defaultFor$0(); }
function initializeQuestion$5(env) {
    initializeQuestion$2(env);
    initializeQuestion$3(env);
    initializeQuestion$4(env);
}
function initializeQuestion$6(env) { initializeQuestion$5(env); }
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
function renderQuestion(env) { widget(env, function (x) { update('hasBoughtHouse', x.value); }); }
function widget$0(env, func) {
    page.append('"Did you enter a loan?"');
    var elt = createElement("input");
    elt.setAttribute("type", "checkbox");
    elt.checked = env['hasMaintLoan'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$0(env) { widget$0(env, function (x) { update('hasMaintLoan', x.value); }); }
function widget$1(env, func) {
    page.append('"Did you sell a house in 2010?"');
    var elt = createElement("input");
    elt.setAttribute("type", "checkbox");
    elt.checked = env['hasSoldHouse'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$1(env) { widget$1(env, function (x) { update('hasSoldHouse', x.value); }); }
function eval_(env) { return env['hasSoldHouse']; }
function widget$2(env, func) {
    page.append('"What was the selling price?"');
    var elt = createElement("input");
    elt.setAttribute("type", "number");
    elt.value = env['sellingPrice'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$2(env) { widget$2(env, function (x) { update('sellingPrice', x.value); }); }
function widget$3(env, func) {
    page.append('"Private debts for the sold house:"');
    var elt = createElement("input");
    elt.setAttribute("type", "number");
    elt.value = env['privateDebt'];
    page.append(elt);
    elt.onchange = func;
}
function renderQuestion$3(env) { widget$3(env, function (x) { update('privateDebt', x.value); }); }
function widget$4(env) {
    page.append('"Value residue:"');
    var elt = createElement("input");
    elt.setAttribute("type", "number");
    elt.value = env['valueResidue'];
    page.append(elt);
    elt.disabled = true;
}
function renderQuestion$4(env) { widget$4(env); }
function renderQuestion$5(env) {
    renderQuestion$2(env);
    renderQuestion$3(env);
    renderQuestion$4(env);
}
function renderQuestion$6(env) {
    if (eval_(env)) {
        renderQuestion$5(env);
    }
}
function render(env) {
    renderQuestion(env);
    renderQuestion$0(env);
    renderQuestion$1(env);
    renderQuestion$6(env);
}
function eval$0(env) { return env['sellingPrice']; }
function eval$1(env) { return env['privateDebt']; }
function eval$2(env) { return eval$0(env) - eval$1(env); }
function computeQuestion(env) {
    var val = eval$2(env);
    if (val !== env['valueResidue']) {
        change = true;
    }
}
function computeQuestion$0(env) {
    ;
    ;
    computeQuestion(env);
}
function computeQuestion$1(env) {
    if (eval_(env)) {
        computeQuestion$0(env);
    }
}
function compute(env) {
    return function (x, val) {
        env[x] = val;
        var change = false;
        do {
            ;
            ;
            ;
            computeQuestion$1(env);
        }
        while (change);
    };
}
function main() {
    var env = {};
    initialize(env);
    render(env);
    update = compute(env);
}