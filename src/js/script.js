'use strict';

const askNumberOne = +prompt('Your first number:');

const askNumberTwo = +prompt('Your second number:');

const askNumberThree = +prompt('Your third number:');


const answerArithmeticAverage = Math.round((askNumberOne + askNumberTwo + askNumberThree) / 3);

alert(`WOW! You catch ${answerArithmeticAverage} snowflakes!`);

