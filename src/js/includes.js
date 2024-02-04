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

console.log(typesOfGrape.includes("Pinotage"));

const includesOfGrape = function (item, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) return true;
  }
  return false;
};

console.log(includesOfGrape("Pino", typesOfGrape));
console.log(includesOfGrape("Pinotage", typesOfGrape));
console.log(includesOfGrape("grillo", typesOfGrape));
