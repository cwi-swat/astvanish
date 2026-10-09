export {run$0 as run};
function initializeQuestion$0(env) {
  env['fullName'] = '';
}
function initializeQuestion$1(env) {
  env['age'] = 0;
}
function initializeQuestion$2(env) {
  env['hasLicense'] = false;
}
function initializeQuestion$3(env) {
  env['inSchool'] = false;
}
function initializeQuestion$4(env) {
  env['grade'] = 0;
}
function initializeQuestion$5(env) {
  initializeQuestion$4(env);
}
function initializeQuestion$6(env) {
  initializeQuestion$5(env);
}
function initializeQuestion$7(env) {
  initializeQuestion$3(env); 
  initializeQuestion$6(env);
}
function initializeQuestion$8(env) {
  env['employed'] = false;
}
function initializeQuestion$9(env) {
  env['jobTitle'] = '';
}
function initializeQuestion$10(env) {
  env['yearsInJob'] = 0;
}
function initializeQuestion$11(env) {
  env['monthlySalary'] = 0;
}
function initializeQuestion$12(env) {
  env['monthlyExpenses'] = 0;
}
function initializeQuestion$13(env) {
  env['annualSavings'] = 0;
}
function initializeQuestion$14(env) {
  initializeQuestion$9(env); 
  initializeQuestion$10(env); 
  initializeQuestion$11(env); 
  initializeQuestion$12(env); 
  initializeQuestion$13(env);
}
function initializeQuestion$15(env) {
  env['lookingForJob'] = false;
}
function initializeQuestion$16(env) {
  initializeQuestion$15(env);
}
function initializeQuestion$17(env) {
  initializeQuestion$14(env);
            initializeQuestion$16(env);
}
function initializeQuestion$18(env) {
  initializeQuestion$8(env); 
  initializeQuestion$17(env);
}
function initializeQuestion$19(env) {
  env['retired'] = false;
}
function initializeQuestion$20(env) {
  env['yearsRetired'] = 0;
}
function initializeQuestion$21(env) {
  env['annualPension'] = 0;
}
function initializeQuestion$22(env) {
  env['healthcareExpenses'] = 0;
}
function initializeQuestion$23(env) {
  env['netPension'] = 0;
}
function initializeQuestion$24(env) {
  initializeQuestion$20(env); 
  initializeQuestion$21(env); 
  initializeQuestion$22(env); 
  initializeQuestion$23(env);
}
function initializeQuestion$25(env) {
  initializeQuestion$24(env);
}
function initializeQuestion$26(env) {
  initializeQuestion$19(env); 
  initializeQuestion$25(env);
}
function initializeQuestion$27(env) {
  initializeQuestion$18(env);
            initializeQuestion$26(env);
}
function initializeQuestion$28(env) {
  initializeQuestion$27(env);
}
function initializeQuestion$29(env) {
  initializeQuestion$7(env);
            initializeQuestion$28(env);
}
function initializeQuestion$30(env) {
  env['seniorDiscount'] = false;
}
function initializeQuestion$31(env) {
  env['income'] = 0;
}
function initializeQuestion$32(env) {
  env['monthlyDebts'] = 0;
}
function initializeQuestion$33(env) {
  env['hasCoSigner'] = false;
}
function initializeQuestion$34(env) {
  env['loanAmount'] = 0;
}
function initializeQuestion$35(env) {
  env['interestRate'] = 0;
}
function initializeQuestion$36(env) {
  env['loanTerm'] = 0;
}
function initializeQuestion$37(env) {
  env['totalInterest'] = 0;
}
function initializeQuestion$38(env) {
  env['totalRepayment'] = 0;
}
function initializeQuestion$39(env) {
  env['monthlyPayment'] = 0;
}
function initializeQuestion$40(env) {
  env['loanApproved'] = false;
}
function initializeQuestion$41(env) {
  env['approvalMessage'] = '';
}
function initializeQuestion$42(env) {
  initializeQuestion$41(env);
}
function initializeQuestion$43(env) {
  env['not_approvalMessage'] = '';
}
function initializeQuestion$44(env) {
  initializeQuestion$43(env);
}
function initializeQuestion$45(env) {
  initializeQuestion$42(env);
            initializeQuestion$44(env);
}
function initialize$0(env) {
  initializeQuestion$0(env);
initializeQuestion$1(env);
initializeQuestion$2(env);
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
initializeQuestion$45(env);
}
function eve$0(env) {
  return env['age'];
}
function eve$1(env) {
  return parseInt('18');
}
function eve$2(env) {
  return eve$0(env) < eve$1(env);
}
function eve$3(env) {
  return env['inSchool'];
}
function computeQuestion$0(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$1(env) {
  if (eve$3(env)) {
   return computeQuestion$0(env);
}
}
function computeQuestion$2(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$1(env); 
  return change;
}
function eve$4(env) {
  return eve$0(env) >= eve$1(env);
}
function eve$5(env) {
  return parseInt('65');
}
function eve$6(env) {
  return eve$0(env) <= eve$5(env);
}
function eve$7(env) {
  return eve$4(env) && eve$6(env);
}
function eve$8(env) {
  return env['employed'];
}
function eve$9(env) {
  return env['monthlySalary'];
}
function eve$10(env) {
  return env['monthlyExpenses'];
}
function eve$11(env) {
  return eve$9(env) - eve$10(env);
}
function eve$12(env) {
  return eve$11(env);
}
function eve$13(env) {
  return parseInt('12');
}
function eve$14(env) {
  return eve$12(env) * eve$13(env);
}
function updateValue$0(val) {
  var elt = document.getElementById('annualSavings-widget'); 
  elt.value = val;
}
function computeQuestion$3(env) {
  var val = eve$14(env);
            if (val !== env['annualSavings']) {
   env['annualSavings'] = val;
                updateValue$0(val);
                return true;
}
}
function computeQuestion$4(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || computeQuestion$3(env); 
  return change;
}
function computeQuestion$5(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$6(env) {
  if (eve$8(env)) 
   {
   return computeQuestion$4(env);
} 
else 
   {
   return computeQuestion$5(env);
}
}
function computeQuestion$7(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$6(env); 
  return change;
}
function eve$15(env) {
  return env['retired'];
}
function eve$16(env) {
  return env['annualPension'];
}
function eve$17(env) {
  return env['healthcareExpenses'];
}
function eve$18(env) {
  return eve$16(env) - eve$17(env);
}
function updateValue$1(val) {
  var elt = document.getElementById('netPension-widget'); 
  elt.value = val;
}
function computeQuestion$8(env) {
  var val = eve$18(env);
            if (val !== env['netPension']) {
   env['netPension'] = val;
                updateValue$1(val);
                return true;
}
}
function computeQuestion$9(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || computeQuestion$8(env); 
  return change;
}
function computeQuestion$10(env) {
  if (eve$15(env)) {
   return computeQuestion$9(env);
}
}
function computeQuestion$11(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$10(env); 
  return change;
}
function computeQuestion$12(env) {
  if (eve$7(env)) 
   {
   return computeQuestion$7(env);
} 
else 
   {
   return computeQuestion$11(env);
}
}
function computeQuestion$13(env) {
  var change = false;
  change = change || computeQuestion$12(env); 
  return change;
}
function computeQuestion$14(env) {
  if (eve$2(env)) 
   {
   return computeQuestion$2(env);
} 
else 
   {
   return computeQuestion$13(env);
}
}
function eve$19(env) {
  return eve$0(env) >= eve$5(env);
}
function eve$20(env) {
  return eve$19(env) && eve$15(env);
}
function updateValue$2(val) {
  var elt = document.getElementById('seniorDiscount-widget'); 
  elt.checked = val;
}
function computeQuestion$15(env) {
  var val = eve$20(env);
            if (val !== env['seniorDiscount']) {
   env['seniorDiscount'] = val;
                updateValue$2(val);
                return true;
}
}
function eve$21(env) {
  return env['loanAmount'];
}
function eve$22(env) {
  return env['interestRate'];
}
function eve$23(env) {
  return eve$21(env) * eve$22(env);
}
function eve$24(env) {
  return env['loanTerm'];
}
function eve$25(env) {
  return eve$23(env) * eve$24(env);
}
function eve$26(env) {
  return eve$25(env);
}
function eve$27(env) {
  return parseInt('100');
}
function eve$28(env) {
  return Math.round(eve$26(env) / eve$27(env));
}
function updateValue$3(val) {
  var elt = document.getElementById('totalInterest-widget'); 
  elt.value = val;
}
function computeQuestion$16(env) {
  var val = eve$28(env);
            if (val !== env['totalInterest']) {
   env['totalInterest'] = val;
                updateValue$3(val);
                return true;
}
}
function eve$29(env) {
  return env['totalInterest'];
}
function eve$30(env) {
  return eve$21(env) + eve$29(env);
}
function updateValue$4(val) {
  var elt = document.getElementById('totalRepayment-widget'); 
  elt.value = val;
}
function computeQuestion$17(env) {
  var val = eve$30(env);
            if (val !== env['totalRepayment']) {
   env['totalRepayment'] = val;
                updateValue$4(val);
                return true;
}
}
function eve$31(env) {
  return env['totalRepayment'];
}
function eve$32(env) {
  return eve$24(env) * eve$13(env);
}
function eve$33(env) {
  return eve$32(env);
}
function eve$34(env) {
  return Math.round(eve$31(env) / eve$33(env));
}
function updateValue$5(val) {
  var elt = document.getElementById('monthlyPayment-widget'); 
  elt.value = val;
}
function computeQuestion$18(env) {
  var val = eve$34(env);
            if (val !== env['monthlyPayment']) {
   env['monthlyPayment'] = val;
                updateValue$5(val);
                return true;
}
}
function eve$35(env) {
  return env['income'];
}
function eve$36(env) {
  return parseInt('50000');
}
function eve$37(env) {
  return eve$35(env) > eve$36(env);
}
function eve$38(env) {
  return env['monthlyDebts'];
}
function eve$39(env) {
  return parseInt('10000');
}
function eve$40(env) {
  return eve$38(env) < eve$39(env);
}
function eve$41(env) {
  return eve$37(env) && eve$40(env);
}
function eve$42(env) {
  return eve$41(env);
}
function eve$43(env) {
  return env['hasCoSigner'];
}
function eve$44(env) {
  return eve$42(env) || eve$43(env);
}
function updateValue$6(val) {
  var elt = document.getElementById('loanApproved-widget'); 
  elt.checked = val;
}
function computeQuestion$19(env) {
  var val = eve$44(env);
            if (val !== env['loanApproved']) {
   env['loanApproved'] = val;
                updateValue$6(val);
                return true;
}
}
function eve$45(env) {
  return env['loanApproved'];
}
function eve$46(env) {
  return unquote('"Approved"');
}
function updateValue$7(val) {
  var elt = document.getElementById('approvalMessage-widget'); 
  elt.value = val;
}
function computeQuestion$20(env) {
  var val = eve$46(env);
            if (val !== env['approvalMessage']) {
   env['approvalMessage'] = val;
                updateValue$7(val);
                return true;
}
}
function computeQuestion$21(env) {
  var change = false;
  change = change || computeQuestion$20(env); 
  return change;
}
function eve$47(env) {
  return unquote('"Not Approved"');
}
function updateValue$8(val) {
  var elt = document.getElementById('not_approvalMessage-widget'); 
  elt.value = val;
}
function computeQuestion$22(env) {
  var val = eve$47(env);
            if (val !== env['not_approvalMessage']) {
   env['not_approvalMessage'] = val;
                updateValue$8(val);
                return true;
}
}
function computeQuestion$23(env) {
  var change = false;
  change = change || computeQuestion$22(env); 
  return change;
}
function computeQuestion$24(env) {
  if (eve$45(env)) 
   {
   return computeQuestion$21(env);
} 
else 
   {
   return computeQuestion$23(env);
}
}
function updateVisibility$0(vis, env) {
  var elt = document.getElementById('fullName-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$1(vis, env) {
  var elt = document.getElementById('age-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$2(vis, env) {
  var elt = document.getElementById('hasLicense-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$3(vis, env) {
  var elt = document.getElementById('inSchool-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$4(vis, env) {
  var elt = document.getElementById('grade-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$5(vis, env) {
  updateVisibility$4(vis, env);
}
function updateVisibility$6(vis, env) {
  updateVisibility$5(eve$3(env), env);
}
function updateVisibility$7(vis, env) {
  updateVisibility$3(vis, env); 
  updateVisibility$6(vis, env);
}
function updateVisibility$8(vis, env) {
  var elt = document.getElementById('employed-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$9(vis, env) {
  var elt = document.getElementById('jobTitle-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$10(vis, env) {
  var elt = document.getElementById('yearsInJob-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$11(vis, env) {
  var elt = document.getElementById('monthlySalary-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$12(vis, env) {
  var elt = document.getElementById('monthlyExpenses-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$13(vis, env) {
  var elt = document.getElementById('annualSavings-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$14(vis, env) {
  updateVisibility$9(vis, env); 
  updateVisibility$10(vis, env); 
  updateVisibility$11(vis, env); 
  updateVisibility$12(vis, env); 
  updateVisibility$13(vis, env);
}
function updateVisibility$15(vis, env) {
  var elt = document.getElementById('lookingForJob-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$16(vis, env) {
  updateVisibility$15(vis, env);
}
function updateVisibility$17(vis, env) {
  updateVisibility$14(eve$8(env), env);
            updateVisibility$16(!eve$8(env), env);
}
function updateVisibility$18(vis, env) {
  updateVisibility$8(vis, env); 
  updateVisibility$17(vis, env);
}
function updateVisibility$19(vis, env) {
  var elt = document.getElementById('retired-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$20(vis, env) {
  var elt = document.getElementById('yearsRetired-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$21(vis, env) {
  var elt = document.getElementById('annualPension-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$22(vis, env) {
  var elt = document.getElementById('healthcareExpenses-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$23(vis, env) {
  var elt = document.getElementById('netPension-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$24(vis, env) {
  updateVisibility$20(vis, env); 
  updateVisibility$21(vis, env); 
  updateVisibility$22(vis, env); 
  updateVisibility$23(vis, env);
}
function updateVisibility$25(vis, env) {
  updateVisibility$24(eve$15(env), env);
}
function updateVisibility$26(vis, env) {
  updateVisibility$19(vis, env); 
  updateVisibility$25(vis, env);
}
function updateVisibility$27(vis, env) {
  updateVisibility$18(eve$7(env), env);
            updateVisibility$26(!eve$7(env), env);
}
function updateVisibility$28(vis, env) {
  updateVisibility$27(vis, env);
}
function updateVisibility$29(vis, env) {
  updateVisibility$7(eve$2(env), env);
            updateVisibility$28(!eve$2(env), env);
}
function updateVisibility$30(vis, env) {
  var elt = document.getElementById('seniorDiscount-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$31(vis, env) {
  var elt = document.getElementById('income-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$32(vis, env) {
  var elt = document.getElementById('monthlyDebts-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$33(vis, env) {
  var elt = document.getElementById('hasCoSigner-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$34(vis, env) {
  var elt = document.getElementById('loanAmount-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$35(vis, env) {
  var elt = document.getElementById('interestRate-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$36(vis, env) {
  var elt = document.getElementById('loanTerm-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$37(vis, env) {
  var elt = document.getElementById('totalInterest-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$38(vis, env) {
  var elt = document.getElementById('totalRepayment-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$39(vis, env) {
  var elt = document.getElementById('monthlyPayment-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$40(vis, env) {
  var elt = document.getElementById('loanApproved-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$41(vis, env) {
  var elt = document.getElementById('approvalMessage-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$42(vis, env) {
  updateVisibility$41(vis, env);
}
function updateVisibility$43(vis, env) {
  var elt = document.getElementById('not_approvalMessage-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$44(vis, env) {
  updateVisibility$43(vis, env);
}
function updateVisibility$45(vis, env) {
  updateVisibility$42(eve$45(env), env);
            updateVisibility$44(!eve$45(env), env);
}
function compute$0(env) {
  return function (x, val) {
  env[x] = val;
            do {
  var change = false;
  change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$14(env);
change = change || computeQuestion$15(env);
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$16(env);
change = change || computeQuestion$17(env);
change = change || computeQuestion$18(env);
change = change || computeQuestion$19(env);
change = change || computeQuestion$24(env);
}
            while (change);
            var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
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
  updateVisibility$45(vis, env);
};
}
function widget$0(env, func) {
  var div = document.createElement('div');
    div.id = 'fullName-div';
    div.appendChild(document.createTextNode('"What is your full name?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'fullName-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['fullName']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$0(env, upd) {
  widget$0(env, function (x) {
  upd('fullName', x.target.value);
});
}
function widget$1(env, func) {
  var div = document.createElement('div');
    div.id = 'age-div';
    div.appendChild(document.createTextNode('"How old are you?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'age-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['age']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$1(env, upd) {
  widget$1(env, function (x) {
  upd('age', x.target.value);
});
}
function widget$2(env, func) {
  var div = document.createElement('div');
    div.id = 'hasLicense-div';
    div.appendChild(document.createTextNode('"Do you have a driver\'s license?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasLicense-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasLicense']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$2(env, upd) {
  widget$2(env, function (x) {
  upd('hasLicense', x.target.checked);
});
}
function widget$3(env, func) {
  var div = document.createElement('div');
    div.id = 'inSchool-div';
    div.appendChild(document.createTextNode('"Are you currently in school?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'inSchool-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['inSchool']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$3(env, upd) {
  widget$3(env, function (x) {
  upd('inSchool', x.target.checked);
});
}
function widget$4(env, func) {
  var div = document.createElement('div');
    div.id = 'grade-div';
    div.appendChild(document.createTextNode('"What is your current grade?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'grade-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['grade']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$4(env, upd) {
  widget$4(env, function (x) {
  upd('grade', x.target.value);
});
}
function renderQuestion$5(env, upd) {
  renderQuestion$4(env, upd);
}
function renderQuestion$6(env, upd) {
  renderQuestion$5(env, upd);
}
function renderQuestion$7(env, upd) {
  renderQuestion$3(env, upd); 
  renderQuestion$6(env, upd);
}
function widget$5(env, func) {
  var div = document.createElement('div');
    div.id = 'employed-div';
    div.appendChild(document.createTextNode('"Are you currently employed?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'employed-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['employed']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$8(env, upd) {
  widget$5(env, function (x) {
  upd('employed', x.target.checked);
});
}
function widget$6(env, func) {
  var div = document.createElement('div');
    div.id = 'jobTitle-div';
    div.appendChild(document.createTextNode('"What is your job title?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'jobTitle-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['jobTitle']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$9(env, upd) {
  widget$6(env, function (x) {
  upd('jobTitle', x.target.value);
});
}
function widget$7(env, func) {
  var div = document.createElement('div');
    div.id = 'yearsInJob-div';
    div.appendChild(document.createTextNode('"How many years have you worked in your current job?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'yearsInJob-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['yearsInJob']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$10(env, upd) {
  widget$7(env, function (x) {
  upd('yearsInJob', x.target.value);
});
}
function widget$8(env, func) {
  var div = document.createElement('div');
    div.id = 'monthlySalary-div';
    div.appendChild(document.createTextNode('"What is your monthly salary?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'monthlySalary-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['monthlySalary']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$11(env, upd) {
  widget$8(env, function (x) {
  upd('monthlySalary', x.target.value);
});
}
function widget$9(env, func) {
  var div = document.createElement('div');
    div.id = 'monthlyExpenses-div';
    div.appendChild(document.createTextNode('"What is your total monthly expenses?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'monthlyExpenses-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['monthlyExpenses']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$12(env, upd) {
  widget$9(env, function (x) {
  upd('monthlyExpenses', x.target.value);
});
}
function widget$10(env) {
  var div = document.createElement('div');
    div.id = 'annualSavings-div';
    div.appendChild(document.createTextNode('"Your annual savings"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'annualSavings-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['annualSavings']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$13(env, upd) {
  widget$10(env);
}
function renderQuestion$14(env, upd) {
  renderQuestion$9(env, upd); 
  renderQuestion$10(env, upd); 
  renderQuestion$11(env, upd); 
  renderQuestion$12(env, upd); 
  renderQuestion$13(env, upd);
}
function widget$11(env, func) {
  var div = document.createElement('div');
    div.id = 'lookingForJob-div';
    div.appendChild(document.createTextNode('"Are you actively looking for a job?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'lookingForJob-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['lookingForJob']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$15(env, upd) {
  widget$11(env, function (x) {
  upd('lookingForJob', x.target.checked);
});
}
function renderQuestion$16(env, upd) {
  renderQuestion$15(env, upd);
}
function renderQuestion$17(env, upd) {
  renderQuestion$14(env, upd);
            renderQuestion$16(env, upd);
}
function renderQuestion$18(env, upd) {
  renderQuestion$8(env, upd); 
  renderQuestion$17(env, upd);
}
function widget$12(env, func) {
  var div = document.createElement('div');
    div.id = 'retired-div';
    div.appendChild(document.createTextNode('"Are you retired?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'retired-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['retired']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$19(env, upd) {
  widget$12(env, function (x) {
  upd('retired', x.target.checked);
});
}
function widget$13(env, func) {
  var div = document.createElement('div');
    div.id = 'yearsRetired-div';
    div.appendChild(document.createTextNode('"How long have you been retired?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'yearsRetired-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['yearsRetired']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$20(env, upd) {
  widget$13(env, function (x) {
  upd('yearsRetired', x.target.value);
});
}
function widget$14(env, func) {
  var div = document.createElement('div');
    div.id = 'annualPension-div';
    div.appendChild(document.createTextNode('"What is your annual pension?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'annualPension-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['annualPension']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$21(env, upd) {
  widget$14(env, function (x) {
  upd('annualPension', x.target.value);
});
}
function widget$15(env, func) {
  var div = document.createElement('div');
    div.id = 'healthcareExpenses-div';
    div.appendChild(document.createTextNode('"What is your annual healthcare expense?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'healthcareExpenses-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['healthcareExpenses']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$22(env, upd) {
  widget$15(env, function (x) {
  upd('healthcareExpenses', x.target.value);
});
}
function widget$16(env) {
  var div = document.createElement('div');
    div.id = 'netPension-div';
    div.appendChild(document.createTextNode('"Net annual pension after healthcare"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'netPension-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['netPension']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$23(env, upd) {
  widget$16(env);
}
function renderQuestion$24(env, upd) {
  renderQuestion$20(env, upd); 
  renderQuestion$21(env, upd); 
  renderQuestion$22(env, upd); 
  renderQuestion$23(env, upd);
}
function renderQuestion$25(env, upd) {
  renderQuestion$24(env, upd);
}
function renderQuestion$26(env, upd) {
  renderQuestion$19(env, upd); 
  renderQuestion$25(env, upd);
}
function renderQuestion$27(env, upd) {
  renderQuestion$18(env, upd);
            renderQuestion$26(env, upd);
}
function renderQuestion$28(env, upd) {
  renderQuestion$27(env, upd);
}
function renderQuestion$29(env, upd) {
  renderQuestion$7(env, upd);
            renderQuestion$28(env, upd);
}
function widget$17(env) {
  var div = document.createElement('div');
    div.id = 'seniorDiscount-div';
    div.appendChild(document.createTextNode('"Are you eligible for a senior citizen discount?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'seniorDiscount-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['seniorDiscount']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$30(env, upd) {
  widget$17(env);
}
function widget$18(env, func) {
  var div = document.createElement('div');
    div.id = 'income-div';
    div.appendChild(document.createTextNode('"What is your annual income?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'income-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['income']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$31(env, upd) {
  widget$18(env, function (x) {
  upd('income', x.target.value);
});
}
function widget$19(env, func) {
  var div = document.createElement('div');
    div.id = 'monthlyDebts-div';
    div.appendChild(document.createTextNode('"What are your monthly debts?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'monthlyDebts-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['monthlyDebts']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$32(env, upd) {
  widget$19(env, function (x) {
  upd('monthlyDebts', x.target.value);
});
}
function widget$20(env, func) {
  var div = document.createElement('div');
    div.id = 'hasCoSigner-div';
    div.appendChild(document.createTextNode('"Do you have a co-signer for loans?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasCoSigner-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasCoSigner']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$33(env, upd) {
  widget$20(env, function (x) {
  upd('hasCoSigner', x.target.checked);
});
}
function widget$21(env, func) {
  var div = document.createElement('div');
    div.id = 'loanAmount-div';
    div.appendChild(document.createTextNode('"Desired loan amount"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'loanAmount-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['loanAmount']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$34(env, upd) {
  widget$21(env, function (x) {
  upd('loanAmount', x.target.value);
});
}
function widget$22(env, func) {
  var div = document.createElement('div');
    div.id = 'interestRate-div';
    div.appendChild(document.createTextNode('"Loan interest rate (percentage)"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'interestRate-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['interestRate']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$35(env, upd) {
  widget$22(env, function (x) {
  upd('interestRate', x.target.value);
});
}
function widget$23(env, func) {
  var div = document.createElement('div');
    div.id = 'loanTerm-div';
    div.appendChild(document.createTextNode('"Loan term (years)"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'loanTerm-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['loanTerm']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$36(env, upd) {
  widget$23(env, function (x) {
  upd('loanTerm', x.target.value);
});
}
function widget$24(env) {
  var div = document.createElement('div');
    div.id = 'totalInterest-div';
    div.appendChild(document.createTextNode('"Total interest to be paid"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'totalInterest-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['totalInterest']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$37(env, upd) {
  widget$24(env);
}
function widget$25(env) {
  var div = document.createElement('div');
    div.id = 'totalRepayment-div';
    div.appendChild(document.createTextNode('"Total amount to be repaid"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'totalRepayment-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['totalRepayment']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$38(env, upd) {
  widget$25(env);
}
function widget$26(env) {
  var div = document.createElement('div');
    div.id = 'monthlyPayment-div';
    div.appendChild(document.createTextNode('"Your monthly loan payment"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'monthlyPayment-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['monthlyPayment']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$39(env, upd) {
  widget$26(env);
}
function widget$27(env) {
  var div = document.createElement('div');
    div.id = 'loanApproved-div';
    div.appendChild(document.createTextNode('"Loan approval status"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'loanApproved-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['loanApproved']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$40(env, upd) {
  widget$27(env);
}
function widget$28(env) {
  var div = document.createElement('div');
    div.id = 'approvalMessage-div';
    div.appendChild(document.createTextNode('"Congratulations! Your loan has been approved."'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'approvalMessage-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['approvalMessage']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$41(env, upd) {
  widget$28(env);
}
function renderQuestion$42(env, upd) {
  renderQuestion$41(env, upd);
}
function widget$29(env) {
  var div = document.createElement('div');
    div.id = 'not_approvalMessage-div';
    div.appendChild(document.createTextNode('"Unfortunately, your loan application was not successful."'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'not_approvalMessage-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['not_approvalMessage']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$43(env, upd) {
  widget$29(env);
}
function renderQuestion$44(env, upd) {
  renderQuestion$43(env, upd);
}
function renderQuestion$45(env, upd) {
  renderQuestion$42(env, upd);
            renderQuestion$44(env, upd);
}
function render$0(env, upd) {
  renderQuestion$0(env, upd);
renderQuestion$1(env, upd);
renderQuestion$2(env, upd);
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
  updateVisibility$45(vis, env);
}