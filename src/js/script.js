/* eslint-disable */

// реалізація методу

const user = {
  name: "Gray Wolf",
};

const sayHello = function (age) {
  console.log(`Hello, ${this.name}, your age ${age}!`);
};

sayHello();

const bindUser = sayHello.bind(user, 666);

bindUser();

// реалізація функції

const myBind = function (func, context, ...arg) {
  return function (...newArg) {
    return func.apply(context, [...arg, ...newArg]);
  };
};

const bindUser2 = myBind(sayHello, user, 999);
bindUser2();
