


function doRun(interp, compiled, ast, args) {
    const startUsage = process.cpuUsage();
    const result = interp(ast, args);
    const endUsage = process.cpuUsage(startUsage);
    console.log('Interpreted result: ' + result);
    
    // timings are in milliseconds
    const timings = {};

    timings.interpreted = {
        user: endUsage.user / 1000,
        system: endUsage.system / 1000
    };

    const startUsage2 = process.cpuUsage();
    const result2 = compiled(args);
    const endUsage2 = process.cpuUsage(startUsage2);
    
    console.log('Compiled result: ' + result2);

    timings.compiled = {
        user: endUsage2.user / 1000,
        system: endUsage2.system / 1000
    };

    return timings;
}

import { match } from './regexp-interp.js';
import { match as match2 } from './example-match.js';

import { readFile } from 'fs/promises';
const ast = JSON.parse(await readFile('example.json', 'utf8'));



var timings = [];
for (var i = 0; i < 150; i++) {
    timings.push(doRun(match, match2, ast,     
    ["b","b","b","a","a","b","b","a","a","a","b","b","a","b","b","a","a","b","b","a","a","a","b","b","b","a","b","a","b","b","b","a","a","a","b","a","a","b","b","a","a","a","b","a","a","a","a","a","b","a","b","b","a","b","b","a","b","a","b","b","a","a","b","b","a","b","b","a","b","a","a","b","a","a","a","b","a","b","b","a","b","a","b","b","b","a","b","a","b","a","b","b","a","b","a","a","a","b","a","b","b","a","a","b","a","a","b","b","b","b","a","b","a","a","a","b","b","b","b","b","b","b","b","a","b","b","a","b","b","a","a","a","a","b","a","a","a","a","a","a","b","b","b","b","b","b","a","b","a","a","b","b","a","b","a","a","b","a","a","a","a","a","a","a","a","b","b","a","b","a","a","b","a","b","a","a","b","a","b","a","b","a","b","b","b","a","a","a","b","b","a","a","a","b","a","a","a","a","b","a","b","b","b","a","b","a","b","b","b","b","b","b","a","b","a","b","b","b","a","b","a","b","b","b","b","b","a","b","a","a","a","b","a","a","b","b","a","a","b","a","b","b","b","b","a","b","b","b","b","a","a","b","b","b","a","a","b","b","b","a","b","b","b","b","a","a","b","b","a","b","b","a","a","b","a","b","b","b","a","b","a","b","b","b","a","a","b","b","a","b","a","b","b","b","b","b","a","a","b","b","b","a","a","a","a","a","b","b","a","b","b","b","a","b","b","b","b","a","b","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b"]
    ));
}

console.log('run, interp, pevaled');
    
var i = 0;
for (const t of timings) {
    //console.log(JSON.stringify(t));
    console.log(i + ', ' + t.interpreted.user + ', ' + t.compiled.user);
    i++;
}