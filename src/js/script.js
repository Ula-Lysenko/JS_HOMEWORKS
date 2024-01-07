'use strict';

const a= 8;
const b= 3;


const result= a === 0 ? 'Yes, true' : 'No, false';
console.log(result);

const result2= a > 0 ? 'Yes, true' : 'No, false';
console.log(result2);

const result3= a < 0 ? 'Yes, true' : 'No, false';
console.log(result3);

const result4= a >= 0 ? 'Yes, true' : 'No, false';
console.log(result4);

const result5= a <= 0 ? 'Yes, true' : 'No, false';
console.log(result5);

const result6= a !== 0 ? 'Yes, true' : 'No, false';
console.log(result6);

const result7= a === 'test' ? 'Yes, true' : 'No, false';
console.log(result7);

const result8= a === '1' ? 'Yes, true' : 'No, false';
console.log(result8);

const result9= a > 0 && a < 5 ? 'Yes, true' : 'No, false';
console.log(result9);

const result10= a === 0 || a === 2 ? a + 7 : a / 10;
console.log(result10);

const result11= a <= 1 && b >= 3 ? a + b : a - b;
console.log(result11);

const result12= (a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Yes, true' : 'No, false';
console.log(result12);


const num = 2;
let result13;


switch (num) {
    case 1:
        result13 = 'Winter';
        break;
    case 2:
        result13 = 'Spring';
        break;
    case 3:
        result13 = 'Summer';
        break;
    case 4:
        result13 = 'Autumn';
        break;
    default:
        result13 = 'I want holidays all year round!';
}

console.log(result13);

