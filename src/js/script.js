// task 1
const getFactorial = function (num) {
  return num === 1 ? num : num * getFactorial(num - 1);
};

console.log(getFactorial(4));

// task 2
const getDegree = function (num, deg) {
  return deg === 1 ? num : num * getDegree(num, deg - 1);
};

console.log(getDegree(8, 1));

// task 3
const getSum = function (a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};

console.log(getSum(155, 10));
