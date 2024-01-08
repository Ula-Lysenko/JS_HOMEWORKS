'use strict';

const askNumber = +prompt('Your number?');

if (askNumber < 1) {
    console.log('NaN');
}

for (let i = 2; i <= askNumber; i++) {
    if (askNumber % i === 0) {
        console.log('min divisor ' + i);
        break;
    }

    else if (askNumber % i !== 0) {
        console.log('prime num ' + askNumber);
    }

}


