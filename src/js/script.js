// 1

const namesLionKing = ["Simba", "Pumbaa", "Timon", "Rafiki"];
console.log(namesLionKing);

const longNamesLionKing = namesLionKing.filter((item) => item.length > 5);
console.log(longNamesLionKing);

// 2

const arrNum = [22, 33, 44, 55, 66];
console.log(arrNum);

const evenArrNum = arrNum.filter((item) => item % 2 === 0);
console.log(`even numbers: ${evenArrNum}`);

const sumEvenArrNum = evenArrNum.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0,
);
console.log(`sum of even numbers: ${sumEvenArrNum}`);

// 3

const averageArrNum = arrNum.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0,
);
console.log(`sum of numbers: ${averageArrNum}`);
console.log(`average of numbers: ${averageArrNum / arrNum.length}`);
