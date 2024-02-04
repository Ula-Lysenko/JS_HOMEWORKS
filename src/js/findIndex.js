/* eslint-disable */
const filmsOfTarantino = [
  { film: "Kill Bill. Vol. 1", year: 2003 },
  { film: "Kill Bill. Vol. 2", year: 2004 },
  { film: "Django Unchained", year: 2012 },
];

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
