'use strict';

let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
    sum += i;
    // console.log(sum);
}
console.log(sum);