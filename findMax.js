// findMax.js

/*
    Todo: find the maximum number in an arr of numbers

    Go through step by step, compare n and n + 1
    store maximum in a max variable
    Repeat this until length - 1
    return max
*/

const numbers = [15, 17, 2, 19, 35, 153, 11];

let max;
function findMax(arr) {
    for (let i = 0; i < (arr.length - 1); i++) {
        if (arr[i] > arr[i + 1]) {
            max = arr[i]
        } else {
            max = arr[i + 1]
        }

        // Hack: update the current max number to compare on next iteration
        arr[i + 1] = max;
    }

    return max;
}


console.log(findMax(numbers));
