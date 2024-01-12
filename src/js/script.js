'use strict';

function padString(string, length, sign, left = false) {
    if (typeof string !== 'string' || string === '') {
        return 'Error! Not string!';
    } else if (typeof length !== 'number' || length === '') {
        return 'Error! Not length (number)!';
    } else if (typeof sign !== 'string' || sign === '') {
        return 'Error! Not sign (string)!';
    } else if (typeof left !== 'boolean') {
        return 'Error! Not left (boolean)!';
    }
    if (string.length >= length) {
        return string.slice(0, length);
    }
    const emptyInd = length - string.length;
    const stringNew = left ? sign.repeat(emptyInd) + string : string + sign.repeat(emptyInd);
    return stringNew;
}

console.log(padString('Sparkling wine', 35, '*'));
console.log(padString('Tarantino', 19, '#', true));