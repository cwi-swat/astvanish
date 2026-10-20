module Aikido

import IO;
import String;

list[str] aikidoTechnieken() {
    list[str] waza = ["suwari waza", "tachi waza", "hanmi handachi waza"];

    lrel[str,str] aanval =  [
        "ai hanmi kata te dori",
        "kata te dori", 
        "sho men uchi",
        "yoko men uchi",
        "chudan tsuki",
        "jodan tsuki",
        "ryo te dori",
        "morote dori",
        "kata dori",
        "muna dori",
        "mae geri"
     ] * [""];
     
     ushiro = ["ushiro waza"];

     aanval += ushiro * [
        "ryo te dori",
        "kata dori",
        "kata te kubi shime",
        "eri dori",
        "hiji dori"
     ]  ;

    list[str] aanval1 = [ "<x> <y>" | <str x, str y> <- aanval ];

    list[str] verdediging = [
        "ikkyo",
        "nikyo",
        "sankyo",
        "yonkyo",
        "kotegaeshi",
        "irimi nage",
        "shiho nage",
        "udi kime nage",
        "kokyu nage",
        "udi garame nage",
        "uchi kaiten nage",
        "koshi nage"
    ];

    lrel[str, str] verdediging2 = verdediging * ["omote", "ura"]
        + [ "hiji kimi osae", "gokyo", "kiri otoshi"] * [""];

    list[str] verdediging1 = [ "<x> <y>" | <str x, str y> <- verdediging2 ];

    list[str] aikido = [ squeeze("<x> <y> <z>", #[\ ]) 
        | <<str x, str y>, str z> <- waza * aanval1 * verdediging1 ];

    for (str x <- aikido) {
        println(x);
    }
    return aikido;
}
