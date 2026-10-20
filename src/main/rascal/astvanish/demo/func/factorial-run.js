export {run$0 as run};
function eve$0(env) {
  return env['n'];
}
function eve$1(env) {
  return parseInt('1');
}
function eve$2(env) {
  return eve$0(env) > eve$1(env);
}
function eve$3(env) {
  return eve$0(env) - eve$1(env);
}
function eve$4(env) {
  var args = [];
  args.push(eve$3(env)); 
  return env['factorial'](args);
}
function eve$5(env) {
  return eve$0(env) * eve$4(env);
}
function eve$6(env) {
  return eve$2(env) ? eve$5(env) : eve$1(env);
}
function eve$7(env) {
  return parseInt('0');
}
function eve$8(env) {
  return eve$0(env) > eve$7(env);
}
function eve$9(env) {
  return env['x'];
}
function eve$10(env) {
  var args = [];
  args.push(eve$9(env));
args.push(eve$3(env)); 
  return env['power'](args);
}
function eve$11(env) {
  return eve$9(env) * eve$10(env);
}
function eve$12(env) {
  return eve$8(env) ? eve$11(env) : eve$1(env);
}
function run$0(args) {
  var env = {}; 
  env['factorial'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  return eve$6(myEnv);
};
env['power'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['x'] = args.shift(); 
  myEnv['n'] = args.shift(); 
  return eve$12(myEnv);
}; 
  return env['power'](args.slice());
}