module astvanish::demo::func::Stats

import analysis::statistics::Descriptive;
import lang::csv::IO;
import vis::Charts;
import Content;

num zscore(num x, list[num] vals) = (x - mean(vals)) / standardDeviation(vals);

bool isOutlier(num z) = z < -3 || z > 3;


Content visTimings() {
    lrel[str,num,num] dat = readCSV(#lrel[str,num,num], 
        |project://astvanish/src/main/rascal/astvanish/demo/func/timings.csv|);


    num mInterp = mean(dat<1>);
    num devInterp = standardDeviation(dat<1>);
    num mCompil = mean(dat<2>);
    num devCompil = standardDeviation(dat<2>);
    

    lrel[str, num, num, num, num] scored 
        = [ <s, iterp, comp, (iterp - mInterp)/devInterp, (comp - mCompil)/devCompil> 
            | <str s, num iterp, num comp> <- dat ];

    lrel[str, num, num] clean = 
        [ <s, iterp, comp> | <str s, num iterp, num comp, num zi, num zc> <- scored, !(isOutlier(zi)|| isOutlier(zc)) ];

    return lineChart(["interp", "compiled"], [clean<0,1>, clean<0,2>]);
}

