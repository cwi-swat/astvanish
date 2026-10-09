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
function widget$0(env, func) {
  page.append('"What is your full name?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "text");
            elt.value = env['fullName']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$0(env) {
  widget$0(env, function (x) { update('fullName', x.value); });
}
function widget$1(env, func) {
  page.append('"How old are you?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['age']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$1(env) {
  widget$1(env, function (x) { update('age', x.value); });
}
function widget$2(env, func) {
  page.append('"Do you have a driver\'s license?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['hasLicense']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$2(env) {
  widget$2(env, function (x) { update('hasLicense', x.value); });
}
function widget$3(env, func) {
  page.append('"Are you currently in school?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['inSchool']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$3(env) {
  widget$3(env, function (x) { update('inSchool', x.value); });
}
function widget$4(env, func) {
  page.append('"What is your current grade?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['grade']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$4(env) {
  widget$4(env, function (x) { update('grade', x.value); });
}
function renderQuestion$5(env) {
  renderQuestion$4(env);
}
function renderQuestion$6(env) {
  renderQuestion$5(env);
}
function renderQuestion$7(env) {
  renderQuestion$3(env); 
  renderQuestion$6(env);
}
function widget$5(env, func) {
  page.append('"Are you currently employed?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['employed']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$8(env) {
  widget$5(env, function (x) { update('employed', x.value); });
}
function widget$6(env, func) {
  page.append('"What is your job title?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "text");
            elt.value = env['jobTitle']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$9(env) {
  widget$6(env, function (x) { update('jobTitle', x.value); });
}
function widget$7(env, func) {
  page.append('"How many years have you worked in your current job?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['yearsInJob']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$10(env) {
  widget$7(env, function (x) { update('yearsInJob', x.value); });
}
function widget$8(env, func) {
  page.append('"What is your monthly salary?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['monthlySalary']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$11(env) {
  widget$8(env, function (x) { update('monthlySalary', x.value); });
}
function widget$9(env, func) {
  page.append('"What is your total monthly expenses?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['monthlyExpenses']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$12(env) {
  widget$9(env, function (x) { update('monthlyExpenses', x.value); });
}
function widget$10(env) {
  page.append('"Your annual savings"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['annualSavings']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$13(env) {
  widget$10(env);
}
function renderQuestion$14(env) {
  renderQuestion$9(env); 
  renderQuestion$10(env); 
  renderQuestion$11(env); 
  renderQuestion$12(env); 
  renderQuestion$13(env);
}
function widget$11(env, func) {
  page.append('"Are you actively looking for a job?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['lookingForJob']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$15(env) {
  widget$11(env, function (x) { update('lookingForJob', x.value); });
}
function renderQuestion$16(env) {
  renderQuestion$15(env);
}
function renderQuestion$17(env) {
  renderQuestion$14(env);
            renderQuestion$16(env);
}
function renderQuestion$18(env) {
  renderQuestion$8(env); 
  renderQuestion$17(env);
}
function widget$12(env, func) {
  page.append('"Are you retired?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['retired']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$19(env) {
  widget$12(env, function (x) { update('retired', x.value); });
}
function widget$13(env, func) {
  page.append('"How long have you been retired?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['yearsRetired']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$20(env) {
  widget$13(env, function (x) { update('yearsRetired', x.value); });
}
function widget$14(env, func) {
  page.append('"What is your annual pension?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['annualPension']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$21(env) {
  widget$14(env, function (x) { update('annualPension', x.value); });
}
function widget$15(env, func) {
  page.append('"What is your annual healthcare expense?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['healthcareExpenses']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$22(env) {
  widget$15(env, function (x) { update('healthcareExpenses', x.value); });
}
function widget$16(env) {
  page.append('"Net annual pension after healthcare"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['netPension']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$23(env) {
  widget$16(env);
}
function renderQuestion$24(env) {
  renderQuestion$20(env); 
  renderQuestion$21(env); 
  renderQuestion$22(env); 
  renderQuestion$23(env);
}
function renderQuestion$25(env) {
  renderQuestion$24(env);
}
function renderQuestion$26(env) {
  renderQuestion$19(env); 
  renderQuestion$25(env);
}
function renderQuestion$27(env) {
  renderQuestion$18(env);
            renderQuestion$26(env);
}
function renderQuestion$28(env) {
  renderQuestion$27(env);
}
function renderQuestion$29(env) {
  renderQuestion$7(env);
            renderQuestion$28(env);
}
function widget$17(env) {
  page.append('"Are you eligible for a senior citizen discount?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['seniorDiscount']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$30(env) {
  widget$17(env);
}
function widget$18(env, func) {
  page.append('"What is your annual income?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['income']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$31(env) {
  widget$18(env, function (x) { update('income', x.value); });
}
function widget$19(env, func) {
  page.append('"What are your monthly debts?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['monthlyDebts']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$32(env) {
  widget$19(env, function (x) { update('monthlyDebts', x.value); });
}
function widget$20(env, func) {
  page.append('"Do you have a co-signer for loans?"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['hasCoSigner']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$33(env) {
  widget$20(env, function (x) { update('hasCoSigner', x.value); });
}
function widget$21(env, func) {
  page.append('"Desired loan amount"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['loanAmount']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$34(env) {
  widget$21(env, function (x) { update('loanAmount', x.value); });
}
function widget$22(env, func) {
  page.append('"Loan interest rate (percentage)"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['interestRate']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$35(env) {
  widget$22(env, function (x) { update('interestRate', x.value); });
}
function widget$23(env, func) {
  page.append('"Loan term (years)"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['loanTerm']; 
  page.append(elt); 
  elt.onchange = func;
}
function renderQuestion$36(env) {
  widget$23(env, function (x) { update('loanTerm', x.value); });
}
function widget$24(env) {
  page.append('"Total interest to be paid"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['totalInterest']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$37(env) {
  widget$24(env);
}
function widget$25(env) {
  page.append('"Total amount to be repaid"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['totalRepayment']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$38(env) {
  widget$25(env);
}
function widget$26(env) {
  page.append('"Your monthly loan payment"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "number");
            elt.value = env['monthlyPayment']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$39(env) {
  widget$26(env);
}
function widget$27(env) {
  page.append('"Loan approval status"');
    var elt = createElement("input"); 
  elt.setAttribute("type", "checkbox");
            elt.checked = env['loanApproved']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$40(env) {
  widget$27(env);
}
function widget$28(env) {
  page.append('"Congratulations! Your loan has been approved."');
    var elt = createElement("input"); 
  elt.setAttribute("type", "text");
            elt.value = env['approvalMessage']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$41(env) {
  widget$28(env);
}
function renderQuestion$42(env) {
  renderQuestion$41(env);
}
function widget$29(env) {
  page.append('"Unfortunately, your loan application was not successful."');
    var elt = createElement("input"); 
  elt.setAttribute("type", "text");
            elt.value = env['not_approvalMessage']; 
  page.append(elt); 
  elt.disabled = true;
}
function renderQuestion$43(env) {
  widget$29(env);
}
function renderQuestion$44(env) {
  renderQuestion$43(env);
}
function renderQuestion$45(env) {
  renderQuestion$42(env);
            renderQuestion$44(env);
}
function render$0(env) {
  renderQuestion$0(env);
renderQuestion$1(env);
renderQuestion$2(env);
renderQuestion$29(env);
renderQuestion$30(env);
renderQuestion$31(env);
renderQuestion$32(env);
renderQuestion$33(env);
renderQuestion$34(env);
renderQuestion$35(env);
renderQuestion$36(env);
renderQuestion$37(env);
renderQuestion$38(env);
renderQuestion$39(env);
renderQuestion$40(env);
renderQuestion$45(env);
}
function updateVisibility$0(vis, env) {
  var elt = getElementById('fullName-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$1(vis, env) {
  var elt = getElementById('age-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$2(vis, env) {
  var elt = getElementById('hasLicense-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
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
function updateVisibility$3(vis, env) {
  var elt = getElementById('inSchool-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function eve$3(env) {
  return env['inSchool'];
}
function updateVisibility$4(vis, env) {
  var elt = getElementById('grade-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
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
function updateVisibility$8(vis, env) {
  var elt = getElementById('employed-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function eve$8(env) {
  return env['employed'];
}
function updateVisibility$9(vis, env) {
  var elt = getElementById('jobTitle-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$10(vis, env) {
  var elt = getElementById('yearsInJob-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$11(vis, env) {
  var elt = getElementById('monthlySalary-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$12(vis, env) {
  var elt = getElementById('monthlyExpenses-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$13(vis, env) {
  var elt = getElementById('annualSavings-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$14(vis, env) {
  updateVisibility$9(vis, env); 
  updateVisibility$10(vis, env); 
  updateVisibility$11(vis, env); 
  updateVisibility$12(vis, env); 
  updateVisibility$13(vis, env);
}
function updateVisibility$15(vis, env) {
  var elt = getElementById('lookingForJob-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
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
  var elt = getElementById('retired-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function eve$9(env) {
  return env['retired'];
}
function updateVisibility$20(vis, env) {
  var elt = getElementById('yearsRetired-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$21(vis, env) {
  var elt = getElementById('annualPension-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$22(vis, env) {
  var elt = getElementById('healthcareExpenses-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$23(vis, env) {
  var elt = getElementById('netPension-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$24(vis, env) {
  updateVisibility$20(vis, env); 
  updateVisibility$21(vis, env); 
  updateVisibility$22(vis, env); 
  updateVisibility$23(vis, env);
}
function updateVisibility$25(vis, env) {
  updateVisibility$24(eve$9(env), env);
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
  var elt = getElementById('seniorDiscount-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$31(vis, env) {
  var elt = getElementById('income-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$32(vis, env) {
  var elt = getElementById('monthlyDebts-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$33(vis, env) {
  var elt = getElementById('hasCoSigner-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$34(vis, env) {
  var elt = getElementById('loanAmount-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$35(vis, env) {
  var elt = getElementById('interestRate-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$36(vis, env) {
  var elt = getElementById('loanTerm-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$37(vis, env) {
  var elt = getElementById('totalInterest-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$38(vis, env) {
  var elt = getElementById('totalRepayment-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$39(vis, env) {
  var elt = getElementById('monthlyPayment-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$40(vis, env) {
  var elt = getElementById('loanApproved-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function eve$10(env) {
  return env['loanApproved'];
}
function updateVisibility$41(vis, env) {
  var elt = getElementById('approvalMessage-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$42(vis, env) {
  updateVisibility$41(vis, env);
}
function updateVisibility$43(vis, env) {
  var elt = getElementById('not_approvalMessage-div');
            elt.style = 'display: ' + vis ? 'block;' : 'none;';
}
function updateVisibility$44(vis, env) {
  updateVisibility$43(vis, env);
}
function updateVisibility$45(vis, env) {
  updateVisibility$42(eve$10(env), env);
            updateVisibility$44(!eve$10(env), env);
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
function eve$11(env) {
  return env['monthlySalary'];
}
function eve$12(env) {
  return env['monthlyExpenses'];
}
function eve$13(env) {
  return eve$11(env) - eve$12(env);
}
function eve$14(env) {
  return eve$13(env);
}
function eve$15(env) {
  return parseInt('12');
}
function eve$16(env) {
  return eve$14(env) * eve$15(env);
}
function updateValue$0(val) {
  var elt = getElementById('annualSavings-widget'); 
  elt.value = val;
}
function computeQuestion$3(env) {
  var val = eve$16(env);
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
function eve$17(env) {
  return env['annualPension'];
}
function eve$18(env) {
  return env['healthcareExpenses'];
}
function eve$19(env) {
  return eve$17(env) - eve$18(env);
}
function updateValue$1(val) {
  var elt = getElementById('netPension-widget'); 
  elt.value = val;
}
function computeQuestion$8(env) {
  var val = eve$19(env);
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
  if (eve$9(env)) {
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
function eve$20(env) {
  return eve$0(env) >= eve$5(env);
}
function eve$21(env) {
  return eve$20(env) && eve$9(env);
}
function updateValue$2(val) {
  var elt = getElementById('seniorDiscount-widget'); 
  elt.checked = val;
}
function computeQuestion$15(env) {
  var val = eve$21(env);
            if (val !== env['seniorDiscount']) {
   env['seniorDiscount'] = val;
                updateValue$2(val);
                return true;
}
}
function eve$22(env) {
  return env['loanAmount'];
}
function eve$23(env) {
  return env['interestRate'];
}
function eve$24(env) {
  return eve$22(env) * eve$23(env);
}
function eve$25(env) {
  return env['loanTerm'];
}
function eve$26(env) {
  return eve$24(env) * eve$25(env);
}
function eve$27(env) {
  return eve$26(env);
}
function eve$28(env) {
  return parseInt('100');
}
function eve$29(env) {
  return Math.round(eve$27(env) / eve$28(env));
}
function updateValue$3(val) {
  var elt = getElementById('totalInterest-widget'); 
  elt.value = val;
}
function computeQuestion$16(env) {
  var val = eve$29(env);
            if (val !== env['totalInterest']) {
   env['totalInterest'] = val;
                updateValue$3(val);
                return true;
}
}
function eve$30(env) {
  return env['totalInterest'];
}
function eve$31(env) {
  return eve$22(env) + eve$30(env);
}
function updateValue$4(val) {
  var elt = getElementById('totalRepayment-widget'); 
  elt.value = val;
}
function computeQuestion$17(env) {
  var val = eve$31(env);
            if (val !== env['totalRepayment']) {
   env['totalRepayment'] = val;
                updateValue$4(val);
                return true;
}
}
function eve$32(env) {
  return env['totalRepayment'];
}
function eve$33(env) {
  return eve$25(env) * eve$15(env);
}
function eve$34(env) {
  return eve$33(env);
}
function eve$35(env) {
  return Math.round(eve$32(env) / eve$34(env));
}
function updateValue$5(val) {
  var elt = getElementById('monthlyPayment-widget'); 
  elt.value = val;
}
function computeQuestion$18(env) {
  var val = eve$35(env);
            if (val !== env['monthlyPayment']) {
   env['monthlyPayment'] = val;
                updateValue$5(val);
                return true;
}
}
function eve$36(env) {
  return env['income'];
}
function eve$37(env) {
  return parseInt('50000');
}
function eve$38(env) {
  return eve$36(env) > eve$37(env);
}
function eve$39(env) {
  return env['monthlyDebts'];
}
function eve$40(env) {
  return parseInt('10000');
}
function eve$41(env) {
  return eve$39(env) < eve$40(env);
}
function eve$42(env) {
  return eve$38(env) && eve$41(env);
}
function eve$43(env) {
  return eve$42(env);
}
function eve$44(env) {
  return env['hasCoSigner'];
}
function eve$45(env) {
  return eve$43(env) || eve$44(env);
}
function updateValue$6(val) {
  var elt = getElementById('loanApproved-widget'); 
  elt.checked = val;
}
function computeQuestion$19(env) {
  var val = eve$45(env);
            if (val !== env['loanApproved']) {
   env['loanApproved'] = val;
                updateValue$6(val);
                return true;
}
}
function eve$46(env) {
  return unquote('"Approved"');
}
function updateValue$7(val) {
  var elt = getElementById('approvalMessage-widget'); 
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
  var elt = getElementById('not_approvalMessage-widget'); 
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
  if (eve$10(env)) 
   {
   return computeQuestion$21(env);
} 
else 
   {
   return computeQuestion$23(env);
}
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
function run$0() {
  var env = {};
    initialize$0(env);
    render$0(env);
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
  update = compute$0(env);
}