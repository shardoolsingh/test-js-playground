//app.js
import { sayHello } from './hello.js';
import { resolve } from 'node:path';
import { readMyFile } from './read-input.js';

const filePath = resolve('./calc.js');

readMyFile(filePath); // async operation

const names = ["Alice", "Bob", "Charlie", "Jeremy", "Ronnie"];

// using forEach
names.forEach(sayHello);