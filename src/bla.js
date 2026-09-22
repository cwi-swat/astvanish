function Eval(env) {
    var result;
    result = env['n'];
    return result;
}
function Eval$0(env) {
    var result;
    result = parseInt('1');
    return result;
}
function Eval$1(env) {
    var result;
    result = Eval(env) > Eval$0(env);
    return result;
}
function Eval$2() {
    var result;
    result = 7['n'];
    return result;
}
function Eval$3() {
    var result;
    result = parseInt('1');
    return result;
}
function Eval$4() {
    var result;
    result = Eval$2() - Eval$3();
    return result;
}
function Eval$5() {
    var result;
    var args = [];
    args.push(Eval$4());
    result = 7['factorial'](args);
    return result;
}
function Eval$6(env) {
    var result;
    result = Eval(env) * Eval$5();
    return result;
}
function Eval$7(env) {
    var result;
    result = Eval$1(env) ? Eval$6(env) : Eval$0(env);
    return result;
}
function Eval$8(env) {
    var result;
    result = env['x'];
    return result;
}
function Eval$9() {
    var result;
    result = 7['x'];
    return result;
}
function Eval$10() {
    var result;
    var args = [];
    args.push(Eval$9()); args.push(Eval$4());
    result = 7['power'](args);
    return result;
}
function Eval$11(env) {
    var result;
    result = Eval$8(env) * Eval$10();
    return result;
}
function Eval$12(env) {
    var result;
    result = Eval$1(env) ? Eval$11(env) : Eval(env);
    return result;
}
function Eval$13(env) {
    var result;
    result = parseInt('2');
    return result;
}
function Eval$14(env) {
    var result;
    result = parseInt('3');
    return result;
}
function Eval$15(env) {
    var result;
    var args = [];
    args.push(Eval$13(env)); args.push(Eval$14(env));
    result = env['power'](args);
    return result;
}
function Eval$16(env) {
    var result;
    var args = [];
    args.push(Eval$15(env));
    result = env['factorial'](args);
    return result;
}
function Run() {
    var env = {};
    env['factorial'] = function (args) {
        var myEnv = Object.assign({}, env);
        myEnv['n'] = args.shift();
        return Eval$7(myEnv);
    }; env['power'] = function (args) {
        var myEnv = Object.assign({}, env);
        myEnv['x'] = args.shift();
        myEnv['n'] = args.shift();
        return Eval$12(myEnv);
    };
    return Eval$16(env);
}