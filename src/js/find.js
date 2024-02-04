/* eslint-disable */
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
