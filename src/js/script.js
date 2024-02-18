// 1

const getSum = (x, y) => x + y;
console.log(getSum(44, 66));

// 2

const getStrLen = (str) => str.length;
console.log(getStrLen("si vis pacem, para bellum")); // 25

// 3 - цикл for

const getNewArr = (arr) => {
  const arrNumResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrNumResult.push(arr[i] + 1);
  }
  return arrNumResult;
};

const arrNum = [21, 32, 43];
console.log(arrNum);

console.log(getNewArr(arrNum));

// 3 - метод map

const getNewArr2 = (arr) => arr.map((item) => item + 1);

const arrNum2 = [79, 89, 99];
console.log(arrNum2);

console.log(getNewArr2(arrNum2));
