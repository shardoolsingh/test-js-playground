// fizzBuzz.js
/*
    Classic FizzBuzz
    Multiple of 3: Print Fizz
    Multiple of 5: Print Buzz
    Multiple of 3 & 5(15): 
*/

export function FizzBuzz(n) {
    // handle special case 0
    if (n === 0) {
        console.log(n);
    }

    if (n % 15 === 0) {
        console.log('FizzBuzz');
    } else if (n % 5 === 0) {
        console.log('Buzz');
    } else if (n % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(n);
    }
}
