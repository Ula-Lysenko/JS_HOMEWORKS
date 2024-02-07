/* eslint-disable */

// 1
const addOne = function (x) {
  return x + 1;
};

const square = function (x) {
  return x * x;
};

const arrCallbacks = [addOne, square, addOne];

const runCallbacks = function (callbacks, num) {
  return callbacks.reduce(function (accumulator, currentCallback) {
    return currentCallback(accumulator);
  }, num);
};

const result = runCallbacks(arrCallbacks, 11);
console.log(result);

// 2
function addOne2(x) {
  return x + 1;
}

function square2(x) {
  return x * x;
}

function multiplyByTwo(x) {
  return x * 2;
}

function composeFunctions(...funcs) {
  return function (num) {
    return funcs.reduceRight(function (accumulator, currentCallback) {
      return currentCallback(accumulator);
    }, num);
  };
}

const composedFunction = composeFunctions(addOne2, square2, multiplyByTwo);

const result2 = composedFunction(3);
console.log(result2);
