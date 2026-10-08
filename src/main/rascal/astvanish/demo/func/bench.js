


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

import { run } from './func-interp.js';
import { run as run2 } from './factorial-run.js';

import { readFile } from 'fs/promises';
const ast = JSON.parse(await readFile("factorial.json", "utf8"));

for (var i = 0; i < 150; i++) {
    console.log(JSON.stringify(doRun(run, run2, ast, [2, i])));
}