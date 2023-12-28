'use strict';

const askOperation = prompt('What math operation do you need? (add, sub, multi, div)');

const askNumberOne = +prompt('Your first number:');

const askNumberTwo = +prompt('Your second number:');


if (askOperation === 'add') alert(`${askNumberOne} + ${askNumberTwo} = ${askNumberOne + askNumberTwo}`);

if (askOperation === 'sub') alert(`${askNumberOne} - ${askNumberTwo} = ${askNumberOne - askNumberTwo}`);

if (askOperation === 'multi') alert(`${askNumberOne} * ${askNumberTwo} = ${askNumberOne * askNumberTwo}`);

if (askOperation === 'div') alert(`${askNumberOne} / ${askNumberTwo} = ${askNumberOne / askNumberTwo}`);

