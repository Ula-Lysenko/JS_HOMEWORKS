/* eslint-disable */
const castHungerGames = [
  { name: "Katniss", age: 17 },
  { name: "Peeta", age: 19 },
  { name: "Haymitch", age: 42 },
  { name: "Effie", age: 35 },
  { name: "Pr. Snow", age: 66 },
];

// реалізація методу
const ageOfHungerGames = castHungerGames.reduce(function (
  accumulator,
  currentValue,
) {
  return accumulator + currentValue.age;
}, 0);

const midAgeOfHungerGames = ageOfHungerGames / castHungerGames.length;
console.log(midAgeOfHungerGames);

// реалізація функції
const reduceFunc = function (arr, callback, initValue) {
  let accumulator = initValue === undefined ? arr[0] : initValue;
  for (let i = initValue === undefined ? 1 : 0; i < arr.length; i += 1) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
};

const ageOfHungerGames2 = reduceFunc(
  castHungerGames,
  function (accumulator, currentValue) {
    return accumulator + currentValue.age;
  },
  0,
);

const midAgeOfHungerGames2 = ageOfHungerGames2 / castHungerGames.length;
console.log(midAgeOfHungerGames2);
