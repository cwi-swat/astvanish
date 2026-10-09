export {run$0 as run};
function initializeQuestion$0(env) {
  env['bsn'] = '';
}
function initializeQuestion$1(env) {
  env['age'] = 0;
}
function initializeQuestion$2(env) {
  env['legalResidence'] = false;
}
function initializeQuestion$3(env) {
  env['registeredAtAddress'] = false;
}
function initializeQuestion$4(env) {
  env['hasPartner'] = false;
}
function initializeQuestion$5(env) {
  env['partnerBsn'] = '';
}
function initializeQuestion$6(env) {
  env['partnerAge'] = 0;
}
function initializeQuestion$7(env) {
  env['partnerIncome'] = 0;
}
function initializeQuestion$8(env) {
  env['partnerAssets'] = 0;
}
function initializeQuestion$9(env) {
  initializeQuestion$5(env); 
  initializeQuestion$6(env); 
  initializeQuestion$7(env); 
  initializeQuestion$8(env);
}
function initializeQuestion$10(env) {
  initializeQuestion$9(env);
}
function initializeQuestion$11(env) {
  env['nChildren'] = 0;
}
function initializeQuestion$12(env) {
  env['nCoResidents'] = 0;
}
function initializeQuestion$13(env) {
  env['coResidentIncome'] = 0;
}
function initializeQuestion$14(env) {
  env['coResidentsYoung'] = false;
}
function initializeQuestion$15(env) {
  initializeQuestion$13(env); 
  initializeQuestion$14(env);
}
function initializeQuestion$16(env) {
  initializeQuestion$15(env);
}
function initializeQuestion$17(env) {
  env['selfContained'] = false;
}
function initializeQuestion$18(env) {
  env['recognisedRoom'] = false;
}
function initializeQuestion$19(env) {
  initializeQuestion$18(env);
}
function initializeQuestion$20(env) {
  initializeQuestion$19(env);
}
function initializeQuestion$21(env) {
  env['corporationLandlord'] = false;
}
function initializeQuestion$22(env) {
  env['bareRent'] = 0;
}
function initializeQuestion$23(env) {
  env['hasServiceCosts'] = false;
}
function initializeQuestion$24(env) {
  env['svcEnergy'] = 0;
}
function initializeQuestion$25(env) {
  env['svcCleaning'] = 0;
}
function initializeQuestion$26(env) {
  env['svcCaretaker'] = 0;
}
function initializeQuestion$27(env) {
  env['svcShared'] = 0;
}
function initializeQuestion$28(env) {
  env['svcEnergyOk'] = false;
}
function initializeQuestion$29(env) {
  env['svcCleaningOk'] = false;
}
function initializeQuestion$30(env) {
  env['svcCaretakerOk'] = false;
}
function initializeQuestion$31(env) {
  env['svcSharedOk'] = false;
}
function initializeQuestion$32(env) {
  env['svcAllOk'] = false;
}
function initializeQuestion$33(env) {
  env['svcTotal'] = 0;
}
function initializeQuestion$34(env) {
  initializeQuestion$24(env); 
  initializeQuestion$25(env); 
  initializeQuestion$26(env); 
  initializeQuestion$27(env); 
  initializeQuestion$28(env); 
  initializeQuestion$29(env); 
  initializeQuestion$30(env); 
  initializeQuestion$31(env); 
  initializeQuestion$32(env); 
  initializeQuestion$33(env);
}
function initializeQuestion$35(env) {
  initializeQuestion$34(env);
}
function initializeQuestion$36(env) {
  env['eligibleRent'] = 0;
}
function initializeQuestion$37(env) {
  env['income'] = 0;
}
function initializeQuestion$38(env) {
  env['assets'] = 0;
}
function initializeQuestion$39(env) {
  env['householdIncome'] = 0;
}
function initializeQuestion$40(env) {
  env['householdAssets'] = 0;
}
function initializeQuestion$41(env) {
  env['under23'] = false;
}
function initializeQuestion$42(env) {
  env['youngException'] = false;
}
function initializeQuestion$43(env) {
  env['belowYouthLimit'] = false;
}
function initializeQuestion$44(env) {
  env['belowMaxLimit'] = false;
}
function initializeQuestion$45(env) {
  env['rentOk'] = false;
}
function initializeQuestion$46(env) {
  env['assetsOk'] = false;
}
function initializeQuestion$47(env) {
  env['propertyOk'] = false;
}
function initializeQuestion$48(env) {
  env['basicOk'] = false;
}
function initializeQuestion$49(env) {
  env['eligible'] = false;
}
function initializeQuestion$50(env) {
  env['iban'] = '';
}
function initializeQuestion$51(env) {
  env['startMonth'] = 0;
}
function initializeQuestion$52(env) {
  env['monthsOfBenefit'] = 0;
}
function initializeQuestion$53(env) {
  env['agreeReport'] = false;
}
function initializeQuestion$54(env) {
  initializeQuestion$50(env); 
  initializeQuestion$51(env); 
  initializeQuestion$52(env); 
  initializeQuestion$53(env);
}
function initializeQuestion$55(env) {
  env['wantsInfo'] = false;
}
function initializeQuestion$56(env) {
  env['infoEmail'] = '';
}
function initializeQuestion$57(env) {
  initializeQuestion$56(env);
}
function initializeQuestion$58(env) {
  initializeQuestion$57(env);
}
function initializeQuestion$59(env) {
  initializeQuestion$55(env); 
  initializeQuestion$58(env);
}
function initializeQuestion$60(env) {
  initializeQuestion$54(env);
            initializeQuestion$59(env);
}
function initialize$0(env) {
  initializeQuestion$0(env);
initializeQuestion$1(env);
initializeQuestion$2(env);
initializeQuestion$3(env);
initializeQuestion$4(env);
initializeQuestion$10(env);
initializeQuestion$11(env);
initializeQuestion$12(env);
initializeQuestion$16(env);
initializeQuestion$17(env);
initializeQuestion$20(env);
initializeQuestion$21(env);
initializeQuestion$22(env);
initializeQuestion$23(env);
initializeQuestion$35(env);
initializeQuestion$36(env);
initializeQuestion$37(env);
initializeQuestion$38(env);
initializeQuestion$39(env);
initializeQuestion$40(env);
initializeQuestion$41(env);
initializeQuestion$42(env);
initializeQuestion$43(env);
initializeQuestion$44(env);
initializeQuestion$45(env);
initializeQuestion$46(env);
initializeQuestion$47(env);
initializeQuestion$48(env);
initializeQuestion$49(env);
initializeQuestion$60(env);
}
function eve$0(env) {
  return env['hasPartner'];
}
function computeQuestion$0(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$1(env) {
  if (eve$0(env)) {
   return computeQuestion$0(env);
}
}
function eve$1(env) {
  return env['nCoResidents'];
}
function eve$2(env) {
  return parseInt('0');
}
function eve$3(env) {
  return eve$1(env) > eve$2(env);
}
function computeQuestion$2(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  return change;
}
function computeQuestion$3(env) {
  if (eve$3(env)) {
   return computeQuestion$2(env);
}
}
function eve$4(env) {
  return env['selfContained'];
}
function eve$5(env) {
  return !eve$4(env);
}
function computeQuestion$4(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$5(env) {
  if (eve$5(env)) {
   return computeQuestion$4(env);
}
}
function eve$6(env) {
  return env['hasServiceCosts'];
}
function eve$7(env) {
  return env['svcEnergy'];
}
function eve$8(env) {
  return parseInt('12');
}
function eve$9(env) {
  return eve$7(env) <= eve$8(env);
}
function updateValue$0(val) {
  var elt = document.getElementById('svcEnergyOk-widget'); 
  elt.checked = val;
}
function computeQuestion$6(env) {
  var val = eve$9(env);
            if (val !== env['svcEnergyOk']) {
   env['svcEnergyOk'] = val;
                updateValue$0(val);
                return true;
}
}
function eve$10(env) {
  return env['svcCleaning'];
}
function eve$11(env) {
  return eve$10(env) <= eve$8(env);
}
function updateValue$1(val) {
  var elt = document.getElementById('svcCleaningOk-widget'); 
  elt.checked = val;
}
function computeQuestion$7(env) {
  var val = eve$11(env);
            if (val !== env['svcCleaningOk']) {
   env['svcCleaningOk'] = val;
                updateValue$1(val);
                return true;
}
}
function eve$12(env) {
  return env['svcCaretaker'];
}
function eve$13(env) {
  return eve$12(env) <= eve$8(env);
}
function updateValue$2(val) {
  var elt = document.getElementById('svcCaretakerOk-widget'); 
  elt.checked = val;
}
function computeQuestion$8(env) {
  var val = eve$13(env);
            if (val !== env['svcCaretakerOk']) {
   env['svcCaretakerOk'] = val;
                updateValue$2(val);
                return true;
}
}
function eve$14(env) {
  return env['svcShared'];
}
function eve$15(env) {
  return eve$14(env) <= eve$8(env);
}
function updateValue$3(val) {
  var elt = document.getElementById('svcSharedOk-widget'); 
  elt.checked = val;
}
function computeQuestion$9(env) {
  var val = eve$15(env);
            if (val !== env['svcSharedOk']) {
   env['svcSharedOk'] = val;
                updateValue$3(val);
                return true;
}
}
function eve$16(env) {
  return env['svcEnergyOk'];
}
function eve$17(env) {
  return env['svcCleaningOk'];
}
function eve$18(env) {
  return eve$16(env) && eve$17(env);
}
function eve$19(env) {
  return env['svcCaretakerOk'];
}
function eve$20(env) {
  return eve$18(env) && eve$19(env);
}
function eve$21(env) {
  return env['svcSharedOk'];
}
function eve$22(env) {
  return eve$20(env) && eve$21(env);
}
function updateValue$4(val) {
  var elt = document.getElementById('svcAllOk-widget'); 
  elt.checked = val;
}
function computeQuestion$10(env) {
  var val = eve$22(env);
            if (val !== env['svcAllOk']) {
   env['svcAllOk'] = val;
                updateValue$4(val);
                return true;
}
}
function eve$23(env) {
  return eve$7(env) + eve$10(env);
}
function eve$24(env) {
  return eve$23(env) + eve$12(env);
}
function eve$25(env) {
  return eve$24(env) + eve$14(env);
}
function updateValue$5(val) {
  var elt = document.getElementById('svcTotal-widget'); 
  elt.value = val;
}
function computeQuestion$11(env) {
  var val = eve$25(env);
            if (val !== env['svcTotal']) {
   env['svcTotal'] = val;
                updateValue$5(val);
                return true;
}
}
function computeQuestion$12(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || false; 
  change = change || computeQuestion$6(env); 
  change = change || computeQuestion$7(env); 
  change = change || computeQuestion$8(env); 
  change = change || computeQuestion$9(env); 
  change = change || computeQuestion$10(env); 
  change = change || computeQuestion$11(env); 
  return change;
}
function computeQuestion$13(env) {
  if (eve$6(env)) {
   return computeQuestion$12(env);
}
}
function eve$26(env) {
  return env['bareRent'];
}
function eve$27(env) {
  return env['svcTotal'];
}
function eve$28(env) {
  return eve$26(env) + eve$27(env);
}
function updateValue$6(val) {
  var elt = document.getElementById('eligibleRent-widget'); 
  elt.value = val;
}
function computeQuestion$14(env) {
  var val = eve$28(env);
            if (val !== env['eligibleRent']) {
   env['eligibleRent'] = val;
                updateValue$6(val);
                return true;
}
}
function eve$29(env) {
  return env['income'];
}
function eve$30(env) {
  return env['partnerIncome'];
}
function eve$31(env) {
  return eve$29(env) + eve$30(env);
}
function eve$32(env) {
  return env['coResidentIncome'];
}
function eve$33(env) {
  return eve$31(env) + eve$32(env);
}
function updateValue$7(val) {
  var elt = document.getElementById('householdIncome-widget'); 
  elt.value = val;
}
function computeQuestion$15(env) {
  var val = eve$33(env);
            if (val !== env['householdIncome']) {
   env['householdIncome'] = val;
                updateValue$7(val);
                return true;
}
}
function eve$34(env) {
  return env['assets'];
}
function eve$35(env) {
  return env['partnerAssets'];
}
function eve$36(env) {
  return eve$34(env) + eve$35(env);
}
function updateValue$8(val) {
  var elt = document.getElementById('householdAssets-widget'); 
  elt.value = val;
}
function computeQuestion$16(env) {
  var val = eve$36(env);
            if (val !== env['householdAssets']) {
   env['householdAssets'] = val;
                updateValue$8(val);
                return true;
}
}
function eve$37(env) {
  return env['age'];
}
function eve$38(env) {
  return parseInt('23');
}
function eve$39(env) {
  return eve$37(env) < eve$38(env);
}
function eve$40(env) {
  return !eve$0(env);
}
function eve$41(env) {
  return env['partnerAge'];
}
function eve$42(env) {
  return eve$41(env) < eve$38(env);
}
function eve$43(env) {
  return eve$40(env) || eve$42(env);
}
function eve$44(env) {
  return eve$43(env);
}
function eve$45(env) {
  return eve$39(env) && eve$44(env);
}
function updateValue$9(val) {
  var elt = document.getElementById('under23-widget'); 
  elt.checked = val;
}
function computeQuestion$17(env) {
  var val = eve$45(env);
            if (val !== env['under23']) {
   env['under23'] = val;
                updateValue$9(val);
                return true;
}
}
function eve$46(env) {
  return env['nChildren'];
}
function eve$47(env) {
  return eve$46(env) > eve$2(env);
}
function updateValue$10(val) {
  var elt = document.getElementById('youngException-widget'); 
  elt.checked = val;
}
function computeQuestion$18(env) {
  var val = eve$47(env);
            if (val !== env['youngException']) {
   env['youngException'] = val;
                updateValue$10(val);
                return true;
}
}
function eve$48(env) {
  return env['eligibleRent'];
}
function eve$49(env) {
  return parseInt('452');
}
function eve$50(env) {
  return eve$48(env) <= eve$49(env);
}
function updateValue$11(val) {
  var elt = document.getElementById('belowYouthLimit-widget'); 
  elt.checked = val;
}
function computeQuestion$19(env) {
  var val = eve$50(env);
            if (val !== env['belowYouthLimit']) {
   env['belowYouthLimit'] = val;
                updateValue$11(val);
                return true;
}
}
function eve$51(env) {
  return parseInt('880');
}
function eve$52(env) {
  return eve$48(env) <= eve$51(env);
}
function updateValue$12(val) {
  var elt = document.getElementById('belowMaxLimit-widget'); 
  elt.checked = val;
}
function computeQuestion$20(env) {
  var val = eve$52(env);
            if (val !== env['belowMaxLimit']) {
   env['belowMaxLimit'] = val;
                updateValue$12(val);
                return true;
}
}
function eve$53(env) {
  return env['belowMaxLimit'];
}
function eve$54(env) {
  return env['under23'];
}
function eve$55(env) {
  return !eve$54(env);
}
function eve$56(env) {
  return env['youngException'];
}
function eve$57(env) {
  return eve$55(env) || eve$56(env);
}
function eve$58(env) {
  return env['belowYouthLimit'];
}
function eve$59(env) {
  return eve$57(env) || eve$58(env);
}
function eve$60(env) {
  return eve$59(env);
}
function eve$61(env) {
  return eve$53(env) && eve$60(env);
}
function updateValue$13(val) {
  var elt = document.getElementById('rentOk-widget'); 
  elt.checked = val;
}
function computeQuestion$21(env) {
  var val = eve$61(env);
            if (val !== env['rentOk']) {
   env['rentOk'] = val;
                updateValue$13(val);
                return true;
}
}
function eve$62(env) {
  return env['householdAssets'];
}
function eve$63(env) {
  return parseInt('36952');
}
function eve$64(env) {
  return eve$62(env) <= eve$63(env);
}
function eve$65(env) {
  return eve$40(env) && eve$64(env);
}
function eve$66(env) {
  return eve$65(env);
}
function eve$67(env) {
  return parseInt('73904');
}
function eve$68(env) {
  return eve$62(env) <= eve$67(env);
}
function eve$69(env) {
  return eve$0(env) && eve$68(env);
}
function eve$70(env) {
  return eve$69(env);
}
function eve$71(env) {
  return eve$66(env) || eve$70(env);
}
function updateValue$14(val) {
  var elt = document.getElementById('assetsOk-widget'); 
  elt.checked = val;
}
function computeQuestion$22(env) {
  var val = eve$71(env);
            if (val !== env['assetsOk']) {
   env['assetsOk'] = val;
                updateValue$14(val);
                return true;
}
}
function eve$72(env) {
  return env['recognisedRoom'];
}
function eve$73(env) {
  return eve$4(env) || eve$72(env);
}
function updateValue$15(val) {
  var elt = document.getElementById('propertyOk-widget'); 
  elt.checked = val;
}
function computeQuestion$23(env) {
  var val = eve$73(env);
            if (val !== env['propertyOk']) {
   env['propertyOk'] = val;
                updateValue$15(val);
                return true;
}
}
function eve$74(env) {
  return parseInt('18');
}
function eve$75(env) {
  return eve$37(env) >= eve$74(env);
}
function eve$76(env) {
  return env['legalResidence'];
}
function eve$77(env) {
  return eve$75(env) && eve$76(env);
}
function eve$78(env) {
  return env['registeredAtAddress'];
}
function eve$79(env) {
  return eve$77(env) && eve$78(env);
}
function updateValue$16(val) {
  var elt = document.getElementById('basicOk-widget'); 
  elt.checked = val;
}
function computeQuestion$24(env) {
  var val = eve$79(env);
            if (val !== env['basicOk']) {
   env['basicOk'] = val;
                updateValue$16(val);
                return true;
}
}
function eve$80(env) {
  return env['basicOk'];
}
function eve$81(env) {
  return env['propertyOk'];
}
function eve$82(env) {
  return eve$80(env) && eve$81(env);
}
function eve$83(env) {
  return env['rentOk'];
}
function eve$84(env) {
  return eve$82(env) && eve$83(env);
}
function eve$85(env) {
  return env['assetsOk'];
}
function eve$86(env) {
  return eve$84(env) && eve$85(env);
}
function eve$87(env) {
  return eve$26(env) > eve$2(env);
}
function eve$88(env) {
  return eve$86(env) && eve$87(env);
}
function updateValue$17(val) {
  var elt = document.getElementById('eligible-widget'); 
  elt.checked = val;
}
function computeQuestion$25(env) {
  var val = eve$88(env);
            if (val !== env['eligible']) {
   env['eligible'] = val;
                updateValue$17(val);
                return true;
}
}
function eve$89(env) {
  return env['eligible'];
}
function eve$90(env) {
  return parseInt('13');
}
function eve$91(env) {
  return env['startMonth'];
}
function eve$92(env) {
  return eve$90(env) - eve$91(env);
}
function updateValue$18(val) {
  var elt = document.getElementById('monthsOfBenefit-widget'); 
  elt.value = val;
}
function computeQuestion$26(env) {
  var val = eve$92(env);
            if (val !== env['monthsOfBenefit']) {
   env['monthsOfBenefit'] = val;
                updateValue$18(val);
                return true;
}
}
function computeQuestion$27(env) {
  var change = false;
  change = change || false; 
  change = change || false; 
  change = change || computeQuestion$26(env); 
  change = change || false; 
  return change;
}
function eve$93(env) {
  return env['wantsInfo'];
}
function computeQuestion$28(env) {
  var change = false;
  change = change || false; 
  return change;
}
function computeQuestion$29(env) {
  if (eve$93(env)) {
   return computeQuestion$28(env);
}
}
function computeQuestion$30(env) {
  var change = false;
  change = change || false; 
  change = change || computeQuestion$29(env); 
  return change;
}
function computeQuestion$31(env) {
  if (eve$89(env)) 
   {
   return computeQuestion$27(env);
} 
else 
   {
   return computeQuestion$30(env);
}
}
function updateVisibility$0(vis, env) {
  var elt = document.getElementById('bsn-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$1(vis, env) {
  var elt = document.getElementById('age-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$2(vis, env) {
  var elt = document.getElementById('legalResidence-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$3(vis, env) {
  var elt = document.getElementById('registeredAtAddress-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$4(vis, env) {
  var elt = document.getElementById('hasPartner-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$5(vis, env) {
  var elt = document.getElementById('partnerBsn-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$6(vis, env) {
  var elt = document.getElementById('partnerAge-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$7(vis, env) {
  var elt = document.getElementById('partnerIncome-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$8(vis, env) {
  var elt = document.getElementById('partnerAssets-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$9(vis, env) {
  updateVisibility$5(vis, env); 
  updateVisibility$6(vis, env); 
  updateVisibility$7(vis, env); 
  updateVisibility$8(vis, env);
}
function updateVisibility$10(vis, env) {
  updateVisibility$9(eve$0(env), env);
}
function updateVisibility$11(vis, env) {
  var elt = document.getElementById('nChildren-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$12(vis, env) {
  var elt = document.getElementById('nCoResidents-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$13(vis, env) {
  var elt = document.getElementById('coResidentIncome-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$14(vis, env) {
  var elt = document.getElementById('coResidentsYoung-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$15(vis, env) {
  updateVisibility$13(vis, env); 
  updateVisibility$14(vis, env);
}
function updateVisibility$16(vis, env) {
  updateVisibility$15(eve$3(env), env);
}
function updateVisibility$17(vis, env) {
  var elt = document.getElementById('selfContained-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$18(vis, env) {
  var elt = document.getElementById('recognisedRoom-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$19(vis, env) {
  updateVisibility$18(vis, env);
}
function updateVisibility$20(vis, env) {
  updateVisibility$19(eve$5(env), env);
}
function updateVisibility$21(vis, env) {
  var elt = document.getElementById('corporationLandlord-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$22(vis, env) {
  var elt = document.getElementById('bareRent-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$23(vis, env) {
  var elt = document.getElementById('hasServiceCosts-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$24(vis, env) {
  var elt = document.getElementById('svcEnergy-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$25(vis, env) {
  var elt = document.getElementById('svcCleaning-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$26(vis, env) {
  var elt = document.getElementById('svcCaretaker-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$27(vis, env) {
  var elt = document.getElementById('svcShared-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$28(vis, env) {
  var elt = document.getElementById('svcEnergyOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$29(vis, env) {
  var elt = document.getElementById('svcCleaningOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$30(vis, env) {
  var elt = document.getElementById('svcCaretakerOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$31(vis, env) {
  var elt = document.getElementById('svcSharedOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$32(vis, env) {
  var elt = document.getElementById('svcAllOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$33(vis, env) {
  var elt = document.getElementById('svcTotal-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$34(vis, env) {
  updateVisibility$24(vis, env); 
  updateVisibility$25(vis, env); 
  updateVisibility$26(vis, env); 
  updateVisibility$27(vis, env); 
  updateVisibility$28(vis, env); 
  updateVisibility$29(vis, env); 
  updateVisibility$30(vis, env); 
  updateVisibility$31(vis, env); 
  updateVisibility$32(vis, env); 
  updateVisibility$33(vis, env);
}
function updateVisibility$35(vis, env) {
  updateVisibility$34(eve$6(env), env);
}
function updateVisibility$36(vis, env) {
  var elt = document.getElementById('eligibleRent-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$37(vis, env) {
  var elt = document.getElementById('income-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$38(vis, env) {
  var elt = document.getElementById('assets-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$39(vis, env) {
  var elt = document.getElementById('householdIncome-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$40(vis, env) {
  var elt = document.getElementById('householdAssets-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$41(vis, env) {
  var elt = document.getElementById('under23-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$42(vis, env) {
  var elt = document.getElementById('youngException-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$43(vis, env) {
  var elt = document.getElementById('belowYouthLimit-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$44(vis, env) {
  var elt = document.getElementById('belowMaxLimit-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$45(vis, env) {
  var elt = document.getElementById('rentOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$46(vis, env) {
  var elt = document.getElementById('assetsOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$47(vis, env) {
  var elt = document.getElementById('propertyOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$48(vis, env) {
  var elt = document.getElementById('basicOk-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$49(vis, env) {
  var elt = document.getElementById('eligible-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$50(vis, env) {
  var elt = document.getElementById('iban-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$51(vis, env) {
  var elt = document.getElementById('startMonth-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$52(vis, env) {
  var elt = document.getElementById('monthsOfBenefit-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$53(vis, env) {
  var elt = document.getElementById('agreeReport-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$54(vis, env) {
  updateVisibility$50(vis, env); 
  updateVisibility$51(vis, env); 
  updateVisibility$52(vis, env); 
  updateVisibility$53(vis, env);
}
function updateVisibility$55(vis, env) {
  var elt = document.getElementById('wantsInfo-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$56(vis, env) {
  var elt = document.getElementById('infoEmail-div');
            elt.style.display = vis ? 'block' : 'none';
}
function updateVisibility$57(vis, env) {
  updateVisibility$56(vis, env);
}
function updateVisibility$58(vis, env) {
  updateVisibility$57(eve$93(env), env);
}
function updateVisibility$59(vis, env) {
  updateVisibility$55(vis, env); 
  updateVisibility$58(vis, env);
}
function updateVisibility$60(vis, env) {
  updateVisibility$54(eve$89(env), env);
            updateVisibility$59(!eve$89(env), env);
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
change = change || computeQuestion$3(env);
change = change || false;
change = change || computeQuestion$5(env);
change = change || false;
change = change || false;
change = change || false;
change = change || computeQuestion$13(env);
change = change || computeQuestion$14(env);
change = change || false;
change = change || false;
change = change || computeQuestion$15(env);
change = change || computeQuestion$16(env);
change = change || computeQuestion$17(env);
change = change || computeQuestion$18(env);
change = change || computeQuestion$19(env);
change = change || computeQuestion$20(env);
change = change || computeQuestion$21(env);
change = change || computeQuestion$22(env);
change = change || computeQuestion$23(env);
change = change || computeQuestion$24(env);
change = change || computeQuestion$25(env);
change = change || computeQuestion$31(env);
}
            while (change);
            var vis = true; 
  updateVisibility$0(vis, env); 
  updateVisibility$1(vis, env); 
  updateVisibility$2(vis, env); 
  updateVisibility$3(vis, env); 
  updateVisibility$4(vis, env); 
  updateVisibility$10(vis, env); 
  updateVisibility$11(vis, env); 
  updateVisibility$12(vis, env); 
  updateVisibility$16(vis, env); 
  updateVisibility$17(vis, env); 
  updateVisibility$20(vis, env); 
  updateVisibility$21(vis, env); 
  updateVisibility$22(vis, env); 
  updateVisibility$23(vis, env); 
  updateVisibility$35(vis, env); 
  updateVisibility$36(vis, env); 
  updateVisibility$37(vis, env); 
  updateVisibility$38(vis, env); 
  updateVisibility$39(vis, env); 
  updateVisibility$40(vis, env); 
  updateVisibility$41(vis, env); 
  updateVisibility$42(vis, env); 
  updateVisibility$43(vis, env); 
  updateVisibility$44(vis, env); 
  updateVisibility$45(vis, env); 
  updateVisibility$46(vis, env); 
  updateVisibility$47(vis, env); 
  updateVisibility$48(vis, env); 
  updateVisibility$49(vis, env); 
  updateVisibility$60(vis, env);
};
}
function updater$0(upd) {
  return function (x) {
  upd('bsn', x.target.value);
};
}
function widget$0(env, func) {
  var div = document.createElement('div');
    div.id = 'bsn-div';
    div.appendChild(document.createTextNode('"Citizen service number (BSN):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'bsn-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['bsn']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$0(env, upd) {
  widget$0(env, updater$0(upd));
}
function updater$1(upd) {
  return function (x) {
  upd('age', x.target.value);
};
}
function widget$1(env, func) {
  var div = document.createElement('div');
    div.id = 'age-div';
    div.appendChild(document.createTextNode('"Your age on 1 January 2024:"'.slice(1, -1)));
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
  upd('legalResidence', x.target.checked);
};
}
function widget$2(env, func) {
  var div = document.createElement('div');
    div.id = 'legalResidence-div';
    div.appendChild(document.createTextNode('"Do you have Dutch nationality or a valid residence permit?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'legalResidence-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['legalResidence']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$2(env, upd) {
  widget$2(env, updater$2(upd));
}
function updater$3(upd) {
  return function (x) {
  upd('registeredAtAddress', x.target.checked);
};
}
function widget$3(env, func) {
  var div = document.createElement('div');
    div.id = 'registeredAtAddress-div';
    div.appendChild(document.createTextNode('"Are you registered (BRP) at the rental address?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'registeredAtAddress-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['registeredAtAddress']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$3(env, upd) {
  widget$3(env, updater$3(upd));
}
function updater$4(upd) {
  return function (x) {
  upd('hasPartner', x.target.checked);
};
}
function widget$4(env, func) {
  var div = document.createElement('div');
    div.id = 'hasPartner-div';
    div.appendChild(document.createTextNode('"Do you have a benefit partner?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasPartner-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasPartner']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$4(env, upd) {
  widget$4(env, updater$4(upd));
}
function updater$5(upd) {
  return function (x) {
  upd('partnerBsn', x.target.value);
};
}
function widget$5(env, func) {
  var div = document.createElement('div');
    div.id = 'partnerBsn-div';
    div.appendChild(document.createTextNode('"Partner BSN:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'partnerBsn-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['partnerBsn']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$5(env, upd) {
  widget$5(env, updater$5(upd));
}
function updater$6(upd) {
  return function (x) {
  upd('partnerAge', x.target.value);
};
}
function widget$6(env, func) {
  var div = document.createElement('div');
    div.id = 'partnerAge-div';
    div.appendChild(document.createTextNode('"Partner age on 1 January 2024:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'partnerAge-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['partnerAge']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$6(env, upd) {
  widget$6(env, updater$6(upd));
}
function updater$7(upd) {
  return function (x) {
  upd('partnerIncome', x.target.value);
};
}
function widget$7(env, func) {
  var div = document.createElement('div');
    div.id = 'partnerIncome-div';
    div.appendChild(document.createTextNode('"Partner yearly income (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'partnerIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['partnerIncome']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$7(env, upd) {
  widget$7(env, updater$7(upd));
}
function updater$8(upd) {
  return function (x) {
  upd('partnerAssets', x.target.value);
};
}
function widget$8(env, func) {
  var div = document.createElement('div');
    div.id = 'partnerAssets-div';
    div.appendChild(document.createTextNode('"Partner assets on 1 January 2024 (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'partnerAssets-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['partnerAssets']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$8(env, upd) {
  widget$8(env, updater$8(upd));
}
function renderQuestion$9(env, upd) {
  renderQuestion$5(env, upd); 
  renderQuestion$6(env, upd); 
  renderQuestion$7(env, upd); 
  renderQuestion$8(env, upd);
}
function renderQuestion$10(env, upd) {
  renderQuestion$9(env, upd);
}
function updater$9(upd) {
  return function (x) {
  upd('nChildren', x.target.value);
};
}
function widget$9(env, func) {
  var div = document.createElement('div');
    div.id = 'nChildren-div';
    div.appendChild(document.createTextNode('"Number of children under 18 living with you:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'nChildren-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['nChildren']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$11(env, upd) {
  widget$9(env, updater$9(upd));
}
function updater$10(upd) {
  return function (x) {
  upd('nCoResidents', x.target.value);
};
}
function widget$10(env, func) {
  var div = document.createElement('div');
    div.id = 'nCoResidents-div';
    div.appendChild(document.createTextNode('"Number of other adults (co-residents) living with you:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'nCoResidents-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['nCoResidents']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$12(env, upd) {
  widget$10(env, updater$10(upd));
}
function updater$11(upd) {
  return function (x) {
  upd('coResidentIncome', x.target.value);
};
}
function widget$11(env, func) {
  var div = document.createElement('div');
    div.id = 'coResidentIncome-div';
    div.appendChild(document.createTextNode('"Combined yearly income of co-residents (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'coResidentIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['coResidentIncome']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$13(env, upd) {
  widget$11(env, updater$11(upd));
}
function updater$12(upd) {
  return function (x) {
  upd('coResidentsYoung', x.target.checked);
};
}
function widget$12(env, func) {
  var div = document.createElement('div');
    div.id = 'coResidentsYoung-div';
    div.appendChild(document.createTextNode('"Are all co-residents under 23?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'coResidentsYoung-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['coResidentsYoung']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$14(env, upd) {
  widget$12(env, updater$12(upd));
}
function renderQuestion$15(env, upd) {
  renderQuestion$13(env, upd); 
  renderQuestion$14(env, upd);
}
function renderQuestion$16(env, upd) {
  renderQuestion$15(env, upd);
}
function updater$13(upd) {
  return function (x) {
  upd('selfContained', x.target.checked);
};
}
function widget$13(env, func) {
  var div = document.createElement('div');
    div.id = 'selfContained-div';
    div.appendChild(document.createTextNode('"Is the property a self-contained home (own entrance, kitchen and toilet)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'selfContained-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['selfContained']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$17(env, upd) {
  widget$13(env, updater$13(upd));
}
function updater$14(upd) {
  return function (x) {
  upd('recognisedRoom', x.target.checked);
};
}
function widget$14(env, func) {
  var div = document.createElement('div');
    div.id = 'recognisedRoom-div';
    div.appendChild(document.createTextNode('"Is it a recognised room in a care or group home (woonwagen, woonschip or DAEB room)?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'recognisedRoom-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['recognisedRoom']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$18(env, upd) {
  widget$14(env, updater$14(upd));
}
function renderQuestion$19(env, upd) {
  renderQuestion$18(env, upd);
}
function renderQuestion$20(env, upd) {
  renderQuestion$19(env, upd);
}
function updater$15(upd) {
  return function (x) {
  upd('corporationLandlord', x.target.checked);
};
}
function widget$15(env, func) {
  var div = document.createElement('div');
    div.id = 'corporationLandlord-div';
    div.appendChild(document.createTextNode('"Is the landlord a housing corporation?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'corporationLandlord-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['corporationLandlord']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$21(env, upd) {
  widget$15(env, updater$15(upd));
}
function updater$16(upd) {
  return function (x) {
  upd('bareRent', x.target.value);
};
}
function widget$16(env, func) {
  var div = document.createElement('div');
    div.id = 'bareRent-div';
    div.appendChild(document.createTextNode('"Bare rent per month (kale huur, euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'bareRent-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['bareRent']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$22(env, upd) {
  widget$16(env, updater$16(upd));
}
function updater$17(upd) {
  return function (x) {
  upd('hasServiceCosts', x.target.checked);
};
}
function widget$17(env, func) {
  var div = document.createElement('div');
    div.id = 'hasServiceCosts-div';
    div.appendChild(document.createTextNode('"Do you pay service costs to the landlord?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'hasServiceCosts-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['hasServiceCosts']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$23(env, upd) {
  widget$17(env, updater$17(upd));
}
function updater$18(upd) {
  return function (x) {
  upd('svcEnergy', x.target.value);
};
}
function widget$18(env, func) {
  var div = document.createElement('div');
    div.id = 'svcEnergy-div';
    div.appendChild(document.createTextNode('"Energy for shared spaces per month (euro, max 12 counts):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcEnergy-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['svcEnergy']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$24(env, upd) {
  widget$18(env, updater$18(upd));
}
function updater$19(upd) {
  return function (x) {
  upd('svcCleaning', x.target.value);
};
}
function widget$19(env, func) {
  var div = document.createElement('div');
    div.id = 'svcCleaning-div';
    div.appendChild(document.createTextNode('"Cleaning of shared spaces per month (euro, max 12 counts):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcCleaning-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['svcCleaning']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$25(env, upd) {
  widget$19(env, updater$19(upd));
}
function updater$20(upd) {
  return function (x) {
  upd('svcCaretaker', x.target.value);
};
}
function widget$20(env, func) {
  var div = document.createElement('div');
    div.id = 'svcCaretaker-div';
    div.appendChild(document.createTextNode('"Caretaker (huismeester) per month (euro, max 12 counts):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcCaretaker-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['svcCaretaker']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$26(env, upd) {
  widget$20(env, updater$20(upd));
}
function updater$21(upd) {
  return function (x) {
  upd('svcShared', x.target.value);
};
}
function widget$21(env, func) {
  var div = document.createElement('div');
    div.id = 'svcShared-div';
    div.appendChild(document.createTextNode('"Shared rooms and services per month (euro, max 12 counts):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcShared-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['svcShared']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$27(env, upd) {
  widget$21(env, updater$21(upd));
}
function widget$22(env) {
  var div = document.createElement('div');
    div.id = 'svcEnergyOk-div';
    div.appendChild(document.createTextNode('"Energy capped:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcEnergyOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['svcEnergyOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$28(env, upd) {
  widget$22(env);
}
function widget$23(env) {
  var div = document.createElement('div');
    div.id = 'svcCleaningOk-div';
    div.appendChild(document.createTextNode('"Cleaning capped:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcCleaningOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['svcCleaningOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$29(env, upd) {
  widget$23(env);
}
function widget$24(env) {
  var div = document.createElement('div');
    div.id = 'svcCaretakerOk-div';
    div.appendChild(document.createTextNode('"Caretaker capped:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcCaretakerOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['svcCaretakerOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$30(env, upd) {
  widget$24(env);
}
function widget$25(env) {
  var div = document.createElement('div');
    div.id = 'svcSharedOk-div';
    div.appendChild(document.createTextNode('"Shared capped:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcSharedOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['svcSharedOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$31(env, upd) {
  widget$25(env);
}
function widget$26(env) {
  var div = document.createElement('div');
    div.id = 'svcAllOk-div';
    div.appendChild(document.createTextNode('"All service costs within their cap:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcAllOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['svcAllOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$32(env, upd) {
  widget$26(env);
}
function widget$27(env) {
  var div = document.createElement('div');
    div.id = 'svcTotal-div';
    div.appendChild(document.createTextNode('"Declared service costs (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'svcTotal-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['svcTotal']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$33(env, upd) {
  widget$27(env);
}
function renderQuestion$34(env, upd) {
  renderQuestion$24(env, upd); 
  renderQuestion$25(env, upd); 
  renderQuestion$26(env, upd); 
  renderQuestion$27(env, upd); 
  renderQuestion$28(env, upd); 
  renderQuestion$29(env, upd); 
  renderQuestion$30(env, upd); 
  renderQuestion$31(env, upd); 
  renderQuestion$32(env, upd); 
  renderQuestion$33(env, upd);
}
function renderQuestion$35(env, upd) {
  renderQuestion$34(env, upd);
}
function widget$28(env) {
  var div = document.createElement('div');
    div.id = 'eligibleRent-div';
    div.appendChild(document.createTextNode('"Eligible rent if every service cost is within its cap (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'eligibleRent-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['eligibleRent']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$36(env, upd) {
  widget$28(env);
}
function updater$22(upd) {
  return function (x) {
  upd('income', x.target.value);
};
}
function widget$29(env, func) {
  var div = document.createElement('div');
    div.id = 'income-div';
    div.appendChild(document.createTextNode('"Your expected yearly income (toetsingsinkomen, euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'income-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['income']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$37(env, upd) {
  widget$29(env, updater$22(upd));
}
function updater$23(upd) {
  return function (x) {
  upd('assets', x.target.value);
};
}
function widget$30(env, func) {
  var div = document.createElement('div');
    div.id = 'assets-div';
    div.appendChild(document.createTextNode('"Your assets on 1 January 2024 (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'assets-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['assets']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$38(env, upd) {
  widget$30(env, updater$23(upd));
}
function widget$31(env) {
  var div = document.createElement('div');
    div.id = 'householdIncome-div';
    div.appendChild(document.createTextNode('"Household income (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'householdIncome-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['householdIncome']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$39(env, upd) {
  widget$31(env);
}
function widget$32(env) {
  var div = document.createElement('div');
    div.id = 'householdAssets-div';
    div.appendChild(document.createTextNode('"Household assets (euro):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'householdAssets-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['householdAssets']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$40(env, upd) {
  widget$32(env);
}
function widget$33(env) {
  var div = document.createElement('div');
    div.id = 'under23-div';
    div.appendChild(document.createTextNode('"Applicant (and partner) younger than 23:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'under23-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['under23']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$41(env, upd) {
  widget$33(env);
}
function widget$34(env) {
  var div = document.createElement('div');
    div.id = 'youngException-div';
    div.appendChild(document.createTextNode('"Exception for young tenants applies (children in the household):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'youngException-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['youngException']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$42(env, upd) {
  widget$34(env);
}
function widget$35(env) {
  var div = document.createElement('div');
    div.id = 'belowYouthLimit-div';
    div.appendChild(document.createTextNode('"Rent at or below the youth rent limit (452):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'belowYouthLimit-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['belowYouthLimit']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$43(env, upd) {
  widget$35(env);
}
function widget$36(env) {
  var div = document.createElement('div');
    div.id = 'belowMaxLimit-div';
    div.appendChild(document.createTextNode('"Rent at or below the maximum rent limit (880):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'belowMaxLimit-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['belowMaxLimit']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$44(env, upd) {
  widget$36(env);
}
function widget$37(env) {
  var div = document.createElement('div');
    div.id = 'rentOk-div';
    div.appendChild(document.createTextNode('"Rent passes the rent-limit test:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'rentOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['rentOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$45(env, upd) {
  widget$37(env);
}
function widget$38(env) {
  var div = document.createElement('div');
    div.id = 'assetsOk-div';
    div.appendChild(document.createTextNode('"Assets below the limit (36952 single, 73904 with partner):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'assetsOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['assetsOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$46(env, upd) {
  widget$38(env);
}
function widget$39(env) {
  var div = document.createElement('div');
    div.id = 'propertyOk-div';
    div.appendChild(document.createTextNode('"Property qualifies:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'propertyOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['propertyOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$47(env, upd) {
  widget$39(env);
}
function widget$40(env) {
  var div = document.createElement('div');
    div.id = 'basicOk-div';
    div.appendChild(document.createTextNode('"Basic conditions met:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'basicOk-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['basicOk']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$48(env, upd) {
  widget$40(env);
}
function widget$41(env) {
  var div = document.createElement('div');
    div.id = 'eligible-div';
    div.appendChild(document.createTextNode('"Eligible for huurtoeslag:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'eligible-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['eligible']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$49(env, upd) {
  widget$41(env);
}
function updater$24(upd) {
  return function (x) {
  upd('iban', x.target.value);
};
}
function widget$42(env, func) {
  var div = document.createElement('div');
    div.id = 'iban-div';
    div.appendChild(document.createTextNode('"IBAN for payment:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'iban-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['iban']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$50(env, upd) {
  widget$42(env, updater$24(upd));
}
function updater$25(upd) {
  return function (x) {
  upd('startMonth', x.target.value);
};
}
function widget$43(env, func) {
  var div = document.createElement('div');
    div.id = 'startMonth-div';
    div.appendChild(document.createTextNode('"Start month of the rental contract (1-12):"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'startMonth-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['startMonth']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$51(env, upd) {
  widget$43(env, updater$25(upd));
}
function widget$44(env) {
  var div = document.createElement('div');
    div.id = 'monthsOfBenefit-div';
    div.appendChild(document.createTextNode('"Months of benefit this year:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'monthsOfBenefit-widget'; 
  elt.setAttribute('type', 'number');
            elt.value = env['monthsOfBenefit']; 
  elt.disabled = true; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$52(env, upd) {
  widget$44(env);
}
function updater$26(upd) {
  return function (x) {
  upd('agreeReport', x.target.checked);
};
}
function widget$45(env, func) {
  var div = document.createElement('div');
    div.id = 'agreeReport-div';
    div.appendChild(document.createTextNode('"Do you agree to report changes in income within 4 weeks?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'agreeReport-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['agreeReport']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$53(env, upd) {
  widget$45(env, updater$26(upd));
}
function renderQuestion$54(env, upd) {
  renderQuestion$50(env, upd); 
  renderQuestion$51(env, upd); 
  renderQuestion$52(env, upd); 
  renderQuestion$53(env, upd);
}
function updater$27(upd) {
  return function (x) {
  upd('wantsInfo', x.target.checked);
};
}
function widget$46(env, func) {
  var div = document.createElement('div');
    div.id = 'wantsInfo-div';
    div.appendChild(document.createTextNode('"Would you like information on other allowances?"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'wantsInfo-widget'; 
  elt.setAttribute('type', 'checkbox');
            elt.checked = env['wantsInfo']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$55(env, upd) {
  widget$46(env, updater$27(upd));
}
function updater$28(upd) {
  return function (x) {
  upd('infoEmail', x.target.value);
};
}
function widget$47(env, func) {
  var div = document.createElement('div');
    div.id = 'infoEmail-div';
    div.appendChild(document.createTextNode('"Email address for information:"'.slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = 'infoEmail-widget'; 
  elt.setAttribute('type', 'text');
            elt.value = env['infoEmail']; 
  elt.onchange = func; 
  div.appendChild(elt);
    document.body.appendChild(div);
}
function renderQuestion$56(env, upd) {
  widget$47(env, updater$28(upd));
}
function renderQuestion$57(env, upd) {
  renderQuestion$56(env, upd);
}
function renderQuestion$58(env, upd) {
  renderQuestion$57(env, upd);
}
function renderQuestion$59(env, upd) {
  renderQuestion$55(env, upd); 
  renderQuestion$58(env, upd);
}
function renderQuestion$60(env, upd) {
  renderQuestion$54(env, upd);
            renderQuestion$59(env, upd);
}
function render$0(env, upd) {
  renderQuestion$0(env, upd);
renderQuestion$1(env, upd);
renderQuestion$2(env, upd);
renderQuestion$3(env, upd);
renderQuestion$4(env, upd);
renderQuestion$10(env, upd);
renderQuestion$11(env, upd);
renderQuestion$12(env, upd);
renderQuestion$16(env, upd);
renderQuestion$17(env, upd);
renderQuestion$20(env, upd);
renderQuestion$21(env, upd);
renderQuestion$22(env, upd);
renderQuestion$23(env, upd);
renderQuestion$35(env, upd);
renderQuestion$36(env, upd);
renderQuestion$37(env, upd);
renderQuestion$38(env, upd);
renderQuestion$39(env, upd);
renderQuestion$40(env, upd);
renderQuestion$41(env, upd);
renderQuestion$42(env, upd);
renderQuestion$43(env, upd);
renderQuestion$44(env, upd);
renderQuestion$45(env, upd);
renderQuestion$46(env, upd);
renderQuestion$47(env, upd);
renderQuestion$48(env, upd);
renderQuestion$49(env, upd);
renderQuestion$60(env, upd);
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
  updateVisibility$10(vis, env); 
  updateVisibility$11(vis, env); 
  updateVisibility$12(vis, env); 
  updateVisibility$16(vis, env); 
  updateVisibility$17(vis, env); 
  updateVisibility$20(vis, env); 
  updateVisibility$21(vis, env); 
  updateVisibility$22(vis, env); 
  updateVisibility$23(vis, env); 
  updateVisibility$35(vis, env); 
  updateVisibility$36(vis, env); 
  updateVisibility$37(vis, env); 
  updateVisibility$38(vis, env); 
  updateVisibility$39(vis, env); 
  updateVisibility$40(vis, env); 
  updateVisibility$41(vis, env); 
  updateVisibility$42(vis, env); 
  updateVisibility$43(vis, env); 
  updateVisibility$44(vis, env); 
  updateVisibility$45(vis, env); 
  updateVisibility$46(vis, env); 
  updateVisibility$47(vis, env); 
  updateVisibility$48(vis, env); 
  updateVisibility$49(vis, env); 
  updateVisibility$60(vis, env);
}