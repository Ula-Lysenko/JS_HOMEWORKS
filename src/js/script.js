'use strict';

// 1
let x = 10;
let y = 7;

const result = x > y ? 'X is larger than Y' : 'X is NOT larger than Y';
console.log(result);


// 2
const userNumber = +prompt('Your Integer Number?');
console.log(typeof userNumber);

const posOrNeg = userNumber > 0 ? `your Number: ${userNumber} is positive` : `your Number: ${userNumber} is negative`;

const numToStr = userNumber.toString();
console.log(typeof numToStr);

alert(`length of your Number: ${numToStr.length} characters \n
${posOrNeg}`);


// 3
const numberOne = +prompt('Your first number:');

const numberTwo = +prompt('Your second number:');

const numberThree = +prompt('Your third number:');

if ((numberOne > numberTwo) && (numberOne > numberThree)) {
  alert(`The FIRST number won! ${numberOne} is the Largest!`);
} else if ((numberTwo > numberOne) && (numberTwo > numberThree)) {
  alert(`The SECOND number won! ${numberTwo} is the Largest!`);
} else if ((numberThree > numberOne) && (numberThree > numberTwo)) {
  alert(`The THIRD number won! ${numberThree} is the Largest!`);
} else {
  alert('Try again!');
}


// 4
const lengthOne = +prompt('The first side:');

const lengthTwo = +prompt('The second side:');

const lengthThree = +prompt('The third side:');

if (lengthOne + lengthTwo <= lengthThree || lengthOne + lengthThree <= lengthTwo || lengthTwo + lengthThree <= lengthOne) {
    alert('No! Try again!');
} else {
    alert('Yes! This is a triangle!');
}
