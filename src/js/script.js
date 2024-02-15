/* eslint-disable */
const complexArr = [
  [1, 2, [3.1, 3.2], 4],
  [5, [6, [7, [8, 9]]]],
  [[70, 71], 82, 3],
];

console.log(complexArr);

const standardArr = [1, 2, 4, 88, 90, 32];

const getNewArr = function (arr) {
  if (arguments.length !== 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided",
    );
  }
  const newArr = [];
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      newArr.push(...getNewArr(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};

console.log(getNewArr(complexArr));

console.log(getNewArr(standardArr));
