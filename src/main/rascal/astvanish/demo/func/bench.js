

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
