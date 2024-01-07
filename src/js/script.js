'use strict';

const numOrStr = prompt('Enter number or string:');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        alert('Canceled!');
        break;
    case numOrStr === '':
        alert('Empty string!');
        break;
    case isNaN(+numOrStr):
        alert('Number is Ba_NaN!');
        break;
    default:
        alert(`Ok!`);
}