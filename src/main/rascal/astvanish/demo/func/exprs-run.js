export {run$0 as run};
function eve$0(env) {
  return env['n'];
}
function eve$1(env) {
  return parseInt('1');
}
function eve$2(env) {
  return eve$0(env) <= eve$1(env);
}
function eve$3(env) {
  return eve$0(env) - eve$1(env);
}
function eve$4(env) {
  var args = [];
  args.push(eve$3(env)); 
  return env['fact'](args);
}
function eve$5(env) {
  return eve$0(env) * eve$4(env);
}
function eve$6(env) {
  return eve$2(env) ? eve$1(env) : eve$5(env);
}
function eve$7(env) {
  return env['b'];
}
function eve$8(env) {
  return parseInt('0');
}
function eve$9(env) {
  return eve$7(env) === eve$8(env);
}
function eve$10(env) {
  return env['a'];
}
function eve$11(env) {
  return eve$10(env) % eve$7(env);
}
function eve$12(env) {
  var args = [];
  args.push(eve$7(env));
args.push(eve$11(env)); 
  return env['gcd'](args);
}
function eve$13(env) {
  return eve$9(env) ? eve$10(env) : eve$12(env);
}
function eve$14(env) {
  return env['x'];
}
function eve$15(env) {
  return env['y'];
}
function eve$16(env) {
  return eve$14(env) + eve$15(env);
}
function eve$17(env) {
  return eve$14(env) - eve$15(env);
}
function eve$18(env) {
  return eve$17(env);
}
function eve$19(env) {
  return parseInt('2');
}
function eve$20(env) {
  return Math.trunc(eve$18(env) / eve$19(env));
}
function eve$21(env) {
  return env['s'];
}
function eve$22(env) {
  return parseInt('10');
}
function eve$23(env) {
  return eve$21(env) >= eve$22(env);
}
function eve$24(env) {
  return eve$23(env);
}
function eve$25(env) {
  return !eve$24(env);
}
function eve$26(env) {
  return eve$14(env) !== eve$15(env);
}
function eve$27(env) {
  return -eve$14(env);
}
function eve$28(env) {
  return parseInt('3');
}
function eve$29(env) {
  return -eve$28(env);
}
function eve$30(env) {
  return eve$29(env) + eve$8(env);
}
function eve$31(env) {
  return eve$27(env) < eve$30(env);
}
function eve$32(env) {
  return eve$26(env) && eve$31(env);
}
function eve$33(env) {
  return eve$25(env) || eve$32(env);
}
function eve$34(env) {
  return env['d'];
}
function eve$35(env) {
  return eve$21(env) * eve$34(env);
}
function eve$36(env) {
  return eve$14(env) % eve$28(env);
}
function eve$37(env) {
  return eve$35(env) - eve$36(env);
}
function eve$38(env) {
  var args = [];
  args.push(eve$14(env));
args.push(eve$15(env)); 
  return env['gcd'](args);
}
function eve$39(env) {
  return parseInt('5');
}
function eve$40(env) {
  var args = [];
  args.push(eve$39(env)); 
  return env['fact'](args);
}
function eve$41(env) {
  return eve$38(env) + eve$40(env);
}
function eve$42(env) {
  return eve$33(env) ? eve$37(env) : eve$41(env);
}
function eve$43(env) {
  var letEnv = Object.assign({}, env);
            letEnv['d'] = eve$20(env);
            return eve$42(letEnv);
}
function eve$44(env) {
  var letEnv = Object.assign({}, env);
            letEnv['s'] = eve$16(env);
            return eve$43(letEnv);
}
function eve$45(env) {
  return eve$10(env) > eve$8(env);
}
function eve$46(env) {
  return eve$45(env) === true;
}
function eve$47(env) {
  return eve$10(env) < eve$8(env);
}
function eve$48(env) {
  return eve$47(env);
}
function eve$49(env) {
  return false !== eve$48(env);
}
function eve$50(env) {
  return eve$46(env) && eve$49(env);
}
function eve$51(env) {
  return eve$50(env) ? eve$1(env) : eve$8(env);
}
function eve$52(env) {
  var args = [];
  args.push(eve$14(env));
args.push(eve$15(env)); 
  return env['test'](args);
}
function eve$53(env) {
  return parseInt('1000');
}
function eve$54(env) {
  return eve$52(env) * eve$53(env);
}
function eve$55(env) {
  var args = [];
  args.push(eve$14(env)); 
  return env['bools'](args);
}
function eve$56(env) {
  return parseInt('100');
}
function eve$57(env) {
  return eve$55(env) * eve$56(env);
}
function eve$58(env) {
  return eve$54(env) + eve$57(env);
}
function eve$59(env) {
  return parseInt('7');
}
function eve$60(env) {
  return eve$14(env) * eve$59(env);
}
function eve$61(env) {
  return eve$15(env) * eve$59(env);
}
function eve$62(env) {
  var args = [];
  args.push(eve$60(env));
args.push(eve$61(env)); 
  return env['gcd'](args);
}
function eve$63(env) {
  return eve$58(env) + eve$62(env);
}
function eve$64(env) {
  return Math.trunc(eve$14(env) / eve$15(env));
}
function eve$65(env) {
  return eve$64(env);
}
function eve$66(env) {
  return eve$63(env) - eve$65(env);
}
function eve$67(env) {
  return eve$27(env) % eve$15(env);
}
function eve$68(env) {
  return eve$67(env);
}
function eve$69(env) {
  return eve$66(env) - eve$68(env);
}
function run$0(args) {
  var env = {}; 
  env['fact'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  return eve$6(myEnv);
};
env['gcd'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['a'] = args.shift(); 
  myEnv['b'] = args.shift(); 
  return eve$13(myEnv);
};
env['test'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['x'] = args.shift(); 
  myEnv['y'] = args.shift(); 
  return eve$44(myEnv);
};
env['bools'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['a'] = args.shift(); 
  return eve$51(myEnv);
};
env['main'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['x'] = args.shift(); 
  myEnv['y'] = args.shift(); 
  return eve$69(myEnv);
}; 
  return env['main'](args.slice());
}