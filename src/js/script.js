'use strict';

// 1
let x = 10;
let y = 7;

const result = x > y ? 'X is larger than Y' : 'X is NOT larger than Y';
console.log(result);


// 2


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