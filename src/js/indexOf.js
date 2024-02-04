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

console.log(typesOfGrape.indexOf("Malbec"));
console.log(typesOfGrape.indexOf("Torrontes"));

const indexOfGrape = function (item, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) return i;
  }
  return -1;
};

console.log(indexOfGrape("Malbec", typesOfGrape));
console.log(indexOfGrape("Grillo", typesOfGrape));
console.log(indexOfGrape("Pinot Noir", typesOfGrape));
console.log(indexOfGrape("pinotage", typesOfGrape)); // регістрозалежність
