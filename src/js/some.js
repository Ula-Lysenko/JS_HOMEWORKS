/* eslint-disable */
const filmsOfTarantino = [
  { film: "Kill Bill. Vol. 1", year: 2003 },
  { film: "Kill Bill. Vol. 2", year: 2004 },
  { film: "Django Unchained", year: 2012 },
];

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
