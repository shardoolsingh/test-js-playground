//app.js
import { sayHello } from './hello.js';
import { resolve } from 'node:path';
import { readMyFile } from './read-input.js';
import { reverseString } from './reverseString.js';

// const path = resolve('./calc.js'); //asyc

// readMyFile(path); // async operation

// using forEach
// names.forEach(sayHello);

const word = reverseString('oxygen');
console.log(word);
