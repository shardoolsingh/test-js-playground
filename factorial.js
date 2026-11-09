/*
doFactorial(n)

While (n > 1)
factorial = n;
factorial = factorial * (n - 1)

*/

function doFactorial(n){
    let factorial = n;

    while(n > 1){
        factorial = factorial * (n - 1);
        n = n - 1;
    }

    return factorial;
}

console.log(doFactorial(5));
console.log(doFactorial(1)); // 1
console.log(doFactorial(3)); 