/*
    sorting an array of numbers in the asending order
*/

let numbers = [15, 11, 29, 16, 5, 1];

let arr1 = numbers.filter(number => number % 2 === 0);
let arr2 = numbers.map(number => number * 2);

const arr3 = numbers.concat(arr1, arr2);

console.log(arr3);

let smallest = arr3[0];
for(let i = 0; i < arr3.length; i++){
    if(smallest > arr3[i + 1]){
        smallest = arr3[i + 1]
    }
}

let sortedArr3 = [];
sortedArr3.push(smallest);

console.log(sortedArr3);