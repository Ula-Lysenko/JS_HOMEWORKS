'use strict';

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
}

console.log(sum);

//

const arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < arr2.length; i++) {
    sum2 += Math.pow(arr2[i], 2);
    console.log(sum2);
}

console.log(sum2);