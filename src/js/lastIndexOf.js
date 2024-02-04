/* eslint-disable */
const typesOfGrape = [
  "Torrontes",
  "Trebbiano",
  "Grillo",
  "Chenin Blanc",
  "Malbec",
  "Torrontes",
  "Pinotage",
];

console.log(typesOfGrape.lastIndexOf("Torrontes"));

const lastIndexOfGrape = function (item, arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] === item) return i;
  }
  return -1;
};

console.log(lastIndexOfGrape("Torrontes", typesOfGrape));
console.log(lastIndexOfGrape("Malbec", typesOfGrape));
console.log(lastIndexOfGrape("Grillo", typesOfGrape));
console.log(lastIndexOfGrape("Pinot Noir", typesOfGrape));
