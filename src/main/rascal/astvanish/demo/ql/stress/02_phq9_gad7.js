export {run$0 as run};
function initializeQuestion$0(env) {
  env['patientId'] = '';
}
function initializeQuestion$1(env) {
  env['age'] = 0;
}
function initializeQuestion$2(env) {
  env['phq1'] = 0;
}
function initializeQuestion$3(env) {
  env['phq2'] = 0;
}
function initializeQuestion$4(env) {
  env['phq3'] = 0;
}
function initializeQuestion$5(env) {
  env['phq4'] = 0;
}
function initializeQuestion$6(env) {
  env['phq5'] = 0;
}
function initializeQuestion$7(env) {
  env['phq6'] = 0;
}
function initializeQuestion$8(env) {
  env['phq7'] = 0;
}
function initializeQuestion$9(env) {
  env['phq8'] = 0;
}
function initializeQuestion$10(env) {
  env['phq9'] = 0;
}
function initializeQuestion$11(env) {
  env['phq2Score'] = 0;
}
function initializeQuestion$12(env) {
  env['phq2Positive'] = false;
}
function initializeQuestion$13(env) {
  env['phqTotal'] = 0;
}
function initializeQuestion$14(env) {
  env['phqMinimal'] = false;
}
function initializeQuestion$15(env) {
  env['phqMild'] = false;
}
function initializeQuestion$16(env) {
  env['phqModerate'] = false;
}
function initializeQuestion$17(env) {
  env['phqModSevere'] = false;
}
function initializeQuestion$18(env) {
  env['phqSevere'] = false;
}
function initializeQuestion$19(env) {
  env['safetyAssessed'] = false;
}
function initializeQuestion$20(env) {
  env['safetyReason'] = '';
}
function initializeQuestion$21(env) {
  initializeQuestion$20(env);
}
function initializeQuestion$22(env) {
  initializeQuestion$21(env);
}
function initializeQuestion$23(env) {
  initializeQuestion$19(env); 
  initializeQuestion$22(env);
}
function initializeQuestion$24(env) {
  initializeQuestion$23(env);
}
function initializeQuestion$25(env) {
  env['phqDifficulty'] = 0;
}
function initializeQuestion$26(env) {
  initializeQuestion$25(env);
}
function initializeQuestion$27(env) {
  initializeQuestion$26(env);
}
function initializeQuestion$28(env) {
  env['gad1'] = 0;
}
function initializeQuestion$29(env) {
  env['gad2'] = 0;
}
function initializeQuestion$30(env) {
  env['gad3'] = 0;
}
function initializeQuestion$31(env) {
  env['gad4'] = 0;
}
function initializeQuestion$32(env) {
  env['gad5'] = 0;
}
function initializeQuestion$33(env) {
  env['gad6'] = 0;
}
function initializeQuestion$34(env) {
  env['gad7'] = 0;
}
function initializeQuestion$35(env) {
  env['gadTotal'] = 0;
}
function initializeQuestion$36(env) {
  env['gadMinimal'] = false;
}
function initializeQuestion$37(env) {
  env['gadMild'] = false;
}
function initializeQuestion$38(env) {
  env['gadModerate'] = false;
}
function initializeQuestion$39(env) {
  env['gadSevere'] = false;
}
function initializeQuestion$40(env) {
  env['refer'] = false;
}
function initializeQuestion$41(env) {
  env['referralTo'] = '';
}
function initializeQuestion$42(env) {
  env['referralUrgent'] = false;
}
function initializeQuestion$43(env) {
  initializeQuestion$41(env); 
  initializeQuestion$42(env);
}
function initializeQuestion$44(env) {
  initializeQuestion$43(env);
}
function initializeQuestion$45(env) {
  env['notes'] = '';
}
function initialize$0(env) {
  initializeQuestion$0(env);
initializeQuestion$1(env);
initializeQuestion$2(env);
initializeQuestion$3(env);
initializeQuestion$4(env);
initializeQuestion$5(env);
initializeQuestion$6(env);
initializeQuestion$7(env);
initializeQuestion$8(env);
initializeQuestion$9(env);
initializeQuestion$10(env);
initializeQuestion$11(env);
initializeQuestion$12(env);
initializeQuestion$13(env);
initializeQuestion$14(env);
initializeQuestion$15(env);
initializeQuestion$16(env);
initializeQuestion$17(env);
initializeQuestion$18(env);
initializeQuestion$24(env);
initializeQuestion$27(env);
initializeQuestion$28(env);
initializeQuestion$29(env);
initializeQuestion$30(env);
initializeQuestion$31(env);
initializeQuestion$32(env);
initializeQuestion$33(env);
initializeQuestion$34(env);
initializeQuestion$35(env);
initializeQuestion$36(env);
initializeQuestion$37(env);
initializeQuestion$38(env);
initializeQuestion$39(env);
initializeQuestion$40(env);
initializeQuestion$44(env);
initializeQuestion$45(env);
}
function eve$0(env) {
  return env['phq1'];
}
function eve$1(env) {
  return env['phq2'];
}
function eve$2(env) {
  return eve$0(env) + eve$1(env);
}
function updateValue$0(val) {
  var elt = document.getElementById('phq2Score-widget'); 
  elt.value = val;
}
function computeQuestion$0(env) {
  var val = eve$2(env);
            if (val !== env['phq2Score']) {
   env['phq2Score'] = val;
                updateValue$0(val);
                return true;
}
}
function eve$3(env) {
  return env['phq2Score'];
}
function eve$4(env) {
  return parseInt('3');
}
function eve$5(env) {
  return eve$3(env) >= eve$4(env);
}
function updateValue$1(val) {
  var elt = document.getElementById('phq2Positive-widget'); 
  elt.checked = val;
}
function computeQuestion$1(env) {
  var val = eve$5(env);
            if (val !== env['phq2Positive']) {
   env['phq2Positive'] = val;
                updateValue$1(val);
                return true;
}
}
function eve$6(env) {
  return env['phq3'];
}
function eve$7(env) {
  return eve$2(env) + eve$6(env);
}
function eve$8(env) {
  return env['phq4'];
}
function eve$9(env) {
  return eve$7(env) + eve$8(env);
}
function eve$10(env) {
  return env['phq5'];
}
function eve$11(env) {
  return eve$9(env) + eve$10(env);
}
function eve$12(env) {
  return env['phq6'];
}
function eve$13(env) {
  return eve$11(env) + eve$12(env);
}
function eve$14(env) {
  return env['phq7'];
}
function eve$15(env) {
  return eve$13(env) + eve$14(env);
}
function eve$16(env) {
  return env['phq8'];
}
function eve$17(env) {
  return eve$15(env) + eve$16(env);
}
function eve$18(env) {
  return env['phq9'];
}
function eve$19(env) {
  return eve$17(env) + eve$18(env);
}
function updateValue$2(val) {
  var elt = document.getElementById('phqTotal-widget'); 
  elt.value = val;
}
function computeQuestion$2(env) {
  var val = eve$19(env);
            if (val !== env['phqTotal']) {
   env['phqTotal'] = val;
                updateValue$2(val);
                return true;
}
}
function eve$20(env) {
  return env['phqTotal'];
}
function eve$21(env) {
  return parseInt('4');
}
function eve$22(env) {
  return eve$20(env) <= eve$21(env);
}
function updateValue$3(val) {
  var elt = document.getElementById('phqMinimal-widget'); 
  elt.checked = val;
}
function computeQuestion$3(env) {
  var val = eve$22(env);
            if (val !== env['phqMinimal']) {
   env['phqMinimal'] = val;
                updateValue$3(val);
                return true;
}
}
function eve$23(env) {
  return parseInt('5');
}
function eve$24(env) {
  return eve$20(env) >= eve$23(env);
}
function eve$25(env) {
  return parseInt('9');
}
function eve$26(env) {
  return eve$20(env) <= eve$25(env);
}
function eve$27(env) {
  return eve$24(env) && eve$26(env);
}
function updateValue$4(val) {
  var elt = document.getElementById('phqMild-widget'); 
  elt.checked = val;
}
function computeQuestion$4(env) {
  var val = eve$27(env);
            if (val !== env['phqMild']) {
   env['phqMild'] = val;
                updateValue$4(val);
                return true;
}
}
function eve$28(env) {
  return parseInt('10');
}
function eve$29(env) {
  return eve$20(env) >= eve$28(env);
}
function eve$30(env) {
  return parseInt('14');
}
function eve$31(env) {
  return eve$20(env) <= eve$30(env);
}
function eve$32(env) {
  return eve$29(env) && eve$31(env);
}
function updateValue$5(val) {
  var elt = document.getElementById('phqModerate-widget'); 
  elt.checked = val;
}
function computeQuestion$5(env) {
  var val = eve$32(env);
            if (val !== env['phqModerate']) {
   env['phqModerate'] = val;
                updateValue$5(val);
                return true;
}
}
function eve$33(env) {
  return parseInt('15');
}
function eve$34(env) {
  return eve$20(env) >= eve$33(env);
}
function eve$35(env) {
  return parseInt('19');
}
function eve$36(env) {
  return eve$20(env) <= eve$35(env);
}
function eve$37(env) {
  return eve$34(env) && eve$36(env);
}
function updateValue$6(val) {
  var elt = document.getElementById('phqModSevere-widget'); 
  elt.checked = val;
}
function computeQuestion$6(env) {
  var val = eve$37(env);
            if (val !== env['phqModSevere']) {
   env['phqModSevere'] = val;
                updateValue$6(val);
                return true;
}
}
function eve$38(env) {
  return parseInt('20');
}
function eve$39(env) {
  return eve$20(env) >= eve$38(env);
}
function updateValue$7(val) {
  var elt = document.getElementById('phqSevere-widget'); 
  elt.checked = val;
}
function computeQuestion$7(env) {
  var val = eve$39(env);
            if (val !== env['phqSevere']) {
   env['phqSevere'] = val;
                updateValue$7(val);
                return true;
}
}
function eve$40(env) {
  return parseInt('0');
}
function eve$41(env) {
  return eve$18(env) > eve$40(env);
}
function eve$42(env) {
  return env['safetyAssessed'];
}
function eve$43(env) {
  return !eve$42(env);
}
function computeQuestion$8(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$9(env) {
  if (eve$43(env)) {
   return computeQuestion$8(env);
}
}
function computeQuestion$10(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$9(env); 
  return change;
}
function computeQuestion$11(env) {
  if (eve$41(env)) {
   return computeQuestion$10(env);
}
}
function eve$44(env) {
  return eve$20(env) > eve$40(env);
}
function computeQuestion$12(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$13(env) {
  if (eve$44(env)) {
   return computeQuestion$12(env);
}
}
function eve$45(env) {
  return env['gad1'];
}
function eve$46(env) {
  return env['gad2'];
}
function eve$47(env) {
  return eve$45(env) + eve$46(env);
}
function eve$48(env) {
  return env['gad3'];
}
function eve$49(env) {
  return eve$47(env) + eve$48(env);
}
function eve$50(env) {
  return env['gad4'];
}
function eve$51(env) {
  return eve$49(env) + eve$50(env);
}
function eve$52(env) {
  return env['gad5'];
}
function eve$53(env) {
  return eve$51(env) + eve$52(env);
}
function eve$54(env) {
  return env['gad6'];
}
function eve$55(env) {
  return eve$53(env) + eve$54(env);
}
function eve$56(env) {
  return env['gad7'];
}
function eve$57(env) {
  return eve$55(env) + eve$56(env);
}
function updateValue$8(val) {
  var elt = document.getElementById('gadTotal-widget'); 
  elt.value = val;
}
function computeQuestion$14(env) {
  var val = eve$57(env);
            if (val !== env['gadTotal']) {
   env['gadTotal'] = val;
                updateValue$8(val);
                return true;
}
}
function eve$58(env) {
  return env['gadTotal'];
}
function eve$59(env) {
  return eve$58(env) <= eve$21(env);
}
function updateValue$9(val) {
  var elt = document.getElementById('gadMinimal-widget'); 
  elt.checked = val;
}
function computeQuestion$15(env) {
  var val = eve$59(env);
            if (val !== env['gadMinimal']) {
   env['gadMinimal'] = val;
                updateValue$9(val);
                return true;
}
}
function eve$60(env) {
  return eve$58(env) >= eve$23(env);
}
function eve$61(env) {
  return eve$58(env) <= eve$25(env);
}
function eve$62(env) {
  return eve$60(env) && eve$61(env);
}
function updateValue$10(val) {
  var elt = document.getElementById('gadMild-widget'); 
  elt.checked = val;
}
function computeQuestion$16(env) {
  var val = eve$62(env);
            if (val !== env['gadMild']) {
   env['gadMild'] = val;
                updateValue$10(val);
                return true;
}
}
function eve$63(env) {
  return eve$58(env) >= eve$28(env);
}
function eve$64(env) {
  return eve$58(env) <= eve$30(env);
}
function eve$65(env) {
  return eve$63(env) && eve$64(env);
}
function updateValue$11(val) {
  var elt = document.getElementById('gadModerate-widget'); 
  elt.checked = val;
}
function computeQuestion$17(env) {
  var val = eve$65(env);
            if (val !== env['gadModerate']) {
   env['gadModerate'] = val;
                updateValue$11(val);
                return true;
}
}
function eve$66(env) {
  return eve$58(env) >= eve$33(env);
}
function updateValue$12(val) {
  var elt = document.getElementById('gadSevere-widget'); 
  elt.checked = val;
}
function computeQuestion$18(env) {
  var val = eve$66(env);
            if (val !== env['gadSevere']) {
   env['gadSevere'] = val;
                updateValue$12(val);
                return true;
}
}
function eve$67(env) {
  return eve$29(env) || eve$63(env);
}
function eve$68(env) {
  return eve$67(env) || eve$41(env);
}
function updateValue$13(val) {
  var elt = document.getElementById('refer-widget'); 
  elt.checked = val;
}
function computeQuestion$19(env) {
  var val = eve$68(env);
            if (val !== env['refer']) {
   env['refer'] = val;
                updateValue$13(val);
                return true;
}
}
function eve$69(env) {
  return env['refer'];
}
function eve$70(env) {
  return env['phqSevere'];
}
function eve$71(env) {
  return parseInt('1');
}
function eve$72(env) {
  return eve$18(env) > eve$71(env);
}
function eve$73(env) {
  return eve$70(env) || eve$72(env);
}
function updateValue$14(val) {
  var elt = document.getElementById('referralUrgent-widget'); 
  elt.checked = val;
}
function computeQuestion$20(env) {
  var val = eve$73(env);
            if (val !== env['referralUrgent']) {
   env['referralUrgent'] = val;
                updateValue$14(val);
                return true;
}
}
function computeQuestion$21(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$20(env); 
  return change;
}
function computeQuestion$22(env) {
  if (eve$69(env)) {
   return computeQuestion$21(env);
}
}
function updateVisibility$0(vis, env) {
  var elt = document.getElementById('patientId-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$1(vis, env) {
  var elt = document.getElementById('age-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$2(vis, env) {
  var elt = document.getElementById('phq1-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$3(vis, env) {
  var elt = document.getElementById('phq2-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$4(vis, env) {
  var elt = document.getElementById('phq3-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$5(vis, env) {
  var elt = document.getElementById('phq4-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$6(vis, env) {
  var elt = document.getElementById('phq5-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$7(vis, env) {
  var elt = document.getElementById('phq6-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$8(vis, env) {
  var elt = document.getElementById('phq7-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$9(vis, env) {
  var elt = document.getElementById('phq8-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$10(vis, env) {
  var elt = document.getElementById('phq9-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$11(vis, env) {
  var elt = document.getElementById('phq2Score-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$12(vis, env) {
  var elt = document.getElementById('phq2Positive-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$13(vis, env) {
  var elt = document.getElementById('phqTotal-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$14(vis, env) {
  var elt = document.getElementById('phqMinimal-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$15(vis, env) {
  var elt = document.getElementById('phqMild-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$16(vis, env) {
  var elt = document.getElementById('phqModerate-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$17(vis, env) {
  var elt = document.getElementById('phqModSevere-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$18(vis, env) {
  var elt = document.getElementById('phqSevere-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$19(vis, env) {
  var elt = document.getElementById('safetyAssessed-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$20(vis, env) {
  var elt = document.getElementById('safetyReason-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$21(vis, env) {
  updateVisibility$20(vis, env);
}
function updateVisibility$22(vis, env) {
  updateVisibility$21(eve$43(env), env);
}
function updateVisibility$23(vis, env) {
  updateVisibility$19(vis, env); 
  updateVisibility$22(vis, env);
}
function updateVisibility$24(vis, env) {
  updateVisibility$23(eve$41(env), env);
}
function updateVisibility$25(vis, env) {
  var elt = document.getElementById('phqDifficulty-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$26(vis, env) {
  updateVisibility$25(vis, env);
}
function updateVisibility$27(vis, env) {
  updateVisibility$26(eve$44(env), env);
}
function updateVisibility$28(vis, env) {
  var elt = document.getElementById('gad1-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$29(vis, env) {
  var elt = document.getElementById('gad2-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$30(vis, env) {
  var elt = document.getElementById('gad3-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$31(vis, env) {
  var elt = document.getElementById('gad4-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$32(vis, env) {
  var elt = document.getElementById('gad5-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$33(vis, env) {
  var elt = document.getElementById('gad6-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$34(vis, env) {
  var elt = document.getElementById('gad7-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$35(vis, env) {
  var elt = document.getElementById('gadTotal-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$36(vis, env) {
  var elt = document.getElementById('gadMinimal-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$37(vis, env) {
  var elt = document.getElementById('gadMild-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$38(vis, env) {
  var elt = document.getElementById('gadModerate-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$39(vis, env) {
  var elt = document.getElementById('gadSevere-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$40(vis, env) {
  var elt = document.getElementById('refer-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$41(vis, env) {
  var elt = document.getElementById('referralTo-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$42(vis, env) {
  var elt = document.getElementById('referralUrgent-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$43(vis, env) {
  updateVisibility$41(vis, env); 
  updateVisibility$42(vis, env);
}
function updateVisibility$44(vis, env) {
  updateVisibility$43(eve$69(env), env);
}
function updateVisibility$45(vis, env) {
  var elt = document.getElementById('notes-div');
            elt.style.display = vis ? 'block' : 'none';
}
function compute$0(env) {
  return function (x, val) {
  env[x] = val;
            do {
  var change = false;
  change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$0(env);
change = change || computeQuestion$1(env);
change = change || computeQuestion$2(env);
change = change || computeQuestion$3(env);
change = change || computeQuestion$4(env);
change = change || computeQuestion$5(env);
change = change || computeQuestion$6(env);
change = change || computeQuestion$7(env);
change = change || computeQuestion$11(env);
change = change || computeQuestion$13(env);
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$14(env);
change = change || computeQuestion$15(env);
change = change || computeQuestion$16(env);
change = change || computeQuestion$17(env);
change = change || computeQuestion$18(env);
change = change || computeQuestion$19(env);
change = change || computeQuestion$22(env);
change = change || false;
}
            while (change);
            var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$3(vis, env); 
  updateVisibility$4(vis, env); 
  updateVisibility$5(vis, env); 
  updateVisibility$6(vis, env); 
  updateVisibility$7(vis, env); 
  updateVisibility$8(vis, env); 
  updateVisibility$9(vis, env); 
  updateVisibility$10(vis, env); 
  updateVisibility$11(vis, env); 
  updateVisibility$12(vis, env); 
  updateVisibility$13(vis, env); 
  updateVisibility$14(vis, env); 
  updateVisibility$15(vis, env); 
  updateVisibility$16(vis, env); 
  updateVisibility$17(vis, env); 
  updateVisibility$18(vis, env); 
  updateVisibility$24(vis, env); 
  updateVisibility$27(vis, env); 
  updateVisibility$28(vis, env); 
  updateVisibility$29(vis, env); 
  updateVisibility$30(vis, env); 
  updateVisibility$31(vis, env); 
  updateVisibility$32(vis, env); 
  updateVisibility$33(vis, env); 
  updateVisibility$34(vis, env); 
  updateVisibility$35(vis, env); 
  updateVisibility$36(vis, env); 
  updateVisibility$37(vis, env); 
  updateVisibility$38(vis, env); 
  updateVisibility$39(vis, env); 
  updateVisibility$40(vis, env); 
  updateVisibility$44(vis, env); 
  updateVisibility$45(vis, env);
};
}
function updater$0(upd) {
  return function (x) {
  upd('patientId', x.target.value);
};
}
function widget$0(env, func) {
  var div = document.createElement('div');
    div.id = 'patientId-div';
    div.appendChild(document.createTextNode('"Patient identifier:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'patientId-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['patientId']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$0(env, upd) {
  widget$0(env, updater$0(upd));
}
function updater$1(upd) {
  return function (x) {
  upd('age', parseInt(x.target.value));
};
}
function widget$1(env, func) {
  var div = document.createElement('div');
    div.id = 'age-div';
    div.appendChild(document.createTextNode('"Age (years):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'age-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['age']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$1(env, upd) {
  widget$1(env, updater$1(upd));
}
function updater$2(upd) {
  return function (x) {
  upd('phq1', parseInt(x.target.value));
};
}
function widget$2(env, func) {
  var div = document.createElement('div');
    div.id = 'phq1-div';
    div.appendChild(document.createTextNode('"PHQ 1. Little interest or pleasure in doing things (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq1-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq1']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$2(env, upd) {
  widget$2(env, updater$2(upd));
}
function updater$3(upd) {
  return function (x) {
  upd('phq2', parseInt(x.target.value));
};
}
function widget$3(env, func) {
  var div = document.createElement('div');
    div.id = 'phq2-div';
    div.appendChild(document.createTextNode('"PHQ 2. Feeling down, depressed, or hopeless (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq2-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq2']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$3(env, upd) {
  widget$3(env, updater$3(upd));
}
function updater$4(upd) {
  return function (x) {
  upd('phq3', parseInt(x.target.value));
};
}
function widget$4(env, func) {
  var div = document.createElement('div');
    div.id = 'phq3-div';
    div.appendChild(document.createTextNode('"PHQ 3. Trouble falling or staying asleep, or sleeping too much (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq3-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq3']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$4(env, upd) {
  widget$4(env, updater$4(upd));
}
function updater$5(upd) {
  return function (x) {
  upd('phq4', parseInt(x.target.value));
};
}
function widget$5(env, func) {
  var div = document.createElement('div');
    div.id = 'phq4-div';
    div.appendChild(document.createTextNode('"PHQ 4. Feeling tired or having little energy (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq4-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq4']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$5(env, upd) {
  widget$5(env, updater$5(upd));
}
function updater$6(upd) {
  return function (x) {
  upd('phq5', parseInt(x.target.value));
};
}
function widget$6(env, func) {
  var div = document.createElement('div');
    div.id = 'phq5-div';
    div.appendChild(document.createTextNode('"PHQ 5. Poor appetite or overeating (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq5-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq5']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$6(env, upd) {
  widget$6(env, updater$6(upd));
}
function updater$7(upd) {
  return function (x) {
  upd('phq6', parseInt(x.target.value));
};
}
function widget$7(env, func) {
  var div = document.createElement('div');
    div.id = 'phq6-div';
    div.appendChild(document.createTextNode('"PHQ 6. Feeling bad about yourself, or that you are a failure (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq6-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq6']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$7(env, upd) {
  widget$7(env, updater$7(upd));
}
function updater$8(upd) {
  return function (x) {
  upd('phq7', parseInt(x.target.value));
};
}
function widget$8(env, func) {
  var div = document.createElement('div');
    div.id = 'phq7-div';
    div.appendChild(document.createTextNode('"PHQ 7. Trouble concentrating on things (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq7-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq7']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$8(env, upd) {
  widget$8(env, updater$8(upd));
}
function updater$9(upd) {
  return function (x) {
  upd('phq8', parseInt(x.target.value));
};
}
function widget$9(env, func) {
  var div = document.createElement('div');
    div.id = 'phq8-div';
    div.appendChild(document.createTextNode('"PHQ 8. Moving or speaking slowly, or being fidgety or restless (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq8-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq8']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$9(env, upd) {
  widget$9(env, updater$9(upd));
}
function updater$10(upd) {
  return function (x) {
  upd('phq9', parseInt(x.target.value));
};
}
function widget$10(env, func) {
  var div = document.createElement('div');
    div.id = 'phq9-div';
    div.appendChild(document.createTextNode('"PHQ 9. Thoughts that you would be better off dead or of hurting yourself (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq9-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq9']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$10(env, upd) {
  widget$10(env, updater$10(upd));
}
function widget$11(env) {
  var div = document.createElement('div');
    div.id = 'phq2Score-div';
    div.appendChild(document.createTextNode('"PHQ-2 pre-screen score:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq2Score-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phq2Score']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$11(env, upd) {
  widget$11(env);
}
function widget$12(env) {
  var div = document.createElement('div');
    div.id = 'phq2Positive-div';
    div.appendChild(document.createTextNode('"PHQ-2 positive (score 3 or more):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phq2Positive-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['phq2Positive']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$12(env, upd) {
  widget$12(env);
}
function widget$13(env) {
  var div = document.createElement('div');
    div.id = 'phqTotal-div';
    div.appendChild(document.createTextNode('"PHQ-9 total score:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqTotal-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phqTotal']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$13(env, upd) {
  widget$13(env);
}
function widget$14(env) {
  var div = document.createElement('div');
    div.id = 'phqMinimal-div';
    div.appendChild(document.createTextNode('"Minimal depression (0-4):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqMinimal-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['phqMinimal']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$14(env, upd) {
  widget$14(env);
}
function widget$15(env) {
  var div = document.createElement('div');
    div.id = 'phqMild-div';
    div.appendChild(document.createTextNode('"Mild depression (5-9):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqMild-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['phqMild']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$15(env, upd) {
  widget$15(env);
}
function widget$16(env) {
  var div = document.createElement('div');
    div.id = 'phqModerate-div';
    div.appendChild(document.createTextNode('"Moderate depression (10-14):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqModerate-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['phqModerate']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$16(env, upd) {
  widget$16(env);
}
function widget$17(env) {
  var div = document.createElement('div');
    div.id = 'phqModSevere-div';
    div.appendChild(document.createTextNode('"Moderately severe depression (15-19):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqModSevere-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['phqModSevere']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$17(env, upd) {
  widget$17(env);
}
function widget$18(env) {
  var div = document.createElement('div');
    div.id = 'phqSevere-div';
    div.appendChild(document.createTextNode('"Severe depression (20-27):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqSevere-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['phqSevere']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$18(env, upd) {
  widget$18(env);
}
function updater$11(upd) {
  return function (x) {
  upd('safetyAssessed', x.target.checked);
};
}
function widget$19(env, func) {
  var div = document.createElement('div');
    div.id = 'safetyAssessed-div';
    div.appendChild(document.createTextNode('"Item 9 is positive: safety assessment completed today?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'safetyAssessed-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['safetyAssessed']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$19(env, upd) {
  widget$19(env, updater$11(upd));
}
function updater$12(upd) {
  return function (x) {
  upd('safetyReason', x.target.value);
};
}
function widget$20(env, func) {
  var div = document.createElement('div');
    div.id = 'safetyReason-div';
    div.appendChild(document.createTextNode('"Reason the safety assessment was not completed:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'safetyReason-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['safetyReason']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$20(env, upd) {
  widget$20(env, updater$12(upd));
}
function renderQuestion$21(env, upd) {
  renderQuestion$20(env, upd);
}
function renderQuestion$22(env, upd) {
  renderQuestion$21(env, upd);
}
function renderQuestion$23(env, upd) {
  renderQuestion$19(env, upd); 
  renderQuestion$22(env, upd);
}
function renderQuestion$24(env, upd) {
  renderQuestion$23(env, upd);
}
function updater$13(upd) {
  return function (x) {
  upd('phqDifficulty', parseInt(x.target.value));
};
}
function widget$21(env, func) {
  var div = document.createElement('div');
    div.id = 'phqDifficulty-div';
    div.appendChild(document.createTextNode('"PHQ 10. How difficult have these problems made it to work, take care of things at home, or get along with others (0-3)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'phqDifficulty-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['phqDifficulty']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$25(env, upd) {
  widget$21(env, updater$13(upd));
}
function renderQuestion$26(env, upd) {
  renderQuestion$25(env, upd);
}
function renderQuestion$27(env, upd) {
  renderQuestion$26(env, upd);
}
function updater$14(upd) {
  return function (x) {
  upd('gad1', parseInt(x.target.value));
};
}
function widget$22(env, func) {
  var div = document.createElement('div');
    div.id = 'gad1-div';
    div.appendChild(document.createTextNode('"GAD 1. Feeling nervous, anxious, or on edge (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad1-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad1']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$28(env, upd) {
  widget$22(env, updater$14(upd));
}
function updater$15(upd) {
  return function (x) {
  upd('gad2', parseInt(x.target.value));
};
}
function widget$23(env, func) {
  var div = document.createElement('div');
    div.id = 'gad2-div';
    div.appendChild(document.createTextNode('"GAD 2. Not being able to stop or control worrying (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad2-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad2']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$29(env, upd) {
  widget$23(env, updater$15(upd));
}
function updater$16(upd) {
  return function (x) {
  upd('gad3', parseInt(x.target.value));
};
}
function widget$24(env, func) {
  var div = document.createElement('div');
    div.id = 'gad3-div';
    div.appendChild(document.createTextNode('"GAD 3. Worrying too much about different things (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad3-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad3']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$30(env, upd) {
  widget$24(env, updater$16(upd));
}
function updater$17(upd) {
  return function (x) {
  upd('gad4', parseInt(x.target.value));
};
}
function widget$25(env, func) {
  var div = document.createElement('div');
    div.id = 'gad4-div';
    div.appendChild(document.createTextNode('"GAD 4. Trouble relaxing (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad4-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad4']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$31(env, upd) {
  widget$25(env, updater$17(upd));
}
function updater$18(upd) {
  return function (x) {
  upd('gad5', parseInt(x.target.value));
};
}
function widget$26(env, func) {
  var div = document.createElement('div');
    div.id = 'gad5-div';
    div.appendChild(document.createTextNode('"GAD 5. Being so restless that it is hard to sit still (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad5-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad5']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$32(env, upd) {
  widget$26(env, updater$18(upd));
}
function updater$19(upd) {
  return function (x) {
  upd('gad6', parseInt(x.target.value));
};
}
function widget$27(env, func) {
  var div = document.createElement('div');
    div.id = 'gad6-div';
    div.appendChild(document.createTextNode('"GAD 6. Becoming easily annoyed or irritable (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad6-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad6']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$33(env, upd) {
  widget$27(env, updater$19(upd));
}
function updater$20(upd) {
  return function (x) {
  upd('gad7', parseInt(x.target.value));
};
}
function widget$28(env, func) {
  var div = document.createElement('div');
    div.id = 'gad7-div';
    div.appendChild(document.createTextNode('"GAD 7. Feeling afraid as if something awful might happen (0-3):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gad7-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gad7']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$34(env, upd) {
  widget$28(env, updater$20(upd));
}
function widget$29(env) {
  var div = document.createElement('div');
    div.id = 'gadTotal-div';
    div.appendChild(document.createTextNode('"GAD-7 total score:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gadTotal-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['gadTotal']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$35(env, upd) {
  widget$29(env);
}
function widget$30(env) {
  var div = document.createElement('div');
    div.id = 'gadMinimal-div';
    div.appendChild(document.createTextNode('"Minimal anxiety (0-4):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gadMinimal-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['gadMinimal']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$36(env, upd) {
  widget$30(env);
}
function widget$31(env) {
  var div = document.createElement('div');
    div.id = 'gadMild-div';
    div.appendChild(document.createTextNode('"Mild anxiety (5-9):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gadMild-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['gadMild']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$37(env, upd) {
  widget$31(env);
}
function widget$32(env) {
  var div = document.createElement('div');
    div.id = 'gadModerate-div';
    div.appendChild(document.createTextNode('"Moderate anxiety (10-14):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gadModerate-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['gadModerate']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$38(env, upd) {
  widget$32(env);
}
function widget$33(env) {
  var div = document.createElement('div');
    div.id = 'gadSevere-div';
    div.appendChild(document.createTextNode('"Severe anxiety (15-21):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'gadSevere-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['gadSevere']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$39(env, upd) {
  widget$33(env);
}
function widget$34(env) {
  var div = document.createElement('div');
    div.id = 'refer-div';
    div.appendChild(document.createTextNode('"Refer to mental health services:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'refer-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['refer']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$40(env, upd) {
  widget$34(env);
}
function updater$21(upd) {
  return function (x) {
  upd('referralTo', x.target.value);
};
}
function widget$35(env, func) {
  var div = document.createElement('div');
    div.id = 'referralTo-div';
    div.appendChild(document.createTextNode('"Referral destination:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'referralTo-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['referralTo']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$41(env, upd) {
  widget$35(env, updater$21(upd));
}
function widget$36(env) {
  var div = document.createElement('div');
    div.id = 'referralUrgent-div';
    div.appendChild(document.createTextNode('"Referral urgent:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'referralUrgent-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['referralUrgent']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$42(env, upd) {
  widget$36(env);
}
function renderQuestion$43(env, upd) {
  renderQuestion$41(env, upd); 
  renderQuestion$42(env, upd);
}
function renderQuestion$44(env, upd) {
  renderQuestion$43(env, upd);
}
function updater$22(upd) {
  return function (x) {
  upd('notes', x.target.value);
};
}
function widget$37(env, func) {
  var div = document.createElement('div');
    div.id = 'notes-div';
    div.appendChild(document.createTextNode('"Clinician notes:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'notes-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['notes']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$45(env, upd) {
  widget$37(env, updater$22(upd));
}
function render$0(env, upd) {
  renderQuestion$0(env, upd);
renderQuestion$1(env, upd);
renderQuestion$2(env, upd);
renderQuestion$3(env, upd);
renderQuestion$4(env, upd);
renderQuestion$5(env, upd);
renderQuestion$6(env, upd);
renderQuestion$7(env, upd);
renderQuestion$8(env, upd);
renderQuestion$9(env, upd);
renderQuestion$10(env, upd);
renderQuestion$11(env, upd);
renderQuestion$12(env, upd);
renderQuestion$13(env, upd);
renderQuestion$14(env, upd);
renderQuestion$15(env, upd);
renderQuestion$16(env, upd);
renderQuestion$17(env, upd);
renderQuestion$18(env, upd);
renderQuestion$24(env, upd);
renderQuestion$27(env, upd);
renderQuestion$28(env, upd);
renderQuestion$29(env, upd);
renderQuestion$30(env, upd);
renderQuestion$31(env, upd);
renderQuestion$32(env, upd);
renderQuestion$33(env, upd);
renderQuestion$34(env, upd);
renderQuestion$35(env, upd);
renderQuestion$36(env, upd);
renderQuestion$37(env, upd);
renderQuestion$38(env, upd);
renderQuestion$39(env, upd);
renderQuestion$40(env, upd);
renderQuestion$44(env, upd);
renderQuestion$45(env, upd);
}
function run$0() {
  var env = {};
    initialize$0(env);

    var update = compute$0(env);
    render$0(env, update);
    var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$3(vis, env); 
  updateVisibility$4(vis, env); 
  updateVisibility$5(vis, env); 
  updateVisibility$6(vis, env); 
  updateVisibility$7(vis, env); 
  updateVisibility$8(vis, env); 
  updateVisibility$9(vis, env); 
  updateVisibility$10(vis, env); 
  updateVisibility$11(vis, env); 
  updateVisibility$12(vis, env); 
  updateVisibility$13(vis, env); 
  updateVisibility$14(vis, env); 
  updateVisibility$15(vis, env); 
  updateVisibility$16(vis, env); 
  updateVisibility$17(vis, env); 
  updateVisibility$18(vis, env); 
  updateVisibility$24(vis, env); 
  updateVisibility$27(vis, env); 
  updateVisibility$28(vis, env); 
  updateVisibility$29(vis, env); 
  updateVisibility$30(vis, env); 
  updateVisibility$31(vis, env); 
  updateVisibility$32(vis, env); 
  updateVisibility$33(vis, env); 
  updateVisibility$34(vis, env); 
  updateVisibility$35(vis, env); 
  updateVisibility$36(vis, env); 
  updateVisibility$37(vis, env); 
  updateVisibility$38(vis, env); 
  updateVisibility$39(vis, env); 
  updateVisibility$40(vis, env); 
  updateVisibility$44(vis, env); 
  updateVisibility$45(vis, env);
}