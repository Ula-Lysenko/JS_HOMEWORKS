// 1

const myBox = {
  wine: 225,
  liqueur: 760,
  rum: 1450,
  champagne: 2480,
};

console.log(myBox);

const getDiscountMyBox = (obj) => {
  const discountMyBox = {};
  for (const key of Object.keys(obj)) {
    discountMyBox[key] = obj[key] * 0.9;
  }
  return discountMyBox;
};

console.log(getDiscountMyBox(myBox));

// or

const discountMyBox = {};
Object.keys(myBox).forEach((key) => {
  discountMyBox[key] = myBox[key] * 0.9;
});

console.log(getDiscountMyBox(myBox));

// 2

const arrStudents = [
  { name: "Luke Skywalker", grade: 80 },
  { name: "Obi-Wan Kenobi", grade: 84 },
  { name: "Han Solo", grade: 89 },
  { name: "Yoda", grade: 100 },
  { name: "C-3PO", grade: 99 },
  { name: "R2-D2", grade: 98 },
];

console.log(arrStudents);

const welldoneArrStudents = arrStudents.filter((item) => item.grade > 90);
console.log(welldoneArrStudents);
welldoneArrStudents.forEach((item) =>
  console.log(`Well done - ${item.name}, ${item.grade}`),
);
