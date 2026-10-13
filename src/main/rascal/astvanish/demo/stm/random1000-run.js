export { run$0 as run };
function doTrans$0(state, event) {
  if ('felling' === event) {
    state.current = 'lynx';
    return true;
  }
  if ('accepting' === event) {
    state.current = 'grand';
    return true;
  }
  if ('gotta' === event) {
    state.current = 'amusing';
    return true;
  }
  return false;
}
function handleState$0(state, event) {
  if ('feminine' === state.current) {
    return doTrans$0(state, event);
  } return false;
}
function doTrans$1(state, event) {
  if ('wishing' === event) {
    state.current = 'beautiful';
    return true;
  }
  if ('accessed' === event) {
    state.current = 'kaleidoscopic';
    return true;
  }
  return false;
}
function handleState$1(state, event) {
  if ('animated' === state.current) {
    return doTrans$1(state, event);
  } return false;
}
function doTrans$2(state, event) {
  if ('filling' === event) {
    state.current = 'rubbery';
    return true;
  }
  if ('selecting' === event) {
    state.current = 'kind';
    return true;
  }
  if ('rejoiced' === event) {
    state.current = 'dazzling';
    return true;
  }
  if ('expect' === event) {
    state.current = 'wiggly';
    return true;
  }
  if ('working' === event) {
    state.current = 'unsung';
    return true;
  }
  return false;
}
function handleState$2(state, event) {
  if ('qualified' === state.current) {
    return doTrans$2(state, event);
  } return false;
}
function doTrans$3(state, event) {
  if ('inherit' === event) {
    state.current = 'quintessential';
    return true;
  }
  if ('shunted' === event) {
    state.current = 'gaseous';
    return true;
  }
  if ('smitten' === event) {
    state.current = 'defensive';
    return true;
  }
  if ('resigned' === event) {
    state.current = 'ibis';
    return true;
  }
  return false;
}
function handleState$3(state, event) {
  if ('ashamed' === state.current) {
    return doTrans$3(state, event);
  } return false;
}
function doTrans$4(state, event) {
  if ('extruded' === event) {
    state.current = 'cheery';
    return true;
  }
  return false;
}
function handleState$4(state, event) {
  if ('assured' === state.current) {
    return doTrans$4(state, event);
  } return false;
}
function doTrans$5(state, event) {
  if ('warring' === event) {
    state.current = 'helpful';
    return true;
  }
  if ('consumed' === event) {
    state.current = 'concerned';
    return true;
  }
  if ('steered' === event) {
    state.current = 'grizzled';
    return true;
  }
  return false;
}
function handleState$5(state, event) {
  if ('pitiful' === state.current) {
    return doTrans$5(state, event);
  } return false;
}
function doTrans$6(state, event) {
  if ('intersects' === event) {
    state.current = 'cloudy';
    return true;
  }
  if ('purified' === event) {
    state.current = 'thoughtless';
    return true;
  }
  if ('glances' === event) {
    state.current = 'muddy';
    return true;
  }
  if ('reposed' === event) {
    state.current = 'fish';
    return true;
  }
  if ('rolling' === event) {
    state.current = 'wrathful';
    return true;
  }
  return false;
}
function handleState$6(state, event) {
  if ('physical' === state.current) {
    return doTrans$6(state, event);
  } return false;
}
function doTrans$7(state, event) {
  if ('fading' === event) {
    state.current = 'chimpanzee';
    return true;
  }
  if ('teaches' === event) {
    state.current = 'electric';
    return true;
  }
  if ('floats' === event) {
    state.current = 'truthful';
    return true;
  }
  return false;
}
function handleState$7(state, event) {
  if ('wry' === state.current) {
    return doTrans$7(state, event);
  } return false;
}
function doTrans$8(state, event) {
  if ('master' === event) {
    state.current = 'doting';
    return true;
  }
  if ('ay' === event) {
    state.current = 'scorching';
    return true;
  }
  return false;
}
function handleState$8(state, event) {
  if ('frog' === state.current) {
    return doTrans$8(state, event);
  } return false;
}
function doTrans$9(state, event) {
  if ('elevate' === event) {
    state.current = 'pastel';
    return true;
  }
  if ('burn' === event) {
    state.current = 'acrobatic';
    return true;
  }
  if ('renting' === event) {
    state.current = 'snake';
    return true;
  }
  if ('sifting' === event) {
    state.current = 'bewildered';
    return true;
  }
  return false;
}
function handleState$9(state, event) {
  if ('mundane' === state.current) {
    return doTrans$9(state, event);
  } return false;
}
function doTrans$10(state, event) {
  if ('constituting' === event) {
    state.current = 'ethical';
    return true;
  }
  if ('widens' === event) {
    state.current = 'trained';
    return true;
  }
  if ('deviated' === event) {
    state.current = 'somber';
    return true;
  }
  if ('partitioning' === event) {
    state.current = 'rubbery';
    return true;
  }
  return false;
}
function handleState$10(state, event) {
  if ('dragonfly' === state.current) {
    return doTrans$10(state, event);
  } return false;
}
function doTrans$11(state, event) {
  if ('owned' === event) {
    state.current = 'wobbly';
    return true;
  }
  if ('overlying' === event) {
    state.current = 'gibbon';
    return true;
  }
  if ('obtain' === event) {
    state.current = 'hopeful';
    return true;
  }
  return false;
}
function handleState$11(state, event) {
  if ('slippery' === state.current) {
    return doTrans$11(state, event);
  } return false;
}
function doTrans$12(state, event) {
  if ('blown' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('complement' === event) {
    state.current = 'quintessential';
    return true;
  }
  return false;
}
function handleState$12(state, event) {
  if ('back' === state.current) {
    return doTrans$12(state, event);
  } return false;
}
function doTrans$13(state, event) {
  if ('institute' === event) {
    state.current = 'vague';
    return true;
  }
  if ('inaugurated' === event) {
    state.current = 'fetid';
    return true;
  }
  if ('confided' === event) {
    state.current = 'limp';
    return true;
  }
  return false;
}
function handleState$13(state, event) {
  if ('meager' === state.current) {
    return doTrans$13(state, event);
  } return false;
}
function doTrans$14(state, event) {
  return false;
}
function handleState$14(state, event) {
  if ('loving' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function handleState$15(state, event) {
  if ('instructive' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$15(state, event) {
  if ('shooting' === event) {
    state.current = 'granular';
    return true;
  }
  if ('budgeted' === event) {
    state.current = 'feisty';
    return true;
  }
  if ('im' === event) {
    state.current = 'hopeful';
    return true;
  }
  if ('emanate' === event) {
    state.current = 'tangible';
    return true;
  }
  if ('pacing' === event) {
    state.current = 'hungry';
    return true;
  }
  if ('rinse' === event) {
    state.current = 'exciting';
    return true;
  }
  return false;
}
function handleState$16(state, event) {
  if ('bad' === state.current) {
    return doTrans$15(state, event);
  } return false;
}
function doTrans$16(state, event) {
  if ('fledged' === event) {
    state.current = 'ill_informed';
    return true;
  }
  if ('rob' === event) {
    state.current = 'well_informed';
    return true;
  }
  return false;
}
function handleState$17(state, event) {
  if ('genuine' === state.current) {
    return doTrans$16(state, event);
  } return false;
}
function doTrans$17(state, event) {
  if ('encircling' === event) {
    state.current = 'klutzy';
    return true;
  }
  if ('magnifying' === event) {
    state.current = 'idealistic';
    return true;
  }
  return false;
}
function handleState$18(state, event) {
  if ('arid' === state.current) {
    return doTrans$17(state, event);
  } return false;
}
function doTrans$18(state, event) {
  if ('dissenting' === event) {
    state.current = 'magnificent';
    return true;
  }
  if ('enticed' === event) {
    state.current = 'jaguar';
    return true;
  }
  return false;
}
function handleState$19(state, event) {
  if ('buffalo' === state.current) {
    return doTrans$18(state, event);
  } return false;
}
function doTrans$19(state, event) {
  if ('articulates' === event) {
    state.current = 'beautiful';
    return true;
  }
  if ('invoke' === event) {
    state.current = 'crowded';
    return true;
  }
  if ('encloses' === event) {
    state.current = 'tangible';
    return true;
  }
  return false;
}
function handleState$20(state, event) {
  if ('snake' === state.current) {
    return doTrans$19(state, event);
  } return false;
}
function doTrans$20(state, event) {
  if ('canst' === event) {
    state.current = 'chimpanzee';
    return true;
  }
  if ('inhabit' === event) {
    state.current = 'somber';
    return true;
  }
  if ('convincing' === event) {
    state.current = 'polite';
    return true;
  }
  if ('packaging' === event) {
    state.current = 'minty';
    return true;
  }
  if ('retire' === event) {
    state.current = 'electric';
    return true;
  }
  return false;
}
function handleState$21(state, event) {
  if ('complex' === state.current) {
    return doTrans$20(state, event);
  } return false;
}
function doTrans$21(state, event) {
  if ('ascribed' === event) {
    state.current = 'giving';
    return true;
  }
  if ('looped' === event) {
    state.current = 'fetid';
    return true;
  }
  if ('pretending' === event) {
    state.current = 'complex';
    return true;
  }
  return false;
}
function handleState$22(state, event) {
  if ('peacock' === state.current) {
    return doTrans$21(state, event);
  } return false;
}
function doTrans$22(state, event) {
  if ('hissing' === event) {
    state.current = 'sore';
    return true;
  }
  return false;
}
function handleState$23(state, event) {
  if ('dutiful' === state.current) {
    return doTrans$22(state, event);
  } return false;
}
function doTrans$23(state, event) {
  if ('thwarted' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('does' === event) {
    state.current = 'wrong';
    return true;
  }
  return false;
}
function handleState$24(state, event) {
  if ('busy' === state.current) {
    return doTrans$23(state, event);
  } return false;
}
function doTrans$24(state, event) {
  if ('participating' === event) {
    state.current = 'bewildered';
    return true;
  }
  return false;
}
function handleState$25(state, event) {
  if ('useless' === state.current) {
    return doTrans$24(state, event);
  } return false;
}
function doTrans$25(state, event) {
  if ('transformed' === event) {
    state.current = 'half';
    return true;
  }
  if ('sloped' === event) {
    state.current = 'pure';
    return true;
  }
  if ('washes' === event) {
    state.current = 'squirrel';
    return true;
  }
  if ('spreading' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('soaking' === event) {
    state.current = 'helpless';
    return true;
  }
  if ('looked' === event) {
    state.current = 'wealthy';
    return true;
  }
  return false;
}
function handleState$26(state, event) {
  if ('dynamic' === state.current) {
    return doTrans$25(state, event);
  } return false;
}
function doTrans$26(state, event) {
  if ('opens' === event) {
    state.current = 'quaint';
    return true;
  }
  if ('venting' === event) {
    state.current = 'simplistic';
    return true;
  }
  if ('dt' === event) {
    state.current = 'appropriate';
    return true;
  }
  if ('translating' === event) {
    state.current = 'incompatible';
    return true;
  }
  return false;
}
function handleState$27(state, event) {
  if ('dead' === state.current) {
    return doTrans$26(state, event);
  } return false;
}
function doTrans$27(state, event) {
  if ('minimising' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('penalize' === event) {
    state.current = 'dull';
    return true;
  }
  return false;
}
function handleState$28(state, event) {
  if ('ideal' === state.current) {
    return doTrans$27(state, event);
  } return false;
}
function doTrans$28(state, event) {
  if ('gnawing' === event) {
    state.current = 'scarce';
    return true;
  }
  if ('endorsing' === event) {
    state.current = 'whispering';
    return true;
  }
  if ('suspect' === event) {
    state.current = 'fluttering';
    return true;
  }
  return false;
}
function handleState$29(state, event) {
  if ('waterlogged' === state.current) {
    return doTrans$28(state, event);
  } return false;
}
function doTrans$29(state, event) {
  if ('operating' === event) {
    state.current = 'identical';
    return true;
  }
  if ('predisposed' === event) {
    state.current = 'beautiful';
    return true;
  }
  if ('doubling' === event) {
    state.current = 'beagle';
    return true;
  }
  if ('effecting' === event) {
    state.current = 'rancid';
    return true;
  }
  if ('form' === event) {
    state.current = 'icy';
    return true;
  }
  if ('made' === event) {
    state.current = 'platypus';
    return true;
  }
  return false;
}
function handleState$30(state, event) {
  if ('spotless' === state.current) {
    return doTrans$29(state, event);
  } return false;
}
function handleState$31(state, event) {
  if ('rubbery' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$30(state, event) {
  if ('gland' === event) {
    state.current = 'reasonable';
    return true;
  }
  return false;
}
function handleState$32(state, event) {
  if ('improbable' === state.current) {
    return doTrans$30(state, event);
  } return false;
}
function doTrans$31(state, event) {
  if ('step' === event) {
    state.current = 'giving';
    return true;
  }
  if ('assuming' === event) {
    state.current = 'camel';
    return true;
  }
  if ('confided' === event) {
    state.current = 'fickle';
    return true;
  }
  return false;
}
function handleState$33(state, event) {
  if ('ethical' === state.current) {
    return doTrans$31(state, event);
  } return false;
}
function doTrans$32(state, event) {
  if ('impeding' === event) {
    state.current = 'elliptical';
    return true;
  }
  if ('avoid' === event) {
    state.current = 'reasonable';
    return true;
  }
  if ('blended' === event) {
    state.current = 'understated';
    return true;
  }
  if ('intervenes' === event) {
    state.current = 'female';
    return true;
  }
  return false;
}
function handleState$34(state, event) {
  if ('squirrel' === state.current) {
    return doTrans$32(state, event);
  } return false;
}
function doTrans$33(state, event) {
  if ('resigned' === event) {
    state.current = 'juicy';
    return true;
  }
  if ('folding' === event) {
    state.current = 'cloudy';
    return true;
  }
  if ('pre' === event) {
    state.current = 'constant';
    return true;
  }
  if ('disinclined' === event) {
    state.current = 'whispering';
    return true;
  }
  return false;
}
function handleState$35(state, event) {
  if ('grubby' === state.current) {
    return doTrans$33(state, event);
  } return false;
}
function doTrans$34(state, event) {
  if ('contracts' === event) {
    state.current = 'ironclad';
    return true;
  }
  if ('overworked' === event) {
    state.current = 'troubled';
    return true;
  }
  if ('spoiling' === event) {
    state.current = 'shady';
    return true;
  }
  return false;
}
function handleState$36(state, event) {
  if ('goose' === state.current) {
    return doTrans$34(state, event);
  } return false;
}
function doTrans$35(state, event) {
  if ('gutted' === event) {
    state.current = 'calm';
    return true;
  }
  if ('expelling' === event) {
    state.current = 'incompatible';
    return true;
  }
  if ('coerce' === event) {
    state.current = 'muggy';
    return true;
  }
  return false;
}
function handleState$37(state, event) {
  if ('welcome' === state.current) {
    return doTrans$35(state, event);
  } return false;
}
function doTrans$36(state, event) {
  if ('computed' === event) {
    state.current = 'gigantic';
    return true;
  }
  return false;
}
function handleState$38(state, event) {
  if ('cruel' === state.current) {
    return doTrans$36(state, event);
  } return false;
}
function handleState$39(state, event) {
  if ('true' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$37(state, event) {
  if ('assembled' === event) {
    state.current = 'nautical';
    return true;
  }
  if ('else' === event) {
    state.current = 'sore';
    return true;
  }
  if ('appropriate' === event) {
    state.current = 'misguided';
    return true;
  }
  return false;
}
function handleState$40(state, event) {
  if ('primary' === state.current) {
    return doTrans$37(state, event);
  } return false;
}
function doTrans$38(state, event) {
  if ('revitalized' === event) {
    state.current = 'menacing';
    return true;
  }
  if ('mock' === event) {
    state.current = 'easy';
    return true;
  }
  if ('mourned' === event) {
    state.current = 'judicious';
    return true;
  }
  if ('ascending' === event) {
    state.current = 'long_term';
    return true;
  }
  return false;
}
function handleState$41(state, event) {
  if ('kaleidoscopic' === state.current) {
    return doTrans$38(state, event);
  } return false;
}
function doTrans$39(state, event) {
  if ('r_' === event) {
    state.current = 'well_informed';
    return true;
  }
  if ('seize' === event) {
    state.current = 'leafy';
    return true;
  }
  if ('der' === event) {
    state.current = 'dynamic';
    return true;
  }
  return false;
}
function handleState$42(state, event) {
  if ('deep' === state.current) {
    return doTrans$39(state, event);
  } return false;
}
function doTrans$40(state, event) {
  if ('register' === event) {
    state.current = 'busy';
    return true;
  }
  if ('disallowed' === event) {
    state.current = 'hummingbird';
    return true;
  }
  return false;
}
function handleState$43(state, event) {
  if ('stormy' === state.current) {
    return doTrans$40(state, event);
  } return false;
}
function doTrans$41(state, event) {
  if ('smoke' === event) {
    state.current = 'heartfelt';
    return true;
  }
  if ('squashed' === event) {
    state.current = 'welcome';
    return true;
  }
  if ('attaches' === event) {
    state.current = 'doting';
    return true;
  }
  if ('balancing' === event) {
    state.current = 'nimble';
    return true;
  }
  return false;
}
function handleState$44(state, event) {
  if ('enthusiastic' === state.current) {
    return doTrans$41(state, event);
  } return false;
}
function doTrans$42(state, event) {
  if ('stricken' === event) {
    state.current = 'ill_informed';
    return true;
  }
  if ('chart' === event) {
    state.current = 'back';
    return true;
  }
  return false;
}
function handleState$45(state, event) {
  if ('harmless' === state.current) {
    return doTrans$42(state, event);
  } return false;
}
function doTrans$43(state, event) {
  if ('sawed' === event) {
    state.current = 'incompatible';
    return true;
  }
  return false;
}
function handleState$46(state, event) {
  if ('front' === state.current) {
    return doTrans$43(state, event);
  } return false;
}
function doTrans$44(state, event) {
  if ('overflow' === event) {
    state.current = 'iguana';
    return true;
  }
  if ('stopping' === event) {
    state.current = 'quintessential';
    return true;
  }
  if ('sealing' === event) {
    state.current = 'quizzical';
    return true;
  }
  if ('spelling' === event) {
    state.current = 'high';
    return true;
  }
  return false;
}
function handleState$47(state, event) {
  if ('superficial' === state.current) {
    return doTrans$44(state, event);
  } return false;
}
function doTrans$45(state, event) {
  if ('orienting' === event) {
    state.current = 'incompatible';
    return true;
  }
  return false;
}
function handleState$48(state, event) {
  if ('juicy' === state.current) {
    return doTrans$45(state, event);
  } return false;
}
function doTrans$46(state, event) {
  if ('bent' === event) {
    state.current = 'electric';
    return true;
  }
  if ('verify' === event) {
    state.current = 'lumpy';
    return true;
  }
  return false;
}
function handleState$49(state, event) {
  if ('optimistic' === state.current) {
    return doTrans$46(state, event);
  } return false;
}
function doTrans$47(state, event) {
  if ('peering' === event) {
    state.current = 'high';
    return true;
  }
  return false;
}
function handleState$50(state, event) {
  if ('necessary' === state.current) {
    return doTrans$47(state, event);
  } return false;
}
function doTrans$48(state, event) {
  if ('marches' === event) {
    state.current = 'separate';
    return true;
  }
  return false;
}
function handleState$51(state, event) {
  if ('ignorant' === state.current) {
    return doTrans$48(state, event);
  } return false;
}
function doTrans$49(state, event) {
  if ('endured' === event) {
    state.current = 'wide_eyed';
    return true;
  }
  return false;
}
function handleState$52(state, event) {
  if ('hasty' === state.current) {
    return doTrans$49(state, event);
  } return false;
}
function doTrans$50(state, event) {
  if ('braided' === event) {
    state.current = 'chilly';
    return true;
  }
  if ('domesticated' === event) {
    state.current = 'heartfelt';
    return true;
  }
  if ('skinned' === event) {
    state.current = 'overcooked';
    return true;
  }
  if ('encircled' === event) {
    state.current = 'caterpillar';
    return true;
  }
  return false;
}
function handleState$53(state, event) {
  if ('glum' === state.current) {
    return doTrans$50(state, event);
  } return false;
}
function doTrans$51(state, event) {
  if ('replenished' === event) {
    state.current = 'growing';
    return true;
  }
  if ('sever' === event) {
    state.current = 'rough';
    return true;
  }
  return false;
}
function handleState$54(state, event) {
  if ('biodegradable' === state.current) {
    return doTrans$51(state, event);
  } return false;
}
function doTrans$52(state, event) {
  if ('coexisting' === event) {
    state.current = 'real';
    return true;
  }
  if ('powdered' === event) {
    state.current = 'grieving';
    return true;
  }
  if ('slain' === event) {
    state.current = 'fluid';
    return true;
  }
  if ('imparting' === event) {
    state.current = 'improbable';
    return true;
  }
  return false;
}
function handleState$55(state, event) {
  if ('selfish' === state.current) {
    return doTrans$52(state, event);
  } return false;
}
function doTrans$53(state, event) {
  if ('envisages' === event) {
    state.current = 'wealthy';
    return true;
  }
  if ('softened' === event) {
    state.current = 'meager';
    return true;
  }
  if ('harvesting' === event) {
    state.current = 'square';
    return true;
  }
  if ('seemed' === event) {
    state.current = 'jovial';
    return true;
  }
  if ('misused' === event) {
    state.current = 'waterlogged';
    return true;
  }
  if ('fueled' === event) {
    state.current = 'writhing';
    return true;
  }
  return false;
}
function handleState$56(state, event) {
  if ('minty' === state.current) {
    return doTrans$53(state, event);
  } return false;
}
function doTrans$54(state, event) {
  if ('positing' === event) {
    state.current = 'zealous';
    return true;
  }
  if ('snaps' === event) {
    state.current = 'warped';
    return true;
  }
  if ('nullified' === event) {
    state.current = 'klutzy';
    return true;
  }
  if ('dyeing' === event) {
    state.current = 'gecko';
    return true;
  }
  return false;
}
function handleState$57(state, event) {
  if ('overcooked' === state.current) {
    return doTrans$54(state, event);
  } return false;
}
function doTrans$55(state, event) {
  if ('brave' === event) {
    state.current = 'affable';
    return true;
  }
  if ('recognizes' === event) {
    state.current = 'dead';
    return true;
  }
  if ('prescribe' === event) {
    state.current = 'jackal';
    return true;
  }
  if ('grown' === event) {
    state.current = 'good_natured';
    return true;
  }
  return false;
}
function handleState$58(state, event) {
  if ('sluggish' === state.current) {
    return doTrans$55(state, event);
  } return false;
}
function doTrans$56(state, event) {
  if ('upsets' === event) {
    state.current = 'physical';
    return true;
  }
  return false;
}
function handleState$59(state, event) {
  if ('iguana' === state.current) {
    return doTrans$56(state, event);
  } return false;
}
function doTrans$57(state, event) {
  if ('ingesting' === event) {
    state.current = 'precious';
    return true;
  }
  return false;
}
function handleState$60(state, event) {
  if ('fat' === state.current) {
    return doTrans$57(state, event);
  } return false;
}
function doTrans$58(state, event) {
  if ('removed' === event) {
    state.current = 'newt';
    return true;
  }
  if ('dries' === event) {
    state.current = 'colossal';
    return true;
  }
  if ('dreaming' === event) {
    state.current = 'jaded';
    return true;
  }
  return false;
}
function handleState$61(state, event) {
  if ('numb' === state.current) {
    return doTrans$58(state, event);
  } return false;
}
function doTrans$59(state, event) {
  if ('declined' === event) {
    state.current = 'ripe';
    return true;
  }
  return false;
}
function handleState$62(state, event) {
  if ('starry' === state.current) {
    return doTrans$59(state, event);
  } return false;
}
function doTrans$60(state, event) {
  if ('staging' === event) {
    state.current = 'snake';
    return true;
  }
  if ('hopping' === event) {
    state.current = 'improbable';
    return true;
  }
  return false;
}
function handleState$63(state, event) {
  if ('key' === state.current) {
    return doTrans$60(state, event);
  } return false;
}
function doTrans$61(state, event) {
  if ('attaches' === event) {
    state.current = 'active';
    return true;
  }
  if ('frying' === event) {
    state.current = 'slim';
    return true;
  }
  if ('palpated' === event) {
    state.current = 'nimble';
    return true;
  }
  if ('compounds' === event) {
    state.current = 'feisty';
    return true;
  }
  if ('inscribed' === event) {
    state.current = 'mandrill';
    return true;
  }
  return false;
}
function handleState$64(state, event) {
  if ('attached' === state.current) {
    return doTrans$61(state, event);
  } return false;
}
function handleState$65(state, event) {
  if ('vile' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$62(state, event) {
  if ('contends' === event) {
    state.current = 'simplistic';
    return true;
  }
  return false;
}
function handleState$66(state, event) {
  if ('proud' === state.current) {
    return doTrans$62(state, event);
  } return false;
}
function doTrans$63(state, event) {
  if ('impregnated' === event) {
    state.current = 'elliptical';
    return true;
  }
  return false;
}
function handleState$67(state, event) {
  if ('mixed' === state.current) {
    return doTrans$63(state, event);
  } return false;
}
function doTrans$64(state, event) {
  if ('snatching' === event) {
    state.current = 'jovial';
    return true;
  }
  if ('confine' === event) {
    state.current = 'howler_monkey';
    return true;
  }
  if ('creeping' === event) {
    state.current = 'this';
    return true;
  }
  return false;
}
function handleState$68(state, event) {
  if ('coyote' === state.current) {
    return doTrans$64(state, event);
  } return false;
}
function doTrans$65(state, event) {
  if ('saddle' === event) {
    state.current = 'chief';
    return true;
  }
  return false;
}
function handleState$69(state, event) {
  if ('jealous' === state.current) {
    return doTrans$65(state, event);
  } return false;
}
function doTrans$66(state, event) {
  if ('shy' === event) {
    state.current = 'forceful';
    return true;
  }
  if ('secures' === event) {
    state.current = 'pleasant';
    return true;
  }
  if ('feast' === event) {
    state.current = 'squeaky';
    return true;
  }
  if ('disgraced' === event) {
    state.current = 'quiet';
    return true;
  }
  return false;
}
function handleState$70(state, event) {
  if ('lumpy' === state.current) {
    return doTrans$66(state, event);
  } return false;
}
function doTrans$67(state, event) {
  if ('entrusting' === event) {
    state.current = 'slow';
    return true;
  }
  return false;
}
function handleState$71(state, event) {
  if ('subtle' === state.current) {
    return doTrans$67(state, event);
  } return false;
}
function doTrans$68(state, event) {
  if ('flowered' === event) {
    state.current = 'quizzical';
    return true;
  }
  return false;
}
function handleState$72(state, event) {
  if ('gaseous' === state.current) {
    return doTrans$68(state, event);
  } return false;
}
function doTrans$69(state, event) {
  if ('pared' === event) {
    state.current = 'splendid';
    return true;
  }
  if ('noticed' === event) {
    state.current = 'tangible';
    return true;
  }
  if ('budgeted' === event) {
    state.current = 'chinchilla';
    return true;
  }
  if ('trapping' === event) {
    state.current = 'right';
    return true;
  }
  if ('hurrying' === event) {
    state.current = 'easygoing';
    return true;
  }
  if ('indicted' === event) {
    state.current = 'hummingbird';
    return true;
  }
  return false;
}
function handleState$73(state, event) {
  if ('subdued' === state.current) {
    return doTrans$69(state, event);
  } return false;
}
function handleState$74(state, event) {
  if ('growing' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$70(state, event) {
  if ('savoring' === event) {
    state.current = 'slow';
    return true;
  }
  return false;
}
function handleState$75(state, event) {
  if ('trivial' === state.current) {
    return doTrans$70(state, event);
  } return false;
}
function doTrans$71(state, event) {
  if ('evaluated' === event) {
    state.current = 'elliptical';
    return true;
  }
  return false;
}
function handleState$76(state, event) {
  if ('metallic' === state.current) {
    return doTrans$71(state, event);
  } return false;
}
function doTrans$72(state, event) {
  if ('towered' === event) {
    state.current = 'kindly';
    return true;
  }
  return false;
}
function handleState$77(state, event) {
  if ('chief' === state.current) {
    return doTrans$72(state, event);
  } return false;
}
function doTrans$73(state, event) {
  if ('excuse' === event) {
    state.current = 'ideal';
    return true;
  }
  if ('host' === event) {
    state.current = 'past';
    return true;
  }
  return false;
}
function handleState$78(state, event) {
  if ('quintessential' === state.current) {
    return doTrans$73(state, event);
  } return false;
}
function doTrans$74(state, event) {
  if ('outfitted' === event) {
    state.current = 'slushy';
    return true;
  }
  if ('amplify' === event) {
    state.current = 'identical';
    return true;
  }
  if ('devoted' === event) {
    state.current = 'quaint';
    return true;
  }
  if ('conducting' === event) {
    state.current = 'passionate';
    return true;
  }
  if ('sporting' === event) {
    state.current = 'subdued';
    return true;
  }
  return false;
}
function handleState$79(state, event) {
  if ('noisy' === state.current) {
    return doTrans$74(state, event);
  } return false;
}
function doTrans$75(state, event) {
  if ('engineered' === event) {
    state.current = 'busy';
    return true;
  }
  if ('bestowing' === event) {
    state.current = 'comfortable';
    return true;
  }
  if ('supervise' === event) {
    state.current = 'kind';
    return true;
  }
  return false;
}
function handleState$80(state, event) {
  if ('turkey' === state.current) {
    return doTrans$75(state, event);
  } return false;
}
function doTrans$76(state, event) {
  if ('disclosed' === event) {
    state.current = 'acrobatic';
    return true;
  }
  if ('xx' === event) {
    state.current = 'frayed';
    return true;
  }
  if ('saddled' === event) {
    state.current = 'slippery';
    return true;
  }
  if ('recorded' === event) {
    state.current = 'idealistic';
    return true;
  }
  return false;
}
function handleState$81(state, event) {
  if ('forceful' === state.current) {
    return doTrans$76(state, event);
  } return false;
}
function doTrans$77(state, event) {
  if ('honour' === event) {
    state.current = 'stunning';
    return true;
  }
  if ('switches' === event) {
    state.current = 'insignificant';
    return true;
  }
  if ('conversing' === event) {
    state.current = 'linear';
    return true;
  }
  return false;
}
function handleState$82(state, event) {
  if ('flashy' === state.current) {
    return doTrans$77(state, event);
  } return false;
}
function doTrans$78(state, event) {
  if ('reappeared' === event) {
    state.current = 'pitiful';
    return true;
  }
  if ('sob' === event) {
    state.current = 'comfortable';
    return true;
  }
  if ('proposes' === event) {
    state.current = 'hoarse';
    return true;
  }
  return false;
}
function handleState$83(state, event) {
  if ('sparkling' === state.current) {
    return doTrans$78(state, event);
  } return false;
}
function doTrans$79(state, event) {
  if ('piloted' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('seem' === event) {
    state.current = 'daring';
    return true;
  }
  return false;
}
function handleState$84(state, event) {
  if ('jackal' === state.current) {
    return doTrans$79(state, event);
  } return false;
}
function doTrans$80(state, event) {
  if ('commencing' === event) {
    state.current = 'wry';
    return true;
  }
  if ('index' === event) {
    state.current = 'direct';
    return true;
  }
  return false;
}
function handleState$85(state, event) {
  if ('constant' === state.current) {
    return doTrans$80(state, event);
  } return false;
}
function doTrans$81(state, event) {
  if ('diluted' === event) {
    state.current = 'nimble';
    return true;
  }
  if ('grants' === event) {
    state.current = 'crowded';
    return true;
  }
  return false;
}
function handleState$86(state, event) {
  if ('occasional' === state.current) {
    return doTrans$81(state, event);
  } return false;
}
function handleState$87(state, event) {
  if ('fixed' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$82(state, event) {
  if ('close' === event) {
    state.current = 'snake';
    return true;
  }
  if ('questioning' === event) {
    state.current = 'numb';
    return true;
  }
  return false;
}
function handleState$88(state, event) {
  if ('sunny' === state.current) {
    return doTrans$82(state, event);
  } return false;
}
function doTrans$83(state, event) {
  if ('patterned' === event) {
    state.current = 'necessary';
    return true;
  }
  return false;
}
function handleState$89(state, event) {
  if ('dreary' === state.current) {
    return doTrans$83(state, event);
  } return false;
}
function doTrans$84(state, event) {
  if ('hedging' === event) {
    state.current = 'outlying';
    return true;
  }
  if ('remarks' === event) {
    state.current = 'frog';
    return true;
  }
  if ('exaggerate' === event) {
    state.current = 'attentive';
    return true;
  }
  return false;
}
function handleState$90(state, event) {
  if ('upset' === state.current) {
    return doTrans$84(state, event);
  } return false;
}
function doTrans$85(state, event) {
  if ('face' === event) {
    state.current = 'candid';
    return true;
  }
  if ('viking' === event) {
    state.current = 'hummingbird';
    return true;
  }
  return false;
}
function handleState$91(state, event) {
  if ('beaver' === state.current) {
    return doTrans$85(state, event);
  } return false;
}
function doTrans$86(state, event) {
  if ('conform' === event) {
    state.current = 'upbeat';
    return true;
  }
  if ('addicted' === event) {
    state.current = 'dutiful';
    return true;
  }
  return false;
}
function handleState$92(state, event) {
  if ('steep' === state.current) {
    return doTrans$86(state, event);
  } return false;
}
function doTrans$87(state, event) {
  if ('interrogating' === event) {
    state.current = 'fish';
    return true;
  }
  if ('convened' === event) {
    state.current = 'trained';
    return true;
  }
  return false;
}
function handleState$93(state, event) {
  if ('junior' === state.current) {
    return doTrans$87(state, event);
  } return false;
}
function doTrans$88(state, event) {
  if ('jog' === event) {
    state.current = 'assured';
    return true;
  }
  if ('exhaled' === event) {
    state.current = 'newt';
    return true;
  }
  return false;
}
function handleState$94(state, event) {
  if ('crane' === state.current) {
    return doTrans$88(state, event);
  } return false;
}
function doTrans$89(state, event) {
  if ('jeopardizing' === event) {
    state.current = 'barren';
    return true;
  }
  if ('antagonize' === event) {
    state.current = 'chinchilla';
    return true;
  }
  if ('won' === event) {
    state.current = 'bird';
    return true;
  }
  return false;
}
function handleState$95(state, event) {
  if ('well_lit' === state.current) {
    return doTrans$89(state, event);
  } return false;
}
function doTrans$90(state, event) {
  if ('ended' === event) {
    state.current = 'conscious';
    return true;
  }
  if ('severed' === event) {
    state.current = 'peacock';
    return true;
  }
  return false;
}
function handleState$96(state, event) {
  if ('snail' === state.current) {
    return doTrans$90(state, event);
  } return false;
}
function doTrans$91(state, event) {
  if ('redress' === event) {
    state.current = 'tall';
    return true;
  }
  if ('sacrifice' === event) {
    state.current = 'thrifty';
    return true;
  }
  return false;
}
function handleState$97(state, event) {
  if ('amicable' === state.current) {
    return doTrans$91(state, event);
  } return false;
}
function doTrans$92(state, event) {
  if ('dispelled' === event) {
    state.current = 'grieving';
    return true;
  }
  return false;
}
function handleState$98(state, event) {
  if ('cloudy' === state.current) {
    return doTrans$92(state, event);
  } return false;
}
function doTrans$93(state, event) {
  if ('elucidate' === event) {
    state.current = 'negative';
    return true;
  }
  if ('saluted' === event) {
    state.current = 'glittering';
    return true;
  }
  if ('divide' === event) {
    state.current = 'defensive';
    return true;
  }
  return false;
}
function handleState$99(state, event) {
  if ('past' === state.current) {
    return doTrans$93(state, event);
  } return false;
}
function handleState$100(state, event) {
  if ('right' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$94(state, event) {
  if ('cry' === event) {
    state.current = 'pro_active';
    return true;
  }
  if ('documents' === event) {
    state.current = 'virtuous';
    return true;
  }
  if ('warn' === event) {
    state.current = 'ideal';
    return true;
  }
  if ('downplay' === event) {
    state.current = 'buffalo';
    return true;
  }
  if ('ranged' === event) {
    state.current = 'harmless';
    return true;
  }
  if ('scan' === event) {
    state.current = 'identical';
    return true;
  }
  return false;
}
function handleState$101(state, event) {
  if ('hedgehog' === state.current) {
    return doTrans$94(state, event);
  } return false;
}
function doTrans$95(state, event) {
  if ('hopped' === event) {
    state.current = 'dangerous';
    return true;
  }
  if ('close' === event) {
    state.current = 'bonobo';
    return true;
  }
  return false;
}
function handleState$102(state, event) {
  if ('penguin' === state.current) {
    return doTrans$95(state, event);
  } return false;
}
function doTrans$96(state, event) {
  if ('prompting' === event) {
    state.current = 'helpful';
    return true;
  }
  if ('wrapped' === event) {
    state.current = 'lovable';
    return true;
  }
  if ('foaming' === event) {
    state.current = 'entire';
    return true;
  }
  if ('doubt' === event) {
    state.current = 'fickle';
    return true;
  }
  return false;
}
function handleState$103(state, event) {
  if ('precious' === state.current) {
    return doTrans$96(state, event);
  } return false;
}
function doTrans$97(state, event) {
  if ('reflecting' === event) {
    state.current = 'exciting';
    return true;
  }
  return false;
}
function handleState$104(state, event) {
  if ('tricky' === state.current) {
    return doTrans$97(state, event);
  } return false;
}
function doTrans$98(state, event) {
  if ('played' === event) {
    state.current = 'yummy';
    return true;
  }
  if ('consisting' === event) {
    state.current = 'crooked';
    return true;
  }
  return false;
}
function handleState$105(state, event) {
  if ('wrathful' === state.current) {
    return doTrans$98(state, event);
  } return false;
}
function doTrans$99(state, event) {
  if ('build' === event) {
    state.current = 'instructive';
    return true;
  }
  if ('vanish' === event) {
    state.current = 'popular';
    return true;
  }
  if ('bothering' === event) {
    state.current = 'wrathful';
    return true;
  }
  if ('survives' === event) {
    state.current = 'wiggly';
    return true;
  }
  return false;
}
function handleState$106(state, event) {
  if ('tremendous' === state.current) {
    return doTrans$99(state, event);
  } return false;
}
function doTrans$100(state, event) {
  if ('intended' === event) {
    state.current = 'chinchilla';
    return true;
  }
  if ('applauded' === event) {
    state.current = 'rancid';
    return true;
  }
  return false;
}
function handleState$107(state, event) {
  if ('sponge' === state.current) {
    return doTrans$100(state, event);
  } return false;
}
function doTrans$101(state, event) {
  if ('convict' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('supplement' === event) {
    state.current = 'assured';
    return true;
  }
  return false;
}
function handleState$108(state, event) {
  if ('caterpillar' === state.current) {
    return doTrans$101(state, event);
  } return false;
}
function doTrans$102(state, event) {
  if ('isolate' === event) {
    state.current = 'grand';
    return true;
  }
  if ('recommended' === event) {
    state.current = 'mammoth';
    return true;
  }
  return false;
}
function handleState$109(state, event) {
  if ('profound' === state.current) {
    return doTrans$102(state, event);
  } return false;
}
function doTrans$103(state, event) {
  if ('stashed' === event) {
    state.current = 'kind';
    return true;
  }
  return false;
}
function handleState$110(state, event) {
  if ('pro_active' === state.current) {
    return doTrans$103(state, event);
  } return false;
}
function doTrans$104(state, event) {
  if ('stretching' === event) {
    state.current = 'upright';
    return true;
  }
  if ('unfolds' === event) {
    state.current = 'shady';
    return true;
  }
  if ('arid' === event) {
    state.current = 'far_off';
    return true;
  }
  return false;
}
function handleState$111(state, event) {
  if ('slushy' === state.current) {
    return doTrans$104(state, event);
  } return false;
}
function doTrans$105(state, event) {
  if ('leveled' === event) {
    state.current = 'limited';
    return true;
  }
  if ('nuclei' === event) {
    state.current = 'remarkable';
    return true;
  }
  if ('singling' === event) {
    state.current = 'frog';
    return true;
  }
  if ('finding' === event) {
    state.current = 'outlying';
    return true;
  }
  if ('hastening' === event) {
    state.current = 'virtuous';
    return true;
  }
  if ('bequeath' === event) {
    state.current = 'helpful';
    return true;
  }
  return false;
}
function handleState$112(state, event) {
  if ('gigantic' === state.current) {
    return doTrans$105(state, event);
  } return false;
}
function doTrans$106(state, event) {
  if ('knotted' === event) {
    state.current = 'biodegradable';
    return true;
  }
  return false;
}
function handleState$113(state, event) {
  if ('square' === state.current) {
    return doTrans$106(state, event);
  } return false;
}
function doTrans$107(state, event) {
  if ('sounding' === event) {
    state.current = 'otter';
    return true;
  }
  return false;
}
function handleState$114(state, event) {
  if ('misguided' === state.current) {
    return doTrans$107(state, event);
  } return false;
}
function doTrans$108(state, event) {
  if ('combines' === event) {
    state.current = 'nutritious';
    return true;
  }
  if ('shoot' === event) {
    state.current = 'upbeat';
    return true;
  }
  if ('pricing' === event) {
    state.current = 'grubby';
    return true;
  }
  if ('channeled' === event) {
    state.current = 'thick';
    return true;
  }
  if ('authenticate' === event) {
    state.current = 'starry';
    return true;
  }
  return false;
}
function handleState$115(state, event) {
  if ('ostrich' === state.current) {
    return doTrans$108(state, event);
  } return false;
}
function doTrans$109(state, event) {
  if ('mailing' === event) {
    state.current = 'animated';
    return true;
  }
  if ('awaken' === event) {
    state.current = 'jealous';
    return true;
  }
  if ('ascribed' === event) {
    state.current = 'round';
    return true;
  }
  if ('transpose' === event) {
    state.current = 'cruel';
    return true;
  }
  return false;
}
function handleState$116(state, event) {
  if ('impolite' === state.current) {
    return doTrans$109(state, event);
  } return false;
}
function handleState$117(state, event) {
  if ('sardonic' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$110(state, event) {
  if ('fend' === event) {
    state.current = 'attractive';
    return true;
  }
  if ('towering' === event) {
    state.current = 'turtle';
    return true;
  }
  if ('protruding' === event) {
    state.current = 'writhing';
    return true;
  }
  if ('inducing' === event) {
    state.current = 'hopeful';
    return true;
  }
  return false;
}
function handleState$118(state, event) {
  if ('amusing' === state.current) {
    return doTrans$110(state, event);
  } return false;
}
function doTrans$111(state, event) {
  if ('personified' === event) {
    state.current = 'annoyed';
    return true;
  }
  if ('attaining' === event) {
    state.current = 'growing';
    return true;
  }
  return false;
}
function handleState$119(state, event) {
  if ('well_informed' === state.current) {
    return doTrans$111(state, event);
  } return false;
}
function doTrans$112(state, event) {
  if ('viii' === event) {
    state.current = 'rigid';
    return true;
  }
  return false;
}
function handleState$120(state, event) {
  if ('winding' === state.current) {
    return doTrans$112(state, event);
  } return false;
}
function doTrans$113(state, event) {
  if ('misunderstand' === event) {
    state.current = 'pro_active';
    return true;
  }
  if ('chuckling' === event) {
    state.current = 'insistent';
    return true;
  }
  if ('shifts' === event) {
    state.current = 'rowdy';
    return true;
  }
  if ('swallowing' === event) {
    state.current = 'this';
    return true;
  }
  return false;
}
function handleState$121(state, event) {
  if ('giddy' === state.current) {
    return doTrans$113(state, event);
  } return false;
}
function doTrans$114(state, event) {
  if ('slowed' === event) {
    state.current = 'falcon';
    return true;
  }
  if ('bases' === event) {
    state.current = 'shrill';
    return true;
  }
  if ('be' === event) {
    state.current = 'present';
    return true;
  }
  return false;
}
function handleState$122(state, event) {
  if ('ajar' === state.current) {
    return doTrans$114(state, event);
  } return false;
}
function doTrans$115(state, event) {
  if ('whispered' === event) {
    state.current = 'dragonfly';
    return true;
  }
  if ('occured' === event) {
    state.current = 'pastel';
    return true;
  }
  if ('exhaust' === event) {
    state.current = 'sure_footed';
    return true;
  }
  return false;
}
function handleState$123(state, event) {
  if ('motherly' === state.current) {
    return doTrans$115(state, event);
  } return false;
}
function doTrans$116(state, event) {
  if ('nesting' === event) {
    state.current = 'staid';
    return true;
  }
  if ('averred' === event) {
    state.current = 'peacock';
    return true;
  }
  if ('apportion' === event) {
    state.current = 'pale';
    return true;
  }
  if ('label' === event) {
    state.current = 'scarce';
    return true;
  }
  return false;
}
function handleState$124(state, event) {
  if ('mandrill' === state.current) {
    return doTrans$116(state, event);
  } return false;
}
function doTrans$117(state, event) {
  if ('bends' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('impinges' === event) {
    state.current = 'direct';
    return true;
  }
  if ('contemplate' === event) {
    state.current = 'gecko';
    return true;
  }
  return false;
}
function handleState$125(state, event) {
  if ('intelligent' === state.current) {
    return doTrans$117(state, event);
  } return false;
}
function doTrans$118(state, event) {
  if ('tapering' === event) {
    state.current = 'skeletal';
    return true;
  }
  if ('deletes' === event) {
    state.current = 'waterlogged';
    return true;
  }
  if ('stepped' === event) {
    state.current = 'sore';
    return true;
  }
  return false;
}
function handleState$126(state, event) {
  if ('needy' === state.current) {
    return doTrans$118(state, event);
  } return false;
}
function doTrans$119(state, event) {
  if ('subsection' === event) {
    state.current = 'otter';
    return true;
  }
  if ('history' === event) {
    state.current = 'costly';
    return true;
  }
  return false;
}
function handleState$127(state, event) {
  if ('wrong' === state.current) {
    return doTrans$119(state, event);
  } return false;
}
function doTrans$120(state, event) {
  if ('build' === event) {
    state.current = 'colorless';
    return true;
  }
  if ('endeavor' === event) {
    state.current = 'wry';
    return true;
  }
  if ('quantify' === event) {
    state.current = 'soaring';
    return true;
  }
  return false;
}
function handleState$128(state, event) {
  if ('wilted' === state.current) {
    return doTrans$120(state, event);
  } return false;
}
function doTrans$121(state, event) {
  if ('delle' === event) {
    state.current = 'dutiful';
    return true;
  }
  if ('reveals' === event) {
    state.current = 'grieving';
    return true;
  }
  if ('initialize' === event) {
    state.current = 'cuttlefish';
    return true;
  }
  return false;
}
function handleState$129(state, event) {
  if ('puny' === state.current) {
    return doTrans$121(state, event);
  } return false;
}
function doTrans$122(state, event) {
  if ('enquire' === event) {
    state.current = 'menacing';
    return true;
  }
  if ('proportioned' === event) {
    state.current = 'kindly';
    return true;
  }
  if ('butchered' === event) {
    state.current = 'optimistic';
    return true;
  }
  if ('stalled' === event) {
    state.current = 'usable';
    return true;
  }
  if ('writhing' === event) {
    state.current = 'agreeable';
    return true;
  }
  return false;
}
function handleState$130(state, event) {
  if ('ibis' === state.current) {
    return doTrans$122(state, event);
  } return false;
}
function doTrans$123(state, event) {
  if ('regard' === event) {
    state.current = 'exotic';
    return true;
  }
  return false;
}
function handleState$131(state, event) {
  if ('doting' === state.current) {
    return doTrans$123(state, event);
  } return false;
}
function doTrans$124(state, event) {
  if ('shared' === event) {
    state.current = 'defensive';
    return true;
  }
  return false;
}
function handleState$132(state, event) {
  if ('quizzical' === state.current) {
    return doTrans$124(state, event);
  } return false;
}
function doTrans$125(state, event) {
  if ('clasped' === event) {
    state.current = 'starry';
    return true;
  }
  if ('forwarded' === event) {
    state.current = 'joyous';
    return true;
  }
  if ('rambling' === event) {
    state.current = 'attentive';
    return true;
  }
  return false;
}
function handleState$133(state, event) {
  if ('identical' === state.current) {
    return doTrans$125(state, event);
  } return false;
}
function doTrans$126(state, event) {
  if ('theorize' === event) {
    state.current = 'colossal';
    return true;
  }
  if ('cools' === event) {
    state.current = 'sluggish';
    return true;
  }
  if ('targeting' === event) {
    state.current = 'loving';
    return true;
  }
  if ('interspersed' === event) {
    state.current = 'grouchy';
    return true;
  }
  return false;
}
function handleState$134(state, event) {
  if ('lemming' === state.current) {
    return doTrans$126(state, event);
  } return false;
}
function doTrans$127(state, event) {
  if ('accommodates' === event) {
    state.current = 'simplistic';
    return true;
  }
  if ('full' === event) {
    state.current = 'elliptical';
    return true;
  }
  return false;
}
function handleState$135(state, event) {
  if ('favorite' === state.current) {
    return doTrans$127(state, event);
  } return false;
}
function doTrans$128(state, event) {
  if ('diverted' === event) {
    state.current = 'hungry';
    return true;
  }
  if ('cement' === event) {
    state.current = 'tight';
    return true;
  }
  if ('roused' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('escaping' === event) {
    state.current = 'plaintive';
    return true;
  }
  if ('crediting' === event) {
    state.current = 'stormy';
    return true;
  }
  return false;
}
function handleState$136(state, event) {
  if ('conscious' === state.current) {
    return doTrans$128(state, event);
  } return false;
}
function doTrans$129(state, event) {
  if ('talking' === event) {
    state.current = 'scarce';
    return true;
  }
  return false;
}
function handleState$137(state, event) {
  if ('tasteless' === state.current) {
    return doTrans$129(state, event);
  } return false;
}
function handleState$138(state, event) {
  if ('fish' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$130(state, event) {
  if ('chance' === event) {
    state.current = 'crowded';
    return true;
  }
  if ('lags' === event) {
    state.current = 'towering';
    return true;
  }
  if ('depressed' === event) {
    state.current = 'liquid';
    return true;
  }
  return false;
}
function handleState$139(state, event) {
  if ('writhing' === state.current) {
    return doTrans$130(state, event);
  } return false;
}
function doTrans$131(state, event) {
  if ('snorting' === event) {
    state.current = 'gecko';
    return true;
  }
  if ('predetermined' === event) {
    state.current = 'instructive';
    return true;
  }
  if ('reduce' === event) {
    state.current = 'ghastly';
    return true;
  }
  return false;
}
function handleState$140(state, event) {
  if ('slim' === state.current) {
    return doTrans$131(state, event);
  } return false;
}
function doTrans$132(state, event) {
  if ('piss' === event) {
    state.current = 'frog';
    return true;
  }
  return false;
}
function handleState$141(state, event) {
  if ('hurtful' === state.current) {
    return doTrans$132(state, event);
  } return false;
}
function doTrans$133(state, event) {
  if ('toiling' === event) {
    state.current = 'slow';
    return true;
  }
  if ('relocated' === event) {
    state.current = 'bubbly';
    return true;
  }
  return false;
}
function handleState$142(state, event) {
  if ('same' === state.current) {
    return doTrans$133(state, event);
  } return false;
}
function doTrans$134(state, event) {
  if ('versus' === event) {
    state.current = 'recent';
    return true;
  }
  return false;
}
function handleState$143(state, event) {
  if ('colossal' === state.current) {
    return doTrans$134(state, event);
  } return false;
}
function doTrans$135(state, event) {
  if ('worn' === event) {
    state.current = 'violet';
    return true;
  }
  if ('not' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('alarming' === event) {
    state.current = 'well_lit';
    return true;
  }
  return false;
}
function handleState$144(state, event) {
  if ('secondary' === state.current) {
    return doTrans$135(state, event);
  } return false;
}
function doTrans$136(state, event) {
  if ('impaired' === event) {
    state.current = 'crane';
    return true;
  }
  if ('serves' === event) {
    state.current = 'ideal';
    return true;
  }
  if ('glows' === event) {
    state.current = 'anteater';
    return true;
  }
  if ('contaminating' === event) {
    state.current = 'hurtful';
    return true;
  }
  return false;
}
function handleState$145(state, event) {
  if ('heartfelt' === state.current) {
    return doTrans$136(state, event);
  } return false;
}
function doTrans$137(state, event) {
  if ('mount' === event) {
    state.current = 'instructive';
    return true;
  }
  return false;
}
function handleState$146(state, event) {
  if ('delightful' === state.current) {
    return doTrans$137(state, event);
  } return false;
}
function doTrans$138(state, event) {
  if ('resulted' === event) {
    state.current = 'smiling';
    return true;
  }
  if ('stalking' === event) {
    state.current = 'snail';
    return true;
  }
  if ('nursing' === event) {
    state.current = 'elliptical';
    return true;
  }
  return false;
}
function handleState$147(state, event) {
  if ('tall' === state.current) {
    return doTrans$138(state, event);
  } return false;
}
function doTrans$139(state, event) {
  if ('sunk' === event) {
    state.current = 'needy';
    return true;
  }
  return false;
}
function handleState$148(state, event) {
  if ('glittering' === state.current) {
    return doTrans$139(state, event);
  } return false;
}
function doTrans$140(state, event) {
  if ('flipped' === event) {
    state.current = 'identical';
    return true;
  }
  if ('converging' === event) {
    state.current = 'grand';
    return true;
  }
  if ('ease' === event) {
    state.current = 'sponge';
    return true;
  }
  if ('created' === event) {
    state.current = 'puny';
    return true;
  }
  return false;
}
function handleState$149(state, event) {
  if ('half' === state.current) {
    return doTrans$140(state, event);
  } return false;
}
function doTrans$141(state, event) {
  if ('stoned' === event) {
    state.current = 'beaver';
    return true;
  }
  return false;
}
function handleState$150(state, event) {
  if ('cuttlefish' === state.current) {
    return doTrans$141(state, event);
  } return false;
}
function doTrans$142(state, event) {
  if ('attribute' === event) {
    state.current = 'ajar';
    return true;
  }
  if ('crested' === event) {
    state.current = 'ibis';
    return true;
  }
  if ('undergo' === event) {
    state.current = 'chimpanzee';
    return true;
  }
  if ('bearing' === event) {
    state.current = 'grouchy';
    return true;
  }
  if ('devastated' === event) {
    state.current = 'warped';
    return true;
  }
  return false;
}
function handleState$151(state, event) {
  if ('superb' === state.current) {
    return doTrans$142(state, event);
  } return false;
}
function doTrans$143(state, event) {
  if ('supervising' === event) {
    state.current = 'patient';
    return true;
  }
  if ('rub' === event) {
    state.current = 'oddball';
    return true;
  }
  if ('soars' === event) {
    state.current = 'juicy';
    return true;
  }
  if ('cremated' === event) {
    state.current = 'hospitable';
    return true;
  }
  return false;
}
function handleState$152(state, event) {
  if ('lynx' === state.current) {
    return doTrans$143(state, event);
  } return false;
}
function doTrans$144(state, event) {
  if ('flutter' === event) {
    state.current = 'content';
    return true;
  }
  if ('hearing' === event) {
    state.current = 'needy';
    return true;
  }
  if ('devastated' === event) {
    state.current = 'wrathful';
    return true;
  }
  if ('deemed' === event) {
    state.current = 'relieved';
    return true;
  }
  if ('liberalize' === event) {
    state.current = 'mixed';
    return true;
  }
  return false;
}
function handleState$153(state, event) {
  if ('trustworthy' === state.current) {
    return doTrans$144(state, event);
  } return false;
}
function doTrans$145(state, event) {
  if ('sprinkling' === event) {
    state.current = 'relieved';
    return true;
  }
  if ('squinting' === event) {
    state.current = 'genuine';
    return true;
  }
  if ('spend' === event) {
    state.current = 'otter';
    return true;
  }
  if ('recognised' === event) {
    state.current = 'gecko';
    return true;
  }
  return false;
}
function handleState$154(state, event) {
  if ('outlying' === state.current) {
    return doTrans$145(state, event);
  } return false;
}
function doTrans$146(state, event) {
  if ('piqued' === event) {
    state.current = 'real';
    return true;
  }
  return false;
}
function handleState$155(state, event) {
  if ('slow' === state.current) {
    return doTrans$146(state, event);
  } return false;
}
function doTrans$147(state, event) {
  if ('alternating' === event) {
    state.current = 'lobster';
    return true;
  }
  if ('comprises' === event) {
    state.current = 'laconic';
    return true;
  }
  if ('tailored' === event) {
    state.current = 'remarkable';
    return true;
  }
  if ('presupposed' === event) {
    state.current = 'superb';
    return true;
  }
  return false;
}
function handleState$156(state, event) {
  if ('healthy' === state.current) {
    return doTrans$147(state, event);
  } return false;
}
function doTrans$148(state, event) {
  if ('poses' === event) {
    state.current = 'patient';
    return true;
  }
  return false;
}
function handleState$157(state, event) {
  if ('shrill' === state.current) {
    return doTrans$148(state, event);
  } return false;
}
function doTrans$149(state, event) {
  if ('terrifying' === event) {
    state.current = 'utter';
    return true;
  }
  return false;
}
function handleState$158(state, event) {
  if ('female' === state.current) {
    return doTrans$149(state, event);
  } return false;
}
function doTrans$150(state, event) {
  if ('me' === event) {
    state.current = 'truthful';
    return true;
  }
  if ('surfaced' === event) {
    state.current = 'tricky';
    return true;
  }
  if ('intensifying' === event) {
    state.current = 'scorching';
    return true;
  }
  if ('pool' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('provoke' === event) {
    state.current = 'incomparable';
    return true;
  }
  if ('comin' === event) {
    state.current = 'hippopotamus';
    return true;
  }
  return false;
}
function handleState$159(state, event) {
  if ('frayed' === state.current) {
    return doTrans$150(state, event);
  } return false;
}
function doTrans$151(state, event) {
  if ('supervised' === event) {
    state.current = 'howler_monkey';
    return true;
  }
  if ('want' === event) {
    state.current = 'junior';
    return true;
  }
  if ('alienating' === event) {
    state.current = 'grand';
    return true;
  }
  if ('supplanted' === event) {
    state.current = 'splendid';
    return true;
  }
  return false;
}
function handleState$160(state, event) {
  if ('raw' === state.current) {
    return doTrans$151(state, event);
  } return false;
}
function doTrans$152(state, event) {
  if ('forfeit' === event) {
    state.current = 'violet';
    return true;
  }
  return false;
}
function handleState$161(state, event) {
  if ('active' === state.current) {
    return doTrans$152(state, event);
  } return false;
}
function doTrans$153(state, event) {
  if ('supervising' === event) {
    state.current = 'acidic';
    return true;
  }
  if ('finds' === event) {
    state.current = 'violet';
    return true;
  }
  if ('compares' === event) {
    state.current = 'quintessential';
    return true;
  }
  if ('book' === event) {
    state.current = 'goose';
    return true;
  }
  return false;
}
function handleState$162(state, event) {
  if ('towering' === state.current) {
    return doTrans$153(state, event);
  } return false;
}
function doTrans$154(state, event) {
  if ('crediting' === event) {
    state.current = 'high';
    return true;
  }
  if ('constructing' === event) {
    state.current = 'jackal';
    return true;
  }
  return false;
}
function handleState$163(state, event) {
  if ('judicious' === state.current) {
    return doTrans$154(state, event);
  } return false;
}
function doTrans$155(state, event) {
  if ('clarifies' === event) {
    state.current = 'content';
    return true;
  }
  return false;
}
function handleState$164(state, event) {
  if ('kindly' === state.current) {
    return doTrans$155(state, event);
  } return false;
}
function doTrans$156(state, event) {
  if ('project' === event) {
    state.current = 'lonely';
    return true;
  }
  if ('coveted' === event) {
    state.current = 'fitting';
    return true;
  }
  if ('borrowed' === event) {
    state.current = 'recent';
    return true;
  }
  if ('remand' === event) {
    state.current = 'slim';
    return true;
  }
  if ('expires' === event) {
    state.current = 'present';
    return true;
  }
  return false;
}
function handleState$165(state, event) {
  if ('attractive' === state.current) {
    return doTrans$156(state, event);
  } return false;
}
function doTrans$157(state, event) {
  if ('frowned' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('bite' === event) {
    state.current = 'laconic';
    return true;
  }
  if ('inflated' === event) {
    state.current = 'dull';
    return true;
  }
  return false;
}
function handleState$166(state, event) {
  if ('hospitable' === state.current) {
    return doTrans$157(state, event);
  } return false;
}
function doTrans$158(state, event) {
  if ('resell' === event) {
    state.current = 'flawless';
    return true;
  }
  if ('devour' === event) {
    state.current = 'superficial';
    return true;
  }
  return false;
}
function handleState$167(state, event) {
  if ('mammoth' === state.current) {
    return doTrans$158(state, event);
  } return false;
}
function doTrans$159(state, event) {
  if ('unites' === event) {
    state.current = 'soaring';
    return true;
  }
  if ('executing' === event) {
    state.current = 'beaver';
    return true;
  }
  if ('lowered' === event) {
    state.current = 'granular';
    return true;
  }
  if ('punish' === event) {
    state.current = 'big_hearted';
    return true;
  }
  return false;
}
function handleState$168(state, event) {
  if ('agreeable' === state.current) {
    return doTrans$159(state, event);
  } return false;
}
function doTrans$160(state, event) {
  if ('contend' === event) {
    state.current = 'flounder';
    return true;
  }
  if ('falling' === event) {
    state.current = 'charming';
    return true;
  }
  if ('rigged' === event) {
    state.current = 'laconic';
    return true;
  }
  if ('rot' === event) {
    state.current = 'upset';
    return true;
  }
  return false;
}
function handleState$169(state, event) {
  if ('upright' === state.current) {
    return doTrans$160(state, event);
  } return false;
}
function doTrans$161(state, event) {
  if ('pat' === event) {
    state.current = 'which';
    return true;
  }
  if ('reigns' === event) {
    state.current = 'peaceful';
    return true;
  }
  if ('harvest' === event) {
    state.current = 'iguana';
    return true;
  }
  if ('invite' === event) {
    state.current = 'wide_eyed';
    return true;
  }
  return false;
}
function handleState$170(state, event) {
  if ('grand' === state.current) {
    return doTrans$161(state, event);
  } return false;
}
function doTrans$162(state, event) {
  if ('beheld' === event) {
    state.current = 'sore';
    return true;
  }
  if ('dramatized' === event) {
    state.current = 'rowdy';
    return true;
  }
  if ('participates' === event) {
    state.current = 'long';
    return true;
  }
  if ('uplifted' === event) {
    state.current = 'complex';
    return true;
  }
  if ('inquiring' === event) {
    state.current = 'defensive';
    return true;
  }
  if ('sprinted' === event) {
    state.current = 'vile';
    return true;
  }
  if ('restore' === event) {
    state.current = 'hippopotamus';
    return true;
  }
  return false;
}
function handleState$171(state, event) {
  if ('violet' === state.current) {
    return doTrans$162(state, event);
  } return false;
}
function doTrans$163(state, event) {
  if ('rewrote' === event) {
    state.current = 'linear';
    return true;
  }
  if ('disturb' === event) {
    state.current = 'active';
    return true;
  }
  if ('unleashed' === event) {
    state.current = 'curvy';
    return true;
  }
  if ('visited' === event) {
    state.current = 'grieving';
    return true;
  }
  if ('obtain' === event) {
    state.current = 'conventional';
    return true;
  }
  return false;
}
function handleState$172(state, event) {
  if ('chinchilla' === state.current) {
    return doTrans$163(state, event);
  } return false;
}
function doTrans$164(state, event) {
  if ('pondered' === event) {
    state.current = 'stunning';
    return true;
  }
  if ('denoting' === event) {
    state.current = 'nautical';
    return true;
  }
  return false;
}
function handleState$173(state, event) {
  if ('kind' === state.current) {
    return doTrans$164(state, event);
  } return false;
}
function doTrans$165(state, event) {
  if ('exaggerates' === event) {
    state.current = 'true';
    return true;
  }
  if ('lobbied' === event) {
    state.current = 'female';
    return true;
  }
  if ('pressed' === event) {
    state.current = 'metallic';
    return true;
  }
  if ('dominate' === event) {
    state.current = 'junior';
    return true;
  }
  if ('deferring' === event) {
    state.current = 'negative';
    return true;
  }
  if ('destroys' === event) {
    state.current = 'chief';
    return true;
  }
  return false;
}
function handleState$174(state, event) {
  if ('pale' === state.current) {
    return doTrans$165(state, event);
  } return false;
}
function doTrans$166(state, event) {
  if ('chatting' === event) {
    state.current = 'ashamed';
    return true;
  }
  if ('differentiating' === event) {
    state.current = 'squirrel';
    return true;
  }
  if ('transfer' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('circulated' === event) {
    state.current = 'writhing';
    return true;
  }
  if ('kindle' === event) {
    state.current = 'bubbly';
    return true;
  }
  return false;
}
function handleState$175(state, event) {
  if ('arrogant' === state.current) {
    return doTrans$166(state, event);
  } return false;
}
function doTrans$167(state, event) {
  if ('moving' === event) {
    state.current = 'numb';
    return true;
  }
  if ('amass' === event) {
    state.current = 'better';
    return true;
  }
  return false;
}
function handleState$176(state, event) {
  if ('puffin' === state.current) {
    return doTrans$167(state, event);
  } return false;
}
function doTrans$168(state, event) {
  if ('tearing' === event) {
    state.current = 'trivial';
    return true;
  }
  if ('refrained' === event) {
    state.current = 'scorching';
    return true;
  }
  if ('perverted' === event) {
    state.current = 'qualified';
    return true;
  }
  if ('squaring' === event) {
    state.current = 'fluid';
    return true;
  }
  if ('shirk' === event) {
    state.current = 'anteater';
    return true;
  }
  return false;
}
function handleState$177(state, event) {
  if ('lovable' === state.current) {
    return doTrans$168(state, event);
  } return false;
}
function doTrans$169(state, event) {
  if ('scold' === event) {
    state.current = 'false';
    return true;
  }
  if ('entertained' === event) {
    state.current = 'giving';
    return true;
  }
  return false;
}
function handleState$178(state, event) {
  if ('basic' === state.current) {
    return doTrans$169(state, event);
  } return false;
}
function doTrans$170(state, event) {
  if ('lock' === event) {
    state.current = 'acidic';
    return true;
  }
  if ('realises' === event) {
    state.current = 'direct';
    return true;
  }
  if ('overthrow' === event) {
    state.current = 'grouchy';
    return true;
  }
  return false;
}
function handleState$179(state, event) {
  if ('limp' === state.current) {
    return doTrans$170(state, event);
  } return false;
}
function doTrans$171(state, event) {
  if ('begun' === event) {
    state.current = 'unsung';
    return true;
  }
  if ('authorizing' === event) {
    state.current = 'chief';
    return true;
  }
  if ('betting' === event) {
    state.current = 'wolfhound';
    return true;
  }
  if ('tailoring' === event) {
    state.current = 'wrong';
    return true;
  }
  return false;
}
function handleState$180(state, event) {
  if ('curvy' === state.current) {
    return doTrans$171(state, event);
  } return false;
}
function doTrans$172(state, event) {
  if ('report' === event) {
    state.current = 'rough';
    return true;
  }
  return false;
}
function handleState$181(state, event) {
  if ('scarce' === state.current) {
    return doTrans$172(state, event);
  } return false;
}
function doTrans$173(state, event) {
  if ('relaxes' === event) {
    state.current = 'complex';
    return true;
  }
  if ('endangered' === event) {
    state.current = 'sponge';
    return true;
  }
  if ('lack' === event) {
    state.current = 'crane';
    return true;
  }
  if ('fan' === event) {
    state.current = 'numerous';
    return true;
  }
  if ('drops' === event) {
    state.current = 'ajar';
    return true;
  }
  return false;
}
function handleState$182(state, event) {
  if ('nice' === state.current) {
    return doTrans$173(state, event);
  } return false;
}
function doTrans$174(state, event) {
  if ('rounded' === event) {
    state.current = 'raccoon';
    return true;
  }
  return false;
}
function handleState$183(state, event) {
  if ('ill_informed' === state.current) {
    return doTrans$174(state, event);
  } return false;
}
function doTrans$175(state, event) {
  if ('taping' === event) {
    state.current = 'burdensome';
    return true;
  }
  if ('disputed' === event) {
    state.current = 'foul';
    return true;
  }
  if ('shut' === event) {
    state.current = 'naughty';
    return true;
  }
  return false;
}
function handleState$184(state, event) {
  if ('patient' === state.current) {
    return doTrans$175(state, event);
  } return false;
}
function doTrans$176(state, event) {
  if ('finish' === event) {
    state.current = 'back';
    return true;
  }
  if ('shuddered' === event) {
    state.current = 'delightful';
    return true;
  }
  if ('commend' === event) {
    state.current = 'trim';
    return true;
  }
  if ('injecting' === event) {
    state.current = 'pale';
    return true;
  }
  if ('kidnap' === event) {
    state.current = 'wrathful';
    return true;
  }
  return false;
}
function handleState$185(state, event) {
  if ('private' === state.current) {
    return doTrans$176(state, event);
  } return false;
}
function doTrans$177(state, event) {
  if ('choked' === event) {
    state.current = 'joyous';
    return true;
  }
  if ('swayed' === event) {
    state.current = 'splendid';
    return true;
  }
  return false;
}
function handleState$186(state, event) {
  if ('daring' === state.current) {
    return doTrans$177(state, event);
  } return false;
}
function doTrans$178(state, event) {
  if ('optimize' === event) {
    state.current = 'truthful';
    return true;
  }
  return false;
}
function handleState$187(state, event) {
  if ('pungent' === state.current) {
    return doTrans$178(state, event);
  } return false;
}
function doTrans$179(state, event) {
  if ('inflicting' === event) {
    state.current = 'snake';
    return true;
  }
  if ('double' === event) {
    state.current = 'loyal';
    return true;
  }
  if ('interpreting' === event) {
    state.current = 'well_informed';
    return true;
  }
  if ('hit' === event) {
    state.current = 'juicy';
    return true;
  }
  if ('shattering' === event) {
    state.current = 'arrogant';
    return true;
  }
  return false;
}
function handleState$188(state, event) {
  if ('curly' === state.current) {
    return doTrans$179(state, event);
  } return false;
}
function doTrans$180(state, event) {
  if ('applied' === event) {
    state.current = 'gaseous';
    return true;
  }
  if ('mounted' === event) {
    state.current = 'necessary';
    return true;
  }
  return false;
}
function handleState$189(state, event) {
  if ('affectionate' === state.current) {
    return doTrans$180(state, event);
  } return false;
}
function doTrans$181(state, event) {
  if ('monopolize' === event) {
    state.current = 'hungry';
    return true;
  }
  if ('roam' === event) {
    state.current = 'wilted';
    return true;
  }
  return false;
}
function handleState$190(state, event) {
  if ('anteater' === state.current) {
    return doTrans$181(state, event);
  } return false;
}
function doTrans$182(state, event) {
  if ('viking' === event) {
    state.current = 'remarkable';
    return true;
  }
  return false;
}
function handleState$191(state, event) {
  if ('ripe' === state.current) {
    return doTrans$182(state, event);
  } return false;
}
function doTrans$183(state, event) {
  if ('scolding' === event) {
    state.current = 'feminine';
    return true;
  }
  if ('sp' === event) {
    state.current = 'tall';
    return true;
  }
  if ('terms' === event) {
    state.current = 'active';
    return true;
  }
  if ('anchored' === event) {
    state.current = 'dingo';
    return true;
  }
  return false;
}
function handleState$192(state, event) {
  if ('joyous' === state.current) {
    return doTrans$183(state, event);
  } return false;
}
function handleState$193(state, event) {
  if ('bird' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$184(state, event) {
  if ('witnessing' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('experience' === event) {
    state.current = 'humming';
    return true;
  }
  if ('enhance' === event) {
    state.current = 'nutritious';
    return true;
  }
  return false;
}
function handleState$194(state, event) {
  if ('idealistic' === state.current) {
    return doTrans$184(state, event);
  } return false;
}
function doTrans$185(state, event) {
  if ('freezing' === event) {
    state.current = 'dutiful';
    return true;
  }
  if ('feasting' === event) {
    state.current = 'electric';
    return true;
  }
  return false;
}
function handleState$195(state, event) {
  if ('helpful' === state.current) {
    return doTrans$185(state, event);
  } return false;
}
function doTrans$186(state, event) {
  if ('criticised' === event) {
    state.current = 'quiet';
    return true;
  }
  if ('underwriting' === event) {
    state.current = 'hopeful';
    return true;
  }
  if ('internalizing' === event) {
    state.current = 'ornery';
    return true;
  }
  if ('zipped' === event) {
    state.current = 'cylindrical';
    return true;
  }
  if ('teaching' === event) {
    state.current = 'hospitable';
    return true;
  }
  if ('existed' === event) {
    state.current = 'far_off';
    return true;
  }
  return false;
}
function handleState$196(state, event) {
  if ('ornery' === state.current) {
    return doTrans$186(state, event);
  } return false;
}
function doTrans$187(state, event) {
  if ('reputed' === event) {
    state.current = 'private';
    return true;
  }
  if ('statement' === event) {
    state.current = 'grieving';
    return true;
  }
  if ('curling' === event) {
    state.current = 'anteater';
    return true;
  }
  if ('involved' === event) {
    state.current = 'warped';
    return true;
  }
  return false;
}
function handleState$197(state, event) {
  if ('modern' === state.current) {
    return doTrans$187(state, event);
  } return false;
}
function doTrans$188(state, event) {
  if ('seep' === event) {
    state.current = 'pro_active';
    return true;
  }
  return false;
}
function handleState$198(state, event) {
  if ('acrobatic' === state.current) {
    return doTrans$188(state, event);
  } return false;
}
function doTrans$189(state, event) {
  if ('roaring' === event) {
    state.current = 'vile';
    return true;
  }
  return false;
}
function handleState$199(state, event) {
  if ('empty' === state.current) {
    return doTrans$189(state, event);
  } return false;
}
function doTrans$190(state, event) {
  if ('coded' === event) {
    state.current = 'proud';
    return true;
  }
  if ('averting' === event) {
    state.current = 'abyssinian';
    return true;
  }
  return false;
}
function handleState$200(state, event) {
  if ('fragrant' === state.current) {
    return doTrans$190(state, event);
  } return false;
}
function doTrans$191(state, event) {
  if ('sighing' === event) {
    state.current = 'menacing';
    return true;
  }
  if ('languished' === event) {
    state.current = 'glum';
    return true;
  }
  if ('redesigning' === event) {
    state.current = 'minty';
    return true;
  }
  return false;
}
function handleState$201(state, event) {
  if ('wide_eyed' === state.current) {
    return doTrans$191(state, event);
  } return false;
}
function doTrans$192(state, event) {
  if ('documented' === event) {
    state.current = 'yummy';
    return true;
  }
  if ('inferred' === event) {
    state.current = 'oblong';
    return true;
  }
  return false;
}
function handleState$202(state, event) {
  if ('loyal' === state.current) {
    return doTrans$192(state, event);
  } return false;
}
function doTrans$193(state, event) {
  if ('echoes' === event) {
    state.current = 'occasional';
    return true;
  }
  if ('deciphered' === event) {
    state.current = 'incomparable';
    return true;
  }
  if ('following' === event) {
    state.current = 'repentant';
    return true;
  }
  if ('padded' === event) {
    state.current = 'conventional';
    return true;
  }
  return false;
}
function handleState$203(state, event) {
  if ('liquid' === state.current) {
    return doTrans$193(state, event);
  } return false;
}
function doTrans$194(state, event) {
  if ('see' === event) {
    state.current = 'qualified';
    return true;
  }
  if ('stranded' === event) {
    state.current = 'long_term';
    return true;
  }
  if ('opposed' === event) {
    state.current = 'impassioned';
    return true;
  }
  return false;
}
function handleState$204(state, event) {
  if ('bewildered' === state.current) {
    return doTrans$194(state, event);
  } return false;
}
function doTrans$195(state, event) {
  if ('occur' === event) {
    state.current = 'trim';
    return true;
  }
  if ('splashing' === event) {
    state.current = 'cheerful';
    return true;
  }
  if ('compare' === event) {
    state.current = 'doting';
    return true;
  }
  if ('signaling' === event) {
    state.current = 'ironclad';
    return true;
  }
  return false;
}
function handleState$205(state, event) {
  if ('fluid' === state.current) {
    return doTrans$195(state, event);
  } return false;
}
function doTrans$196(state, event) {
  if ('stripping' === event) {
    state.current = 'healthy';
    return true;
  }
  if ('police' === event) {
    state.current = 'assured';
    return true;
  }
  if ('q' === event) {
    state.current = 'anteater';
    return true;
  }
  if ('warmed' === event) {
    state.current = 'excellent';
    return true;
  }
  if ('factoring' === event) {
    state.current = 'juicy';
    return true;
  }
  return false;
}
function handleState$206(state, event) {
  if ('thoughtless' === state.current) {
    return doTrans$196(state, event);
  } return false;
}
function doTrans$197(state, event) {
  if ('indicted' === event) {
    state.current = 'attractive';
    return true;
  }
  if ('smite' === event) {
    state.current = 'hospitable';
    return true;
  }
  if ('stabilised' === event) {
    state.current = 'costly';
    return true;
  }
  if ('infringing' === event) {
    state.current = 'this';
    return true;
  }
  if ('gaze' === event) {
    state.current = 'hummingbird';
    return true;
  }
  return false;
}
function handleState$207(state, event) {
  if ('buttery' === state.current) {
    return doTrans$197(state, event);
  } return false;
}
function doTrans$198(state, event) {
  if ('rinse' === event) {
    state.current = 'thick';
    return true;
  }
  return false;
}
function handleState$208(state, event) {
  if ('newt' === state.current) {
    return doTrans$198(state, event);
  } return false;
}
function doTrans$199(state, event) {
  if ('reacts' === event) {
    state.current = 'patient';
    return true;
  }
  if ('a_' === event) {
    state.current = 'numb';
    return true;
  }
  return false;
}
function handleState$209(state, event) {
  if ('pesky' === state.current) {
    return doTrans$199(state, event);
  } return false;
}
function doTrans$200(state, event) {
  if ('complicated' === event) {
    state.current = 'agreeable';
    return true;
  }
  return false;
}
function handleState$210(state, event) {
  if ('mole' === state.current) {
    return doTrans$200(state, event);
  } return false;
}
function doTrans$201(state, event) {
  if ('preceding' === event) {
    state.current = 'hound';
    return true;
  }
  return false;
}
function handleState$211(state, event) {
  if ('zealous' === state.current) {
    return doTrans$201(state, event);
  } return false;
}
function doTrans$202(state, event) {
  if ('taming' === event) {
    state.current = 'equal';
    return true;
  }
  if ('manifesting' === event) {
    state.current = 'affectionate';
    return true;
  }
  if ('demolished' === event) {
    state.current = 'rigid';
    return true;
  }
  return false;
}
function handleState$212(state, event) {
  if ('real' === state.current) {
    return doTrans$202(state, event);
  } return false;
}
function doTrans$203(state, event) {
  if ('int' === event) {
    state.current = 'hurtful';
    return true;
  }
  return false;
}
function handleState$213(state, event) {
  if ('nimble' === state.current) {
    return doTrans$203(state, event);
  } return false;
}
function doTrans$204(state, event) {
  if ('necessitating' === event) {
    state.current = 'crowded';
    return true;
  }
  if ('concluded' === event) {
    state.current = 'harmless';
    return true;
  }
  if ('upsets' === event) {
    state.current = 'helpless';
    return true;
  }
  if ('unite' === event) {
    state.current = 'chimpanzee';
    return true;
  }
  if ('blossomed' === event) {
    state.current = 'horrid';
    return true;
  }
  if ('emphasise' === event) {
    state.current = 'harmonious';
    return true;
  }
  return false;
}
function handleState$214(state, event) {
  if ('cheerful' === state.current) {
    return doTrans$204(state, event);
  } return false;
}
function doTrans$205(state, event) {
  if ('coexisting' === event) {
    state.current = 'ill_informed';
    return true;
  }
  if ('blurred' === event) {
    state.current = 'plush';
    return true;
  }
  if ('amplifying' === event) {
    state.current = 'crowded';
    return true;
  }
  if ('soiled' === event) {
    state.current = 'splendid';
    return true;
  }
  return false;
}
function handleState$215(state, event) {
  if ('thrifty' === state.current) {
    return doTrans$205(state, event);
  } return false;
}
function doTrans$206(state, event) {
  if ('headlong' === event) {
    state.current = 'proper';
    return true;
  }
  if ('splintered' === event) {
    state.current = 'deep';
    return true;
  }
  if ('exchange' === event) {
    state.current = 'insistent';
    return true;
  }
  if ('seizing' === event) {
    state.current = 'intelligent';
    return true;
  }
  return false;
}
function handleState$216(state, event) {
  if ('gleeful' === state.current) {
    return doTrans$206(state, event);
  } return false;
}
function doTrans$207(state, event) {
  if ('tumble' === event) {
    state.current = 'motherly';
    return true;
  }
  if ('ii' === event) {
    state.current = 'menacing';
    return true;
  }
  return false;
}
function handleState$217(state, event) {
  if ('nutritious' === state.current) {
    return doTrans$207(state, event);
  } return false;
}
function doTrans$208(state, event) {
  if ('plough' === event) {
    state.current = 'profound';
    return true;
  }
  return false;
}
function handleState$218(state, event) {
  if ('raccoon' === state.current) {
    return doTrans$208(state, event);
  } return false;
}
function doTrans$209(state, event) {
  if ('begin' === event) {
    state.current = 'affectionate';
    return true;
  }
  if ('counteract' === event) {
    state.current = 'popular';
    return true;
  }
  return false;
}
function handleState$219(state, event) {
  if ('jaded' === state.current) {
    return doTrans$209(state, event);
  } return false;
}
function doTrans$210(state, event) {
  if ('excluding' === event) {
    state.current = 'elliptical';
    return true;
  }
  if ('side' === event) {
    state.current = 'loyal';
    return true;
  }
  if ('withheld' === event) {
    state.current = 'understated';
    return true;
  }
  if ('solidified' === event) {
    state.current = 'ajar';
    return true;
  }
  return false;
}
function handleState$220(state, event) {
  if ('insignificant' === state.current) {
    return doTrans$210(state, event);
  } return false;
}
function doTrans$211(state, event) {
  if ('subdivided' === event) {
    state.current = 'humming';
    return true;
  }
  if ('lives' === event) {
    state.current = 'pitiful';
    return true;
  }
  return false;
}
function handleState$221(state, event) {
  if ('unlawful' === state.current) {
    return doTrans$211(state, event);
  } return false;
}
function doTrans$212(state, event) {
  if ('possesses' === event) {
    state.current = 'mixed';
    return true;
  }
  if ('appreciate' === event) {
    state.current = 'comfortable';
    return true;
  }
  if ('criticizes' === event) {
    state.current = 'tedious';
    return true;
  }
  if ('type' === event) {
    state.current = 'bonobo';
    return true;
  }
  return false;
}
function handleState$222(state, event) {
  if ('fond' === state.current) {
    return doTrans$212(state, event);
  } return false;
}
function doTrans$213(state, event) {
  if ('encouraging' === event) {
    state.current = 'wasp';
    return true;
  }
  if ('netted' === event) {
    state.current = 'puny';
    return true;
  }
  if ('diagnosing' === event) {
    state.current = 'ideal';
    return true;
  }
  if ('assembling' === event) {
    state.current = 'fluttering';
    return true;
  }
  return false;
}
function handleState$223(state, event) {
  if ('this' === state.current) {
    return doTrans$213(state, event);
  } return false;
}
function doTrans$214(state, event) {
  if ('footing' === event) {
    state.current = 'flaky';
    return true;
  }
  if ('ascribes' === event) {
    state.current = 'easy';
    return true;
  }
  if ('places' === event) {
    state.current = 'good_natured';
    return true;
  }
  return false;
}
function handleState$224(state, event) {
  if ('attentive' === state.current) {
    return doTrans$214(state, event);
  } return false;
}
function doTrans$215(state, event) {
  if ('suspects' === event) {
    state.current = 'grouse';
    return true;
  }
  if ('compounds' === event) {
    state.current = 'sneaky';
    return true;
  }
  return false;
}
function handleState$225(state, event) {
  if ('honored' === state.current) {
    return doTrans$215(state, event);
  } return false;
}
function doTrans$216(state, event) {
  if ('coincident' === event) {
    state.current = 'cute';
    return true;
  }
  if ('expected' === event) {
    state.current = 'puffin';
    return true;
  }
  if ('interfacing' === event) {
    state.current = 'winding';
    return true;
  }
  if ('nested' === event) {
    state.current = 'insistent';
    return true;
  }
  if ('dreams' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('suffer' === event) {
    state.current = 'buttery';
    return true;
  }
  return false;
}
function handleState$226(state, event) {
  if ('staid' === state.current) {
    return doTrans$216(state, event);
  } return false;
}
function doTrans$217(state, event) {
  if ('lo' === event) {
    state.current = 'tarantula';
    return true;
  }
  if ('confusing' === event) {
    state.current = 'identical';
    return true;
  }
  if ('unload' === event) {
    state.current = 'vile';
    return true;
  }
  return false;
}
function handleState$227(state, event) {
  if ('fearless' === state.current) {
    return doTrans$217(state, event);
  } return false;
}
function doTrans$218(state, event) {
  if ('alleviating' === event) {
    state.current = 'rancid';
    return true;
  }
  if ('bounced' === event) {
    state.current = 'good_natured';
    return true;
  }
  return false;
}
function handleState$228(state, event) {
  if ('gibbon' === state.current) {
    return doTrans$218(state, event);
  } return false;
}
function doTrans$219(state, event) {
  if ('representing' === event) {
    state.current = 'simplistic';
    return true;
  }
  if ('interpreting' === event) {
    state.current = 'big_hearted';
    return true;
  }
  if ('simple' === event) {
    state.current = 'excellent';
    return true;
  }
  return false;
}
function handleState$229(state, event) {
  if ('meandering' === state.current) {
    return doTrans$219(state, event);
  } return false;
}
function doTrans$220(state, event) {
  if ('diffusing' === event) {
    state.current = 'easygoing';
    return true;
  }
  if ('swap' === event) {
    state.current = 'slim';
    return true;
  }
  if ('predicts' === event) {
    state.current = 'mundane';
    return true;
  }
  return false;
}
function handleState$230(state, event) {
  if ('cheery' === state.current) {
    return doTrans$220(state, event);
  } return false;
}
function doTrans$221(state, event) {
  if ('tinkering' === event) {
    state.current = 'nice';
    return true;
  }
  if ('embody' === event) {
    state.current = 'many';
    return true;
  }
  return false;
}
function handleState$231(state, event) {
  if ('intent' === state.current) {
    return doTrans$221(state, event);
  } return false;
}
function doTrans$222(state, event) {
  if ('refrain' === event) {
    state.current = 'daring';
    return true;
  }
  return false;
}
function handleState$232(state, event) {
  if ('wiggly' === state.current) {
    return doTrans$222(state, event);
  } return false;
}
function doTrans$223(state, event) {
  if ('buffeted' === event) {
    state.current = 'wrathful';
    return true;
  }
  if ('enforcing' === event) {
    state.current = 'harmonious';
    return true;
  }
  if ('blazing' === event) {
    state.current = 'proper';
    return true;
  }
  return false;
}
function handleState$233(state, event) {
  if ('jovial' === state.current) {
    return doTrans$223(state, event);
  } return false;
}
function doTrans$224(state, event) {
  if ('roamed' === event) {
    state.current = 'motherly';
    return true;
  }
  return false;
}
function handleState$234(state, event) {
  if ('fluttering' === state.current) {
    return doTrans$224(state, event);
  } return false;
}
function doTrans$225(state, event) {
  if ('realised' === event) {
    state.current = 'sharp';
    return true;
  }
  if ('didn' === event) {
    state.current = 'secondary';
    return true;
  }
  if ('march' === event) {
    state.current = 'forceful';
    return true;
  }
  if ('basking' === event) {
    state.current = 'albatross';
    return true;
  }
  if ('clasp' === event) {
    state.current = 'rubbery';
    return true;
  }
  return false;
}
function handleState$235(state, event) {
  if ('sneaky' === state.current) {
    return doTrans$225(state, event);
  } return false;
}
function doTrans$226(state, event) {
  if ('appreciates' === event) {
    state.current = 'rough';
    return true;
  }
  if ('hold' === event) {
    state.current = 'buffalo';
    return true;
  }
  if ('greets' === event) {
    state.current = 'reliable';
    return true;
  }
  return false;
}
function handleState$236(state, event) {
  if ('unsung' === state.current) {
    return doTrans$226(state, event);
  } return false;
}
function doTrans$227(state, event) {
  if ('funded' === event) {
    state.current = 'millipede';
    return true;
  }
  if ('utilized' === event) {
    state.current = 'curly';
    return true;
  }
  if ('equated' === event) {
    state.current = 'square';
    return true;
  }
  if ('fumed' === event) {
    state.current = 'present';
    return true;
  }
  if ('defraud' === event) {
    state.current = 'many';
    return true;
  }
  if ('confirms' === event) {
    state.current = 'stupendous';
    return true;
  }
  if ('pursed' === event) {
    state.current = 'yummy';
    return true;
  }
  return false;
}
function handleState$237(state, event) {
  if ('tight' === state.current) {
    return doTrans$227(state, event);
  } return false;
}
function doTrans$228(state, event) {
  if ('scale' === event) {
    state.current = 'lovable';
    return true;
  }
  if ('convicted' === event) {
    state.current = 'ibis';
    return true;
  }
  if ('dissuaded' === event) {
    state.current = 'primary';
    return true;
  }
  if ('certifying' === event) {
    state.current = 'active';
    return true;
  }
  return false;
}
function handleState$238(state, event) {
  if ('variable' === state.current) {
    return doTrans$228(state, event);
  } return false;
}
function doTrans$229(state, event) {
  if ('ligated' === event) {
    state.current = 'feminine';
    return true;
  }
  if ('constituting' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('proven' === event) {
    state.current = 'dragonfly';
    return true;
  }
  if ('plowed' === event) {
    state.current = 'hurtful';
    return true;
  }
  return false;
}
function handleState$239(state, event) {
  if ('pink' === state.current) {
    return doTrans$229(state, event);
  } return false;
}
function doTrans$230(state, event) {
  if ('dressed' === event) {
    state.current = 'lynx';
    return true;
  }
  if ('charmed' === event) {
    state.current = 'polite';
    return true;
  }
  if ('degenerate' === event) {
    state.current = 'stunning';
    return true;
  }
  if ('rigging' === event) {
    state.current = 'hummingbird';
    return true;
  }
  return false;
}
function handleState$240(state, event) {
  if ('pleasant' === state.current) {
    return doTrans$230(state, event);
  } return false;
}
function doTrans$231(state, event) {
  if ('allocate' === event) {
    state.current = 'bewildered';
    return true;
  }
  if ('don' === event) {
    state.current = 'wilted';
    return true;
  }
  if ('purport' === event) {
    state.current = 'hippopotamus';
    return true;
  }
  if ('pray' === event) {
    state.current = 'ethical';
    return true;
  }
  if ('patented' === event) {
    state.current = 'hard_working';
    return true;
  }
  if ('funding' === event) {
    state.current = 'quiet';
    return true;
  }
  return false;
}
function handleState$241(state, event) {
  if ('horrid' === state.current) {
    return doTrans$231(state, event);
  } return false;
}
function doTrans$232(state, event) {
  if ('shift' === event) {
    state.current = 'acrobatic';
    return true;
  }
  if ('cant' === event) {
    state.current = 'wan';
    return true;
  }
  if ('battling' === event) {
    state.current = 'burdensome';
    return true;
  }
  return false;
}
function handleState$242(state, event) {
  if ('wasp' === state.current) {
    return doTrans$232(state, event);
  } return false;
}
function doTrans$233(state, event) {
  if ('dry' === event) {
    state.current = 'pastel';
    return true;
  }
  if ('shaded' === event) {
    state.current = 'grizzled';
    return true;
  }
  if ('rooting' === event) {
    state.current = 'intelligent';
    return true;
  }
  return false;
}
function handleState$243(state, event) {
  if ('hoarse' === state.current) {
    return doTrans$233(state, event);
  } return false;
}
function doTrans$234(state, event) {
  if ('betray' === event) {
    state.current = 'calm';
    return true;
  }
  return false;
}
function handleState$244(state, event) {
  if ('sore' === state.current) {
    return doTrans$234(state, event);
  } return false;
}
function doTrans$235(state, event) {
  if ('landing' === event) {
    state.current = 'biodegradable';
    return true;
  }
  if ('gushing' === event) {
    state.current = 'curly';
    return true;
  }
  return false;
}
function handleState$245(state, event) {
  if ('grizzled' === state.current) {
    return doTrans$235(state, event);
  } return false;
}
function doTrans$236(state, event) {
  if ('scrutinize' === event) {
    state.current = 'numb';
    return true;
  }
  if ('resonates' === event) {
    state.current = 'ornery';
    return true;
  }
  return false;
}
function handleState$246(state, event) {
  if ('linear' === state.current) {
    return doTrans$236(state, event);
  } return false;
}
function doTrans$237(state, event) {
  if ('himself' === event) {
    state.current = 'fragrant';
    return true;
  }
  if ('lo' === event) {
    state.current = 'popular';
    return true;
  }
  if ('rapped' === event) {
    state.current = 'busy';
    return true;
  }
  return false;
}
function handleState$247(state, event) {
  if ('different' === state.current) {
    return doTrans$237(state, event);
  } return false;
}
function handleState$248(state, event) {
  if ('long_term' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$238(state, event) {
  if ('skirted' === event) {
    state.current = 'fickle';
    return true;
  }
  if ('terminate' === event) {
    state.current = 'square';
    return true;
  }
  return false;
}
function handleState$249(state, event) {
  if ('magnificent' === state.current) {
    return doTrans$238(state, event);
  } return false;
}
function doTrans$239(state, event) {
  if ('board' === event) {
    state.current = 'flashy';
    return true;
  }
  return false;
}
function handleState$250(state, event) {
  if ('flamingo' === state.current) {
    return doTrans$239(state, event);
  } return false;
}
function doTrans$240(state, event) {
  if ('elude' === event) {
    state.current = 'high';
    return true;
  }
  if ('soothed' === event) {
    state.current = 'howler_monkey';
    return true;
  }
  return false;
}
function handleState$251(state, event) {
  if ('remarkable' === state.current) {
    return doTrans$240(state, event);
  } return false;
}
function doTrans$241(state, event) {
  if ('snaps' === event) {
    state.current = 'rancid';
    return true;
  }
  if ('traveling' === event) {
    state.current = 'fluid';
    return true;
  }
  if ('fainting' === event) {
    state.current = 'slow';
    return true;
  }
  return false;
}
function handleState$252(state, event) {
  if ('closed' === state.current) {
    return doTrans$241(state, event);
  } return false;
}
function doTrans$242(state, event) {
  if ('disgraced' === event) {
    state.current = 'chilly';
    return true;
  }
  return false;
}
function handleState$253(state, event) {
  if ('good_natured' === state.current) {
    return doTrans$242(state, event);
  } return false;
}
function handleState$254(state, event) {
  if ('carefree' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$243(state, event) {
  if ('reelected' === event) {
    state.current = 'coyote';
    return true;
  }
  if ('resonates' === event) {
    state.current = 'millipede';
    return true;
  }
  if ('excites' === event) {
    state.current = 'gigantic';
    return true;
  }
  if ('adjudicate' === event) {
    state.current = 'electric';
    return true;
  }
  return false;
}
function handleState$255(state, event) {
  if ('millipede' === state.current) {
    return doTrans$243(state, event);
  } return false;
}
function doTrans$244(state, event) {
  if ('tread' === event) {
    state.current = 'klutzy';
    return true;
  }
  if ('mobilizing' === event) {
    state.current = 'ripe';
    return true;
  }
  return false;
}
function handleState$256(state, event) {
  if ('menacing' === state.current) {
    return doTrans$244(state, event);
  } return false;
}
function doTrans$245(state, event) {
  if ('seeming' === event) {
    state.current = 'key';
    return true;
  }
  if ('fold' === event) {
    state.current = 'conventional';
    return true;
  }
  return false;
}
function handleState$257(state, event) {
  if ('scorching' === state.current) {
    return doTrans$245(state, event);
  } return false;
}
function doTrans$246(state, event) {
  if ('exalt' === event) {
    state.current = 'unsightly';
    return true;
  }
  if ('ringing' === event) {
    state.current = 'complex';
    return true;
  }
  if ('combine' === event) {
    state.current = 'many';
    return true;
  }
  if ('distorting' === event) {
    state.current = 'meandering';
    return true;
  }
  return false;
}
function handleState$258(state, event) {
  if ('detailed' === state.current) {
    return doTrans$246(state, event);
  } return false;
}
function doTrans$247(state, event) {
  if ('endangered' === event) {
    state.current = 'dreary';
    return true;
  }
  if ('petition' === event) {
    state.current = 'naughty';
    return true;
  }
  if ('divorce' === event) {
    state.current = 'raccoon';
    return true;
  }
  return false;
}
function handleState$259(state, event) {
  if ('passionate' === state.current) {
    return doTrans$247(state, event);
  } return false;
}
function doTrans$248(state, event) {
  if ('soothe' === event) {
    state.current = 'muggy';
    return true;
  }
  return false;
}
function handleState$260(state, event) {
  if ('muggy' === state.current) {
    return doTrans$248(state, event);
  } return false;
}
function doTrans$249(state, event) {
  if ('investigate' === event) {
    state.current = 'trim';
    return true;
  }
  if ('entitled' === event) {
    state.current = 'cloudy';
    return true;
  }
  if ('fanning' === event) {
    state.current = 'puffin';
    return true;
  }
  return false;
}
function handleState$261(state, event) {
  if ('charming' === state.current) {
    return doTrans$249(state, event);
  } return false;
}
function doTrans$250(state, event) {
  if ('restoring' === event) {
    state.current = 'caterpillar';
    return true;
  }
  return false;
}
function handleState$262(state, event) {
  if ('giving' === state.current) {
    return doTrans$250(state, event);
  } return false;
}
function doTrans$251(state, event) {
  if ('unlock' === event) {
    state.current = 'sponge';
    return true;
  }
  return false;
}
function handleState$263(state, event) {
  if ('serene' === state.current) {
    return doTrans$251(state, event);
  } return false;
}
function doTrans$252(state, event) {
  if ('accrues' === event) {
    state.current = 'negative';
    return true;
  }
  if ('merged' === event) {
    state.current = 'charming';
    return true;
  }
  return false;
}
function handleState$264(state, event) {
  if ('round' === state.current) {
    return doTrans$252(state, event);
  } return false;
}
function doTrans$253(state, event) {
  if ('dislodged' === event) {
    state.current = 'curly';
    return true;
  }
  if ('shaded' === event) {
    state.current = 'metallic';
    return true;
  }
  return false;
}
function handleState$265(state, event) {
  if ('pointless' === state.current) {
    return doTrans$253(state, event);
  } return false;
}
function handleState$266(state, event) {
  if ('tarantula' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$254(state, event) {
  if ('indented' === event) {
    state.current = 'flaky';
    return true;
  }
  if ('overcrowding' === event) {
    state.current = 'past';
    return true;
  }
  return false;
}
function handleState$267(state, event) {
  if ('unselfish' === state.current) {
    return doTrans$254(state, event);
  } return false;
}
function doTrans$255(state, event) {
  if ('transfixed' === event) {
    state.current = 'impassioned';
    return true;
  }
  if ('compounding' === event) {
    state.current = 'overcooked';
    return true;
  }
  return false;
}
function handleState$268(state, event) {
  if ('incomparable' === state.current) {
    return doTrans$255(state, event);
  } return false;
}
function doTrans$256(state, event) {
  if ('we' === event) {
    state.current = 'false';
    return true;
  }
  if ('reworked' === event) {
    state.current = 'slippery';
    return true;
  }
  if ('decoded' === event) {
    state.current = 'mole';
    return true;
  }
  return false;
}
function handleState$269(state, event) {
  if ('high' === state.current) {
    return doTrans$256(state, event);
  } return false;
}
function doTrans$257(state, event) {
  if ('total' === event) {
    state.current = 'troubled';
    return true;
  }
  return false;
}
function handleState$270(state, event) {
  if ('somber' === state.current) {
    return doTrans$257(state, event);
  } return false;
}
function doTrans$258(state, event) {
  if ('alight' === event) {
    state.current = 'hippopotamus';
    return true;
  }
  return false;
}
function handleState$271(state, event) {
  if ('colorless' === state.current) {
    return doTrans$258(state, event);
  } return false;
}
function doTrans$259(state, event) {
  if ('communicate' === event) {
    state.current = 'fat';
    return true;
  }
  if ('fortify' === event) {
    state.current = 'many';
    return true;
  }
  if ('striven' === event) {
    state.current = 'trained';
    return true;
  }
  if ('counterbalanced' === event) {
    state.current = 'tarantula';
    return true;
  }
  return false;
}
function handleState$272(state, event) {
  if ('entire' === state.current) {
    return doTrans$259(state, event);
  } return false;
}
function doTrans$260(state, event) {
  if ('disappoint' === event) {
    state.current = 'virtuous';
    return true;
  }
  return false;
}
function handleState$273(state, event) {
  if ('muddy' === state.current) {
    return doTrans$260(state, event);
  } return false;
}
function doTrans$261(state, event) {
  if ('imaging' === event) {
    state.current = 'wilted';
    return true;
  }
  if ('rivaled' === event) {
    state.current = 'harmless';
    return true;
  }
  return false;
}
function handleState$274(state, event) {
  if ('tidy' === state.current) {
    return doTrans$261(state, event);
  } return false;
}
function doTrans$262(state, event) {
  if ('complementing' === event) {
    state.current = 'different';
    return true;
  }
  if ('prejudice' === event) {
    state.current = 'good_natured';
    return true;
  }
  return false;
}
function handleState$275(state, event) {
  if ('stupendous' === state.current) {
    return doTrans$262(state, event);
  } return false;
}
function doTrans$263(state, event) {
  if ('distinguish' === event) {
    state.current = 'humming';
    return true;
  }
  if ('understated' === event) {
    state.current = 'false';
    return true;
  }
  if ('shunted' === event) {
    state.current = 'forceful';
    return true;
  }
  if ('due' === event) {
    state.current = 'wrathful';
    return true;
  }
  return false;
}
function handleState$276(state, event) {
  if ('far_off' === state.current) {
    return doTrans$263(state, event);
  } return false;
}
function doTrans$264(state, event) {
  if ('transcends' === event) {
    state.current = 'hasty';
    return true;
  }
  if ('smash' === event) {
    state.current = 'truthful';
    return true;
  }
  if ('thicken' === event) {
    state.current = 'glittering';
    return true;
  }
  if ('debugging' === event) {
    state.current = 'assured';
    return true;
  }
  return false;
}
function handleState$277(state, event) {
  if ('burdensome' === state.current) {
    return doTrans$264(state, event);
  } return false;
}
function doTrans$265(state, event) {
  if ('excels' === event) {
    state.current = 'punctual';
    return true;
  }
  if ('licensed' === event) {
    state.current = 'pitiful';
    return true;
  }
  if ('given' === event) {
    state.current = 'upset';
    return true;
  }
  return false;
}
function handleState$278(state, event) {
  if ('jaguar' === state.current) {
    return doTrans$265(state, event);
  } return false;
}
function doTrans$266(state, event) {
  if ('modified' === event) {
    state.current = 'electric';
    return true;
  }
  if ('concurring' === event) {
    state.current = 'flounder';
    return true;
  }
  if ('storytelling' === event) {
    state.current = 'gibbon';
    return true;
  }
  if ('toppled' === event) {
    state.current = 'plaintive';
    return true;
  }
  if ('arouses' === event) {
    state.current = 'wolfhound';
    return true;
  }
  if ('breaks' === event) {
    state.current = 'organic';
    return true;
  }
  return false;
}
function handleState$279(state, event) {
  if ('sharp' === state.current) {
    return doTrans$266(state, event);
  } return false;
}
function doTrans$267(state, event) {
  if ('averred' === event) {
    state.current = 'busy';
    return true;
  }
  if ('imprinting' === event) {
    state.current = 'hedgehog';
    return true;
  }
  if ('etc' === event) {
    state.current = 'rigid';
    return true;
  }
  if ('utters' === event) {
    state.current = 'false';
    return true;
  }
  if ('learnt' === event) {
    state.current = 'sore';
    return true;
  }
  return false;
}
function handleState$280(state, event) {
  if ('utter' === state.current) {
    return doTrans$267(state, event);
  } return false;
}
function doTrans$268(state, event) {
  if ('damping' === event) {
    state.current = 'electric';
    return true;
  }
  return false;
}
function handleState$281(state, event) {
  if ('feisty' === state.current) {
    return doTrans$268(state, event);
  } return false;
}
function doTrans$269(state, event) {
  if ('sift' === event) {
    state.current = 'instructive';
    return true;
  }
  if ('honoured' === event) {
    state.current = 'turkey';
    return true;
  }
  if ('fought' === event) {
    state.current = 'helpful';
    return true;
  }
  return false;
}
function handleState$282(state, event) {
  if ('virtuous' === state.current) {
    return doTrans$269(state, event);
  } return false;
}
function doTrans$270(state, event) {
  if ('remarks' === event) {
    state.current = 'icy';
    return true;
  }
  if ('waited' === event) {
    state.current = 'tight';
    return true;
  }
  if ('excepted' === event) {
    state.current = 'clear';
    return true;
  }
  if ('counteract' === event) {
    state.current = 'liquid';
    return true;
  }
  return false;
}
function handleState$283(state, event) {
  if ('costly' === state.current) {
    return doTrans$270(state, event);
  } return false;
}
function doTrans$271(state, event) {
  if ('iron' === event) {
    state.current = 'bubbly';
    return true;
  }
  if ('devise' === event) {
    state.current = 'flamingo';
    return true;
  }
  return false;
}
function handleState$284(state, event) {
  if ('organic' === state.current) {
    return doTrans$271(state, event);
  } return false;
}
function doTrans$272(state, event) {
  if ('seating' === event) {
    state.current = 'relieved';
    return true;
  }
  if ('palpated' === event) {
    state.current = 'sneaky';
    return true;
  }
  return false;
}
function handleState$285(state, event) {
  if ('vigorous' === state.current) {
    return doTrans$272(state, event);
  } return false;
}
function doTrans$273(state, event) {
  if ('allege' === event) {
    state.current = 'detailed';
    return true;
  }
  if ('attributes' === event) {
    state.current = 'bubbly';
    return true;
  }
  return false;
}
function handleState$286(state, event) {
  if ('rusty' === state.current) {
    return doTrans$273(state, event);
  } return false;
}
function doTrans$274(state, event) {
  if ('thwarted' === event) {
    state.current = 'pure';
    return true;
  }
  return false;
}
function handleState$287(state, event) {
  if ('buzzing' === state.current) {
    return doTrans$274(state, event);
  } return false;
}
function doTrans$275(state, event) {
  if ('relocating' === event) {
    state.current = 'buffalo';
    return true;
  }
  if ('pleased' === event) {
    state.current = 'tasteless';
    return true;
  }
  if ('reconstruct' === event) {
    state.current = 'beautiful';
    return true;
  }
  if ('murdered' === event) {
    state.current = 'naughty';
    return true;
  }
  return false;
}
function handleState$288(state, event) {
  if ('hungry' === state.current) {
    return doTrans$275(state, event);
  } return false;
}
function doTrans$276(state, event) {
  if ('smash' === event) {
    state.current = 'pro_active';
    return true;
  }
  return false;
}
function handleState$289(state, event) {
  if ('wealthy' === state.current) {
    return doTrans$276(state, event);
  } return false;
}
function doTrans$277(state, event) {
  if ('attracting' === event) {
    state.current = 'cloudy';
    return true;
  }
  if ('dispose' === event) {
    state.current = 'upright';
    return true;
  }
  return false;
}
function handleState$290(state, event) {
  if ('naughty' === state.current) {
    return doTrans$277(state, event);
  } return false;
}
function doTrans$278(state, event) {
  if ('block' === event) {
    state.current = 'lemming';
    return true;
  }
  if ('carry' === event) {
    state.current = 'ibis';
    return true;
  }
  return false;
}
function handleState$291(state, event) {
  if ('oblong' === state.current) {
    return doTrans$278(state, event);
  } return false;
}
function doTrans$279(state, event) {
  if ('contributing' === event) {
    state.current = 'patient';
    return true;
  }
  if ('setting' === event) {
    state.current = 'flounder';
    return true;
  }
  if ('spy' === event) {
    state.current = 'piercing';
    return true;
  }
  if ('registering' === event) {
    state.current = 'tight';
    return true;
  }
  if ('blurring' === event) {
    state.current = 'pitiful';
    return true;
  }
  if ('deduced' === event) {
    state.current = 'simplistic';
    return true;
  }
  return false;
}
function handleState$292(state, event) {
  if ('affable' === state.current) {
    return doTrans$279(state, event);
  } return false;
}
function doTrans$280(state, event) {
  if ('plied' === event) {
    state.current = 'tarantula';
    return true;
  }
  if ('pan' === event) {
    state.current = 'subdued';
    return true;
  }
  return false;
}
function handleState$293(state, event) {
  if ('which' === state.current) {
    return doTrans$280(state, event);
  } return false;
}
function handleState$294(state, event) {
  if ('dingo' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$281(state, event) {
  if ('adjusting' === event) {
    state.current = 'impolite';
    return true;
  }
  if ('gonna' === event) {
    state.current = 'grouse';
    return true;
  }
  if ('entitled' === event) {
    state.current = 'wobbly';
    return true;
  }
  return false;
}
function handleState$295(state, event) {
  if ('helpless' === state.current) {
    return doTrans$281(state, event);
  } return false;
}
function doTrans$282(state, event) {
  if ('looked' === event) {
    state.current = 'pungent';
    return true;
  }
  if ('loaned' === event) {
    state.current = 'jaded';
    return true;
  }
  if ('obstruct' === event) {
    state.current = 'lovable';
    return true;
  }
  return false;
}
function handleState$296(state, event) {
  if ('annoyed' === state.current) {
    return doTrans$282(state, event);
  } return false;
}
function doTrans$283(state, event) {
  if ('eaten' === event) {
    state.current = 'trusting';
    return true;
  }
  if ('dialing' === event) {
    state.current = 'false';
    return true;
  }
  if ('staking' === event) {
    state.current = 'enormous';
    return true;
  }
  if ('reasons' === event) {
    state.current = 'snail';
    return true;
  }
  if ('moses' === event) {
    state.current = 'sluggish';
    return true;
  }
  if ('squared' === event) {
    state.current = 'dynamic';
    return true;
  }
  return false;
}
function handleState$297(state, event) {
  if ('guilty' === state.current) {
    return doTrans$283(state, event);
  } return false;
}
function doTrans$284(state, event) {
  if ('urges' === event) {
    state.current = 'splendid';
    return true;
  }
  if ('existed' === event) {
    state.current = 'slippery';
    return true;
  }
  if ('hybridized' === event) {
    state.current = 'incompatible';
    return true;
  }
  if ('participates' === event) {
    state.current = 'profound';
    return true;
  }
  if ('scolding' === event) {
    state.current = 'unsung';
    return true;
  }
  return false;
}
function handleState$298(state, event) {
  if ('pure' === state.current) {
    return doTrans$284(state, event);
  } return false;
}
function doTrans$285(state, event) {
  if ('erred' === event) {
    state.current = 'hedgehog';
    return true;
  }
  if ('surmount' === event) {
    state.current = 'improbable';
    return true;
  }
  if ('sealing' === event) {
    state.current = 'gregarious';
    return true;
  }
  if ('comforted' === event) {
    state.current = 'menacing';
    return true;
  }
  if ('altered' === event) {
    state.current = 'wrong';
    return true;
  }
  return false;
}
function handleState$299(state, event) {
  if ('speedy' === state.current) {
    return doTrans$285(state, event);
  } return false;
}
function doTrans$286(state, event) {
  if ('prop' === event) {
    state.current = 'mule';
    return true;
  }
  if ('chilling' === event) {
    state.current = 'stunning';
    return true;
  }
  if ('figuring' === event) {
    state.current = 'daring';
    return true;
  }
  return false;
}
function handleState$300(state, event) {
  if ('oddball' === state.current) {
    return doTrans$286(state, event);
  } return false;
}
function doTrans$287(state, event) {
  if ('commends' === event) {
    state.current = 'daring';
    return true;
  }
  return false;
}
function handleState$301(state, event) {
  if ('icy' === state.current) {
    return doTrans$287(state, event);
  } return false;
}
function doTrans$288(state, event) {
  if ('xvi' === event) {
    state.current = 'menacing';
    return true;
  }
  if ('sapped' === event) {
    state.current = 'pink';
    return true;
  }
  if ('murmur' === event) {
    state.current = 'wide_eyed';
    return true;
  }
  if ('crucified' === event) {
    state.current = 'big_hearted';
    return true;
  }
  if ('balancing' === event) {
    state.current = 'violet';
    return true;
  }
  if ('polarizing' === event) {
    state.current = 'grouchy';
    return true;
  }
  return false;
}
function handleState$302(state, event) {
  if ('bubbly' === state.current) {
    return doTrans$288(state, event);
  } return false;
}
function doTrans$289(state, event) {
  if ('terms' === event) {
    state.current = 'squirrel';
    return true;
  }
  return false;
}
function handleState$303(state, event) {
  if ('direct' === state.current) {
    return doTrans$289(state, event);
  } return false;
}
function doTrans$290(state, event) {
  if ('rot' === event) {
    state.current = 'helpless';
    return true;
  }
  return false;
}
function handleState$304(state, event) {
  if ('big_hearted' === state.current) {
    return doTrans$290(state, event);
  } return false;
}
function doTrans$291(state, event) {
  if ('surprised' === event) {
    state.current = 'unwelcome';
    return true;
  }
  if ('dove' === event) {
    state.current = 'dazzling';
    return true;
  }
  return false;
}
function handleState$305(state, event) {
  if ('insistent' === state.current) {
    return doTrans$291(state, event);
  } return false;
}
function doTrans$292(state, event) {
  if ('depress' === event) {
    state.current = 'ghastly';
    return true;
  }
  if ('streaming' === event) {
    state.current = 'empty';
    return true;
  }
  if ('born' === event) {
    state.current = 'attached';
    return true;
  }
  return false;
}
function handleState$306(state, event) {
  if ('quiet' === state.current) {
    return doTrans$292(state, event);
  } return false;
}
function doTrans$293(state, event) {
  if ('sanding' === event) {
    state.current = 'trivial';
    return true;
  }
  if ('sc' === event) {
    state.current = 'fearless';
    return true;
  }
  return false;
}
function handleState$307(state, event) {
  if ('peaceful' === state.current) {
    return doTrans$293(state, event);
  } return false;
}
function doTrans$294(state, event) {
  if ('dominating' === event) {
    state.current = 'curly';
    return true;
  }
  if ('scheming' === event) {
    state.current = 'lonely';
    return true;
  }
  return false;
}
function handleState$308(state, event) {
  if ('vague' === state.current) {
    return doTrans$294(state, event);
  } return false;
}
function doTrans$295(state, event) {
  if ('motivate' === event) {
    state.current = 'delinquent';
    return true;
  }
  if ('circa' === event) {
    state.current = 'turkey';
    return true;
  }
  return false;
}
function handleState$309(state, event) {
  if ('wolfhound' === state.current) {
    return doTrans$295(state, event);
  } return false;
}
function doTrans$296(state, event) {
  if ('card' === event) {
    state.current = 'square';
    return true;
  }
  if ('realising' === event) {
    state.current = 'exotic';
    return true;
  }
  if ('transported' === event) {
    state.current = 'mandrill';
    return true;
  }
  return false;
}
function handleState$310(state, event) {
  if ('reasonable' === state.current) {
    return doTrans$296(state, event);
  } return false;
}
function doTrans$297(state, event) {
  if ('exhausted' === event) {
    state.current = 'liquid';
    return true;
  }
  return false;
}
function handleState$311(state, event) {
  if ('weighty' === state.current) {
    return doTrans$297(state, event);
  } return false;
}
function doTrans$298(state, event) {
  if ('yields' === event) {
    state.current = 'annoyed';
    return true;
  }
  if ('escaped' === event) {
    state.current = 'mammoth';
    return true;
  }
  if ('irritate' === event) {
    state.current = 'scorching';
    return true;
  }
  return false;
}
function handleState$312(state, event) {
  if ('popular' === state.current) {
    return doTrans$298(state, event);
  } return false;
}
function doTrans$299(state, event) {
  if ('vomit' === event) {
    state.current = 'scorching';
    return true;
  }
  if ('pack' === event) {
    state.current = 'hummingbird';
    return true;
  }
  if ('po' === event) {
    state.current = 'feisty';
    return true;
  }
  return false;
}
function handleState$313(state, event) {
  if ('tangible' === state.current) {
    return doTrans$299(state, event);
  } return false;
}
function handleState$314(state, event) {
  if ('gummy' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$300(state, event) {
  if ('burnt' === event) {
    state.current = 'stunning';
    return true;
  }
  if ('misused' === event) {
    state.current = 'healthy';
    return true;
  }
  if ('reel' === event) {
    state.current = 'dreary';
    return true;
  }
  if ('boil' === event) {
    state.current = 'long';
    return true;
  }
  return false;
}
function handleState$315(state, event) {
  if ('yummy' === state.current) {
    return doTrans$300(state, event);
  } return false;
}
function doTrans$301(state, event) {
  if ('iv' === event) {
    state.current = 'excellent';
    return true;
  }
  if ('revolutionize' === event) {
    state.current = 'chimpanzee';
    return true;
  }
  return false;
}
function handleState$316(state, event) {
  if ('quaint' === state.current) {
    return doTrans$301(state, event);
  } return false;
}
function doTrans$302(state, event) {
  if ('limping' === event) {
    state.current = 'fickle';
    return true;
  }
  if ('internalized' === event) {
    state.current = 'pink';
    return true;
  }
  if ('gaining' === event) {
    state.current = 'genuine';
    return true;
  }
  return false;
}
function handleState$317(state, event) {
  if ('second' === state.current) {
    return doTrans$302(state, event);
  } return false;
}
function doTrans$303(state, event) {
  if ('minced' === event) {
    state.current = 'harmless';
    return true;
  }
  if ('disallow' === event) {
    state.current = 'grizzled';
    return true;
  }
  return false;
}
function handleState$318(state, event) {
  if ('elliptical' === state.current) {
    return doTrans$303(state, event);
  } return false;
}
function doTrans$304(state, event) {
  if ('longs' === event) {
    state.current = 'hospitable';
    return true;
  }
  if ('compiling' === event) {
    state.current = 'big_hearted';
    return true;
  }
  return false;
}
function handleState$319(state, event) {
  if ('lobster' === state.current) {
    return doTrans$304(state, event);
  } return false;
}
function doTrans$305(state, event) {
  if ('coerced' === event) {
    state.current = 'camel';
    return true;
  }
  if ('enclose' === event) {
    state.current = 'tidy';
    return true;
  }
  return false;
}
function handleState$320(state, event) {
  if ('turbulent' === state.current) {
    return doTrans$305(state, event);
  } return false;
}
function doTrans$306(state, event) {
  if ('supervise' === event) {
    state.current = 'curly';
    return true;
  }
  if ('recited' === event) {
    state.current = 'ibis';
    return true;
  }
  if ('entailed' === event) {
    state.current = 'costly';
    return true;
  }
  if ('colour' === event) {
    state.current = 'false';
    return true;
  }
  if ('interchanged' === event) {
    state.current = 'soaring';
    return true;
  }
  return false;
}
function handleState$321(state, event) {
  if ('falcon' === state.current) {
    return doTrans$306(state, event);
  } return false;
}
function doTrans$307(state, event) {
  if ('begotten' === event) {
    state.current = 'patient';
    return true;
  }
  if ('returning' === event) {
    state.current = 'punctual';
    return true;
  }
  if ('analysed' === event) {
    state.current = 'wombat';
    return true;
  }
  if ('screamed' === event) {
    state.current = 'rancid';
    return true;
  }
  return false;
}
function handleState$322(state, event) {
  if ('trusting' === state.current) {
    return doTrans$307(state, event);
  } return false;
}
function doTrans$308(state, event) {
  if ('dozed' === event) {
    state.current = 'heartfelt';
    return true;
  }
  if ('dialing' === event) {
    state.current = 'ironclad';
    return true;
  }
  return false;
}
function handleState$323(state, event) {
  if ('content' === state.current) {
    return doTrans$308(state, event);
  } return false;
}
function doTrans$309(state, event) {
  if ('comin' === event) {
    state.current = 'agreeable';
    return true;
  }
  if ('voting' === event) {
    state.current = 'unsung';
    return true;
  }
  return false;
}
function handleState$324(state, event) {
  if ('chilly' === state.current) {
    return doTrans$309(state, event);
  } return false;
}
function doTrans$310(state, event) {
  if ('creaked' === event) {
    state.current = 'winding';
    return true;
  }
  if ('practising' === event) {
    state.current = 'basic';
    return true;
  }
  if ('debugging' === event) {
    state.current = 'feminine';
    return true;
  }
  return false;
}
function handleState$325(state, event) {
  if ('acidic' === state.current) {
    return doTrans$310(state, event);
  } return false;
}
function doTrans$311(state, event) {
  if ('ensues' === event) {
    state.current = 'fragrant';
    return true;
  }
  return false;
}
function handleState$326(state, event) {
  if ('simplistic' === state.current) {
    return doTrans$311(state, event);
  } return false;
}
function doTrans$312(state, event) {
  if ('expand' === event) {
    state.current = 'albatross';
    return true;
  }
  if ('avoiding' === event) {
    state.current = 'worthy';
    return true;
  }
  return false;
}
function handleState$327(state, event) {
  if ('leafy' === state.current) {
    return doTrans$312(state, event);
  } return false;
}
function doTrans$313(state, event) {
  if ('gambled' === event) {
    state.current = 'conscious';
    return true;
  }
  if ('sci' === event) {
    state.current = 'complex';
    return true;
  }
  if ('visited' === event) {
    state.current = 'bat';
    return true;
  }
  if ('dwells' === event) {
    state.current = 'granular';
    return true;
  }
  if ('delimited' === event) {
    state.current = 'speedy';
    return true;
  }
  return false;
}
function handleState$328(state, event) {
  if ('splendid' === state.current) {
    return doTrans$313(state, event);
  } return false;
}
function doTrans$314(state, event) {
  if ('interferes' === event) {
    state.current = 'selfish';
    return true;
  }
  if ('censured' === event) {
    state.current = 'misguided';
    return true;
  }
  return false;
}
function handleState$329(state, event) {
  if ('unsightly' === state.current) {
    return doTrans$314(state, event);
  } return false;
}
function handleState$330(state, event) {
  if ('humming' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$315(state, event) {
  if ('cooled' === event) {
    state.current = 'oddball';
    return true;
  }
  if ('buzzing' === event) {
    state.current = 'direct';
    return true;
  }
  return false;
}
function handleState$331(state, event) {
  if ('proper' === state.current) {
    return doTrans$315(state, event);
  } return false;
}
function doTrans$316(state, event) {
  if ('certified' === event) {
    state.current = 'hard_working';
    return true;
  }
  return false;
}
function handleState$332(state, event) {
  if ('untidy' === state.current) {
    return doTrans$316(state, event);
  } return false;
}
function doTrans$317(state, event) {
  if ('ses' === event) {
    state.current = 'harmonious';
    return true;
  }
  if ('won' === event) {
    state.current = 'grand';
    return true;
  }
  if ('reduce' === event) {
    state.current = 'hippopotamus';
    return true;
  }
  return false;
}
function handleState$333(state, event) {
  if ('trusty' === state.current) {
    return doTrans$317(state, event);
  } return false;
}
function doTrans$318(state, event) {
  if ('imagining' === event) {
    state.current = 'dangerous';
    return true;
  }
  if ('sealed' === event) {
    state.current = 'numb';
    return true;
  }
  return false;
}
function handleState$334(state, event) {
  if ('truthful' === state.current) {
    return doTrans$318(state, event);
  } return false;
}
function doTrans$319(state, event) {
  if ('supports' === event) {
    state.current = 'sardonic';
    return true;
  }
  if ('curving' === event) {
    state.current = 'key';
    return true;
  }
  if ('reuse' === event) {
    state.current = 'this';
    return true;
  }
  return false;
}
function handleState$335(state, event) {
  if ('rowdy' === state.current) {
    return doTrans$319(state, event);
  } return false;
}
function doTrans$320(state, event) {
  if ('outlive' === event) {
    state.current = 'negative';
    return true;
  }
  return false;
}
function handleState$336(state, event) {
  if ('exotic' === state.current) {
    return doTrans$320(state, event);
  } return false;
}
function doTrans$321(state, event) {
  if ('engineer' === event) {
    state.current = 'curly';
    return true;
  }
  if ('punished' === event) {
    state.current = 'squeaky';
    return true;
  }
  return false;
}
function handleState$337(state, event) {
  if ('hummingbird' === state.current) {
    return doTrans$321(state, event);
  } return false;
}
function doTrans$322(state, event) {
  if ('testing' === event) {
    state.current = 'kindly';
    return true;
  }
  if ('doped' === event) {
    state.current = 'untried';
    return true;
  }
  if ('accounting' === event) {
    state.current = 'right';
    return true;
  }
  if ('ripped' === event) {
    state.current = 'fetid';
    return true;
  }
  if ('foreground' === event) {
    state.current = 'harmless';
    return true;
  }
  return false;
}
function handleState$338(state, event) {
  if ('stunning' === state.current) {
    return doTrans$322(state, event);
  } return false;
}
function doTrans$323(state, event) {
  if ('knock' === event) {
    state.current = 'ill_fated';
    return true;
  }
  if ('subdivide' === event) {
    state.current = 'far_off';
    return true;
  }
  return false;
}
function handleState$339(state, event) {
  if ('impassioned' === state.current) {
    return doTrans$323(state, event);
  } return false;
}
function doTrans$324(state, event) {
  if ('plowed' === event) {
    state.current = 'menacing';
    return true;
  }
  return false;
}
function handleState$340(state, event) {
  if ('gregarious' === state.current) {
    return doTrans$324(state, event);
  } return false;
}
function doTrans$325(state, event) {
  if ('inaugurate' === event) {
    state.current = 'wilted';
    return true;
  }
  if ('practiced' === event) {
    state.current = 'hard_working';
    return true;
  }
  if ('server' === event) {
    state.current = 'fantastic';
    return true;
  }
  if ('validate' === event) {
    state.current = 'pastel';
    return true;
  }
  return false;
}
function handleState$341(state, event) {
  if ('cute' === state.current) {
    return doTrans$325(state, event);
  } return false;
}
function doTrans$326(state, event) {
  if ('sufficed' === event) {
    state.current = 'gigantic';
    return true;
  }
  if ('confess' === event) {
    state.current = 'well_lit';
    return true;
  }
  if ('scare' === event) {
    state.current = 'false';
    return true;
  }
  return false;
}
function handleState$342(state, event) {
  if ('dull' === state.current) {
    return doTrans$326(state, event);
  } return false;
}
function doTrans$327(state, event) {
  if ('subtract' === event) {
    state.current = 'thrifty';
    return true;
  }
  if ('sutured' === event) {
    state.current = 'granular';
    return true;
  }
  if ('publicize' === event) {
    state.current = 'snappy';
    return true;
  }
  if ('irrigated' === event) {
    state.current = 'amicable';
    return true;
  }
  return false;
}
function handleState$343(state, event) {
  if ('rancid' === state.current) {
    return doTrans$327(state, event);
  } return false;
}
function doTrans$328(state, event) {
  if ('consummated' === event) {
    state.current = 'long_term';
    return true;
  }
  if ('tugged' === event) {
    state.current = 'overcooked';
    return true;
  }
  if ('overshadowed' === event) {
    state.current = 'soaring';
    return true;
  }
  if ('sew' === event) {
    state.current = 'incomparable';
    return true;
  }
  return false;
}
function handleState$344(state, event) {
  if ('punctual' === state.current) {
    return doTrans$328(state, event);
  } return false;
}
function doTrans$329(state, event) {
  if ('fear' === event) {
    state.current = 'icy';
    return true;
  }
  return false;
}
function handleState$345(state, event) {
  if ('usable' === state.current) {
    return doTrans$329(state, event);
  } return false;
}
function doTrans$330(state, event) {
  if ('improvised' === event) {
    state.current = 'sunny';
    return true;
  }
  if ('finalized' === event) {
    state.current = 'ironclad';
    return true;
  }
  if ('saturated' === event) {
    state.current = 'loving';
    return true;
  }
  return false;
}
function handleState$346(state, event) {
  if ('troubled' === state.current) {
    return doTrans$330(state, event);
  } return false;
}
function doTrans$331(state, event) {
  if ('bereaved' === event) {
    state.current = 'punctual';
    return true;
  }
  return false;
}
function handleState$347(state, event) {
  if ('chimpanzee' === state.current) {
    return doTrans$331(state, event);
  } return false;
}
function doTrans$332(state, event) {
  if ('disposes' === event) {
    state.current = 'gregarious';
    return true;
  }
  return false;
}
function handleState$348(state, event) {
  if ('incompatible' === state.current) {
    return doTrans$332(state, event);
  } return false;
}
function doTrans$333(state, event) {
  if ('tickling' === event) {
    state.current = 'kaleidoscopic';
    return true;
  }
  return false;
}
function handleState$349(state, event) {
  if ('understated' === state.current) {
    return doTrans$333(state, event);
  } return false;
}
function doTrans$334(state, event) {
  if ('dug' === event) {
    state.current = 'weighty';
    return true;
  }
  if ('envelop' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('owing' === event) {
    state.current = 'healthy';
    return true;
  }
  return false;
}
function handleState$350(state, event) {
  if ('howler_monkey' === state.current) {
    return doTrans$334(state, event);
  } return false;
}
function doTrans$335(state, event) {
  if ('commemorated' === event) {
    state.current = 'proper';
    return true;
  }
  if ('reelected' === event) {
    state.current = 'real';
    return true;
  }
  return false;
}
function handleState$351(state, event) {
  if ('greedy' === state.current) {
    return doTrans$335(state, event);
  } return false;
}
function doTrans$336(state, event) {
  if ('formulates' === event) {
    state.current = 'wry';
    return true;
  }
  if ('waved' === event) {
    state.current = 'curvy';
    return true;
  }
  if ('pervades' === event) {
    state.current = 'ornery';
    return true;
  }
  if ('reconstitute' === event) {
    state.current = 'kindly';
    return true;
  }
  return false;
}
function handleState$352(state, event) {
  if ('dazzling' === state.current) {
    return doTrans$336(state, event);
  } return false;
}
function handleState$353(state, event) {
  if ('long' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$337(state, event) {
  if ('chartered' === event) {
    state.current = 'thrifty';
    return true;
  }
  if ('looks' === event) {
    state.current = 'curly';
    return true;
  }
  if ('reassure' === event) {
    state.current = 'stupendous';
    return true;
  }
  if ('differ' === event) {
    state.current = 'pesky';
    return true;
  }
  return false;
}
function handleState$354(state, event) {
  if ('flawless' === state.current) {
    return doTrans$337(state, event);
  } return false;
}
function doTrans$338(state, event) {
  if ('incarcerated' === event) {
    state.current = 'this';
    return true;
  }
  if ('equating' === event) {
    state.current = 'towering';
    return true;
  }
  if ('leveled' === event) {
    state.current = 'hasty';
    return true;
  }
  if ('localize' === event) {
    state.current = 'attached';
    return true;
  }
  return false;
}
function handleState$355(state, event) {
  if ('polite' === state.current) {
    return doTrans$338(state, event);
  } return false;
}
function doTrans$339(state, event) {
  if ('bled' === event) {
    state.current = 'beagle';
    return true;
  }
  if ('arose' === event) {
    state.current = 'testy';
    return true;
  }
  return false;
}
function handleState$356(state, event) {
  if ('laconic' === state.current) {
    return doTrans$339(state, event);
  } return false;
}
function doTrans$340(state, event) {
  if ('reconcile' === event) {
    state.current = 'female';
    return true;
  }
  if ('updating' === event) {
    state.current = 'incompatible';
    return true;
  }
  if ('equilibrium' === event) {
    state.current = 'quizzical';
    return true;
  }
  if ('renovated' === event) {
    state.current = 'leafy';
    return true;
  }
  if ('boycotted' === event) {
    state.current = 'constant';
    return true;
  }
  return false;
}
function handleState$357(state, event) {
  if ('wobbly' === state.current) {
    return doTrans$340(state, event);
  } return false;
}
function doTrans$341(state, event) {
  if ('flitting' === event) {
    state.current = 'lobster';
    return true;
  }
  if ('evoke' === event) {
    state.current = 'snake';
    return true;
  }
  if ('praying' === event) {
    state.current = 'big_hearted';
    return true;
  }
  if ('enticed' === event) {
    state.current = 'flashy';
    return true;
  }
  if ('shocking' === event) {
    state.current = 'amusing';
    return true;
  }
  return false;
}
function handleState$358(state, event) {
  if ('lonely' === state.current) {
    return doTrans$341(state, event);
  } return false;
}
function doTrans$342(state, event) {
  if ('bounding' === event) {
    state.current = 'curvy';
    return true;
  }
  if ('secreted' === event) {
    state.current = 'grouchy';
    return true;
  }
  return false;
}
function handleState$359(state, event) {
  if ('testy' === state.current) {
    return doTrans$342(state, event);
  } return false;
}
function doTrans$343(state, event) {
  if ('disseminate' === event) {
    state.current = 'different';
    return true;
  }
  if ('collaborate' === event) {
    state.current = 'staid';
    return true;
  }
  return false;
}
function handleState$360(state, event) {
  if ('recent' === state.current) {
    return doTrans$343(state, event);
  } return false;
}
function doTrans$344(state, event) {
  if ('catching' === event) {
    state.current = 'thorny';
    return true;
  }
  if ('impinging' === event) {
    state.current = 'vague';
    return true;
  }
  if ('bestowing' === event) {
    state.current = 'snail';
    return true;
  }
  return false;
}
function handleState$361(state, event) {
  if ('numerous' === state.current) {
    return doTrans$344(state, event);
  } return false;
}
function doTrans$345(state, event) {
  if ('accommodated' === event) {
    state.current = 'nimble';
    return true;
  }
  if ('disturb' === event) {
    state.current = 'affable';
    return true;
  }
  if ('repay' === event) {
    state.current = 'ignorant';
    return true;
  }
  if ('warring' === event) {
    state.current = 'unlawful';
    return true;
  }
  if ('enclosing' === event) {
    state.current = 'fetid';
    return true;
  }
  return false;
}
function handleState$362(state, event) {
  if ('pastel' === state.current) {
    return doTrans$345(state, event);
  } return false;
}
function doTrans$346(state, event) {
  if ('composing' === event) {
    state.current = 'turtle';
    return true;
  }
  return false;
}
function handleState$363(state, event) {
  if ('easy' === state.current) {
    return doTrans$346(state, event);
  } return false;
}
function doTrans$347(state, event) {
  if ('post' === event) {
    state.current = 'goose';
    return true;
  }
  return false;
}
function handleState$364(state, event) {
  if ('wombat' === state.current) {
    return doTrans$347(state, event);
  } return false;
}
function handleState$365(state, event) {
  if ('flaky' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$348(state, event) {
  if ('professed' === event) {
    state.current = 'winding';
    return true;
  }
  if ('reign' === event) {
    state.current = 'grieving';
    return true;
  }
  return false;
}
function handleState$366(state, event) {
  if ('trained' === state.current) {
    return doTrans$348(state, event);
  } return false;
}
function doTrans$349(state, event) {
  if ('breathing' === event) {
    state.current = 'long_term';
    return true;
  }
  return false;
}
function handleState$367(state, event) {
  if ('worthy' === state.current) {
    return doTrans$349(state, event);
  } return false;
}
function doTrans$350(state, event) {
  if ('fucking' === event) {
    state.current = 'horrid';
    return true;
  }
  return false;
}
function handleState$368(state, event) {
  if ('thick' === state.current) {
    return doTrans$350(state, event);
  } return false;
}
function doTrans$351(state, event) {
  if ('outperform' === event) {
    state.current = 'cuttlefish';
    return true;
  }
  if ('shower' === event) {
    state.current = 'worthy';
    return true;
  }
  if ('upsetting' === event) {
    state.current = 'smiling';
    return true;
  }
  if ('mate' === event) {
    state.current = 'juicy';
    return true;
  }
  return false;
}
function handleState$369(state, event) {
  if ('beautiful' === state.current) {
    return doTrans$351(state, event);
  } return false;
}
function doTrans$352(state, event) {
  if ('inverted' === event) {
    state.current = 'gibbon';
    return true;
  }
  if ('quiet' === event) {
    state.current = 'exotic';
    return true;
  }
  if ('snapped' === event) {
    state.current = 'forceful';
    return true;
  }
  if ('cerevisiae' === event) {
    state.current = 'dead';
    return true;
  }
  if ('legitimated' === event) {
    state.current = 'thrifty';
    return true;
  }
  if ('stomach' === event) {
    state.current = 'mundane';
    return true;
  }
  if ('dying' === event) {
    state.current = 'albatross';
    return true;
  }
  return false;
}
function handleState$370(state, event) {
  if ('easygoing' === state.current) {
    return doTrans$352(state, event);
  } return false;
}
function doTrans$353(state, event) {
  if ('allowed' === event) {
    state.current = 'profound';
    return true;
  }
  if ('feast' === event) {
    state.current = 'tall';
    return true;
  }
  if ('buckle' === event) {
    state.current = 'weighty';
    return true;
  }
  return false;
}
function handleState$371(state, event) {
  if ('otter' === state.current) {
    return doTrans$353(state, event);
  } return false;
}
function doTrans$354(state, event) {
  if ('defends' === event) {
    state.current = 'chinchilla';
    return true;
  }
  if ('peek' === event) {
    state.current = 'burdensome';
    return true;
  }
  return false;
}
function handleState$372(state, event) {
  if ('electric' === state.current) {
    return doTrans$354(state, event);
  } return false;
}
function doTrans$355(state, event) {
  if ('obeys' === event) {
    state.current = 'closed';
    return true;
  }
  if ('shutting' === event) {
    state.current = 'wry';
    return true;
  }
  if ('deferring' === event) {
    state.current = 'repentant';
    return true;
  }
  return false;
}
function handleState$373(state, event) {
  if ('hopeful' === state.current) {
    return doTrans$355(state, event);
  } return false;
}
function doTrans$356(state, event) {
  if ('father' === event) {
    state.current = 'upbeat';
    return true;
  }
  if ('licked' === event) {
    state.current = 'shrill';
    return true;
  }
  if ('last' === event) {
    state.current = 'long';
    return true;
  }
  if ('manifesting' === event) {
    state.current = 'ironclad';
    return true;
  }
  return false;
}
function handleState$374(state, event) {
  if ('flounder' === state.current) {
    return doTrans$356(state, event);
  } return false;
}
function doTrans$357(state, event) {
  if ('originated' === event) {
    state.current = 'worthy';
    return true;
  }
  return false;
}
function handleState$375(state, event) {
  if ('comfortable' === state.current) {
    return doTrans$357(state, event);
  } return false;
}
function doTrans$358(state, event) {
  if ('stumble' === event) {
    state.current = 'pastel';
    return true;
  }
  if ('glistening' === event) {
    state.current = 'quiet';
    return true;
  }
  if ('predicted' === event) {
    state.current = 'grizzled';
    return true;
  }
  if ('refuses' === event) {
    state.current = 'flounder';
    return true;
  }
  if ('lacked' === event) {
    state.current = 'identical';
    return true;
  }
  if ('theorize' === event) {
    state.current = 'grand';
    return true;
  }
  return false;
}
function handleState$376(state, event) {
  if ('repentant' === state.current) {
    return doTrans$358(state, event);
  } return false;
}
function handleState$377(state, event) {
  if ('grouchy' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$359(state, event) {
  if ('entails' === event) {
    state.current = 'loyal';
    return true;
  }
  return false;
}
function handleState$378(state, event) {
  if ('fickle' === state.current) {
    return doTrans$359(state, event);
  } return false;
}
function handleState$379(state, event) {
  if ('camel' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$360(state, event) {
  if ('taken' === event) {
    state.current = 'smiling';
    return true;
  }
  if ('chapter' === event) {
    state.current = 'harmless';
    return true;
  }
  if ('mentioned' === event) {
    state.current = 'upset';
    return true;
  }
  if ('clad' === event) {
    state.current = 'flawless';
    return true;
  }
  if ('hinders' === event) {
    state.current = 'ill_informed';
    return true;
  }
  if ('mimics' === event) {
    state.current = 'constant';
    return true;
  }
  return false;
}
function handleState$380(state, event) {
  if ('warped' === state.current) {
    return doTrans$360(state, event);
  } return false;
}
function doTrans$361(state, event) {
  if ('braided' === event) {
    state.current = 'amicable';
    return true;
  }
  if ('sizes' === event) {
    state.current = 'wrong';
    return true;
  }
  return false;
}
function handleState$381(state, event) {
  if ('enormous' === state.current) {
    return doTrans$361(state, event);
  } return false;
}
function doTrans$362(state, event) {
  if ('stood' === event) {
    state.current = 'flounder';
    return true;
  }
  if ('staffing' === event) {
    state.current = 'crooked';
    return true;
  }
  return false;
}
function handleState$382(state, event) {
  if ('cylindrical' === state.current) {
    return doTrans$362(state, event);
  } return false;
}
function doTrans$363(state, event) {
  if ('reg' === event) {
    state.current = 'beaver';
    return true;
  }
  return false;
}
function handleState$383(state, event) {
  if ('fruitful' === state.current) {
    return doTrans$363(state, event);
  } return false;
}
function doTrans$364(state, event) {
  if ('settled' === event) {
    state.current = 'incomparable';
    return true;
  }
  return false;
}
function handleState$384(state, event) {
  if ('rough' === state.current) {
    return doTrans$364(state, event);
  } return false;
}
function doTrans$365(state, event) {
  if ('perched' === event) {
    state.current = 'fearless';
    return true;
  }
  return false;
}
function handleState$385(state, event) {
  if ('smiling' === state.current) {
    return doTrans$365(state, event);
  } return false;
}
function doTrans$366(state, event) {
  if ('harnessing' === event) {
    state.current = 'amusing';
    return true;
  }
  if ('cry' === event) {
    state.current = 'caterpillar';
    return true;
  }
  if ('prized' === event) {
    state.current = 'occasional';
    return true;
  }
  if ('denigrate' === event) {
    state.current = 'gleeful';
    return true;
  }
  if ('reaped' === event) {
    state.current = 'yawning';
    return true;
  }
  return false;
}
function handleState$386(state, event) {
  if ('well_to_do' === state.current) {
    return doTrans$366(state, event);
  } return false;
}
function doTrans$367(state, event) {
  if ('remodeling' === event) {
    state.current = 'granular';
    return true;
  }
  if ('erased' === event) {
    state.current = 'magnificent';
    return true;
  }
  if ('relished' === event) {
    state.current = 'tasteless';
    return true;
  }
  return false;
}
function handleState$387(state, event) {
  if ('barren' === state.current) {
    return doTrans$367(state, event);
  } return false;
}
function doTrans$368(state, event) {
  if ('refine' === event) {
    state.current = 'direct';
    return true;
  }
  if ('glossed' === event) {
    state.current = 'pungent';
    return true;
  }
  if ('controls' === event) {
    state.current = 'metallic';
    return true;
  }
  if ('desert' === event) {
    state.current = 'ethical';
    return true;
  }
  if ('primed' === event) {
    state.current = 'instructive';
    return true;
  }
  return false;
}
function handleState$388(state, event) {
  if ('rigid' === state.current) {
    return doTrans$368(state, event);
  } return false;
}
function doTrans$369(state, event) {
  if ('vexed' === event) {
    state.current = 'sure_footed';
    return true;
  }
  if ('intended' === event) {
    state.current = 'comfortable';
    return true;
  }
  if ('maimed' === event) {
    state.current = 'untidy';
    return true;
  }
  if ('settle' === event) {
    state.current = 'ashamed';
    return true;
  }
  if ('march' === event) {
    state.current = 'female';
    return true;
  }
  if ('evading' === event) {
    state.current = 'upset';
    return true;
  }
  return false;
}
function handleState$389(state, event) {
  if ('bat' === state.current) {
    return doTrans$369(state, event);
  } return false;
}
function doTrans$370(state, event) {
  if ('hunted' === event) {
    state.current = 'simplistic';
    return true;
  }
  if ('crystallize' === event) {
    state.current = 'extra_small';
    return true;
  }
  if ('enumerated' === event) {
    state.current = 'idealistic';
    return true;
  }
  if ('eliminated' === event) {
    state.current = 'snail';
    return true;
  }
  if ('predisposes' === event) {
    state.current = 'subdued';
    return true;
  }
  if ('available' === event) {
    state.current = 'better';
    return true;
  }
  return false;
}
function handleState$390(state, event) {
  if ('concerned' === state.current) {
    return doTrans$370(state, event);
  } return false;
}
function doTrans$371(state, event) {
  if ('suck' === event) {
    state.current = 'dreary';
    return true;
  }
  return false;
}
function handleState$391(state, event) {
  if ('false' === state.current) {
    return doTrans$371(state, event);
  } return false;
}
function doTrans$372(state, event) {
  if ('associated' === event) {
    state.current = 'agreeable';
    return true;
  }
  return false;
}
function handleState$392(state, event) {
  if ('appropriate' === state.current) {
    return doTrans$372(state, event);
  } return false;
}
function doTrans$373(state, event) {
  if ('entangled' === event) {
    state.current = 'remarkable';
    return true;
  }
  if ('eliciting' === event) {
    state.current = 'occasional';
    return true;
  }
  if ('lasts' === event) {
    state.current = 'hoarse';
    return true;
  }
  return false;
}
function handleState$393(state, event) {
  if ('fetid' === state.current) {
    return doTrans$373(state, event);
  } return false;
}
function doTrans$374(state, event) {
  if ('delighted' === event) {
    state.current = 'ajar';
    return true;
  }
  return false;
}
function handleState$394(state, event) {
  if ('squeaky' === state.current) {
    return doTrans$374(state, event);
  } return false;
}
function doTrans$375(state, event) {
  if ('issue' === event) {
    state.current = 'entire';
    return true;
  }
  if ('safeguarding' === event) {
    state.current = 'same';
    return true;
  }
  if ('squealing' === event) {
    state.current = 'colossal';
    return true;
  }
  return false;
}
function handleState$395(state, event) {
  if ('excellent' === state.current) {
    return doTrans$375(state, event);
  } return false;
}
function doTrans$376(state, event) {
  if ('prevent' === event) {
    state.current = 'extra_small';
    return true;
  }
  return false;
}
function handleState$396(state, event) {
  if ('equal' === state.current) {
    return doTrans$376(state, event);
  } return false;
}
function doTrans$377(state, event) {
  if ('summon' === event) {
    state.current = 'untidy';
    return true;
  }
  return false;
}
function handleState$397(state, event) {
  if ('whispering' === state.current) {
    return doTrans$377(state, event);
  } return false;
}
function doTrans$378(state, event) {
  if ('conforming' === event) {
    state.current = 'puny';
    return true;
  }
  return false;
}
function handleState$398(state, event) {
  if ('ironclad' === state.current) {
    return doTrans$378(state, event);
  } return false;
}
function doTrans$379(state, event) {
  if ('accessing' === event) {
    state.current = 'klutzy';
    return true;
  }
  if ('maneuver' === event) {
    state.current = 'numb';
    return true;
  }
  return false;
}
function handleState$399(state, event) {
  if ('tedious' === state.current) {
    return doTrans$379(state, event);
  } return false;
}
function doTrans$380(state, event) {
  if ('organising' === event) {
    state.current = 'buffalo';
    return true;
  }
  if ('slain' === event) {
    state.current = 'arid';
    return true;
  }
  if ('stirring' === event) {
    state.current = 'half';
    return true;
  }
  if ('recapture' === event) {
    state.current = 'camel';
    return true;
  }
  if ('clin' === event) {
    state.current = 'appropriate';
    return true;
  }
  if ('snarled' === event) {
    state.current = 'variable';
    return true;
  }
  if ('explore' === event) {
    state.current = 'popular';
    return true;
  }
  return false;
}
function handleState$400(state, event) {
  if ('skeletal' === state.current) {
    return doTrans$380(state, event);
  } return false;
}
function doTrans$381(state, event) {
  if ('capitulate' === event) {
    state.current = 'pastel';
    return true;
  }
  return false;
}
function handleState$401(state, event) {
  if ('snappy' === state.current) {
    return doTrans$381(state, event);
  } return false;
}
function doTrans$382(state, event) {
  if ('comes' === event) {
    state.current = 'harmless';
    return true;
  }
  if ('unleash' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('defended' === event) {
    state.current = 'qualified';
    return true;
  }
  if ('demolished' === event) {
    state.current = 'carefree';
    return true;
  }
  return false;
}
function handleState$402(state, event) {
  if ('old_fashioned' === state.current) {
    return doTrans$382(state, event);
  } return false;
}
function doTrans$383(state, event) {
  if ('savor' === event) {
    state.current = 'camel';
    return true;
  }
  if ('abstracting' === event) {
    state.current = 'pro_active';
    return true;
  }
  return false;
}
function handleState$403(state, event) {
  if ('extra_small' === state.current) {
    return doTrans$383(state, event);
  } return false;
}
function doTrans$384(state, event) {
  if ('disprove' === event) {
    state.current = 'smiling';
    return true;
  }
  if ('burying' === event) {
    state.current = 'helpful';
    return true;
  }
  if ('area' === event) {
    state.current = 'exciting';
    return true;
  }
  return false;
}
function handleState$404(state, event) {
  if ('yawning' === state.current) {
    return doTrans$384(state, event);
  } return false;
}
function doTrans$385(state, event) {
  if ('delivered' === event) {
    state.current = 'lemming';
    return true;
  }
  if ('leveled' === event) {
    state.current = 'otter';
    return true;
  }
  if ('populate' === event) {
    state.current = 'healthy';
    return true;
  }
  if ('insulted' === event) {
    state.current = 'gregarious';
    return true;
  }
  return false;
}
function handleState$405(state, event) {
  if ('ghastly' === state.current) {
    return doTrans$385(state, event);
  } return false;
}
function doTrans$386(state, event) {
  if ('remaking' === event) {
    state.current = 'flaky';
    return true;
  }
  if ('grappling' === event) {
    state.current = 'pro_active';
    return true;
  }
  if ('mutter' === event) {
    state.current = 'equal';
    return true;
  }
  if ('provide' === event) {
    state.current = 'easy';
    return true;
  }
  return false;
}
function handleState$406(state, event) {
  if ('grieving' === state.current) {
    return doTrans$386(state, event);
  } return false;
}
function doTrans$387(state, event) {
  if ('realised' === event) {
    state.current = 'hound';
    return true;
  }
  if ('administer' === event) {
    state.current = 'key';
    return true;
  }
  if ('minimising' === event) {
    state.current = 'nutritious';
    return true;
  }
  return false;
}
function handleState$407(state, event) {
  if ('separate' === state.current) {
    return doTrans$387(state, event);
  } return false;
}
function doTrans$388(state, event) {
  if ('tend' === event) {
    state.current = 'appropriate';
    return true;
  }
  if ('wane' === event) {
    state.current = 'plush';
    return true;
  }
  return false;
}
function handleState$408(state, event) {
  if ('klutzy' === state.current) {
    return doTrans$388(state, event);
  } return false;
}
function doTrans$389(state, event) {
  if ('enacting' === event) {
    state.current = 'slow';
    return true;
  }
  if ('ted' === event) {
    state.current = 'wealthy';
    return true;
  }
  if ('dial' === event) {
    state.current = 'intelligent';
    return true;
  }
  return false;
}
function handleState$409(state, event) {
  if ('wan' === state.current) {
    return doTrans$389(state, event);
  } return false;
}
function doTrans$390(state, event) {
  if ('rang' === event) {
    state.current = 'virtuous';
    return true;
  }
  if ('nose' === event) {
    state.current = 'nautical';
    return true;
  }
  if ('skimming' === event) {
    state.current = 'soaring';
    return true;
  }
  if ('doubles' === event) {
    state.current = 'starry';
    return true;
  }
  if ('arrayed' === event) {
    state.current = 'laconic';
    return true;
  }
  if ('receding' === event) {
    state.current = 'thick';
    return true;
  }
  if ('sighing' === event) {
    state.current = 'meerkat';
    return true;
  }
  if ('prostrated' === event) {
    state.current = 'smiling';
    return true;
  }
  if ('applauded' === event) {
    state.current = 'towering';
    return true;
  }
  return false;
}
function handleState$410(state, event) {
  if ('grouse' === state.current) {
    return doTrans$390(state, event);
  } return false;
}
function doTrans$391(state, event) {
  if ('bullying' === event) {
    state.current = 'trim';
    return true;
  }
  return false;
}
function handleState$411(state, event) {
  if ('clear' === state.current) {
    return doTrans$391(state, event);
  } return false;
}
function doTrans$392(state, event) {
  if ('scanned' === event) {
    state.current = 'quizzical';
    return true;
  }
  if ('alternating' === event) {
    state.current = 'numerous';
    return true;
  }
  if ('test' === event) {
    state.current = 'front';
    return true;
  }
  return false;
}
function handleState$412(state, event) {
  if ('bonobo' === state.current) {
    return doTrans$392(state, event);
  } return false;
}
function doTrans$393(state, event) {
  if ('coalesce' === event) {
    state.current = 'affable';
    return true;
  }
  if ('complement' === event) {
    state.current = 'profound';
    return true;
  }
  return false;
}
function handleState$413(state, event) {
  if ('upbeat' === state.current) {
    return doTrans$393(state, event);
  } return false;
}
function doTrans$394(state, event) {
  if ('spring' === event) {
    state.current = 'grouse';
    return true;
  }
  return false;
}
function handleState$414(state, event) {
  if ('accurate' === state.current) {
    return doTrans$394(state, event);
  } return false;
}
function doTrans$395(state, event) {
  if ('synchronized' === event) {
    state.current = 'flounder';
    return true;
  }
  if ('staging' === event) {
    state.current = 'grand';
    return true;
  }
  return false;
}
function handleState$415(state, event) {
  if ('calm' === state.current) {
    return doTrans$395(state, event);
  } return false;
}
function doTrans$396(state, event) {
  if ('disengaged' === event) {
    state.current = 'big_hearted';
    return true;
  }
  if ('damages' === event) {
    state.current = 'active';
    return true;
  }
  return false;
}
function handleState$416(state, event) {
  if ('plush' === state.current) {
    return doTrans$396(state, event);
  } return false;
}
function doTrans$397(state, event) {
  if ('colour' === event) {
    state.current = 'fearless';
    return true;
  }
  if ('acclaimed' === event) {
    state.current = 'round';
    return true;
  }
  if ('deserves' === event) {
    state.current = 'muddy';
    return true;
  }
  if ('fracture' === event) {
    state.current = 'cloudy';
    return true;
  }
  return false;
}
function handleState$417(state, event) {
  if ('mule' === state.current) {
    return doTrans$397(state, event);
  } return false;
}
function doTrans$398(state, event) {
  if ('priming' === event) {
    state.current = 'slow';
    return true;
  }
  if ('incarnated' === event) {
    state.current = 'trim';
    return true;
  }
  return false;
}
function handleState$418(state, event) {
  if ('exciting' === state.current) {
    return doTrans$398(state, event);
  } return false;
}
function doTrans$399(state, event) {
  if ('stifle' === event) {
    state.current = 'curvy';
    return true;
  }
  if ('scaring' === event) {
    state.current = 'tarantula';
    return true;
  }
  if ('suspecting' === event) {
    state.current = 'fluid';
    return true;
  }
  return false;
}
function handleState$419(state, event) {
  if ('hippopotamus' === state.current) {
    return doTrans$399(state, event);
  } return false;
}
function doTrans$400(state, event) {
  if ('garnish' === event) {
    state.current = 'rubbery';
    return true;
  }
  if ('protect' === event) {
    state.current = 'useless';
    return true;
  }
  if ('disembarked' === event) {
    state.current = 'fragrant';
    return true;
  }
  if ('threaded' === event) {
    state.current = 'right';
    return true;
  }
  if ('modify' === event) {
    state.current = 'grubby';
    return true;
  }
  if ('admire' === event) {
    state.current = 'insignificant';
    return true;
  }
  return false;
}
function handleState$420(state, event) {
  if ('beagle' === state.current) {
    return doTrans$400(state, event);
  } return false;
}
function doTrans$401(state, event) {
  if ('registered' === event) {
    state.current = 'camel';
    return true;
  }
  if ('assembles' === event) {
    state.current = 'idealistic';
    return true;
  }
  return false;
}
function handleState$421(state, event) {
  if ('fitting' === state.current) {
    return doTrans$401(state, event);
  } return false;
}
function doTrans$402(state, event) {
  if ('fucked' === event) {
    state.current = 'content';
    return true;
  }
  if ('log' === event) {
    state.current = 'trim';
    return true;
  }
  if ('detested' === event) {
    state.current = 'dutiful';
    return true;
  }
  return false;
}
function handleState$422(state, event) {
  if ('many' === state.current) {
    return doTrans$402(state, event);
  } return false;
}
function handleState$423(state, event) {
  if ('trim' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$403(state, event) {
  if ('flanked' === event) {
    state.current = 'grieving';
    return true;
  }
  if ('trembled' === event) {
    state.current = 'arid';
    return true;
  }
  if ('key' === event) {
    state.current = 'grubby';
    return true;
  }
  return false;
}
function handleState$424(state, event) {
  if ('hound' === state.current) {
    return doTrans$403(state, event);
  } return false;
}
function doTrans$404(state, event) {
  if ('sobre' === event) {
    state.current = 'direct';
    return true;
  }
  if ('disclaimed' === event) {
    state.current = 'skeletal';
    return true;
  }
  return false;
}
function handleState$425(state, event) {
  if ('turtle' === state.current) {
    return doTrans$404(state, event);
  } return false;
}
function doTrans$405(state, event) {
  if ('missed' === event) {
    state.current = 'jaded';
    return true;
  }
  if ('overemphasized' === event) {
    state.current = 'dead';
    return true;
  }
  if ('earning' === event) {
    state.current = 'slushy';
    return true;
  }
  return false;
}
function handleState$426(state, event) {
  if ('defensive' === state.current) {
    return doTrans$405(state, event);
  } return false;
}
function doTrans$406(state, event) {
  if ('net' === event) {
    state.current = 'sneaky';
    return true;
  }
  return false;
}
function handleState$427(state, event) {
  if ('excited' === state.current) {
    return doTrans$406(state, event);
  } return false;
}
function doTrans$407(state, event) {
  if ('bar' === event) {
    state.current = 'false';
    return true;
  }
  if ('outline' === event) {
    state.current = 'hungry';
    return true;
  }
  if ('initialized' === event) {
    state.current = 'judicious';
    return true;
  }
  if ('obstruct' === event) {
    state.current = 'sneaky';
    return true;
  }
  if ('abandons' === event) {
    state.current = 'electric';
    return true;
  }
  if ('overruled' === event) {
    state.current = 'sponge';
    return true;
  }
  return false;
}
function handleState$428(state, event) {
  if ('harmonious' === state.current) {
    return doTrans$407(state, event);
  } return false;
}
function doTrans$408(state, event) {
  if ('excusing' === event) {
    state.current = 'popular';
    return true;
  }
  if ('presuming' === event) {
    state.current = 'forceful';
    return true;
  }
  if ('shocked' === event) {
    state.current = 'towering';
    return true;
  }
  return false;
}
function handleState$429(state, event) {
  if ('conventional' === state.current) {
    return doTrans$408(state, event);
  } return false;
}
function doTrans$409(state, event) {
  if ('folded' === event) {
    state.current = 'harmless';
    return true;
  }
  if ('trying' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('mate' === event) {
    state.current = 'female';
    return true;
  }
  if ('worn' === event) {
    state.current = 'wombat';
    return true;
  }
  return false;
}
function handleState$430(state, event) {
  if ('soaring' === state.current) {
    return doTrans$409(state, event);
  } return false;
}
function doTrans$410(state, event) {
  if ('discrediting' === event) {
    state.current = 'trusting';
    return true;
  }
  if ('deleting' === event) {
    state.current = 'colorless';
    return true;
  }
  return false;
}
function handleState$431(state, event) {
  if ('queasy' === state.current) {
    return doTrans$410(state, event);
  } return false;
}
function doTrans$411(state, event) {
  if ('handed' === event) {
    state.current = 'bat';
    return true;
  }
  if ('impairing' === event) {
    state.current = 'recent';
    return true;
  }
  if ('depose' === event) {
    state.current = 'grouse';
    return true;
  }
  return false;
}
function handleState$432(state, event) {
  if ('piercing' === state.current) {
    return doTrans$411(state, event);
  } return false;
}
function doTrans$412(state, event) {
  if ('sit' === event) {
    state.current = 'glittering';
    return true;
  }
  if ('l' === event) {
    state.current = 'fickle';
    return true;
  }
  if ('budge' === event) {
    state.current = 'bubbly';
    return true;
  }
  if ('descended' === event) {
    state.current = 'mule';
    return true;
  }
  if ('des' === event) {
    state.current = 'bonobo';
    return true;
  }
  if ('solved' === event) {
    state.current = 'wrathful';
    return true;
  }
  if ('transcribe' === event) {
    state.current = 'vague';
    return true;
  }
  return false;
}
function handleState$433(state, event) {
  if ('meerkat' === state.current) {
    return doTrans$412(state, event);
  } return false;
}
function doTrans$413(state, event) {
  if ('circa' === event) {
    state.current = 'buffalo';
    return true;
  }
  if ('critique' === event) {
    state.current = 'which';
    return true;
  }
  if ('forgo' === event) {
    state.current = 'greedy';
    return true;
  }
  return false;
}
function handleState$434(state, event) {
  if ('granular' === state.current) {
    return doTrans$413(state, event);
  } return false;
}
function doTrans$414(state, event) {
  if ('service' === event) {
    state.current = 'detailed';
    return true;
  }
  return false;
}
function handleState$435(state, event) {
  if ('buoyant' === state.current) {
    return doTrans$414(state, event);
  } return false;
}
function doTrans$415(state, event) {
  if ('float' === event) {
    state.current = 'punctual';
    return true;
  }
  if ('tottering' === event) {
    state.current = 'optimistic';
    return true;
  }
  if ('seething' === event) {
    state.current = 'attached';
    return true;
  }
  if ('dip' === event) {
    state.current = 'wilted';
    return true;
  }
  if ('perfection' === event) {
    state.current = 'forceful';
    return true;
  }
  return false;
}
function handleState$436(state, event) {
  if ('negative' === state.current) {
    return doTrans$415(state, event);
  } return false;
}
function doTrans$416(state, event) {
  if ('assayed' === event) {
    state.current = 'conscious';
    return true;
  }
  if ('confiding' === event) {
    state.current = 'grieving';
    return true;
  }
  return false;
}
function handleState$437(state, event) {
  if ('foul' === state.current) {
    return doTrans$416(state, event);
  } return false;
}
function doTrans$417(state, event) {
  if ('subscribed' === event) {
    state.current = 'second';
    return true;
  }
  if ('straightened' === event) {
    state.current = 'delinquent';
    return true;
  }
  if ('exited' === event) {
    state.current = 'wrong';
    return true;
  }
  return false;
}
function handleState$438(state, event) {
  if ('crowded' === state.current) {
    return doTrans$417(state, event);
  } return false;
}
function doTrans$418(state, event) {
  if ('wept' === event) {
    state.current = 'snail';
    return true;
  }
  if ('racked' === event) {
    state.current = 'variable';
    return true;
  }
  if ('erupting' === event) {
    state.current = 'back';
    return true;
  }
  return false;
}
function handleState$439(state, event) {
  if ('sure_footed' === state.current) {
    return doTrans$418(state, event);
  } return false;
}
function doTrans$419(state, event) {
  if ('objectified' === event) {
    state.current = 'whispering';
    return true;
  }
  if ('weighs' === event) {
    state.current = 'motherly';
    return true;
  }
  if ('roaming' === event) {
    state.current = 'animated';
    return true;
  }
  return false;
}
function handleState$440(state, event) {
  if ('spry' === state.current) {
    return doTrans$419(state, event);
  } return false;
}
function doTrans$420(state, event) {
  if ('figured' === event) {
    state.current = 'winding';
    return true;
  }
  if ('lingered' === event) {
    state.current = 'old_fashioned';
    return true;
  }
  if ('rotates' === event) {
    state.current = 'half';
    return true;
  }
  if ('destroying' === event) {
    state.current = 'dangerous';
    return true;
  }
  if ('puffing' === event) {
    state.current = 'otter';
    return true;
  }
  if ('darken' === event) {
    state.current = 'true';
    return true;
  }
  return false;
}
function handleState$441(state, event) {
  if ('reliable' === state.current) {
    return doTrans$420(state, event);
  } return false;
}
function doTrans$421(state, event) {
  if ('quit' === event) {
    state.current = 'enthusiastic';
    return true;
  }
  if ('shit' === event) {
    state.current = 'jovial';
    return true;
  }
  if ('requested' === event) {
    state.current = 'penguin';
    return true;
  }
  if ('isolate' === event) {
    state.current = 'accurate';
    return true;
  }
  return false;
}
function handleState$442(state, event) {
  if ('fantastic' === state.current) {
    return doTrans$421(state, event);
  } return false;
}
function doTrans$422(state, event) {
  if ('transferring' === event) {
    state.current = 'long';
    return true;
  }
  if ('scheduled' === event) {
    state.current = 'beaver';
    return true;
  }
  if ('variation' === event) {
    state.current = 'burdensome';
    return true;
  }
  if ('nods' === event) {
    state.current = 'exciting';
    return true;
  }
  if ('quarreling' === event) {
    state.current = 'fitting';
    return true;
  }
  return false;
}
function handleState$443(state, event) {
  if ('unwelcome' === state.current) {
    return doTrans$422(state, event);
  } return false;
}
function doTrans$423(state, event) {
  if ('underlying' === event) {
    state.current = 'stormy';
    return true;
  }
  if ('reward' === event) {
    state.current = 'plaintive';
    return true;
  }
  return false;
}
function handleState$444(state, event) {
  if ('abyssinian' === state.current) {
    return doTrans$423(state, event);
  } return false;
}
function doTrans$424(state, event) {
  if ('profiling' === event) {
    state.current = 'gregarious';
    return true;
  }
  if ('lapse' === event) {
    state.current = 'menacing';
    return true;
  }
  if ('demoralized' === event) {
    state.current = 'beagle';
    return true;
  }
  if ('evaporate' === event) {
    state.current = 'bad';
    return true;
  }
  return false;
}
function handleState$445(state, event) {
  if ('crooked' === state.current) {
    return doTrans$424(state, event);
  } return false;
}
function handleState$446(state, event) {
  if ('albatross' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$425(state, event) {
  if ('bolstered' === event) {
    state.current = 'lumpy';
    return true;
  }
  if ('surmise' === event) {
    state.current = 'fat';
    return true;
  }
  if ('debugging' === event) {
    state.current = 'cylindrical';
    return true;
  }
  if ('dictate' === event) {
    state.current = 'jaded';
    return true;
  }
  return false;
}
function handleState$447(state, event) {
  if ('candid' === state.current) {
    return doTrans$425(state, event);
  } return false;
}
function doTrans$426(state, event) {
  if ('disfigured' === event) {
    state.current = 'sure_footed';
    return true;
  }
  if ('conducts' === event) {
    state.current = 'fantastic';
    return true;
  }
  if ('savored' === event) {
    state.current = 'puny';
    return true;
  }
  return false;
}
function handleState$448(state, event) {
  if ('present' === state.current) {
    return doTrans$426(state, event);
  } return false;
}
function doTrans$427(state, event) {
  if ('hammer' === event) {
    state.current = 'bat';
    return true;
  }
  return false;
}
function handleState$449(state, event) {
  if ('nautical' === state.current) {
    return doTrans$427(state, event);
  } return false;
}
function doTrans$428(state, event) {
  if ('thermal' === event) {
    state.current = 'vigorous';
    return true;
  }
  return false;
}
function handleState$450(state, event) {
  if ('limited' === state.current) {
    return doTrans$428(state, event);
  } return false;
}
function doTrans$429(state, event) {
  if ('automate' === event) {
    state.current = 'polite';
    return true;
  }
  if ('slumbering' === event) {
    state.current = 'wiggly';
    return true;
  }
  if ('cheated' === event) {
    state.current = 'worthy';
    return true;
  }
  return false;
}
function handleState$451(state, event) {
  if ('delinquent' === state.current) {
    return doTrans$429(state, event);
  } return false;
}
function handleState$452(state, event) {
  if ('plaintive' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$430(state, event) {
  if ('stars' === event) {
    state.current = 'fond';
    return true;
  }
  if ('pronounces' === event) {
    state.current = 'joyous';
    return true;
  }
  return false;
}
function handleState$453(state, event) {
  if ('platypus' === state.current) {
    return doTrans$430(state, event);
  } return false;
}
function doTrans$431(state, event) {
  if ('numbered' === event) {
    state.current = 'calm';
    return true;
  }
  if ('ram' === event) {
    state.current = 'kaleidoscopic';
    return true;
  }
  if ('twofold' === event) {
    state.current = 'insistent';
    return true;
  }
  if ('committed' === event) {
    state.current = 'grizzled';
    return true;
  }
  return false;
}
function handleState$454(state, event) {
  if ('hard_working' === state.current) {
    return doTrans$431(state, event);
  } return false;
}
function doTrans$432(state, event) {
  if ('linked' === event) {
    state.current = 'fluid';
    return true;
  }
  if ('combining' === event) {
    state.current = 'flaky';
    return true;
  }
  return false;
}
function handleState$455(state, event) {
  if ('thorny' === state.current) {
    return doTrans$432(state, event);
  } return false;
}
function doTrans$433(state, event) {
  if ('expressed' === event) {
    state.current = 'affable';
    return true;
  }
  if ('administering' === event) {
    state.current = 'remarkable';
    return true;
  }
  if ('reaffirms' === event) {
    state.current = 'magnificent';
    return true;
  }
  if ('veto' === event) {
    state.current = 'genuine';
    return true;
  }
  return false;
}
function handleState$456(state, event) {
  if ('gecko' === state.current) {
    return doTrans$433(state, event);
  } return false;
}
function handleState$457(state, event) {
  if ('shady' === state.current) {
    return doTrans$14(state, event);
  } return false;
}
function doTrans$434(state, event) {
  if ('punch' === event) {
    state.current = 'long_term';
    return true;
  }
  return false;
}
function handleState$458(state, event) {
  if ('prime' === state.current) {
    return doTrans$434(state, event);
  } return false;
}
function doTrans$435(state, event) {
  if ('listed' === event) {
    state.current = 'hopeful';
    return true;
  }
  if ('easing' === event) {
    state.current = 'present';
    return true;
  }
  if ('transposed' === event) {
    state.current = 'fixed';
    return true;
  }
  return false;
}
function handleState$459(state, event) {
  if ('untried' === state.current) {
    return doTrans$435(state, event);
  } return false;
}
function doTrans$436(state, event) {
  if ('live' === event) {
    state.current = 'pleasant';
    return true;
  }
  return false;
}
function handleState$460(state, event) {
  if ('relieved' === state.current) {
    return doTrans$436(state, event);
  } return false;
}
function doTrans$437(state, event) {
  if ('disgusted' === event) {
    state.current = 'newt';
    return true;
  }
  if ('alluding' === event) {
    state.current = 'hard_working';
    return true;
  }
  if ('making' === event) {
    state.current = 'helpless';
    return true;
  }
  return false;
}
function handleState$461(state, event) {
  if ('better' === state.current) {
    return doTrans$437(state, event);
  } return false;
}
function doTrans$438(state, event) {
  if ('rein' === event) {
    state.current = 'affectionate';
    return true;
  }
  if ('appropriates' === event) {
    state.current = 'rigid';
    return true;
  }
  if ('implicate' === event) {
    state.current = 'fat';
    return true;
  }
  if ('authorise' === event) {
    state.current = 'charming';
    return true;
  }
  if ('whimpering' === event) {
    state.current = 'bat';
    return true;
  }
  return false;
}
function handleState$462(state, event) {
  if ('dangerous' === state.current) {
    return doTrans$438(state, event);
  } return false;
}
function doTrans$439(state, event) {
  if ('distributed' === event) {
    state.current = 'elliptical';
    return true;
  }
  if ('si' === event) {
    state.current = 'beaver';
    return true;
  }
  return false;
}
function handleState$463(state, event) {
  if ('ill_fated' === state.current) {
    return doTrans$439(state, event);
  } return false;
}
function run$0(state, event) {
  if (handleState$0(state, event)) {
    return;
  }
  if (handleState$1(state, event)) {
    return;
  }
  if (handleState$2(state, event)) {
    return;
  }
  if (handleState$3(state, event)) {
    return;
  }
  if (handleState$4(state, event)) {
    return;
  }
  if (handleState$5(state, event)) {
    return;
  }
  if (handleState$6(state, event)) {
    return;
  }
  if (handleState$7(state, event)) {
    return;
  }
  if (handleState$8(state, event)) {
    return;
  }
  if (handleState$9(state, event)) {
    return;
  }
  if (handleState$10(state, event)) {
    return;
  }
  if (handleState$11(state, event)) {
    return;
  }
  if (handleState$12(state, event)) {
    return;
  }
  if (handleState$13(state, event)) {
    return;
  }
  if (handleState$14(state, event)) {
    return;
  }
  if (handleState$15(state, event)) {
    return;
  }
  if (handleState$16(state, event)) {
    return;
  }
  if (handleState$17(state, event)) {
    return;
  }
  if (handleState$18(state, event)) {
    return;
  }
  if (handleState$19(state, event)) {
    return;
  }
  if (handleState$20(state, event)) {
    return;
  }
  if (handleState$21(state, event)) {
    return;
  }
  if (handleState$22(state, event)) {
    return;
  }
  if (handleState$23(state, event)) {
    return;
  }
  if (handleState$24(state, event)) {
    return;
  }
  if (handleState$25(state, event)) {
    return;
  }
  if (handleState$26(state, event)) {
    return;
  }
  if (handleState$27(state, event)) {
    return;
  }
  if (handleState$28(state, event)) {
    return;
  }
  if (handleState$29(state, event)) {
    return;
  }
  if (handleState$30(state, event)) {
    return;
  }
  if (handleState$31(state, event)) {
    return;
  }
  if (handleState$32(state, event)) {
    return;
  }
  if (handleState$33(state, event)) {
    return;
  }
  if (handleState$34(state, event)) {
    return;
  }
  if (handleState$35(state, event)) {
    return;
  }
  if (handleState$36(state, event)) {
    return;
  }
  if (handleState$37(state, event)) {
    return;
  }
  if (handleState$38(state, event)) {
    return;
  }
  if (handleState$39(state, event)) {
    return;
  }
  if (handleState$40(state, event)) {
    return;
  }
  if (handleState$41(state, event)) {
    return;
  }
  if (handleState$42(state, event)) {
    return;
  }
  if (handleState$43(state, event)) {
    return;
  }
  if (handleState$44(state, event)) {
    return;
  }
  if (handleState$45(state, event)) {
    return;
  }
  if (handleState$46(state, event)) {
    return;
  }
  if (handleState$47(state, event)) {
    return;
  }
  if (handleState$48(state, event)) {
    return;
  }
  if (handleState$49(state, event)) {
    return;
  }
  if (handleState$50(state, event)) {
    return;
  }
  if (handleState$51(state, event)) {
    return;
  }
  if (handleState$52(state, event)) {
    return;
  }
  if (handleState$53(state, event)) {
    return;
  }
  if (handleState$54(state, event)) {
    return;
  }
  if (handleState$55(state, event)) {
    return;
  }
  if (handleState$56(state, event)) {
    return;
  }
  if (handleState$57(state, event)) {
    return;
  }
  if (handleState$58(state, event)) {
    return;
  }
  if (handleState$59(state, event)) {
    return;
  }
  if (handleState$60(state, event)) {
    return;
  }
  if (handleState$61(state, event)) {
    return;
  }
  if (handleState$62(state, event)) {
    return;
  }
  if (handleState$63(state, event)) {
    return;
  }
  if (handleState$64(state, event)) {
    return;
  }
  if (handleState$65(state, event)) {
    return;
  }
  if (handleState$66(state, event)) {
    return;
  }
  if (handleState$67(state, event)) {
    return;
  }
  if (handleState$68(state, event)) {
    return;
  }
  if (handleState$69(state, event)) {
    return;
  }
  if (handleState$70(state, event)) {
    return;
  }
  if (handleState$71(state, event)) {
    return;
  }
  if (handleState$72(state, event)) {
    return;
  }
  if (handleState$73(state, event)) {
    return;
  }
  if (handleState$74(state, event)) {
    return;
  }
  if (handleState$75(state, event)) {
    return;
  }
  if (handleState$76(state, event)) {
    return;
  }
  if (handleState$77(state, event)) {
    return;
  }
  if (handleState$78(state, event)) {
    return;
  }
  if (handleState$79(state, event)) {
    return;
  }
  if (handleState$80(state, event)) {
    return;
  }
  if (handleState$81(state, event)) {
    return;
  }
  if (handleState$82(state, event)) {
    return;
  }
  if (handleState$83(state, event)) {
    return;
  }
  if (handleState$84(state, event)) {
    return;
  }
  if (handleState$85(state, event)) {
    return;
  }
  if (handleState$86(state, event)) {
    return;
  }
  if (handleState$87(state, event)) {
    return;
  }
  if (handleState$88(state, event)) {
    return;
  }
  if (handleState$89(state, event)) {
    return;
  }
  if (handleState$90(state, event)) {
    return;
  }
  if (handleState$91(state, event)) {
    return;
  }
  if (handleState$92(state, event)) {
    return;
  }
  if (handleState$93(state, event)) {
    return;
  }
  if (handleState$94(state, event)) {
    return;
  }
  if (handleState$95(state, event)) {
    return;
  }
  if (handleState$96(state, event)) {
    return;
  }
  if (handleState$97(state, event)) {
    return;
  }
  if (handleState$98(state, event)) {
    return;
  }
  if (handleState$99(state, event)) {
    return;
  }
  if (handleState$100(state, event)) {
    return;
  }
  if (handleState$101(state, event)) {
    return;
  }
  if (handleState$102(state, event)) {
    return;
  }
  if (handleState$103(state, event)) {
    return;
  }
  if (handleState$104(state, event)) {
    return;
  }
  if (handleState$105(state, event)) {
    return;
  }
  if (handleState$106(state, event)) {
    return;
  }
  if (handleState$107(state, event)) {
    return;
  }
  if (handleState$108(state, event)) {
    return;
  }
  if (handleState$109(state, event)) {
    return;
  }
  if (handleState$110(state, event)) {
    return;
  }
  if (handleState$111(state, event)) {
    return;
  }
  if (handleState$112(state, event)) {
    return;
  }
  if (handleState$113(state, event)) {
    return;
  }
  if (handleState$114(state, event)) {
    return;
  }
  if (handleState$115(state, event)) {
    return;
  }
  if (handleState$116(state, event)) {
    return;
  }
  if (handleState$117(state, event)) {
    return;
  }
  if (handleState$118(state, event)) {
    return;
  }
  if (handleState$119(state, event)) {
    return;
  }
  if (handleState$120(state, event)) {
    return;
  }
  if (handleState$121(state, event)) {
    return;
  }
  if (handleState$122(state, event)) {
    return;
  }
  if (handleState$123(state, event)) {
    return;
  }
  if (handleState$124(state, event)) {
    return;
  }
  if (handleState$125(state, event)) {
    return;
  }
  if (handleState$126(state, event)) {
    return;
  }
  if (handleState$127(state, event)) {
    return;
  }
  if (handleState$128(state, event)) {
    return;
  }
  if (handleState$129(state, event)) {
    return;
  }
  if (handleState$130(state, event)) {
    return;
  }
  if (handleState$131(state, event)) {
    return;
  }
  if (handleState$132(state, event)) {
    return;
  }
  if (handleState$133(state, event)) {
    return;
  }
  if (handleState$134(state, event)) {
    return;
  }
  if (handleState$135(state, event)) {
    return;
  }
  if (handleState$136(state, event)) {
    return;
  }
  if (handleState$137(state, event)) {
    return;
  }
  if (handleState$138(state, event)) {
    return;
  }
  if (handleState$139(state, event)) {
    return;
  }
  if (handleState$140(state, event)) {
    return;
  }
  if (handleState$141(state, event)) {
    return;
  }
  if (handleState$142(state, event)) {
    return;
  }
  if (handleState$143(state, event)) {
    return;
  }
  if (handleState$144(state, event)) {
    return;
  }
  if (handleState$145(state, event)) {
    return;
  }
  if (handleState$146(state, event)) {
    return;
  }
  if (handleState$147(state, event)) {
    return;
  }
  if (handleState$148(state, event)) {
    return;
  }
  if (handleState$149(state, event)) {
    return;
  }
  if (handleState$150(state, event)) {
    return;
  }
  if (handleState$151(state, event)) {
    return;
  }
  if (handleState$152(state, event)) {
    return;
  }
  if (handleState$153(state, event)) {
    return;
  }
  if (handleState$154(state, event)) {
    return;
  }
  if (handleState$155(state, event)) {
    return;
  }
  if (handleState$156(state, event)) {
    return;
  }
  if (handleState$157(state, event)) {
    return;
  }
  if (handleState$158(state, event)) {
    return;
  }
  if (handleState$159(state, event)) {
    return;
  }
  if (handleState$160(state, event)) {
    return;
  }
  if (handleState$161(state, event)) {
    return;
  }
  if (handleState$162(state, event)) {
    return;
  }
  if (handleState$163(state, event)) {
    return;
  }
  if (handleState$164(state, event)) {
    return;
  }
  if (handleState$165(state, event)) {
    return;
  }
  if (handleState$166(state, event)) {
    return;
  }
  if (handleState$167(state, event)) {
    return;
  }
  if (handleState$168(state, event)) {
    return;
  }
  if (handleState$169(state, event)) {
    return;
  }
  if (handleState$170(state, event)) {
    return;
  }
  if (handleState$171(state, event)) {
    return;
  }
  if (handleState$172(state, event)) {
    return;
  }
  if (handleState$173(state, event)) {
    return;
  }
  if (handleState$174(state, event)) {
    return;
  }
  if (handleState$175(state, event)) {
    return;
  }
  if (handleState$176(state, event)) {
    return;
  }
  if (handleState$177(state, event)) {
    return;
  }
  if (handleState$178(state, event)) {
    return;
  }
  if (handleState$179(state, event)) {
    return;
  }
  if (handleState$180(state, event)) {
    return;
  }
  if (handleState$181(state, event)) {
    return;
  }
  if (handleState$182(state, event)) {
    return;
  }
  if (handleState$183(state, event)) {
    return;
  }
  if (handleState$184(state, event)) {
    return;
  }
  if (handleState$185(state, event)) {
    return;
  }
  if (handleState$186(state, event)) {
    return;
  }
  if (handleState$187(state, event)) {
    return;
  }
  if (handleState$188(state, event)) {
    return;
  }
  if (handleState$189(state, event)) {
    return;
  }
  if (handleState$190(state, event)) {
    return;
  }
  if (handleState$191(state, event)) {
    return;
  }
  if (handleState$192(state, event)) {
    return;
  }
  if (handleState$193(state, event)) {
    return;
  }
  if (handleState$194(state, event)) {
    return;
  }
  if (handleState$195(state, event)) {
    return;
  }
  if (handleState$196(state, event)) {
    return;
  }
  if (handleState$197(state, event)) {
    return;
  }
  if (handleState$198(state, event)) {
    return;
  }
  if (handleState$199(state, event)) {
    return;
  }
  if (handleState$200(state, event)) {
    return;
  }
  if (handleState$201(state, event)) {
    return;
  }
  if (handleState$202(state, event)) {
    return;
  }
  if (handleState$203(state, event)) {
    return;
  }
  if (handleState$204(state, event)) {
    return;
  }
  if (handleState$205(state, event)) {
    return;
  }
  if (handleState$206(state, event)) {
    return;
  }
  if (handleState$207(state, event)) {
    return;
  }
  if (handleState$208(state, event)) {
    return;
  }
  if (handleState$209(state, event)) {
    return;
  }
  if (handleState$210(state, event)) {
    return;
  }
  if (handleState$211(state, event)) {
    return;
  }
  if (handleState$212(state, event)) {
    return;
  }
  if (handleState$213(state, event)) {
    return;
  }
  if (handleState$214(state, event)) {
    return;
  }
  if (handleState$215(state, event)) {
    return;
  }
  if (handleState$216(state, event)) {
    return;
  }
  if (handleState$217(state, event)) {
    return;
  }
  if (handleState$218(state, event)) {
    return;
  }
  if (handleState$219(state, event)) {
    return;
  }
  if (handleState$220(state, event)) {
    return;
  }
  if (handleState$221(state, event)) {
    return;
  }
  if (handleState$222(state, event)) {
    return;
  }
  if (handleState$223(state, event)) {
    return;
  }
  if (handleState$224(state, event)) {
    return;
  }
  if (handleState$225(state, event)) {
    return;
  }
  if (handleState$226(state, event)) {
    return;
  }
  if (handleState$227(state, event)) {
    return;
  }
  if (handleState$228(state, event)) {
    return;
  }
  if (handleState$229(state, event)) {
    return;
  }
  if (handleState$230(state, event)) {
    return;
  }
  if (handleState$231(state, event)) {
    return;
  }
  if (handleState$232(state, event)) {
    return;
  }
  if (handleState$233(state, event)) {
    return;
  }
  if (handleState$234(state, event)) {
    return;
  }
  if (handleState$235(state, event)) {
    return;
  }
  if (handleState$236(state, event)) {
    return;
  }
  if (handleState$237(state, event)) {
    return;
  }
  if (handleState$238(state, event)) {
    return;
  }
  if (handleState$239(state, event)) {
    return;
  }
  if (handleState$240(state, event)) {
    return;
  }
  if (handleState$241(state, event)) {
    return;
  }
  if (handleState$242(state, event)) {
    return;
  }
  if (handleState$243(state, event)) {
    return;
  }
  if (handleState$244(state, event)) {
    return;
  }
  if (handleState$245(state, event)) {
    return;
  }
  if (handleState$246(state, event)) {
    return;
  }
  if (handleState$247(state, event)) {
    return;
  }
  if (handleState$248(state, event)) {
    return;
  }
  if (handleState$249(state, event)) {
    return;
  }
  if (handleState$250(state, event)) {
    return;
  }
  if (handleState$251(state, event)) {
    return;
  }
  if (handleState$252(state, event)) {
    return;
  }
  if (handleState$253(state, event)) {
    return;
  }
  if (handleState$254(state, event)) {
    return;
  }
  if (handleState$255(state, event)) {
    return;
  }
  if (handleState$256(state, event)) {
    return;
  }
  if (handleState$257(state, event)) {
    return;
  }
  if (handleState$258(state, event)) {
    return;
  }
  if (handleState$259(state, event)) {
    return;
  }
  if (handleState$260(state, event)) {
    return;
  }
  if (handleState$261(state, event)) {
    return;
  }
  if (handleState$262(state, event)) {
    return;
  }
  if (handleState$263(state, event)) {
    return;
  }
  if (handleState$264(state, event)) {
    return;
  }
  if (handleState$265(state, event)) {
    return;
  }
  if (handleState$266(state, event)) {
    return;
  }
  if (handleState$267(state, event)) {
    return;
  }
  if (handleState$268(state, event)) {
    return;
  }
  if (handleState$269(state, event)) {
    return;
  }
  if (handleState$270(state, event)) {
    return;
  }
  if (handleState$271(state, event)) {
    return;
  }
  if (handleState$272(state, event)) {
    return;
  }
  if (handleState$273(state, event)) {
    return;
  }
  if (handleState$274(state, event)) {
    return;
  }
  if (handleState$275(state, event)) {
    return;
  }
  if (handleState$276(state, event)) {
    return;
  }
  if (handleState$277(state, event)) {
    return;
  }
  if (handleState$278(state, event)) {
    return;
  }
  if (handleState$279(state, event)) {
    return;
  }
  if (handleState$280(state, event)) {
    return;
  }
  if (handleState$281(state, event)) {
    return;
  }
  if (handleState$282(state, event)) {
    return;
  }
  if (handleState$283(state, event)) {
    return;
  }
  if (handleState$284(state, event)) {
    return;
  }
  if (handleState$285(state, event)) {
    return;
  }
  if (handleState$286(state, event)) {
    return;
  }
  if (handleState$287(state, event)) {
    return;
  }
  if (handleState$288(state, event)) {
    return;
  }
  if (handleState$289(state, event)) {
    return;
  }
  if (handleState$290(state, event)) {
    return;
  }
  if (handleState$291(state, event)) {
    return;
  }
  if (handleState$292(state, event)) {
    return;
  }
  if (handleState$293(state, event)) {
    return;
  }
  if (handleState$294(state, event)) {
    return;
  }
  if (handleState$295(state, event)) {
    return;
  }
  if (handleState$296(state, event)) {
    return;
  }
  if (handleState$297(state, event)) {
    return;
  }
  if (handleState$298(state, event)) {
    return;
  }
  if (handleState$299(state, event)) {
    return;
  }
  if (handleState$300(state, event)) {
    return;
  }
  if (handleState$301(state, event)) {
    return;
  }
  if (handleState$302(state, event)) {
    return;
  }
  if (handleState$303(state, event)) {
    return;
  }
  if (handleState$304(state, event)) {
    return;
  }
  if (handleState$305(state, event)) {
    return;
  }
  if (handleState$306(state, event)) {
    return;
  }
  if (handleState$307(state, event)) {
    return;
  }
  if (handleState$308(state, event)) {
    return;
  }
  if (handleState$309(state, event)) {
    return;
  }
  if (handleState$310(state, event)) {
    return;
  }
  if (handleState$311(state, event)) {
    return;
  }
  if (handleState$312(state, event)) {
    return;
  }
  if (handleState$313(state, event)) {
    return;
  }
  if (handleState$314(state, event)) {
    return;
  }
  if (handleState$315(state, event)) {
    return;
  }
  if (handleState$316(state, event)) {
    return;
  }
  if (handleState$317(state, event)) {
    return;
  }
  if (handleState$318(state, event)) {
    return;
  }
  if (handleState$319(state, event)) {
    return;
  }
  if (handleState$320(state, event)) {
    return;
  }
  if (handleState$321(state, event)) {
    return;
  }
  if (handleState$322(state, event)) {
    return;
  }
  if (handleState$323(state, event)) {
    return;
  }
  if (handleState$324(state, event)) {
    return;
  }
  if (handleState$325(state, event)) {
    return;
  }
  if (handleState$326(state, event)) {
    return;
  }
  if (handleState$327(state, event)) {
    return;
  }
  if (handleState$328(state, event)) {
    return;
  }
  if (handleState$329(state, event)) {
    return;
  }
  if (handleState$330(state, event)) {
    return;
  }
  if (handleState$331(state, event)) {
    return;
  }
  if (handleState$332(state, event)) {
    return;
  }
  if (handleState$333(state, event)) {
    return;
  }
  if (handleState$334(state, event)) {
    return;
  }
  if (handleState$335(state, event)) {
    return;
  }
  if (handleState$336(state, event)) {
    return;
  }
  if (handleState$337(state, event)) {
    return;
  }
  if (handleState$338(state, event)) {
    return;
  }
  if (handleState$339(state, event)) {
    return;
  }
  if (handleState$340(state, event)) {
    return;
  }
  if (handleState$341(state, event)) {
    return;
  }
  if (handleState$342(state, event)) {
    return;
  }
  if (handleState$343(state, event)) {
    return;
  }
  if (handleState$344(state, event)) {
    return;
  }
  if (handleState$345(state, event)) {
    return;
  }
  if (handleState$346(state, event)) {
    return;
  }
  if (handleState$347(state, event)) {
    return;
  }
  if (handleState$348(state, event)) {
    return;
  }
  if (handleState$349(state, event)) {
    return;
  }
  if (handleState$350(state, event)) {
    return;
  }
  if (handleState$351(state, event)) {
    return;
  }
  if (handleState$352(state, event)) {
    return;
  }
  if (handleState$353(state, event)) {
    return;
  }
  if (handleState$354(state, event)) {
    return;
  }
  if (handleState$355(state, event)) {
    return;
  }
  if (handleState$356(state, event)) {
    return;
  }
  if (handleState$357(state, event)) {
    return;
  }
  if (handleState$358(state, event)) {
    return;
  }
  if (handleState$359(state, event)) {
    return;
  }
  if (handleState$360(state, event)) {
    return;
  }
  if (handleState$361(state, event)) {
    return;
  }
  if (handleState$362(state, event)) {
    return;
  }
  if (handleState$363(state, event)) {
    return;
  }
  if (handleState$364(state, event)) {
    return;
  }
  if (handleState$365(state, event)) {
    return;
  }
  if (handleState$366(state, event)) {
    return;
  }
  if (handleState$367(state, event)) {
    return;
  }
  if (handleState$368(state, event)) {
    return;
  }
  if (handleState$369(state, event)) {
    return;
  }
  if (handleState$370(state, event)) {
    return;
  }
  if (handleState$371(state, event)) {
    return;
  }
  if (handleState$372(state, event)) {
    return;
  }
  if (handleState$373(state, event)) {
    return;
  }
  if (handleState$374(state, event)) {
    return;
  }
  if (handleState$375(state, event)) {
    return;
  }
  if (handleState$376(state, event)) {
    return;
  }
  if (handleState$377(state, event)) {
    return;
  }
  if (handleState$378(state, event)) {
    return;
  }
  if (handleState$379(state, event)) {
    return;
  }
  if (handleState$380(state, event)) {
    return;
  }
  if (handleState$381(state, event)) {
    return;
  }
  if (handleState$382(state, event)) {
    return;
  }
  if (handleState$383(state, event)) {
    return;
  }
  if (handleState$384(state, event)) {
    return;
  }
  if (handleState$385(state, event)) {
    return;
  }
  if (handleState$386(state, event)) {
    return;
  }
  if (handleState$387(state, event)) {
    return;
  }
  if (handleState$388(state, event)) {
    return;
  }
  if (handleState$389(state, event)) {
    return;
  }
  if (handleState$390(state, event)) {
    return;
  }
  if (handleState$391(state, event)) {
    return;
  }
  if (handleState$392(state, event)) {
    return;
  }
  if (handleState$393(state, event)) {
    return;
  }
  if (handleState$394(state, event)) {
    return;
  }
  if (handleState$395(state, event)) {
    return;
  }
  if (handleState$396(state, event)) {
    return;
  }
  if (handleState$397(state, event)) {
    return;
  }
  if (handleState$398(state, event)) {
    return;
  }
  if (handleState$399(state, event)) {
    return;
  }
  if (handleState$400(state, event)) {
    return;
  }
  if (handleState$401(state, event)) {
    return;
  }
  if (handleState$402(state, event)) {
    return;
  }
  if (handleState$403(state, event)) {
    return;
  }
  if (handleState$404(state, event)) {
    return;
  }
  if (handleState$405(state, event)) {
    return;
  }
  if (handleState$406(state, event)) {
    return;
  }
  if (handleState$407(state, event)) {
    return;
  }
  if (handleState$408(state, event)) {
    return;
  }
  if (handleState$409(state, event)) {
    return;
  }
  if (handleState$410(state, event)) {
    return;
  }
  if (handleState$411(state, event)) {
    return;
  }
  if (handleState$412(state, event)) {
    return;
  }
  if (handleState$413(state, event)) {
    return;
  }
  if (handleState$414(state, event)) {
    return;
  }
  if (handleState$415(state, event)) {
    return;
  }
  if (handleState$416(state, event)) {
    return;
  }
  if (handleState$417(state, event)) {
    return;
  }
  if (handleState$418(state, event)) {
    return;
  }
  if (handleState$419(state, event)) {
    return;
  }
  if (handleState$420(state, event)) {
    return;
  }
  if (handleState$421(state, event)) {
    return;
  }
  if (handleState$422(state, event)) {
    return;
  }
  if (handleState$423(state, event)) {
    return;
  }
  if (handleState$424(state, event)) {
    return;
  }
  if (handleState$425(state, event)) {
    return;
  }
  if (handleState$426(state, event)) {
    return;
  }
  if (handleState$427(state, event)) {
    return;
  }
  if (handleState$428(state, event)) {
    return;
  }
  if (handleState$429(state, event)) {
    return;
  }
  if (handleState$430(state, event)) {
    return;
  }
  if (handleState$431(state, event)) {
    return;
  }
  if (handleState$432(state, event)) {
    return;
  }
  if (handleState$433(state, event)) {
    return;
  }
  if (handleState$434(state, event)) {
    return;
  }
  if (handleState$435(state, event)) {
    return;
  }
  if (handleState$436(state, event)) {
    return;
  }
  if (handleState$437(state, event)) {
    return;
  }
  if (handleState$438(state, event)) {
    return;
  }
  if (handleState$439(state, event)) {
    return;
  }
  if (handleState$440(state, event)) {
    return;
  }
  if (handleState$441(state, event)) {
    return;
  }
  if (handleState$442(state, event)) {
    return;
  }
  if (handleState$443(state, event)) {
    return;
  }
  if (handleState$444(state, event)) {
    return;
  }
  if (handleState$445(state, event)) {
    return;
  }
  if (handleState$446(state, event)) {
    return;
  }
  if (handleState$447(state, event)) {
    return;
  }
  if (handleState$448(state, event)) {
    return;
  }
  if (handleState$449(state, event)) {
    return;
  }
  if (handleState$450(state, event)) {
    return;
  }
  if (handleState$451(state, event)) {
    return;
  }
  if (handleState$452(state, event)) {
    return;
  }
  if (handleState$453(state, event)) {
    return;
  }
  if (handleState$454(state, event)) {
    return;
  }
  if (handleState$455(state, event)) {
    return;
  }
  if (handleState$456(state, event)) {
    return;
  }
  if (handleState$457(state, event)) {
    return;
  }
  if (handleState$458(state, event)) {
    return;
  }
  if (handleState$459(state, event)) {
    return;
  }
  if (handleState$460(state, event)) {
    return;
  }
  if (handleState$461(state, event)) {
    return;
  }
  if (handleState$462(state, event)) {
    return;
  }
  if (handleState$463(state, event)) {
    return;
  }
}