

import { run } from './func-interp.js';

import { readFile } from 'fs/promises';

const ast = JSON.parse(await readFile("factorial.json", "utf8"));

console.time('interpreted');
const result = run(ast);
console.timeEnd('interpreted');

console.log('result = ' + result);

import { run as run2 } from './factorial-run.js';

console.time('compiled');
const result2 = run2();
console.timeEnd('compiled');

console.log('peval result = ' + result2);


console.log ("######################");

const startUsage = process.cpuUsage();
run(ast);
const endUsage = process.cpuUsage(startUsage);
console.log('CPU Usage (interpreted):');
console.log(` User: ${endUsage.user / 1000}ms`);
console.log(` System: ${endUsage.system / 1000}ms`);


const startUsage2 = process.cpuUsage();
run2();
const endUsage2 = process.cpuUsage(startUsage2);
console.log('CPU Usage (compiled):');
console.log(` User: ${endUsage2.user / 1000}ms`);
console.log(` System: ${endUsage2.system / 1000}ms`);

