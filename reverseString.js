// reverseString.js

export function reverseString(string) {
    /*
        Length of string array
        create a new array of same length
        put last charter of string to 1 charter of new string
    */

    const len = string.length;
    let modifiedString = [];

    for (let i = len; i > 0; i--) {
        modifiedString.push(string[i - 1]);
    }

    const finalString = modifiedString.join('');

    return finalString;
}

