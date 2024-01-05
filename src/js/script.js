'use strict';


let a = 3;
let b = 5;


let result =   a == 0 ? 'Yes, true' : 'No, false';
console.log(result);

let result2 = a > 0 ? 'Yes, true' : 'No, false';
console.log(result2);

let result3 =   a <  0 ? 'Yes, true' : 'No, false';
console.log(result3);

let result4 =   a >=  0 ? 'Yes, true' : 'No, false';
console.log(result4);

let result5 =   a <=  0 ? 'Yes, true' : 'No, false';
console.log(result5);

let result6 =   a !==  0 ? 'Yes, true' : 'No, false';
console.log(result6);

let result7 =   a === 'test' ? 'Yes, true' : 'No, false';
console.log(result7);

let result8 =   a === '1' ? 'Yes, true' : 'No, false';
console.log(result8);

let result9 =   (a > 0) && (a < 5) ? 'Yes, true' : 'No, false';
console.log(result9);

let result10 =   (a == 0) || (a == 2) ? a + 7 : a / 10;
console.log(result10);

let result11 =   (a <= 1) && (b >= 2) ? a + b : a - b;
console.log(result11);

let result12 =   ((a > 2) && (a > 11)) && ((b >= 6) && (b < 14)) ? 'Yes, true' : 'No, false';
console.log(result12);

