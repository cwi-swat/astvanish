function eval_(env) {return env['n'];}
function eval$0(env) {return parseInt('1');}
function eval$1(env) {return eval_(env) > eval$0(env);}
function eval$2(env) {return eval_(env) - eval$0(env);}
function eval$3(env) {var args = [];
args.push(eval$2(env)); 
return env['factorial'](args);}
function eval$4(env) {return eval_(env) * eval$3(env);}
function eval$5(env) {return eval$1(env) ? eval$4(env) : eval$0(env);}
function eval$6(env) {return env['x'];}
function eval$7(env) {var args = [];
args.push(eval$6(env));
args.push(eval$2(env)); 
return env['power'](args);}
function eval$8(env) {return eval$6(env) * eval$7(env);}
function eval$9(env) {return eval$1(env) ? eval$8(env) : eval_(env);}
function eval$10(env) {return parseInt('2');}
function eval$11(env) {return parseInt('3');}
function eval$12(env) {var args = [];
args.push(eval$10(env));
args.push(eval$11(env)); 
return env['power'](args);}
function eval$13(env) {var args = [];
args.push(eval$12(env)); 
return env['factorial'](args);}
function run() {var env = {}; 
env['factorial'] = function (args) {var myEnv = Object.assign({}, env); 
myEnv['n'] = args.shift(); 
return eval$5(myEnv);};
env['power'] = function (args) {var myEnv = Object.assign({}, env); 
myEnv['x'] = args.shift(); 
myEnv['n'] = args.shift(); 
return eval$9(myEnv);}; 
return eval$13(env);}