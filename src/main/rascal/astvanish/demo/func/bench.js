


function doRun(interp, compiled, ast, args) {
    const startUsage = process.cpuUsage();
    const result = interp(ast, args);
    const endUsage = process.cpuUsage(startUsage);
    //console.log('Interpreted result: ' + result);
    
    // timings are in milliseconds
    const timings = {};

    timings.interpreted = {
        user: endUsage.user / 1000,
        system: endUsage.system / 1000
    };

    const startUsage2 = process.cpuUsage();
    const result2 = compiled(args);
    const endUsage2 = process.cpuUsage(startUsage2);
    
    //console.log('Compiled result: ' + result2);

    timings.compiled = {
        user: endUsage2.user / 1000,
        system: endUsage2.system / 1000
    };

    return timings;
}

import { run } from './func-interp.js';
import { run as run2 } from './benchmark-run.js';

import { readFile } from 'fs/promises';
const ast = JSON.parse(await readFile('benchmark.json', 'utf8'));

// workload size for bench(n); can be overridden on the command line: node bench.js <n>
const N = parseInt(process.argv[2] ?? '10');

console.log('input, interpreted, compiled');
for (var i = 0; i < 1000; i++) {
    const timings = doRun(run, run2, ast, [N]);
    //console.log('"' + i + '", "' + timings.interpreted.user + '", "' + timings.compiled.user + '"');
    console.log(i + ', ' + timings.interpreted.user + ', ' + timings.compiled.user);
}