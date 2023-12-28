'use strict';

const askNumberOne = +prompt('Your first number:');

const askNumberTwo = +prompt('Your second number:');


alert(`${askNumberOne} + ${askNumberTwo} = ${askNumberOne + askNumberTwo}
${askNumberOne} - ${askNumberTwo} = ${askNumberOne - askNumberTwo}
${askNumberOne} * ${askNumberTwo} = ${askNumberOne * askNumberTwo}
${askNumberOne} / ${askNumberTwo} = ${askNumberOne / askNumberTwo}`
);

// or, maybe

alert(`${askNumberOne} + ${askNumberTwo} = ${askNumberOne + askNumberTwo}`);
alert(`${askNumberOne} - ${askNumberTwo} = ${askNumberOne - askNumberTwo}`);
alert(`${askNumberOne} * ${askNumberTwo} = ${askNumberOne * askNumberTwo}`);
alert(`${askNumberOne} / ${askNumberTwo} = ${askNumberOne / askNumberTwo}`);