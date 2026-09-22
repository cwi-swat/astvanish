function Eval(env) {
    var result;
    result = env['n'];
    console.log({ offset: 578, length: 1 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$0(env) {
    var result;
    result = parseInt('1');
    console.log({ offset: 583, length: 1 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$1(env) {
    var result;
    result = Eval(env) > Eval$0(env);
    console.log({ offset: 578, length: 5 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$2(env) {
    var result;
    result = Eval(env) - Eval$0(env);
    console.log({ offset: 613, length: 5 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$3(env) {
    var result;
    var args = [];
    args.push(Eval$2(env));
    result = env['factorial'](args);
    console.log({ offset: 603, length: 16 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$4(env) {
    var result;
    result = Eval(env) * Eval$3(env);
    console.log({ offset: 599, length: 20 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$5(env) {
    var result;
    result = Eval$1(env) ? Eval$4(env) : Eval$0(env);
    console.log({ offset: 575, length: 66 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$6(env) {
    var result;
    result = env['x'];
    console.log({ offset: 693, length: 1 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$7(env) {
    var result;
    var args = [];
    args.push(Eval$6(env)); args.push(Eval$2(env));
    result = env['power'](args);
    console.log({ offset: 697, length: 15 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$8(env) {
    var result;
    result = Eval$6(env) * Eval$7(env);
    console.log({ offset: 693, length: 19 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$9(env) {
    var result;
    result = Eval$1(env) ? Eval$8(env) : Eval(env);
    console.log({ offset: 672, length: 58 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$10(env) {
    var result;
    result = parseInt('2');
    console.log({ offset: 755, length: 1 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$11(env) {
    var result;
    result = parseInt('3');
    console.log({ offset: 758, length: 1 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$12(env) {
    var result;
    var args = [];
    args.push(Eval$10(env)); args.push(Eval$11(env));
    result = env['power'](args);
    console.log({ offset: 749, length: 11 });
    console.log(env);
    console.log(result);
    return result;
}
function Eval$13(env) {
    var result;
    var args = [];
    args.push(Eval$12(env));
    result = env['factorial'](args);
    console.log({ offset: 739, length: 22 });
    console.log(env);
    console.log(result);
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