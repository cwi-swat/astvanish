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
function Eval$2(env) {
    var result;
    result = Eval(env) - Eval$0(env);
    return result;
}
function Eval$3(env) {
    var result;
    var args = [];
    args.push(Eval$2(env));
    result = env['factorial'](args);
    return result;
}
function Eval$4(env) {
    var result;
    result = Eval(env) * Eval$3(env);
    return result;
}
function Eval$5(env) {
    var result;
    result = Eval$1(env) ? Eval$4(env) : Eval$0(env);
    return result;
}
function Eval$6(env) {
    var result;
    result = env['x'];
    return result;
}
function Eval$7(env) {
    var result;
    var args = [];
    args.push(Eval$6(env)); args.push(Eval$2(env));
    result = env['power'](args);
    return result;
}
function Eval$8(env) {
    var result;
    result = Eval$6(env) * Eval$7(env);
    return result;
}
function Eval$9(env) {
    var result;
    result = Eval$1(env) ? Eval$8(env) : Eval(env);
    return result;
}
function Eval$10(env) {
    var result;
    result = parseInt('2');
    return result;
}
function Eval$11(env) {
    var result;
    result = parseInt('3');
    return result;
}
function Eval$12(env) {
    var result;
    var args = [];
    args.push(Eval$10(env)); args.push(Eval$11(env));
    result = env['power'](args);
    return result;
}
function Eval$13(env) {
    var result;
    var args = [];
    args.push(Eval$12(env));
    result = env['factorial'](args);
    return result;
}
function Run() {
    var env = {};
    env['factorial'] = function (args) {
        var myEnv = Object.assign({}, env);
        myEnv['n'] = args.shift();
        return Eval$5(myEnv);
    }; env['power'] = function (args) {
        var myEnv = Object.assign({}, env);
        myEnv['x'] = args.shift();
        myEnv['n'] = args.shift();
        return Eval$9(myEnv);
    };
    return Eval$13(env);
}