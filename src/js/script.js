'use strict';

const askNumber = +prompt('Your number?');

const askDegree = +prompt('Your degree?');

function checkNumber(number, degree = 1) {
    if (isNaN(number) || isNaN(degree)) throw new Error(`parameters are not numbers`);
    return number ** degree;
}

const result = checkNumber(askNumber, askDegree);
alert('Your result: ' + result);


