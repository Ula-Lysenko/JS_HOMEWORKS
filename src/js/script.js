/* eslint-disable */
// відключила eslint, бо виправляв на стрілкові функції, я поки хочу базово подивитись, як виглядає/працює

// indexOf
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

// lastIndexOf
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

// includes
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

// find
const filmsOfTarantino = [
  { film: "Kill Bill. Vol. 1", year: 2003 },
  { film: "Kill Bill. Vol. 2", year: 2004 },
  { film: "Django Unchained", year: 2012 },
];

const findFilmsOfTarantino = filmsOfTarantino.find(function (item) {
  // return item.year === 2012;
  return item.year > 2003 && item.year < 2012;
  // return item.year === 2019;
});

console.log(findFilmsOfTarantino);

const findFilmsOfTarantino2 = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
};

console.log(
  findFilmsOfTarantino2(filmsOfTarantino, function (item) {
    // return item.year === 2003;
    // return item.film === "Django Unchained";
    return item.year === 2019;
  }),
);

// findIndex
const findIndexFilmsOfTarantino = filmsOfTarantino.findIndex(function (item) {
  if (item.year === 2012) return true;
});

console.log(findIndexFilmsOfTarantino);

const findIndexFilmsOfTarantino2 = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

console.log(
  findIndexFilmsOfTarantino2(filmsOfTarantino, function (item) {
    // if (item.year > 2003) return true;
    if (item.year > 2015) return true;
  }),
);

// some
const someFilmsOfTarantino = filmsOfTarantino.some(function (item) {
  return item.year === 2004;
});

console.log(someFilmsOfTarantino);

const someFilmsOfTarantino2 = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

console.log(
  someFilmsOfTarantino2(filmsOfTarantino, function (item) {
    return item.year < 2012;
  }),
);

// every
const everyFilmsOfTarantino = filmsOfTarantino.every(function (item) {
  return item.year === 2012;
});

console.log(everyFilmsOfTarantino);

const everyFilmsOfTarantino2 = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

console.log(
  everyFilmsOfTarantino2(filmsOfTarantino, function (item) {
    return item.year <= 2012;
  }),
);
