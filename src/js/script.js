'use strict';

const askNumber = +prompt('Your number?');

const askDegree = +prompt('Your degree?');

function checkNumber(number, degree = 1) {
    if (isNaN(number) && isNaN(degree)) {
        return alert('Error!')
    } else {
        return number ** degree;
    }
}

const result = checkNumber(askNumber, askDegree);
alert('Your result: ' + result);


