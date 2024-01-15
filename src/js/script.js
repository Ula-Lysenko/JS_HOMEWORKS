'use strict';

// 1
for (let i = 20; i <= 30; i = i + 0.5) {
    console.log(i);
}


// 2
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    console.log(arr[i] * 27);
}


// 3
const askNum = +prompt('Your number?');
for (let i = 1; i <= 100; i++) {
    if (i**2 < askNum) console.log(i);
}


// 4
const askNumber = +prompt('Your number?');

if (askNumber <= 1) console.log('NaN');

for (let i = 2; i <= Math.sqrt(askNumber); i++) {
    if (askNumber % i === 0) {
        console.log('not prime');
        break;
    }
    console.log('prime');

}


// 5
const askNumber2 = +prompt('Your number?');
let answerNumber2 = false;

for (let i = 0; i < askNumber2; i++) {
    if (Math.pow(3, i) !== askNumber2) continue;
    answerNumber2 = true;
    break;
}
console.log(answerNumber2);






