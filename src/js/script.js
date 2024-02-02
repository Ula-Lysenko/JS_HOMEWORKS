/* eslint-disable */

// indexOf
const typeOfGrape = [
  "Torrontes",
  "Trebbiano",
  "Grillo",
  "Chenin Blanc",
  "Malbec",
  "Pinotage",
];

// console.log(typeOfGrape.indexOf("Malbec"));

const indexOfGrape = function (item, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) return i;
  }
  return -1;
};
//
// console.log(indexOfGrape("Malbec", typeOfGrape));
// console.log(indexOfGrape("Grillo", typeOfGrape));
// console.log(indexOfGrape("Pinot Noir", typeOfGrape));
// console.log(indexOfGrape("pinotage", typeOfGrape)); // регістрозалежність

// lastIndexOf
const typeOfGrape2 = [
  "Torrontes",
  "Trebbiano",
  "Grillo",
  "Chenin Blanc",
  "Malbec",
  "Torrontes",
  "Pinotage",
];

// console.log(typeOfGrape2.lastIndexOf("Torrontes"));

const lastIndexOfGrape = function (item, arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] === item) return i;
  }
  return -1;
};

// console.log(lastIndexOfGrape("Torrontes", typeOfGrape2));
// console.log(lastIndexOfGrape("Malbec", typeOfGrape2));
// console.log(lastIndexOfGrape("Grillo", typeOfGrape2));
// console.log(lastIndexOfGrape("Pinot Noir", typeOfGrape2));

// includes
const typeOfGrape3 = [
  "Torrontes",
  "Trebbiano",
  "Grillo",
  "Chenin Blanc",
  "Malbec",
  "Pinotage",
];

// console.log(typeOfGrape3.includes("Pinotage"));

const includesOfGrape = function (item, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) return true;
  }
  return false;
};

// console.log(includesOfGrape("Pino", typeOfGrape3));
// console.log(includesOfGrape("Pinotage", typeOfGrape3));

// find
const typeOfGrape4 = [
  "Torrontes",
  "Trebbiano",
  "Grillo",
  "Chenin Blanc",
  "Malbec",
  "Pinotage",
];

const findTypeOfGrape = typeOfGrape4.find(function (item) {
  return item === "Trebbiano";
  // return item === "Pinot Noir";
});

console.log(findTypeOfGrape);

const find = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
};

console.log(
  find(typeOfGrape4, function (item) {
    return item === "Grillolo";
  }),
);

// // findIndex
// const num = [22, 33, 44, 55, 66, 77];
// const findIndexOfNum = num.findIndex(function (item) {
//   if (item > 68) return true;
//   // if (item > 680) return true;
// });
//
// console.log(findIndexOfNum);
//
// const findIndexOfGrape2 = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }
//   return -1;
// };
//
// console.log(
//   findIndexOfGrape2(num, function (item) {
//     if (item > 48) return true;
//   }),
// );
