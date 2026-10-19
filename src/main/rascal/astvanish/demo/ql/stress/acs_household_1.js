export {run$0 as run};
function initializeQuestion$0(env) {
  env['nPersons'] = 0;
}
function initializeQuestion$1(env) {
  env['hBuildingType'] = '';
}
function initializeQuestion$2(env) {
  env['hYearBuilt'] = 0;
}
function initializeQuestion$3(env) {
  env['hMoveIn'] = 0;
}
function initializeQuestion$4(env) {
  env['hAcre'] = false;
}
function initializeQuestion$5(env) {
  env['hAgSales'] = 0;
}
function initializeQuestion$6(env) {
  initializeQuestion$5(env);
}
function initializeQuestion$7(env) {
  initializeQuestion$6(env);
}
function initializeQuestion$8(env) {
  env['hBedrooms'] = 0;
}
function initializeQuestion$9(env) {
  env['hRooms'] = 0;
}
function initializeQuestion$10(env) {
  env['hWater'] = false;
}
function initializeQuestion$11(env) {
  env['hShower'] = false;
}
function initializeQuestion$12(env) {
  env['hFridge'] = false;
}
function initializeQuestion$13(env) {
  env['hStove'] = false;
}
function initializeQuestion$14(env) {
  env['hBroadband'] = false;
}
function initializeQuestion$15(env) {
  env['hVehicles'] = 0;
}
function initializeQuestion$16(env) {
  env['hElectricity'] = 0;
}
function initializeQuestion$17(env) {
  env['hGas'] = 0;
}
function initializeQuestion$18(env) {
  env['hWaterCost'] = 0;
}
function initializeQuestion$19(env) {
  env['hOwned'] = false;
}
function initializeQuestion$20(env) {
  env['hMortgage'] = false;
}
function initializeQuestion$21(env) {
  env['hMortgagePayment'] = 0;
}
function initializeQuestion$22(env) {
  env['hMortgageTaxes'] = false;
}
function initializeQuestion$23(env) {
  initializeQuestion$21(env); 
  initializeQuestion$22(env);
}
function initializeQuestion$24(env) {
  initializeQuestion$23(env);
}
function initializeQuestion$25(env) {
  env['hRealEstateTaxes'] = 0;
}
function initializeQuestion$26(env) {
  env['hInsurance'] = 0;
}
function initializeQuestion$27(env) {
  env['hValue'] = 0;
}
function initializeQuestion$28(env) {
  initializeQuestion$20(env); 
  initializeQuestion$24(env); 
  initializeQuestion$25(env); 
  initializeQuestion$26(env); 
  initializeQuestion$27(env);
}
function initializeQuestion$29(env) {
  env['hRent'] = 0;
}
function initializeQuestion$30(env) {
  env['hRentMeals'] = false;
}
function initializeQuestion$31(env) {
  initializeQuestion$29(env); 
  initializeQuestion$30(env);
}
function initializeQuestion$32(env) {
  initializeQuestion$28(env);
            initializeQuestion$31(env);
}
function initializeQuestion$33(env) {
  env['hMonthlyCost'] = 0;
}
function initializeQuestion$34(env) {
  env['hCrowded'] = false;
}
function initializeQuestion$35(env) {
  env['p1Name'] = '';
}
function initializeQuestion$36(env) {
  env['p1Female'] = false;
}
function initializeQuestion$37(env) {
  env['p1Age'] = 0;
}
function initializeQuestion$38(env) {
  env['p1Hispanic'] = false;
}
function initializeQuestion$39(env) {
  env['p1HispanicOrigin'] = '';
}
function initializeQuestion$40(env) {
  initializeQuestion$39(env);
}
function initializeQuestion$41(env) {
  initializeQuestion$40(env);
}
function initializeQuestion$42(env) {
  env['p1Race'] = '';
}
function initializeQuestion$43(env) {
  env['p1BornUS'] = false;
}
function initializeQuestion$44(env) {
  env['p1BirthCountry'] = '';
}
function initializeQuestion$45(env) {
  env['p1Naturalized'] = false;
}
function initializeQuestion$46(env) {
  env['p1YearArrived'] = 0;
}
function initializeQuestion$47(env) {
  initializeQuestion$44(env); 
  initializeQuestion$45(env); 
  initializeQuestion$46(env);
}
function initializeQuestion$48(env) {
  initializeQuestion$47(env);
}
function initializeQuestion$49(env) {
  env['p1InSchool'] = false;
}
function initializeQuestion$50(env) {
  env['p1SchoolGrade'] = '';
}
function initializeQuestion$51(env) {
  initializeQuestion$50(env);
}
function initializeQuestion$52(env) {
  initializeQuestion$51(env);
}
function initializeQuestion$53(env) {
  initializeQuestion$49(env); 
  initializeQuestion$52(env);
}
function initializeQuestion$54(env) {
  initializeQuestion$53(env);
}
function initializeQuestion$55(env) {
  env['p1OtherLanguage'] = false;
}
function initializeQuestion$56(env) {
  env['p1Language'] = '';
}
function initializeQuestion$57(env) {
  env['p1EnglishWell'] = false;
}
function initializeQuestion$58(env) {
  initializeQuestion$56(env); 
  initializeQuestion$57(env);
}
function initializeQuestion$59(env) {
  initializeQuestion$58(env);
}
function initializeQuestion$60(env) {
  initializeQuestion$55(env); 
  initializeQuestion$59(env);
}
function initializeQuestion$61(env) {
  initializeQuestion$60(env);
}
function initializeQuestion$62(env) {
  env['p1SameHouse'] = false;
}
function initializeQuestion$63(env) {
  env['p1InsEmployer'] = false;
}
function initializeQuestion$64(env) {
  env['p1InsMedicare'] = false;
}
function initializeQuestion$65(env) {
  env['p1InsMedicaid'] = false;
}
function initializeQuestion$66(env) {
  env['p1Uninsured'] = false;
}
function initializeQuestion$67(env) {
  env['p1DifficultyCognitive'] = false;
}
function initializeQuestion$68(env) {
  env['p1DifficultyWalking'] = false;
}
function initializeQuestion$69(env) {
  env['p1Married'] = false;
}
function initializeQuestion$70(env) {
  env['p1Education'] = '';
}
function initializeQuestion$71(env) {
  initializeQuestion$69(env); 
  initializeQuestion$70(env);
}
function initializeQuestion$72(env) {
  initializeQuestion$71(env);
}
function initializeQuestion$73(env) {
  env['p1WorkedLastWeek'] = false;
}
function initializeQuestion$74(env) {
  env['p1WorkAddress'] = '';
}
function initializeQuestion$75(env) {
  env['p1CommuteMinutes'] = 0;
}
function initializeQuestion$76(env) {
  env['p1LongCommute'] = false;
}
function initializeQuestion$77(env) {
  env['p1Hours'] = 0;
}
function initializeQuestion$78(env) {
  env['p1FullTime'] = false;
}
function initializeQuestion$79(env) {
  env['p1SelfEmployed'] = false;
}
function initializeQuestion$80(env) {
  env['p1Occupation'] = '';
}
function initializeQuestion$81(env) {
  initializeQuestion$74(env); 
  initializeQuestion$75(env); 
  initializeQuestion$76(env); 
  initializeQuestion$77(env); 
  initializeQuestion$78(env); 
  initializeQuestion$79(env); 
  initializeQuestion$80(env);
}
function initializeQuestion$82(env) {
  env['p1LookingForWork'] = false;
}
function initializeQuestion$83(env) {
  initializeQuestion$82(env);
}
function initializeQuestion$84(env) {
  initializeQuestion$81(env);
            initializeQuestion$83(env);
}
function initializeQuestion$85(env) {
  initializeQuestion$73(env); 
  initializeQuestion$84(env);
}
function initializeQuestion$86(env) {
  initializeQuestion$85(env);
}
function initializeQuestion$87(env) {
  env['p1Wages'] = 0;
}
function initializeQuestion$88(env) {
  env['p1SelfEmpIncome'] = 0;
}
function initializeQuestion$89(env) {
  env['p1Interest'] = 0;
}
function initializeQuestion$90(env) {
  env['p1SocialSecurity'] = 0;
}
function initializeQuestion$91(env) {
  env['p1Ssi'] = 0;
}
function initializeQuestion$92(env) {
  env['p1Welfare'] = 0;
}
function initializeQuestion$93(env) {
  env['p1Pension'] = 0;
}
function initializeQuestion$94(env) {
  env['p1OtherIncome'] = 0;
}
function initializeQuestion$95(env) {
  initializeQuestion$87(env); 
  initializeQuestion$88(env); 
  initializeQuestion$89(env); 
  initializeQuestion$90(env); 
  initializeQuestion$91(env); 
  initializeQuestion$92(env); 
  initializeQuestion$93(env); 
  initializeQuestion$94(env);
}
function initializeQuestion$96(env) {
  initializeQuestion$95(env);
}
function initializeQuestion$97(env) {
  env['p1Income'] = 0;
}
function initializeQuestion$98(env) {
  env['p1OnAssistance'] = false;
}
function initializeQuestion$99(env) {
  env['p1HhIncome'] = 0;
}
function initializeQuestion$100(env) {
  env['p1HhWorkers'] = 0;
}
function initializeQuestion$101(env) {
  env['hhIncome'] = 0;
}
function initializeQuestion$102(env) {
  env['hhWorkers'] = 0;
}
function initializeQuestion$103(env) {
  env['hhBurden'] = 0;
}
function initializeQuestion$104(env) {
  env['hhCostBurdened'] = false;
}
function initializeQuestion$105(env) {
  env['hhSeverelyBurdened'] = false;
}
function initializeQuestion$106(env) {
  env['hhPovertyLine'] = 0;
}
function initializeQuestion$107(env) {
  env['hhPoor'] = false;
}
function initializeQuestion$108(env) {
  env['hhNoWorker'] = false;
}
function initialize$0(env) {
  initializeQuestion$0(env);
initializeQuestion$1(env);
initializeQuestion$2(env);
initializeQuestion$3(env);
initializeQuestion$4(env);
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
initializeQuestion$19(env);
initializeQuestion$32(env);
initializeQuestion$33(env);
initializeQuestion$34(env);
initializeQuestion$35(env);
initializeQuestion$36(env);
initializeQuestion$37(env);
initializeQuestion$38(env);
initializeQuestion$41(env);
initializeQuestion$42(env);
initializeQuestion$43(env);
initializeQuestion$48(env);
initializeQuestion$54(env);
initializeQuestion$61(env);
initializeQuestion$62(env);
initializeQuestion$63(env);
initializeQuestion$64(env);
initializeQuestion$65(env);
initializeQuestion$66(env);
initializeQuestion$67(env);
initializeQuestion$68(env);
initializeQuestion$72(env);
initializeQuestion$86(env);
initializeQuestion$96(env);
initializeQuestion$97(env);
initializeQuestion$98(env);
initializeQuestion$99(env);
initializeQuestion$100(env);
initializeQuestion$101(env);
initializeQuestion$102(env);
initializeQuestion$103(env);
initializeQuestion$104(env);
initializeQuestion$105(env);
initializeQuestion$106(env);
initializeQuestion$107(env);
initializeQuestion$108(env);
}
function eve$0(env) {
  return env['hAcre'];
}
function computeQuestion$0(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$1(env) {
  if (eve$0(env)) {
   return computeQuestion$0(env);
}
}
function eve$1(env) {
  return env['hOwned'];
}
function eve$2(env) {
  return env['hMortgage'];
}
function computeQuestion$2(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$3(env) {
  if (eve$2(env)) {
   return computeQuestion$2(env);
}
}
function computeQuestion$4(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$3(env); 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$5(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$6(env) {
  if (eve$1(env)) 
   {
   return computeQuestion$4(env);
} 
else 
   {
   return computeQuestion$5(env);
}
}
function eve$3(env) {
  return env['hMortgagePayment'];
}
function eve$4(env) {
  return env['hRent'];
}
function eve$5(env) {
  return eve$3(env) + eve$4(env);
}
function eve$6(env) {
  return env['hElectricity'];
}
function eve$7(env) {
  return eve$5(env) + eve$6(env);
}
function eve$8(env) {
  return env['hGas'];
}
function eve$9(env) {
  return eve$7(env) + eve$8(env);
}
function eve$10(env) {
  return env['hWaterCost'];
}
function eve$11(env) {
  return parseInt('12');
}
function eve$12(env) {
  var x = eve$10(env);
            var y = eve$11(env);
            if (y === 0) {
   window.alert('Division by zero in: hWaterCost / 12');
                return 0;
}return Math.round(x / y);
}
function eve$13(env) {
  return eve$9(env) + eve$12(env);
}
function eve$14(env) {
  return env['hRealEstateTaxes'];
}
function eve$15(env) {
  var x = eve$14(env);
            var y = eve$11(env);
            if (y === 0) {
   window.alert('Division by zero in: hRealEstateTaxes / 12');
                return 0;
}return Math.round(x / y);
}
function eve$16(env) {
  return eve$13(env) + eve$15(env);
}
function eve$17(env) {
  return env['hInsurance'];
}
function eve$18(env) {
  var x = eve$17(env);
            var y = eve$11(env);
            if (y === 0) {
   window.alert('Division by zero in: hInsurance / 12');
                return 0;
}return Math.round(x / y);
}
function eve$19(env) {
  return eve$16(env) + eve$18(env);
}
function updateValue$0(val) {
  var elt = document.getElementById('hMonthlyCost-widget'); 
  elt.value = val;
}
function computeQuestion$7(env) {
  var val = eve$19(env);
            if (val !== env['hMonthlyCost']) {
   env['hMonthlyCost'] = val;
                updateValue$0(val);
                return true;
}
}
function eve$20(env) {
  return env['nPersons'];
}
function eve$21(env) {
  return env['hRooms'];
}
function eve$22(env) {
  return eve$20(env) > eve$21(env);
}
function updateValue$1(val) {
  var elt = document.getElementById('hCrowded-widget'); 
  elt.checked = val;
}
function computeQuestion$8(env) {
  var val = eve$22(env);
            if (val !== env['hCrowded']) {
   env['hCrowded'] = val;
                updateValue$1(val);
                return true;
}
}
function eve$23(env) {
  return env['p1Hispanic'];
}
function computeQuestion$9(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$10(env) {
  if (eve$23(env)) {
   return computeQuestion$9(env);
}
}
function eve$24(env) {
  return env['p1BornUS'];
}
function eve$25(env) {
  return !eve$24(env);
}
function computeQuestion$11(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$12(env) {
  if (eve$25(env)) {
   return computeQuestion$11(env);
}
}
function eve$26(env) {
  return env['p1Age'];
}
function eve$27(env) {
  return parseInt('3');
}
function eve$28(env) {
  return eve$26(env) >= eve$27(env);
}
function eve$29(env) {
  return env['p1InSchool'];
}
function computeQuestion$13(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$14(env) {
  if (eve$29(env)) {
   return computeQuestion$13(env);
}
}
function computeQuestion$15(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$14(env); 
  return change;
}
function computeQuestion$16(env) {
  if (eve$28(env)) {
   return computeQuestion$15(env);
}
}
function eve$30(env) {
  return parseInt('5');
}
function eve$31(env) {
  return eve$26(env) >= eve$30(env);
}
function eve$32(env) {
  return env['p1OtherLanguage'];
}
function computeQuestion$17(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$18(env) {
  if (eve$32(env)) {
   return computeQuestion$17(env);
}
}
function computeQuestion$19(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$18(env); 
  return change;
}
function computeQuestion$20(env) {
  if (eve$31(env)) {
   return computeQuestion$19(env);
}
}
function eve$33(env) {
  return env['p1InsEmployer'];
}
function eve$34(env) {
  return !eve$33(env);
}
function eve$35(env) {
  return env['p1InsMedicare'];
}
function eve$36(env) {
  return !eve$35(env);
}
function eve$37(env) {
  return eve$34(env) && eve$36(env);
}
function eve$38(env) {
  return env['p1InsMedicaid'];
}
function eve$39(env) {
  return !eve$38(env);
}
function eve$40(env) {
  return eve$37(env) && eve$39(env);
}
function updateValue$2(val) {
  var elt = document.getElementById('p1Uninsured-widget'); 
  elt.checked = val;
}
function computeQuestion$21(env) {
  var val = eve$40(env);
            if (val !== env['p1Uninsured']) {
   env['p1Uninsured'] = val;
                updateValue$2(val);
                return true;
}
}
function eve$41(env) {
  return parseInt('15');
}
function eve$42(env) {
  return eve$26(env) >= eve$41(env);
}
function computeQuestion$22(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$23(env) {
  if (eve$42(env)) {
   return computeQuestion$22(env);
}
}
function eve$43(env) {
  return parseInt('16');
}
function eve$44(env) {
  return eve$26(env) >= eve$43(env);
}
function eve$45(env) {
  return env['p1WorkedLastWeek'];
}
function eve$46(env) {
  return env['p1CommuteMinutes'];
}
function eve$47(env) {
  return parseInt('60');
}
function eve$48(env) {
  return eve$46(env) >= eve$47(env);
}
function updateValue$3(val) {
  var elt = document.getElementById('p1LongCommute-widget'); 
  elt.checked = val;
}
function computeQuestion$24(env) {
  var val = eve$48(env);
            if (val !== env['p1LongCommute']) {
   env['p1LongCommute'] = val;
                updateValue$3(val);
                return true;
}
}
function eve$49(env) {
  return env['p1Hours'];
}
function eve$50(env) {
  return parseInt('35');
}
function eve$51(env) {
  return eve$49(env) >= eve$50(env);
}
function updateValue$4(val) {
  var elt = document.getElementById('p1FullTime-widget'); 
  elt.checked = val;
}
function computeQuestion$25(env) {
  var val = eve$51(env);
            if (val !== env['p1FullTime']) {
   env['p1FullTime'] = val;
                updateValue$4(val);
                return true;
}
}
function computeQuestion$26(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || computeQuestion$24(env); 
  change = change || false; 
  change = change || computeQuestion$25(env); 
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$27(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$28(env) {
  if (eve$45(env)) 
   {
   return computeQuestion$26(env);
} 
else 
   {
   return computeQuestion$27(env);
}
}
function computeQuestion$29(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$28(env); 
  return change;
}
function computeQuestion$30(env) {
  if (eve$44(env)) {
   return computeQuestion$29(env);
}
}
function computeQuestion$31(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$32(env) {
  if (eve$42(env)) {
   return computeQuestion$31(env);
}
}
function eve$52(env) {
  return env['p1Wages'];
}
function eve$53(env) {
  return env['p1SelfEmpIncome'];
}
function eve$54(env) {
  return eve$52(env) + eve$53(env);
}
function eve$55(env) {
  return env['p1Interest'];
}
function eve$56(env) {
  return eve$54(env) + eve$55(env);
}
function eve$57(env) {
  return env['p1SocialSecurity'];
}
function eve$58(env) {
  return eve$56(env) + eve$57(env);
}
function eve$59(env) {
  return env['p1Ssi'];
}
function eve$60(env) {
  return eve$58(env) + eve$59(env);
}
function eve$61(env) {
  return env['p1Welfare'];
}
function eve$62(env) {
  return eve$60(env) + eve$61(env);
}
function eve$63(env) {
  return env['p1Pension'];
}
function eve$64(env) {
  return eve$62(env) + eve$63(env);
}
function eve$65(env) {
  return env['p1OtherIncome'];
}
function eve$66(env) {
  return eve$64(env) + eve$65(env);
}
function updateValue$5(val) {
  var elt = document.getElementById('p1Income-widget'); 
  elt.value = val;
}
function computeQuestion$33(env) {
  var val = eve$66(env);
            if (val !== env['p1Income']) {
   env['p1Income'] = val;
                updateValue$5(val);
                return true;
}
}
function eve$67(env) {
  return parseInt('0');
}
function eve$68(env) {
  return eve$59(env) > eve$67(env);
}
function eve$69(env) {
  return eve$61(env) > eve$67(env);
}
function eve$70(env) {
  return eve$68(env) || eve$69(env);
}
function updateValue$6(val) {
  var elt = document.getElementById('p1OnAssistance-widget'); 
  elt.checked = val;
}
function computeQuestion$34(env) {
  var val = eve$70(env);
            if (val !== env['p1OnAssistance']) {
   env['p1OnAssistance'] = val;
                updateValue$6(val);
                return true;
}
}
function eve$71(env) {
  return env['p1Income'];
}
function updateValue$7(val) {
  var elt = document.getElementById('p1HhIncome-widget'); 
  elt.value = val;
}
function computeQuestion$35(env) {
  var val = eve$71(env);
            if (val !== env['p1HhIncome']) {
   env['p1HhIncome'] = val;
                updateValue$7(val);
                return true;
}
}
function eve$72(env) {
  return parseInt('98');
}
function eve$73(env) {
  return eve$49(env) + eve$72(env);
}
function eve$74(env) {
  return eve$73(env);
}
function eve$75(env) {
  return parseInt('99');
}
function eve$76(env) {
  var x = eve$74(env);
            var y = eve$75(env);
            if (y === 0) {
   window.alert('Division by zero in: (p1Hours + 98) / 99');
                return 0;
}return Math.round(x / y);
}
function updateValue$8(val) {
  var elt = document.getElementById('p1HhWorkers-widget'); 
  elt.value = val;
}
function computeQuestion$36(env) {
  var val = eve$76(env);
            if (val !== env['p1HhWorkers']) {
   env['p1HhWorkers'] = val;
                updateValue$8(val);
                return true;
}
}
function eve$77(env) {
  return env['p1HhIncome'];
}
function updateValue$9(val) {
  var elt = document.getElementById('hhIncome-widget'); 
  elt.value = val;
}
function computeQuestion$37(env) {
  var val = eve$77(env);
            if (val !== env['hhIncome']) {
   env['hhIncome'] = val;
                updateValue$9(val);
                return true;
}
}
function eve$78(env) {
  return env['p1HhWorkers'];
}
function updateValue$10(val) {
  var elt = document.getElementById('hhWorkers-widget'); 
  elt.value = val;
}
function computeQuestion$38(env) {
  var val = eve$78(env);
            if (val !== env['hhWorkers']) {
   env['hhWorkers'] = val;
                updateValue$10(val);
                return true;
}
}
function eve$79(env) {
  return env['hMonthlyCost'];
}
function eve$80(env) {
  return eve$79(env) * eve$11(env);
}
function eve$81(env) {
  return parseInt('100');
}
function eve$82(env) {
  return eve$80(env) * eve$81(env);
}
function eve$83(env) {
  return env['hhIncome'];
}
function eve$84(env) {
  return parseInt('1');
}
function eve$85(env) {
  return eve$83(env) + eve$84(env);
}
function eve$86(env) {
  return eve$85(env);
}
function eve$87(env) {
  var x = eve$82(env);
            var y = eve$86(env);
            if (y === 0) {
   window.alert('Division by zero in: hMonthlyCost * 12 * 100 / (hhIncome + 1)');
                return 0;
}return Math.round(x / y);
}
function updateValue$11(val) {
  var elt = document.getElementById('hhBurden-widget'); 
  elt.value = val;
}
function computeQuestion$39(env) {
  var val = eve$87(env);
            if (val !== env['hhBurden']) {
   env['hhBurden'] = val;
                updateValue$11(val);
                return true;
}
}
function eve$88(env) {
  return env['hhBurden'];
}
function eve$89(env) {
  return parseInt('30');
}
function eve$90(env) {
  return eve$88(env) > eve$89(env);
}
function updateValue$12(val) {
  var elt = document.getElementById('hhCostBurdened-widget'); 
  elt.checked = val;
}
function computeQuestion$40(env) {
  var val = eve$90(env);
            if (val !== env['hhCostBurdened']) {
   env['hhCostBurdened'] = val;
                updateValue$12(val);
                return true;
}
}
function eve$91(env) {
  return parseInt('50');
}
function eve$92(env) {
  return eve$88(env) > eve$91(env);
}
function updateValue$13(val) {
  var elt = document.getElementById('hhSeverelyBurdened-widget'); 
  elt.checked = val;
}
function computeQuestion$41(env) {
  var val = eve$92(env);
            if (val !== env['hhSeverelyBurdened']) {
   env['hhSeverelyBurdened'] = val;
                updateValue$13(val);
                return true;
}
}
function eve$93(env) {
  return parseInt('14580');
}
function eve$94(env) {
  return eve$20(env) - eve$84(env);
}
function eve$95(env) {
  return eve$94(env);
}
function eve$96(env) {
  return parseInt('5140');
}
function eve$97(env) {
  return eve$95(env) * eve$96(env);
}
function eve$98(env) {
  return eve$93(env) + eve$97(env);
}
function updateValue$14(val) {
  var elt = document.getElementById('hhPovertyLine-widget'); 
  elt.value = val;
}
function computeQuestion$42(env) {
  var val = eve$98(env);
            if (val !== env['hhPovertyLine']) {
   env['hhPovertyLine'] = val;
                updateValue$14(val);
                return true;
}
}
function eve$99(env) {
  return env['hhPovertyLine'];
}
function eve$100(env) {
  return eve$83(env) < eve$99(env);
}
function updateValue$15(val) {
  var elt = document.getElementById('hhPoor-widget'); 
  elt.checked = val;
}
function computeQuestion$43(env) {
  var val = eve$100(env);
            if (val !== env['hhPoor']) {
   env['hhPoor'] = val;
                updateValue$15(val);
                return true;
}
}
function eve$101(env) {
  return env['hhWorkers'];
}
function eve$102(env) {
  return eve$101(env) === eve$67(env);
}
function updateValue$16(val) {
  var elt = document.getElementById('hhNoWorker-widget'); 
  elt.checked = val;
}
function computeQuestion$44(env) {
  var val = eve$102(env);
            if (val !== env['hhNoWorker']) {
   env['hhNoWorker'] = val;
                updateValue$16(val);
                return true;
}
}
function toggleVisibility$0(vis) {
  var elt = document.getElementById('nPersons-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$0(vis, env) {
  toggleVisibility$0(vis);
}
function toggleVisibility$1(vis) {
  var elt = document.getElementById('hBuildingType-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$1(vis, env) {
  toggleVisibility$1(vis);
}
function toggleVisibility$2(vis) {
  var elt = document.getElementById('hYearBuilt-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$2(vis, env) {
  toggleVisibility$2(vis);
}
function toggleVisibility$3(vis) {
  var elt = document.getElementById('hMoveIn-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$3(vis, env) {
  toggleVisibility$3(vis);
}
function toggleVisibility$4(vis) {
  var elt = document.getElementById('hAcre-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$4(vis, env) {
  toggleVisibility$4(vis);
}
function toggleVisibility$5(vis) {
  var elt = document.getElementById('hAgSales-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$5(vis, env) {
  toggleVisibility$5(vis);
}
function updateVisibility$6(vis, env) {
  updateVisibility$5(vis, env);
}
function updateVisibility$7(vis, env) {
  updateVisibility$6(eve$0(env), env);
}
function toggleVisibility$6(vis) {
  var elt = document.getElementById('hBedrooms-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$8(vis, env) {
  toggleVisibility$6(vis);
}
function toggleVisibility$7(vis) {
  var elt = document.getElementById('hRooms-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$9(vis, env) {
  toggleVisibility$7(vis);
}
function toggleVisibility$8(vis) {
  var elt = document.getElementById('hWater-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$10(vis, env) {
  toggleVisibility$8(vis);
}
function toggleVisibility$9(vis) {
  var elt = document.getElementById('hShower-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$11(vis, env) {
  toggleVisibility$9(vis);
}
function toggleVisibility$10(vis) {
  var elt = document.getElementById('hFridge-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$12(vis, env) {
  toggleVisibility$10(vis);
}
function toggleVisibility$11(vis) {
  var elt = document.getElementById('hStove-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$13(vis, env) {
  toggleVisibility$11(vis);
}
function toggleVisibility$12(vis) {
  var elt = document.getElementById('hBroadband-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$14(vis, env) {
  toggleVisibility$12(vis);
}
function toggleVisibility$13(vis) {
  var elt = document.getElementById('hVehicles-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$15(vis, env) {
  toggleVisibility$13(vis);
}
function toggleVisibility$14(vis) {
  var elt = document.getElementById('hElectricity-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$16(vis, env) {
  toggleVisibility$14(vis);
}
function toggleVisibility$15(vis) {
  var elt = document.getElementById('hGas-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$17(vis, env) {
  toggleVisibility$15(vis);
}
function toggleVisibility$16(vis) {
  var elt = document.getElementById('hWaterCost-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$18(vis, env) {
  toggleVisibility$16(vis);
}
function toggleVisibility$17(vis) {
  var elt = document.getElementById('hOwned-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$19(vis, env) {
  toggleVisibility$17(vis);
}
function toggleVisibility$18(vis) {
  var elt = document.getElementById('hMortgage-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$20(vis, env) {
  toggleVisibility$18(vis);
}
function toggleVisibility$19(vis) {
  var elt = document.getElementById('hMortgagePayment-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$21(vis, env) {
  toggleVisibility$19(vis);
}
function toggleVisibility$20(vis) {
  var elt = document.getElementById('hMortgageTaxes-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$22(vis, env) {
  toggleVisibility$20(vis);
}
function updateVisibility$23(vis, env) {
  updateVisibility$21(vis, env); 
  updateVisibility$22(vis, env);
}
function updateVisibility$24(vis, env) {
  updateVisibility$23(eve$2(env), env);
}
function toggleVisibility$21(vis) {
  var elt = document.getElementById('hRealEstateTaxes-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$25(vis, env) {
  toggleVisibility$21(vis);
}
function toggleVisibility$22(vis) {
  var elt = document.getElementById('hInsurance-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$26(vis, env) {
  toggleVisibility$22(vis);
}
function toggleVisibility$23(vis) {
  var elt = document.getElementById('hValue-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$27(vis, env) {
  toggleVisibility$23(vis);
}
function updateVisibility$28(vis, env) {
  updateVisibility$20(vis, env); 
  updateVisibility$24(vis, env); 
  updateVisibility$25(vis, env); 
  updateVisibility$26(vis, env); 
  updateVisibility$27(vis, env);
}
function toggleVisibility$24(vis) {
  var elt = document.getElementById('hRent-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$29(vis, env) {
  toggleVisibility$24(vis);
}
function toggleVisibility$25(vis) {
  var elt = document.getElementById('hRentMeals-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$30(vis, env) {
  toggleVisibility$25(vis);
}
function updateVisibility$31(vis, env) {
  updateVisibility$29(vis, env); 
  updateVisibility$30(vis, env);
}
function updateVisibility$32(vis, env) {
  updateVisibility$28(eve$1(env), env);
            updateVisibility$31(!eve$1(env), env);
}
function toggleVisibility$26(vis) {
  var elt = document.getElementById('hMonthlyCost-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$33(vis, env) {
  toggleVisibility$26(vis);
}
function toggleVisibility$27(vis) {
  var elt = document.getElementById('hCrowded-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$34(vis, env) {
  toggleVisibility$27(vis);
}
function toggleVisibility$28(vis) {
  var elt = document.getElementById('p1Name-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$35(vis, env) {
  toggleVisibility$28(vis);
}
function toggleVisibility$29(vis) {
  var elt = document.getElementById('p1Female-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$36(vis, env) {
  toggleVisibility$29(vis);
}
function toggleVisibility$30(vis) {
  var elt = document.getElementById('p1Age-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$37(vis, env) {
  toggleVisibility$30(vis);
}
function toggleVisibility$31(vis) {
  var elt = document.getElementById('p1Hispanic-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$38(vis, env) {
  toggleVisibility$31(vis);
}
function toggleVisibility$32(vis) {
  var elt = document.getElementById('p1HispanicOrigin-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$39(vis, env) {
  toggleVisibility$32(vis);
}
function updateVisibility$40(vis, env) {
  updateVisibility$39(vis, env);
}
function updateVisibility$41(vis, env) {
  updateVisibility$40(eve$23(env), env);
}
function toggleVisibility$33(vis) {
  var elt = document.getElementById('p1Race-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$42(vis, env) {
  toggleVisibility$33(vis);
}
function toggleVisibility$34(vis) {
  var elt = document.getElementById('p1BornUS-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$43(vis, env) {
  toggleVisibility$34(vis);
}
function toggleVisibility$35(vis) {
  var elt = document.getElementById('p1BirthCountry-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$44(vis, env) {
  toggleVisibility$35(vis);
}
function toggleVisibility$36(vis) {
  var elt = document.getElementById('p1Naturalized-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$45(vis, env) {
  toggleVisibility$36(vis);
}
function toggleVisibility$37(vis) {
  var elt = document.getElementById('p1YearArrived-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$46(vis, env) {
  toggleVisibility$37(vis);
}
function updateVisibility$47(vis, env) {
  updateVisibility$44(vis, env); 
  updateVisibility$45(vis, env); 
  updateVisibility$46(vis, env);
}
function updateVisibility$48(vis, env) {
  updateVisibility$47(eve$25(env), env);
}
function toggleVisibility$38(vis) {
  var elt = document.getElementById('p1InSchool-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$49(vis, env) {
  toggleVisibility$38(vis);
}
function toggleVisibility$39(vis) {
  var elt = document.getElementById('p1SchoolGrade-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$50(vis, env) {
  toggleVisibility$39(vis);
}
function updateVisibility$51(vis, env) {
  updateVisibility$50(vis, env);
}
function updateVisibility$52(vis, env) {
  updateVisibility$51(eve$29(env), env);
}
function updateVisibility$53(vis, env) {
  updateVisibility$49(vis, env); 
  updateVisibility$52(vis, env);
}
function updateVisibility$54(vis, env) {
  updateVisibility$53(eve$28(env), env);
}
function toggleVisibility$40(vis) {
  var elt = document.getElementById('p1OtherLanguage-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$55(vis, env) {
  toggleVisibility$40(vis);
}
function toggleVisibility$41(vis) {
  var elt = document.getElementById('p1Language-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$56(vis, env) {
  toggleVisibility$41(vis);
}
function toggleVisibility$42(vis) {
  var elt = document.getElementById('p1EnglishWell-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$57(vis, env) {
  toggleVisibility$42(vis);
}
function updateVisibility$58(vis, env) {
  updateVisibility$56(vis, env); 
  updateVisibility$57(vis, env);
}
function updateVisibility$59(vis, env) {
  updateVisibility$58(eve$32(env), env);
}
function updateVisibility$60(vis, env) {
  updateVisibility$55(vis, env); 
  updateVisibility$59(vis, env);
}
function updateVisibility$61(vis, env) {
  updateVisibility$60(eve$31(env), env);
}
function toggleVisibility$43(vis) {
  var elt = document.getElementById('p1SameHouse-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$62(vis, env) {
  toggleVisibility$43(vis);
}
function toggleVisibility$44(vis) {
  var elt = document.getElementById('p1InsEmployer-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$63(vis, env) {
  toggleVisibility$44(vis);
}
function toggleVisibility$45(vis) {
  var elt = document.getElementById('p1InsMedicare-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$64(vis, env) {
  toggleVisibility$45(vis);
}
function toggleVisibility$46(vis) {
  var elt = document.getElementById('p1InsMedicaid-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$65(vis, env) {
  toggleVisibility$46(vis);
}
function toggleVisibility$47(vis) {
  var elt = document.getElementById('p1Uninsured-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$66(vis, env) {
  toggleVisibility$47(vis);
}
function toggleVisibility$48(vis) {
  var elt = document.getElementById('p1DifficultyCognitive-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$67(vis, env) {
  toggleVisibility$48(vis);
}
function toggleVisibility$49(vis) {
  var elt = document.getElementById('p1DifficultyWalking-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$68(vis, env) {
  toggleVisibility$49(vis);
}
function toggleVisibility$50(vis) {
  var elt = document.getElementById('p1Married-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$69(vis, env) {
  toggleVisibility$50(vis);
}
function toggleVisibility$51(vis) {
  var elt = document.getElementById('p1Education-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$70(vis, env) {
  toggleVisibility$51(vis);
}
function updateVisibility$71(vis, env) {
  updateVisibility$69(vis, env); 
  updateVisibility$70(vis, env);
}
function updateVisibility$72(vis, env) {
  updateVisibility$71(eve$42(env), env);
}
function toggleVisibility$52(vis) {
  var elt = document.getElementById('p1WorkedLastWeek-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$73(vis, env) {
  toggleVisibility$52(vis);
}
function toggleVisibility$53(vis) {
  var elt = document.getElementById('p1WorkAddress-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$74(vis, env) {
  toggleVisibility$53(vis);
}
function toggleVisibility$54(vis) {
  var elt = document.getElementById('p1CommuteMinutes-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$75(vis, env) {
  toggleVisibility$54(vis);
}
function toggleVisibility$55(vis) {
  var elt = document.getElementById('p1LongCommute-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$76(vis, env) {
  toggleVisibility$55(vis);
}
function toggleVisibility$56(vis) {
  var elt = document.getElementById('p1Hours-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$77(vis, env) {
  toggleVisibility$56(vis);
}
function toggleVisibility$57(vis) {
  var elt = document.getElementById('p1FullTime-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$78(vis, env) {
  toggleVisibility$57(vis);
}
function toggleVisibility$58(vis) {
  var elt = document.getElementById('p1SelfEmployed-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$79(vis, env) {
  toggleVisibility$58(vis);
}
function toggleVisibility$59(vis) {
  var elt = document.getElementById('p1Occupation-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$80(vis, env) {
  toggleVisibility$59(vis);
}
function updateVisibility$81(vis, env) {
  updateVisibility$74(vis, env); 
  updateVisibility$75(vis, env); 
  updateVisibility$76(vis, env); 
  updateVisibility$77(vis, env); 
  updateVisibility$78(vis, env); 
  updateVisibility$79(vis, env); 
  updateVisibility$80(vis, env);
}
function toggleVisibility$60(vis) {
  var elt = document.getElementById('p1LookingForWork-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$82(vis, env) {
  toggleVisibility$60(vis);
}
function updateVisibility$83(vis, env) {
  updateVisibility$82(vis, env);
}
function updateVisibility$84(vis, env) {
  updateVisibility$81(eve$45(env), env);
            updateVisibility$83(!eve$45(env), env);
}
function updateVisibility$85(vis, env) {
  updateVisibility$73(vis, env); 
  updateVisibility$84(vis, env);
}
function updateVisibility$86(vis, env) {
  updateVisibility$85(eve$44(env), env);
}
function toggleVisibility$61(vis) {
  var elt = document.getElementById('p1Wages-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$87(vis, env) {
  toggleVisibility$61(vis);
}
function toggleVisibility$62(vis) {
  var elt = document.getElementById('p1SelfEmpIncome-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$88(vis, env) {
  toggleVisibility$62(vis);
}
function toggleVisibility$63(vis) {
  var elt = document.getElementById('p1Interest-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$89(vis, env) {
  toggleVisibility$63(vis);
}
function toggleVisibility$64(vis) {
  var elt = document.getElementById('p1SocialSecurity-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$90(vis, env) {
  toggleVisibility$64(vis);
}
function toggleVisibility$65(vis) {
  var elt = document.getElementById('p1Ssi-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$91(vis, env) {
  toggleVisibility$65(vis);
}
function toggleVisibility$66(vis) {
  var elt = document.getElementById('p1Welfare-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$92(vis, env) {
  toggleVisibility$66(vis);
}
function toggleVisibility$67(vis) {
  var elt = document.getElementById('p1Pension-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$93(vis, env) {
  toggleVisibility$67(vis);
}
function toggleVisibility$68(vis) {
  var elt = document.getElementById('p1OtherIncome-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$94(vis, env) {
  toggleVisibility$68(vis);
}
function updateVisibility$95(vis, env) {
  updateVisibility$87(vis, env); 
  updateVisibility$88(vis, env); 
  updateVisibility$89(vis, env); 
  updateVisibility$90(vis, env); 
  updateVisibility$91(vis, env); 
  updateVisibility$92(vis, env); 
  updateVisibility$93(vis, env); 
  updateVisibility$94(vis, env);
}
function updateVisibility$96(vis, env) {
  updateVisibility$95(eve$42(env), env);
}
function toggleVisibility$69(vis) {
  var elt = document.getElementById('p1Income-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$97(vis, env) {
  toggleVisibility$69(vis);
}
function toggleVisibility$70(vis) {
  var elt = document.getElementById('p1OnAssistance-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$98(vis, env) {
  toggleVisibility$70(vis);
}
function toggleVisibility$71(vis) {
  var elt = document.getElementById('p1HhIncome-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$99(vis, env) {
  toggleVisibility$71(vis);
}
function toggleVisibility$72(vis) {
  var elt = document.getElementById('p1HhWorkers-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$100(vis, env) {
  toggleVisibility$72(vis);
}
function toggleVisibility$73(vis) {
  var elt = document.getElementById('hhIncome-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$101(vis, env) {
  toggleVisibility$73(vis);
}
function toggleVisibility$74(vis) {
  var elt = document.getElementById('hhWorkers-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$102(vis, env) {
  toggleVisibility$74(vis);
}
function toggleVisibility$75(vis) {
  var elt = document.getElementById('hhBurden-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$103(vis, env) {
  toggleVisibility$75(vis);
}
function toggleVisibility$76(vis) {
  var elt = document.getElementById('hhCostBurdened-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$104(vis, env) {
  toggleVisibility$76(vis);
}
function toggleVisibility$77(vis) {
  var elt = document.getElementById('hhSeverelyBurdened-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$105(vis, env) {
  toggleVisibility$77(vis);
}
function toggleVisibility$78(vis) {
  var elt = document.getElementById('hhPovertyLine-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$106(vis, env) {
  toggleVisibility$78(vis);
}
function toggleVisibility$79(vis) {
  var elt = document.getElementById('hhPoor-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$107(vis, env) {
  toggleVisibility$79(vis);
}
function toggleVisibility$80(vis) {
  var elt = document.getElementById('hhNoWorker-div');
    elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$108(vis, env) {
  toggleVisibility$80(vis);
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
change = change || computeQuestion$1(env);
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
change = change || false;
change = change || computeQuestion$6(env);
change = change || computeQuestion$7(env);
change = change || computeQuestion$8(env);
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$10(env);
change = change || false;
change = change || false;
change = change || computeQuestion$12(env);
change = change || computeQuestion$16(env);
change = change || computeQuestion$20(env);
change = change || false;
change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$21(env);
change = change || false;
change = change || false;
change = change || computeQuestion$23(env);
change = change || computeQuestion$30(env);
change = change || computeQuestion$32(env);
change = change || computeQuestion$33(env);
change = change || computeQuestion$34(env);
change = change || computeQuestion$35(env);
change = change || computeQuestion$36(env);
change = change || computeQuestion$37(env);
change = change || computeQuestion$38(env);
change = change || computeQuestion$39(env);
change = change || computeQuestion$40(env);
change = change || computeQuestion$41(env);
change = change || computeQuestion$42(env);
change = change || computeQuestion$43(env);
change = change || computeQuestion$44(env);
}
            while (change);
            var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$3(vis, env); 
  updateVisibility$4(vis, env); 
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
  updateVisibility$19(vis, env); 
  updateVisibility$32(vis, env); 
  updateVisibility$33(vis, env); 
  updateVisibility$34(vis, env); 
  updateVisibility$35(vis, env); 
  updateVisibility$36(vis, env); 
  updateVisibility$37(vis, env); 
  updateVisibility$38(vis, env); 
  updateVisibility$41(vis, env); 
  updateVisibility$42(vis, env); 
  updateVisibility$43(vis, env); 
  updateVisibility$48(vis, env); 
  updateVisibility$54(vis, env); 
  updateVisibility$61(vis, env); 
  updateVisibility$62(vis, env); 
  updateVisibility$63(vis, env); 
  updateVisibility$64(vis, env); 
  updateVisibility$65(vis, env); 
  updateVisibility$66(vis, env); 
  updateVisibility$67(vis, env); 
  updateVisibility$68(vis, env); 
  updateVisibility$72(vis, env); 
  updateVisibility$86(vis, env); 
  updateVisibility$96(vis, env); 
  updateVisibility$97(vis, env); 
  updateVisibility$98(vis, env); 
  updateVisibility$99(vis, env); 
  updateVisibility$100(vis, env); 
  updateVisibility$101(vis, env); 
  updateVisibility$102(vis, env); 
  updateVisibility$103(vis, env); 
  updateVisibility$104(vis, env); 
  updateVisibility$105(vis, env); 
  updateVisibility$106(vis, env); 
  updateVisibility$107(vis, env); 
  updateVisibility$108(vis, env);
};
}
function updater$0(upd) {
  return function (x) {
  upd('nPersons', parseInt(x.target.value));
};
}
function widget$0(env, func) {
  var div = document.createElement('div');
    div.id = 'nPersons-div';
    div.appendChild(document.createTextNode('"Number of persons living or staying at this address:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'nPersons-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['nPersons']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$0(env, upd) {
  widget$0(env, updater$0(upd));
}
function updater$1(upd) {
  return function (x) {
  upd('hBuildingType', x.target.value);
};
}
function widget$1(env, func) {
  var div = document.createElement('div');
    div.id = 'hBuildingType-div';
    div.appendChild(document.createTextNode('"H1. Which best describes this building (house, apartment, mobile home, ...)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hBuildingType-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['hBuildingType']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$1(env, upd) {
  widget$1(env, updater$1(upd));
}
function updater$2(upd) {
  return function (x) {
  upd('hYearBuilt', parseInt(x.target.value));
};
}
function widget$2(env, func) {
  var div = document.createElement('div');
    div.id = 'hYearBuilt-div';
    div.appendChild(document.createTextNode('"H2. About when was this building first built (year)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hYearBuilt-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hYearBuilt']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$2(env, upd) {
  widget$2(env, updater$2(upd));
}
function updater$3(upd) {
  return function (x) {
  upd('hMoveIn', parseInt(x.target.value));
};
}
function widget$3(env, func) {
  var div = document.createElement('div');
    div.id = 'hMoveIn-div';
    div.appendChild(document.createTextNode('"H3. When did you move into this house or apartment (year)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hMoveIn-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hMoveIn']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$3(env, upd) {
  widget$3(env, updater$3(upd));
}
function updater$4(upd) {
  return function (x) {
  upd('hAcre', x.target.checked);
};
}
function widget$4(env, func) {
  var div = document.createElement('div');
    div.id = 'hAcre-div';
    div.appendChild(document.createTextNode('"H4. Is this house on 1 acre or more?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hAcre-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hAcre']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$4(env, upd) {
  widget$4(env, updater$4(upd));
}
function updater$5(upd) {
  return function (x) {
  upd('hAgSales', parseInt(x.target.value));
};
}
function widget$5(env, func) {
  var div = document.createElement('div');
    div.id = 'hAgSales-div';
    div.appendChild(document.createTextNode('"H5. Agricultural sales in the last 12 months (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hAgSales-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hAgSales']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$5(env, upd) {
  widget$5(env, updater$5(upd));
}
function renderQuestion$6(env, upd) {
  renderQuestion$5(env, upd);
}
function renderQuestion$7(env, upd) {
  renderQuestion$6(env, upd);
}
function updater$6(upd) {
  return function (x) {
  upd('hBedrooms', parseInt(x.target.value));
};
}
function widget$6(env, func) {
  var div = document.createElement('div');
    div.id = 'hBedrooms-div';
    div.appendChild(document.createTextNode('"H6. Number of bedrooms:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hBedrooms-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hBedrooms']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$8(env, upd) {
  widget$6(env, updater$6(upd));
}
function updater$7(upd) {
  return function (x) {
  upd('hRooms', parseInt(x.target.value));
};
}
function widget$7(env, func) {
  var div = document.createElement('div');
    div.id = 'hRooms-div';
    div.appendChild(document.createTextNode('"H7. Number of rooms (excluding bathrooms):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hRooms-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hRooms']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$9(env, upd) {
  widget$7(env, updater$7(upd));
}
function updater$8(upd) {
  return function (x) {
  upd('hWater', x.target.checked);
};
}
function widget$8(env, func) {
  var div = document.createElement('div');
    div.id = 'hWater-div';
    div.appendChild(document.createTextNode('"H8. Has hot and cold running water?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hWater-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hWater']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$10(env, upd) {
  widget$8(env, updater$8(upd));
}
function updater$9(upd) {
  return function (x) {
  upd('hShower', x.target.checked);
};
}
function widget$9(env, func) {
  var div = document.createElement('div');
    div.id = 'hShower-div';
    div.appendChild(document.createTextNode('"H8. Has a bathtub or shower?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hShower-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hShower']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$11(env, upd) {
  widget$9(env, updater$9(upd));
}
function updater$10(upd) {
  return function (x) {
  upd('hFridge', x.target.checked);
};
}
function widget$10(env, func) {
  var div = document.createElement('div');
    div.id = 'hFridge-div';
    div.appendChild(document.createTextNode('"H8. Has a refrigerator?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hFridge-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hFridge']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$12(env, upd) {
  widget$10(env, updater$10(upd));
}
function updater$11(upd) {
  return function (x) {
  upd('hStove', x.target.checked);
};
}
function widget$11(env, func) {
  var div = document.createElement('div');
    div.id = 'hStove-div';
    div.appendChild(document.createTextNode('"H8. Has a stove or range?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hStove-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hStove']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$13(env, upd) {
  widget$11(env, updater$11(upd));
}
function updater$12(upd) {
  return function (x) {
  upd('hBroadband', x.target.checked);
};
}
function widget$12(env, func) {
  var div = document.createElement('div');
    div.id = 'hBroadband-div';
    div.appendChild(document.createTextNode('"H9. Has a broadband internet subscription?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hBroadband-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hBroadband']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$14(env, upd) {
  widget$12(env, updater$12(upd));
}
function updater$13(upd) {
  return function (x) {
  upd('hVehicles', parseInt(x.target.value));
};
}
function widget$13(env, func) {
  var div = document.createElement('div');
    div.id = 'hVehicles-div';
    div.appendChild(document.createTextNode('"H10. Number of automobiles, vans and trucks kept at home:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hVehicles-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hVehicles']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$15(env, upd) {
  widget$13(env, updater$13(upd));
}
function updater$14(upd) {
  return function (x) {
  upd('hElectricity', parseInt(x.target.value));
};
}
function widget$14(env, func) {
  var div = document.createElement('div');
    div.id = 'hElectricity-div';
    div.appendChild(document.createTextNode('"H11. Monthly electricity cost (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hElectricity-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hElectricity']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$16(env, upd) {
  widget$14(env, updater$14(upd));
}
function updater$15(upd) {
  return function (x) {
  upd('hGas', parseInt(x.target.value));
};
}
function widget$15(env, func) {
  var div = document.createElement('div');
    div.id = 'hGas-div';
    div.appendChild(document.createTextNode('"H11. Monthly gas cost (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hGas-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hGas']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$17(env, upd) {
  widget$15(env, updater$15(upd));
}
function updater$16(upd) {
  return function (x) {
  upd('hWaterCost', parseInt(x.target.value));
};
}
function widget$16(env, func) {
  var div = document.createElement('div');
    div.id = 'hWaterCost-div';
    div.appendChild(document.createTextNode('"H11. Yearly water and sewer cost (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hWaterCost-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hWaterCost']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$18(env, upd) {
  widget$16(env, updater$16(upd));
}
function updater$17(upd) {
  return function (x) {
  upd('hOwned', x.target.checked);
};
}
function widget$17(env, func) {
  var div = document.createElement('div');
    div.id = 'hOwned-div';
    div.appendChild(document.createTextNode('"H12. Is this house owned (with or without a mortgage)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hOwned-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hOwned']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$19(env, upd) {
  widget$17(env, updater$17(upd));
}
function updater$18(upd) {
  return function (x) {
  upd('hMortgage', x.target.checked);
};
}
function widget$18(env, func) {
  var div = document.createElement('div');
    div.id = 'hMortgage-div';
    div.appendChild(document.createTextNode('"H13. Is there a mortgage on this property?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hMortgage-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hMortgage']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$20(env, upd) {
  widget$18(env, updater$18(upd));
}
function updater$19(upd) {
  return function (x) {
  upd('hMortgagePayment', parseInt(x.target.value));
};
}
function widget$19(env, func) {
  var div = document.createElement('div');
    div.id = 'hMortgagePayment-div';
    div.appendChild(document.createTextNode('"H14. Monthly mortgage payment (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hMortgagePayment-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hMortgagePayment']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$21(env, upd) {
  widget$19(env, updater$19(upd));
}
function updater$20(upd) {
  return function (x) {
  upd('hMortgageTaxes', x.target.checked);
};
}
function widget$20(env, func) {
  var div = document.createElement('div');
    div.id = 'hMortgageTaxes-div';
    div.appendChild(document.createTextNode('"H15. Does the payment include real estate taxes?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hMortgageTaxes-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hMortgageTaxes']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$22(env, upd) {
  widget$20(env, updater$20(upd));
}
function renderQuestion$23(env, upd) {
  renderQuestion$21(env, upd); 
  renderQuestion$22(env, upd);
}
function renderQuestion$24(env, upd) {
  renderQuestion$23(env, upd);
}
function updater$21(upd) {
  return function (x) {
  upd('hRealEstateTaxes', parseInt(x.target.value));
};
}
function widget$21(env, func) {
  var div = document.createElement('div');
    div.id = 'hRealEstateTaxes-div';
    div.appendChild(document.createTextNode('"H16. Yearly real estate taxes (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hRealEstateTaxes-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hRealEstateTaxes']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$25(env, upd) {
  widget$21(env, updater$21(upd));
}
function updater$22(upd) {
  return function (x) {
  upd('hInsurance', parseInt(x.target.value));
};
}
function widget$22(env, func) {
  var div = document.createElement('div');
    div.id = 'hInsurance-div';
    div.appendChild(document.createTextNode('"H17. Yearly fire, hazard and flood insurance (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hInsurance-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hInsurance']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$26(env, upd) {
  widget$22(env, updater$22(upd));
}
function updater$23(upd) {
  return function (x) {
  upd('hValue', parseInt(x.target.value));
};
}
function widget$23(env, func) {
  var div = document.createElement('div');
    div.id = 'hValue-div';
    div.appendChild(document.createTextNode('"H18. Value of the property (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hValue-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hValue']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$27(env, upd) {
  widget$23(env, updater$23(upd));
}
function renderQuestion$28(env, upd) {
  renderQuestion$20(env, upd); 
  renderQuestion$24(env, upd); 
  renderQuestion$25(env, upd); 
  renderQuestion$26(env, upd); 
  renderQuestion$27(env, upd);
}
function updater$24(upd) {
  return function (x) {
  upd('hRent', parseInt(x.target.value));
};
}
function widget$24(env, func) {
  var div = document.createElement('div');
    div.id = 'hRent-div';
    div.appendChild(document.createTextNode('"H19. Monthly rent (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hRent-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hRent']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$29(env, upd) {
  widget$24(env, updater$24(upd));
}
function updater$25(upd) {
  return function (x) {
  upd('hRentMeals', x.target.checked);
};
}
function widget$25(env, func) {
  var div = document.createElement('div');
    div.id = 'hRentMeals-div';
    div.appendChild(document.createTextNode('"H20. Does the rent include meals?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hRentMeals-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hRentMeals']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$30(env, upd) {
  widget$25(env, updater$25(upd));
}
function renderQuestion$31(env, upd) {
  renderQuestion$29(env, upd); 
  renderQuestion$30(env, upd);
}
function renderQuestion$32(env, upd) {
  renderQuestion$28(env, upd);
            renderQuestion$31(env, upd);
}
function widget$26(env) {
  var div = document.createElement('div');
    div.id = 'hMonthlyCost-div';
    div.appendChild(document.createTextNode('"Monthly housing cost (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hMonthlyCost-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hMonthlyCost']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$33(env, upd) {
  widget$26(env);
}
function widget$27(env) {
  var div = document.createElement('div');
    div.id = 'hCrowded-div';
    div.appendChild(document.createTextNode('"Crowded (more than one person per room):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hCrowded-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hCrowded']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$34(env, upd) {
  widget$27(env);
}
function updater$26(upd) {
  return function (x) {
  upd('p1Name', x.target.value);
};
}
function widget$28(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Name-div';
    div.appendChild(document.createTextNode('"P1 1. Name of person 1:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Name-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1Name']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$35(env, upd) {
  widget$28(env, updater$26(upd));
}
function updater$27(upd) {
  return function (x) {
  upd('p1Female', x.target.checked);
};
}
function widget$29(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Female-div';
    div.appendChild(document.createTextNode('"P1 3. Is this person female?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Female-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1Female']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$36(env, upd) {
  widget$29(env, updater$27(upd));
}
function updater$28(upd) {
  return function (x) {
  upd('p1Age', parseInt(x.target.value));
};
}
function widget$30(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Age-div';
    div.appendChild(document.createTextNode('"P1 4. Age (years):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Age-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Age']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$37(env, upd) {
  widget$30(env, updater$28(upd));
}
function updater$29(upd) {
  return function (x) {
  upd('p1Hispanic', x.target.checked);
};
}
function widget$31(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Hispanic-div';
    div.appendChild(document.createTextNode('"P1 5. Is this person of Hispanic, Latino or Spanish origin?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Hispanic-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1Hispanic']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$38(env, upd) {
  widget$31(env, updater$29(upd));
}
function updater$30(upd) {
  return function (x) {
  upd('p1HispanicOrigin', x.target.value);
};
}
function widget$32(env, func) {
  var div = document.createElement('div');
    div.id = 'p1HispanicOrigin-div';
    div.appendChild(document.createTextNode('"P1 5. Origin (Mexican, Puerto Rican, Cuban, ...):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1HispanicOrigin-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1HispanicOrigin']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$39(env, upd) {
  widget$32(env, updater$30(upd));
}
function renderQuestion$40(env, upd) {
  renderQuestion$39(env, upd);
}
function renderQuestion$41(env, upd) {
  renderQuestion$40(env, upd);
}
function updater$31(upd) {
  return function (x) {
  upd('p1Race', x.target.value);
};
}
function widget$33(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Race-div';
    div.appendChild(document.createTextNode('"P1 6. Race:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Race-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1Race']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$42(env, upd) {
  widget$33(env, updater$31(upd));
}
function updater$32(upd) {
  return function (x) {
  upd('p1BornUS', x.target.checked);
};
}
function widget$34(env, func) {
  var div = document.createElement('div');
    div.id = 'p1BornUS-div';
    div.appendChild(document.createTextNode('"P1 7. Born in the United States?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1BornUS-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1BornUS']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$43(env, upd) {
  widget$34(env, updater$32(upd));
}
function updater$33(upd) {
  return function (x) {
  upd('p1BirthCountry', x.target.value);
};
}
function widget$35(env, func) {
  var div = document.createElement('div');
    div.id = 'p1BirthCountry-div';
    div.appendChild(document.createTextNode('"P1 7. Country of birth:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1BirthCountry-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1BirthCountry']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$44(env, upd) {
  widget$35(env, updater$33(upd));
}
function updater$34(upd) {
  return function (x) {
  upd('p1Naturalized', x.target.checked);
};
}
function widget$36(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Naturalized-div';
    div.appendChild(document.createTextNode('"P1 8. U.S. citizen by naturalization?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Naturalized-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1Naturalized']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$45(env, upd) {
  widget$36(env, updater$34(upd));
}
function updater$35(upd) {
  return function (x) {
  upd('p1YearArrived', parseInt(x.target.value));
};
}
function widget$37(env, func) {
  var div = document.createElement('div');
    div.id = 'p1YearArrived-div';
    div.appendChild(document.createTextNode('"P1 9. Year this person came to live in the U.S.:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1YearArrived-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1YearArrived']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$46(env, upd) {
  widget$37(env, updater$35(upd));
}
function renderQuestion$47(env, upd) {
  renderQuestion$44(env, upd); 
  renderQuestion$45(env, upd); 
  renderQuestion$46(env, upd);
}
function renderQuestion$48(env, upd) {
  renderQuestion$47(env, upd);
}
function updater$36(upd) {
  return function (x) {
  upd('p1InSchool', x.target.checked);
};
}
function widget$38(env, func) {
  var div = document.createElement('div');
    div.id = 'p1InSchool-div';
    div.appendChild(document.createTextNode('"P1 10. Attended school or college in the last 3 months?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1InSchool-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1InSchool']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$49(env, upd) {
  widget$38(env, updater$36(upd));
}
function updater$37(upd) {
  return function (x) {
  upd('p1SchoolGrade', x.target.value);
};
}
function widget$39(env, func) {
  var div = document.createElement('div');
    div.id = 'p1SchoolGrade-div';
    div.appendChild(document.createTextNode('"P1 10. Grade or level attending:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1SchoolGrade-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1SchoolGrade']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$50(env, upd) {
  widget$39(env, updater$37(upd));
}
function renderQuestion$51(env, upd) {
  renderQuestion$50(env, upd);
}
function renderQuestion$52(env, upd) {
  renderQuestion$51(env, upd);
}
function renderQuestion$53(env, upd) {
  renderQuestion$49(env, upd); 
  renderQuestion$52(env, upd);
}
function renderQuestion$54(env, upd) {
  renderQuestion$53(env, upd);
}
function updater$38(upd) {
  return function (x) {
  upd('p1OtherLanguage', x.target.checked);
};
}
function widget$40(env, func) {
  var div = document.createElement('div');
    div.id = 'p1OtherLanguage-div';
    div.appendChild(document.createTextNode('"P1 12. Speaks a language other than English at home?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1OtherLanguage-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1OtherLanguage']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$55(env, upd) {
  widget$40(env, updater$38(upd));
}
function updater$39(upd) {
  return function (x) {
  upd('p1Language', x.target.value);
};
}
function widget$41(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Language-div';
    div.appendChild(document.createTextNode('"P1 12. Which language?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Language-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1Language']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$56(env, upd) {
  widget$41(env, updater$39(upd));
}
function updater$40(upd) {
  return function (x) {
  upd('p1EnglishWell', x.target.checked);
};
}
function widget$42(env, func) {
  var div = document.createElement('div');
    div.id = 'p1EnglishWell-div';
    div.appendChild(document.createTextNode('"P1 12. Speaks English very well?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1EnglishWell-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1EnglishWell']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$57(env, upd) {
  widget$42(env, updater$40(upd));
}
function renderQuestion$58(env, upd) {
  renderQuestion$56(env, upd); 
  renderQuestion$57(env, upd);
}
function renderQuestion$59(env, upd) {
  renderQuestion$58(env, upd);
}
function renderQuestion$60(env, upd) {
  renderQuestion$55(env, upd); 
  renderQuestion$59(env, upd);
}
function renderQuestion$61(env, upd) {
  renderQuestion$60(env, upd);
}
function updater$41(upd) {
  return function (x) {
  upd('p1SameHouse', x.target.checked);
};
}
function widget$43(env, func) {
  var div = document.createElement('div');
    div.id = 'p1SameHouse-div';
    div.appendChild(document.createTextNode('"P1 15. Lived in this house one year ago?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1SameHouse-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1SameHouse']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$62(env, upd) {
  widget$43(env, updater$41(upd));
}
function updater$42(upd) {
  return function (x) {
  upd('p1InsEmployer', x.target.checked);
};
}
function widget$44(env, func) {
  var div = document.createElement('div');
    div.id = 'p1InsEmployer-div';
    div.appendChild(document.createTextNode('"P1 16. Covered by health insurance through an employer?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1InsEmployer-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1InsEmployer']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$63(env, upd) {
  widget$44(env, updater$42(upd));
}
function updater$43(upd) {
  return function (x) {
  upd('p1InsMedicare', x.target.checked);
};
}
function widget$45(env, func) {
  var div = document.createElement('div');
    div.id = 'p1InsMedicare-div';
    div.appendChild(document.createTextNode('"P1 16. Covered by Medicare?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1InsMedicare-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1InsMedicare']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$64(env, upd) {
  widget$45(env, updater$43(upd));
}
function updater$44(upd) {
  return function (x) {
  upd('p1InsMedicaid', x.target.checked);
};
}
function widget$46(env, func) {
  var div = document.createElement('div');
    div.id = 'p1InsMedicaid-div';
    div.appendChild(document.createTextNode('"P1 16. Covered by Medicaid or other government assistance plan?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1InsMedicaid-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1InsMedicaid']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$65(env, upd) {
  widget$46(env, updater$44(upd));
}
function widget$47(env) {
  var div = document.createElement('div');
    div.id = 'p1Uninsured-div';
    div.appendChild(document.createTextNode('"P1 Uninsured:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Uninsured-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1Uninsured']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$66(env, upd) {
  widget$47(env);
}
function updater$45(upd) {
  return function (x) {
  upd('p1DifficultyCognitive', x.target.checked);
};
}
function widget$48(env, func) {
  var div = document.createElement('div');
    div.id = 'p1DifficultyCognitive-div';
    div.appendChild(document.createTextNode('"P1 17. Difficulty concentrating, remembering or making decisions?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1DifficultyCognitive-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1DifficultyCognitive']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$67(env, upd) {
  widget$48(env, updater$45(upd));
}
function updater$46(upd) {
  return function (x) {
  upd('p1DifficultyWalking', x.target.checked);
};
}
function widget$49(env, func) {
  var div = document.createElement('div');
    div.id = 'p1DifficultyWalking-div';
    div.appendChild(document.createTextNode('"P1 18. Difficulty walking or climbing stairs?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1DifficultyWalking-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1DifficultyWalking']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$68(env, upd) {
  widget$49(env, updater$46(upd));
}
function updater$47(upd) {
  return function (x) {
  upd('p1Married', x.target.checked);
};
}
function widget$50(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Married-div';
    div.appendChild(document.createTextNode('"P1 20. Currently married?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Married-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1Married']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$69(env, upd) {
  widget$50(env, updater$47(upd));
}
function updater$48(upd) {
  return function (x) {
  upd('p1Education', x.target.value);
};
}
function widget$51(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Education-div';
    div.appendChild(document.createTextNode('"P1 21. Highest degree or level of school completed:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Education-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1Education']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$70(env, upd) {
  widget$51(env, updater$48(upd));
}
function renderQuestion$71(env, upd) {
  renderQuestion$69(env, upd); 
  renderQuestion$70(env, upd);
}
function renderQuestion$72(env, upd) {
  renderQuestion$71(env, upd);
}
function updater$49(upd) {
  return function (x) {
  upd('p1WorkedLastWeek', x.target.checked);
};
}
function widget$52(env, func) {
  var div = document.createElement('div');
    div.id = 'p1WorkedLastWeek-div';
    div.appendChild(document.createTextNode('"P1 30. Worked for pay last week?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1WorkedLastWeek-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1WorkedLastWeek']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$73(env, upd) {
  widget$52(env, updater$49(upd));
}
function updater$50(upd) {
  return function (x) {
  upd('p1WorkAddress', x.target.value);
};
}
function widget$53(env, func) {
  var div = document.createElement('div');
    div.id = 'p1WorkAddress-div';
    div.appendChild(document.createTextNode('"P1 31. Address of main place of work:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1WorkAddress-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1WorkAddress']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$74(env, upd) {
  widget$53(env, updater$50(upd));
}
function updater$51(upd) {
  return function (x) {
  upd('p1CommuteMinutes', parseInt(x.target.value));
};
}
function widget$54(env, func) {
  var div = document.createElement('div');
    div.id = 'p1CommuteMinutes-div';
    div.appendChild(document.createTextNode('"P1 33. Minutes to get from home to work:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1CommuteMinutes-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1CommuteMinutes']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$75(env, upd) {
  widget$54(env, updater$51(upd));
}
function widget$55(env) {
  var div = document.createElement('div');
    div.id = 'p1LongCommute-div';
    div.appendChild(document.createTextNode('"P1 33. Long commute (60 minutes or more):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1LongCommute-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1LongCommute']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$76(env, upd) {
  widget$55(env);
}
function updater$52(upd) {
  return function (x) {
  upd('p1Hours', parseInt(x.target.value));
};
}
function widget$56(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Hours-div';
    div.appendChild(document.createTextNode('"P1 41. Usual hours worked per week:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Hours-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Hours']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$77(env, upd) {
  widget$56(env, updater$52(upd));
}
function widget$57(env) {
  var div = document.createElement('div');
    div.id = 'p1FullTime-div';
    div.appendChild(document.createTextNode('"P1 41. Works full time:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1FullTime-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1FullTime']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$78(env, upd) {
  widget$57(env);
}
function updater$53(upd) {
  return function (x) {
  upd('p1SelfEmployed', x.target.checked);
};
}
function widget$58(env, func) {
  var div = document.createElement('div');
    div.id = 'p1SelfEmployed-div';
    div.appendChild(document.createTextNode('"P1 44. Self-employed in own business?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1SelfEmployed-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1SelfEmployed']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$79(env, upd) {
  widget$58(env, updater$53(upd));
}
function updater$54(upd) {
  return function (x) {
  upd('p1Occupation', x.target.value);
};
}
function widget$59(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Occupation-div';
    div.appendChild(document.createTextNode('"P1 46. Kind of work (occupation):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Occupation-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['p1Occupation']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$80(env, upd) {
  widget$59(env, updater$54(upd));
}
function renderQuestion$81(env, upd) {
  renderQuestion$74(env, upd); 
  renderQuestion$75(env, upd); 
  renderQuestion$76(env, upd); 
  renderQuestion$77(env, upd); 
  renderQuestion$78(env, upd); 
  renderQuestion$79(env, upd); 
  renderQuestion$80(env, upd);
}
function updater$55(upd) {
  return function (x) {
  upd('p1LookingForWork', x.target.checked);
};
}
function widget$60(env, func) {
  var div = document.createElement('div');
    div.id = 'p1LookingForWork-div';
    div.appendChild(document.createTextNode('"P1 36. Looking for work in the last 4 weeks?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1LookingForWork-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1LookingForWork']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$82(env, upd) {
  widget$60(env, updater$55(upd));
}
function renderQuestion$83(env, upd) {
  renderQuestion$82(env, upd);
}
function renderQuestion$84(env, upd) {
  renderQuestion$81(env, upd);
            renderQuestion$83(env, upd);
}
function renderQuestion$85(env, upd) {
  renderQuestion$73(env, upd); 
  renderQuestion$84(env, upd);
}
function renderQuestion$86(env, upd) {
  renderQuestion$85(env, upd);
}
function updater$56(upd) {
  return function (x) {
  upd('p1Wages', parseInt(x.target.value));
};
}
function widget$61(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Wages-div';
    div.appendChild(document.createTextNode('"P1 47a. Wages, salary, commissions, bonuses or tips (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Wages-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Wages']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$87(env, upd) {
  widget$61(env, updater$56(upd));
}
function updater$57(upd) {
  return function (x) {
  upd('p1SelfEmpIncome', parseInt(x.target.value));
};
}
function widget$62(env, func) {
  var div = document.createElement('div');
    div.id = 'p1SelfEmpIncome-div';
    div.appendChild(document.createTextNode('"P1 47b. Self-employment income (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1SelfEmpIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1SelfEmpIncome']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$88(env, upd) {
  widget$62(env, updater$57(upd));
}
function updater$58(upd) {
  return function (x) {
  upd('p1Interest', parseInt(x.target.value));
};
}
function widget$63(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Interest-div';
    div.appendChild(document.createTextNode('"P1 47c. Interest, dividends, net rental income (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Interest-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Interest']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$89(env, upd) {
  widget$63(env, updater$58(upd));
}
function updater$59(upd) {
  return function (x) {
  upd('p1SocialSecurity', parseInt(x.target.value));
};
}
function widget$64(env, func) {
  var div = document.createElement('div');
    div.id = 'p1SocialSecurity-div';
    div.appendChild(document.createTextNode('"P1 47d. Social Security or Railroad Retirement (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1SocialSecurity-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1SocialSecurity']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$90(env, upd) {
  widget$64(env, updater$59(upd));
}
function updater$60(upd) {
  return function (x) {
  upd('p1Ssi', parseInt(x.target.value));
};
}
function widget$65(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Ssi-div';
    div.appendChild(document.createTextNode('"P1 47e. Supplemental Security Income (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Ssi-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Ssi']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$91(env, upd) {
  widget$65(env, updater$60(upd));
}
function updater$61(upd) {
  return function (x) {
  upd('p1Welfare', parseInt(x.target.value));
};
}
function widget$66(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Welfare-div';
    div.appendChild(document.createTextNode('"P1 47f. Public assistance or welfare (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Welfare-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Welfare']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$92(env, upd) {
  widget$66(env, updater$61(upd));
}
function updater$62(upd) {
  return function (x) {
  upd('p1Pension', parseInt(x.target.value));
};
}
function widget$67(env, func) {
  var div = document.createElement('div');
    div.id = 'p1Pension-div';
    div.appendChild(document.createTextNode('"P1 47g. Retirement, survivor or disability pensions (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Pension-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Pension']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$93(env, upd) {
  widget$67(env, updater$62(upd));
}
function updater$63(upd) {
  return function (x) {
  upd('p1OtherIncome', parseInt(x.target.value));
};
}
function widget$68(env, func) {
  var div = document.createElement('div');
    div.id = 'p1OtherIncome-div';
    div.appendChild(document.createTextNode('"P1 47h. Any other regular income (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1OtherIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1OtherIncome']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$94(env, upd) {
  widget$68(env, updater$63(upd));
}
function renderQuestion$95(env, upd) {
  renderQuestion$87(env, upd); 
  renderQuestion$88(env, upd); 
  renderQuestion$89(env, upd); 
  renderQuestion$90(env, upd); 
  renderQuestion$91(env, upd); 
  renderQuestion$92(env, upd); 
  renderQuestion$93(env, upd); 
  renderQuestion$94(env, upd);
}
function renderQuestion$96(env, upd) {
  renderQuestion$95(env, upd);
}
function widget$69(env) {
  var div = document.createElement('div');
    div.id = 'p1Income-div';
    div.appendChild(document.createTextNode('"P1 48. Total income in the past 12 months (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1Income-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1Income']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$97(env, upd) {
  widget$69(env);
}
function widget$70(env) {
  var div = document.createElement('div');
    div.id = 'p1OnAssistance-div';
    div.appendChild(document.createTextNode('"P1 Receives public assistance:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1OnAssistance-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['p1OnAssistance']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$98(env, upd) {
  widget$70(env);
}
function widget$71(env) {
  var div = document.createElement('div');
    div.id = 'p1HhIncome-div';
    div.appendChild(document.createTextNode('"P1 Household income so far (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1HhIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1HhIncome']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$99(env, upd) {
  widget$71(env);
}
function widget$72(env) {
  var div = document.createElement('div');
    div.id = 'p1HhWorkers-div';
    div.appendChild(document.createTextNode('"P1 Workers in the household so far:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'p1HhWorkers-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['p1HhWorkers']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$100(env, upd) {
  widget$72(env);
}
function widget$73(env) {
  var div = document.createElement('div');
    div.id = 'hhIncome-div';
    div.appendChild(document.createTextNode('"Household income (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hhIncome']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$101(env, upd) {
  widget$73(env);
}
function widget$74(env) {
  var div = document.createElement('div');
    div.id = 'hhWorkers-div';
    div.appendChild(document.createTextNode('"Workers in household:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhWorkers-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hhWorkers']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$102(env, upd) {
  widget$74(env);
}
function widget$75(env) {
  var div = document.createElement('div');
    div.id = 'hhBurden-div';
    div.appendChild(document.createTextNode('"Housing cost burden (percent of income):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhBurden-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hhBurden']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$103(env, upd) {
  widget$75(env);
}
function widget$76(env) {
  var div = document.createElement('div');
    div.id = 'hhCostBurdened-div';
    div.appendChild(document.createTextNode('"Cost-burdened household (more than 30 percent):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhCostBurdened-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hhCostBurdened']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$104(env, upd) {
  widget$76(env);
}
function widget$77(env) {
  var div = document.createElement('div');
    div.id = 'hhSeverelyBurdened-div';
    div.appendChild(document.createTextNode('"Severely cost-burdened household (more than 50 percent):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhSeverelyBurdened-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hhSeverelyBurdened']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$105(env, upd) {
  widget$77(env);
}
function widget$78(env) {
  var div = document.createElement('div');
    div.id = 'hhPovertyLine-div';
    div.appendChild(document.createTextNode('"2023 poverty guideline for this household size (USD):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhPovertyLine-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['hhPovertyLine']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$106(env, upd) {
  widget$78(env);
}
function widget$79(env) {
  var div = document.createElement('div');
    div.id = 'hhPoor-div';
    div.appendChild(document.createTextNode('"Household below the poverty guideline:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhPoor-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hhPoor']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$107(env, upd) {
  widget$79(env);
}
function widget$80(env) {
  var div = document.createElement('div');
    div.id = 'hhNoWorker-div';
    div.appendChild(document.createTextNode('"No worker in the household:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hhNoWorker-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hhNoWorker']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$108(env, upd) {
  widget$80(env);
}
function render$0(env, upd) {
  renderQuestion$0(env, upd);
renderQuestion$1(env, upd);
renderQuestion$2(env, upd);
renderQuestion$3(env, upd);
renderQuestion$4(env, upd);
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
renderQuestion$19(env, upd);
renderQuestion$32(env, upd);
renderQuestion$33(env, upd);
renderQuestion$34(env, upd);
renderQuestion$35(env, upd);
renderQuestion$36(env, upd);
renderQuestion$37(env, upd);
renderQuestion$38(env, upd);
renderQuestion$41(env, upd);
renderQuestion$42(env, upd);
renderQuestion$43(env, upd);
renderQuestion$48(env, upd);
renderQuestion$54(env, upd);
renderQuestion$61(env, upd);
renderQuestion$62(env, upd);
renderQuestion$63(env, upd);
renderQuestion$64(env, upd);
renderQuestion$65(env, upd);
renderQuestion$66(env, upd);
renderQuestion$67(env, upd);
renderQuestion$68(env, upd);
renderQuestion$72(env, upd);
renderQuestion$86(env, upd);
renderQuestion$96(env, upd);
renderQuestion$97(env, upd);
renderQuestion$98(env, upd);
renderQuestion$99(env, upd);
renderQuestion$100(env, upd);
renderQuestion$101(env, upd);
renderQuestion$102(env, upd);
renderQuestion$103(env, upd);
renderQuestion$104(env, upd);
renderQuestion$105(env, upd);
renderQuestion$106(env, upd);
renderQuestion$107(env, upd);
renderQuestion$108(env, upd);
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
  updateVisibility$19(vis, env); 
  updateVisibility$32(vis, env); 
  updateVisibility$33(vis, env); 
  updateVisibility$34(vis, env); 
  updateVisibility$35(vis, env); 
  updateVisibility$36(vis, env); 
  updateVisibility$37(vis, env); 
  updateVisibility$38(vis, env); 
  updateVisibility$41(vis, env); 
  updateVisibility$42(vis, env); 
  updateVisibility$43(vis, env); 
  updateVisibility$48(vis, env); 
  updateVisibility$54(vis, env); 
  updateVisibility$61(vis, env); 
  updateVisibility$62(vis, env); 
  updateVisibility$63(vis, env); 
  updateVisibility$64(vis, env); 
  updateVisibility$65(vis, env); 
  updateVisibility$66(vis, env); 
  updateVisibility$67(vis, env); 
  updateVisibility$68(vis, env); 
  updateVisibility$72(vis, env); 
  updateVisibility$86(vis, env); 
  updateVisibility$96(vis, env); 
  updateVisibility$97(vis, env); 
  updateVisibility$98(vis, env); 
  updateVisibility$99(vis, env); 
  updateVisibility$100(vis, env); 
  updateVisibility$101(vis, env); 
  updateVisibility$102(vis, env); 
  updateVisibility$103(vis, env); 
  updateVisibility$104(vis, env); 
  updateVisibility$105(vis, env); 
  updateVisibility$106(vis, env); 
  updateVisibility$107(vis, env); 
  updateVisibility$108(vis, env);
}