/*
doFactorial(n)

While (n > 1)
factorial = n;
factorial = factorial * (n - 1)

*/

export function doFactorial(n){
    let factorial = n;

    while(n > 1){
        factorial = factorial * (n - 1);
        n = n - 1;
    }

    return factorial;
}
