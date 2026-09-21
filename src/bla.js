

function Eval(env) {
    var result;
    result = env['n'];
    console.log('CODE = n');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$0(env) {
    var result;
    result = parseInt('1');
    console.log('CODE = 1');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$1(env) {
    var result;
    result = Eval(env) > Eval$0(env);
    console.log('CODE = n > 1');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$2(env) {
    var result;
    result = Eval(env) - Eval$0(env);
    console.log('CODE = n - 1');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$3(env) {
    var result;
    var args = [];
    args.push(Eval$2(env));
    result = env['factorial'](args);
    console.log('CODE = factorial(n - 1)');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$4(env) {
    var result;
    result = Eval(env) * Eval$3(env);
    console.log('CODE = n * factorial(n - 1)');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$5(env) {
    var result;
    result = Eval$1(env) ? Eval$4(env) : Eval$0(env);
    console.log('CODE = if n > 1 then\n        n * factorial(n - 1)\n   else\n        1\n   fi');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$6(env) {
    var result;
    result = env['x'];
    console.log('CODE = x');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$7(env) {
    var result;
    var args = [];
    args.push(Eval$6(env)); args.push(Eval$2(env));
    result = env['power'](args);
    console.log('CODE = power(x, n - 1)');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$8(env) {
    var result;
    result = Eval$6(env) * Eval$7(env);
    console.log('CODE = x * power(x, n - 1)');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$9(env) {
    var result;
    result = Eval$1(env) ? Eval$8(env) : Eval(env);
    console.log('CODE = if n > 1 then\n     x * power(x, n - 1)\n  else \n     n\n  fi');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$10(env) {
    var result;
    result = parseInt('2');
    console.log('CODE = 2');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$11(env) {
    var result;
    result = parseInt('3');
    console.log('CODE = 3');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$12(env) {
    var result;
    var args = [];
    args.push(Eval$10(env)); args.push(Eval$11(env));
    result = env['power'](args);
    console.log('CODE = power(2, 3)');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
    return result;
}
function Eval$13(env) {
    var result;
    var args = [];
    args.push(Eval$12(env));
    result = env['factorial'](args);
    console.log('CODE = factorial(power(2, 3))');
    console.log("ENV = " + JSON.stringify(env));
    console.log('RESULT = ' + result);
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

console.log(Run());