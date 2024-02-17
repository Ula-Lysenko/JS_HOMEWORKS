/* eslint-disable */
function myBind(fn, context, ...args) {
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
}

// Приклад використання:
function greet(name) {
  console.log(`Hello, ${name}!`);
}

const boundGreet = myBind(greet, null, "John");
boundGreet(); // Виведе: "Hello, John!"
