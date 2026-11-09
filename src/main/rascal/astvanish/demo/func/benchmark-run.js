export {run$0 as run};
function eve$0(env) {
  return env['n'];
}
function eve$1(env) {
  return parseInt('2');
}
function eve$2(env) {
  return eve$0(env) < eve$1(env);
}
function eve$3(env) {
  return parseInt('1');
}
function eve$4(env) {
  return eve$0(env) - eve$3(env);
}
function eve$5(env) {
  var args = [];
  args.push(eve$4(env)); 
  return env['fib'](args);
}
function eve$6(env) {
  return eve$0(env) - eve$1(env);
}
function eve$7(env) {
  var args = [];
  args.push(eve$6(env)); 
  return env['fib'](args);
}
function eve$8(env) {
  return eve$5(env) + eve$7(env);
}
function eve$9(env) {
  return eve$2(env) ? eve$0(env) : eve$8(env);
}
function eve$10(env) {
  return env['y'];
}
function eve$11(env) {
  return env['x'];
}
function eve$12(env) {
  return eve$10(env) < eve$11(env);
}
function eve$13(env) {
  return eve$12(env);
}
function eve$14(env) {
  return !eve$13(env);
}
function eve$15(env) {
  return env['z'];
}
function eve$16(env) {
  return eve$11(env) - eve$3(env);
}
function eve$17(env) {
  var args = [];
  args.push(eve$16(env));
args.push(eve$10(env));
args.push(eve$15(env)); 
  return env['tak'](args);
}
function eve$18(env) {
  return eve$10(env) - eve$3(env);
}
function eve$19(env) {
  var args = [];
  args.push(eve$18(env));
args.push(eve$15(env));
args.push(eve$11(env)); 
  return env['tak'](args);
}
function eve$20(env) {
  return eve$15(env) - eve$3(env);
}
function eve$21(env) {
  var args = [];
  args.push(eve$20(env));
args.push(eve$11(env));
args.push(eve$10(env)); 
  return env['tak'](args);
}
function eve$22(env) {
  var args = [];
  args.push(eve$17(env));
args.push(eve$19(env));
args.push(eve$21(env)); 
  return env['tak'](args);
}
function eve$23(env) {
  return eve$14(env) ? eve$15(env) : eve$22(env);
}
function eve$24(env) {
  return eve$0(env) === eve$3(env);
}
function eve$25(env) {
  return env['steps'];
}
function eve$26(env) {
  return eve$0(env) % eve$1(env);
}
function eve$27(env) {
  return parseInt('0');
}
function eve$28(env) {
  return eve$26(env) === eve$27(env);
}
function eve$29(env) {
  return Math.trunc(eve$0(env) / eve$1(env));
}
function eve$30(env) {
  return eve$25(env) + eve$3(env);
}
function eve$31(env) {
  var args = [];
  args.push(eve$29(env));
args.push(eve$30(env)); 
  return env['collatz'](args);
}
function eve$32(env) {
  return parseInt('3');
}
function eve$33(env) {
  return eve$32(env) * eve$0(env);
}
function eve$34(env) {
  return eve$33(env) + eve$3(env);
}
function eve$35(env) {
  var args = [];
  args.push(eve$34(env));
args.push(eve$30(env)); 
  return env['collatz'](args);
}
function eve$36(env) {
  return eve$28(env) ? eve$31(env) : eve$35(env);
}
function eve$37(env) {
  return eve$24(env) ? eve$25(env) : eve$36(env);
}
function eve$38(env) {
  return env['d'];
}
function eve$39(env) {
  return eve$38(env) * eve$38(env);
}
function eve$40(env) {
  return eve$39(env) > eve$0(env);
}
function eve$41(env) {
  return eve$0(env) % eve$38(env);
}
function eve$42(env) {
  return eve$41(env) !== eve$27(env);
}
function eve$43(env) {
  return eve$38(env) + eve$3(env);
}
function eve$44(env) {
  var args = [];
  args.push(eve$0(env));
args.push(eve$43(env)); 
  return env['noDivisor'](args);
}
function eve$45(env) {
  return eve$42(env) && eve$44(env);
}
function eve$46(env) {
  return eve$40(env) || eve$45(env);
}
function eve$47(env) {
  return eve$0(env) >= eve$1(env);
}
function eve$48(env) {
  var args = [];
  args.push(eve$0(env));
args.push(eve$1(env)); 
  return env['noDivisor'](args);
}
function eve$49(env) {
  return eve$47(env) && eve$48(env);
}
function eve$50(env) {
  return env['lo'];
}
function eve$51(env) {
  return env['hi'];
}
function eve$52(env) {
  return eve$50(env) >= eve$51(env);
}
function eve$53(env) {
  var args = [];
  args.push(eve$50(env));
args.push(eve$27(env)); 
  return env['collatz'](args);
}
function eve$54(env) {
  return eve$50(env) + eve$51(env);
}
function eve$55(env) {
  return eve$54(env);
}
function eve$56(env) {
  return Math.trunc(eve$55(env) / eve$1(env));
}
function eve$57(env) {
  return env['mid'];
}
function eve$58(env) {
  var args = [];
  args.push(eve$50(env));
args.push(eve$57(env)); 
  return env['sumCollatz'](args);
}
function eve$59(env) {
  return eve$57(env) + eve$3(env);
}
function eve$60(env) {
  var args = [];
  args.push(eve$59(env));
args.push(eve$51(env)); 
  return env['sumCollatz'](args);
}
function eve$61(env) {
  return eve$58(env) + eve$60(env);
}
function eve$62(env) {
  var letEnv = Object.assign({}, env);
            letEnv['mid'] = eve$56(env);
            return eve$61(letEnv);
}
function eve$63(env) {
  return eve$52(env) ? eve$53(env) : eve$62(env);
}
function eve$64(env) {
  var args = [];
  args.push(eve$50(env)); 
  return env['isPrime'](args);
}
function eve$65(env) {
  return eve$64(env) === true;
}
function eve$66(env) {
  return eve$65(env) ? eve$3(env) : eve$27(env);
}
function eve$67(env) {
  return eve$66(env);
}
function eve$68(env) {
  var args = [];
  args.push(eve$50(env));
args.push(eve$57(env)); 
  return env['countPrimes'](args);
}
function eve$69(env) {
  var args = [];
  args.push(eve$59(env));
args.push(eve$51(env)); 
  return env['countPrimes'](args);
}
function eve$70(env) {
  return eve$68(env) + eve$69(env);
}
function eve$71(env) {
  var letEnv = Object.assign({}, env);
            letEnv['mid'] = eve$56(env);
            return eve$70(letEnv);
}
function eve$72(env) {
  return eve$52(env) ? eve$67(env) : eve$71(env);
}
function eve$73(env) {
  return eve$11(env) <= eve$27(env);
}
function eve$74(env) {
  return -eve$11(env);
}
function eve$75(env) {
  return eve$73(env) ? eve$74(env) : eve$11(env);
}
function eve$76(env) {
  var args = [];
  args.push(eve$0(env)); 
  return env['fib'](args);
}
function eve$77(env) {
  return Math.trunc(eve$0(env) / eve$32(env));
}
function eve$78(env) {
  return parseInt('6');
}
function eve$79(env) {
  return Math.trunc(eve$0(env) / eve$78(env));
}
function eve$80(env) {
  var args = [];
  args.push(eve$29(env));
args.push(eve$77(env));
args.push(eve$79(env)); 
  return env['tak'](args);
}
function eve$81(env) {
  return eve$76(env) + eve$80(env);
}
function eve$82(env) {
  return parseInt('100');
}
function eve$83(env) {
  return eve$0(env) * eve$82(env);
}
function eve$84(env) {
  var args = [];
  args.push(eve$3(env));
args.push(eve$83(env)); 
  return env['sumCollatz'](args);
}
function eve$85(env) {
  var args = [];
  args.push(eve$3(env));
args.push(eve$83(env)); 
  return env['countPrimes'](args);
}
function eve$86(env) {
  return eve$84(env) - eve$85(env);
}
function eve$87(env) {
  return env['arith'];
}
function eve$88(env) {
  return env['calls'];
}
function eve$89(env) {
  return eve$87(env) - eve$88(env);
}
function eve$90(env) {
  var args = [];
  args.push(eve$89(env)); 
  return env['abs'](args);
}
function eve$91(env) {
  return parseInt('1000000');
}
function eve$92(env) {
  return eve$90(env) % eve$91(env);
}
function eve$93(env) {
  var letEnv = Object.assign({}, env);
            letEnv['arith'] = eve$86(env);
            return eve$92(letEnv);
}
function eve$94(env) {
  var letEnv = Object.assign({}, env);
            letEnv['calls'] = eve$81(env);
            return eve$93(letEnv);
}
function run$0(args) {
  var env = {}; 
  env['fib'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  return eve$9(myEnv);
};
env['tak'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['x'] = args.shift(); 
  myEnv['y'] = args.shift(); 
  myEnv['z'] = args.shift(); 
  return eve$23(myEnv);
};
env['collatz'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  myEnv['steps'] = args.shift(); 
  return eve$37(myEnv);
};
env['noDivisor'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  myEnv['d'] = args.shift(); 
  return eve$46(myEnv);
};
env['isPrime'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  return eve$49(myEnv);
};
env['sumCollatz'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['lo'] = args.shift(); 
  myEnv['hi'] = args.shift(); 
  return eve$63(myEnv);
};
env['countPrimes'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['lo'] = args.shift(); 
  myEnv['hi'] = args.shift(); 
  return eve$72(myEnv);
};
env['abs'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['x'] = args.shift(); 
  return eve$75(myEnv);
};
env['bench'] = function (args) {
  var myEnv = Object.assign({}, env); 
  myEnv['n'] = args.shift(); 
  return eve$94(myEnv);
}; 
  return env['bench'](args.slice());
}