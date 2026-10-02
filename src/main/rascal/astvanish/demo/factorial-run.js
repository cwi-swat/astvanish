function eval_(env) {
    var result;
    result = env['n'];
    return result;
}
function eval$0(env) {
    var result;
    result = parseInt('1');
    return result;
}
function eval$1(env) {
    var result;
    result = eval_(env) > eval$0(env);
    return result;
}
function eval$2(env) {
    var result;
    result = eval_(env) - eval$0(env);
    return result;
}
function eval$3(env) {
    var result;
    var args = [];
    args.push(eval$2(env));
    result = env['factorial'](args);
    return result;
}
function eval$4(env) {
    var result;
    result = eval_(env) * eval$3(env);
    return result;
}
function eval$5(env) {
    var result;
    result = eval$1(env) ? eval$4(env) : eval$0(env);
    return result;
}
function eval$6(env) {
    var result;
    result = env['x'];
    return result;
}
function eval$7(env) {
    var result;
    var args = [];
    args.push(eval$6(env));
    args.push(eval$2(env));
    result = env['power'](args);
    return result;
}
function eval$8(env) {
    var result;
    result = eval$6(env) * eval$7(env);
    return result;
}
function eval$9(env) {
    var result;
    result = eval$1(env) ? eval$8(env) : eval_(env);
    return result;
}
function eval$10(env) {
    var result;
    result = parseInt('2');
    return result;
}
function eval$11(env) {
    var result;
    result = parseInt('3');
    return result;
}
function eval$12(env) {
    var result;
    var args = [];
    args.push(eval$10(env));
    args.push(eval$11(env));
    result = env['power'](args);
    return result;
}
function eval$13(env) {
    var result;
    var args = [];
    args.push(eval$12(env));
    result = env['factorial'](args);
    return result;
}
function run() {
    var env = {};
    env['factorial'] = function (args) {
        var myEnv = Object.assign({}, env);
        myEnv['n'] = args.shift();
        return eval$5(myEnv);
    };
    env['power'] = function (args) {
        var myEnv = Object.assign({}, env);
        myEnv['x'] = args.shift();
        myEnv['n'] = args.shift();
        return eval$9(myEnv);
    };
    return eval$13(env);
}