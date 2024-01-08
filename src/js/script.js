'use strict';


// 1
for (let numMin = 10, numMax = 20; numMin <= numMax; numMin++) {
  document.write(numMin + ',' + ' ');
}


// 2
for (let numMin = 10, numMax = 20; numMin <= numMax; numMin++) {
  document.write(numMin * 2 + ',' + ' ');
}


// 3
for (let numOne = 1; numOne <= 10; numOne++) {
  document.write(`7 * ${numOne} = ${numOne * 7} <br/>`);
}


// 4
let sum1 = 0;
for (let numOne = 1; numOne <= 15; numOne++) {
  sum1 += numOne;
//   document.write(sum1 + '<br/>');
}
document.write(sum1);


// 5
let multi = 1;
for (let numOne = 15; numOne <= 35; numOne++) {
  multi = multi * numOne;
  // document.write(multi + '<br/>');
}
document.write(multi);


// 6
let sum2 = 0;
for (let numOne = 1; numOne <= 500; numOne++) {
  sum2 += numOne;
    // document.write(sum2 + '<br/>');
}
document.write(sum2 + '<br/>');
let sumMedium = sum2 / 2;
document.write(sumMedium);


// 7
let sum3 = 0;
for (let numOne = 30; numOne <= 80; numOne++) {
  if (numOne % 2 === 0) {
    // document.write(numOne + '<br/>');
    sum3 += numOne;
    // document.write(sum3 + '<br/>');
  }
}
document.write(sum3);


// 8
for (let numOne = 100; numOne <= 200; numOne++) {
  if (numOne % 3 === 0) {
    document.write(numOne + '<br/>');
  }
}


// 9, 10, 11
const numOrigin = +prompt('Your number?');
let count = 0;
let sum4 = 0;
for (let numOne = 2; numOne * 2 <= numOrigin; numOne++) {
  if (numOrigin % numOne === 0) {
    document.write('all divisors: ' + numOne + '<br/>');
    if (numOne % 2 === 0) {
      count++;
      sum4 += numOne;
    }
  }
}
document.write(`even divisors: ${count} <br/>`);
document.write(`sum of even divisors: ${sum4} <br/>`);


// 12
for (let numOne = 1; numOne <= 10; numOne++) {
    for (let numTwo = 1; numTwo <= 10; numTwo++) {
      document.write(`${numOne} * ${numTwo} = ${numTwo * numOne} <br/>`);
    }

    document.write('<hr/>');
}
