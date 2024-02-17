/* eslint-disable */

// реалізація методу

const userAge = +prompt("Age, please?");

const user = {
  name: "Lola",
  age: userAge,
};

const checkAge = function (age) {
  return age >= 21
    ? `Congratulations, ${this.name}! You can buy it!`
    : `Sorry! Your age ${this.age} is a TDZ!`;
};

console.log(checkAge.apply(user, [userAge]));

// реалізація функції

const myApply = function (func, context, arrArg) {
  if (!Array.isArray(arrArg)) {
    throw new Error("arrArg must be an array");
  }
  return func(...arrArg);
};

const arrArg = [userAge];

console.log(myApply(checkAge, user, arrArg));
