/* eslint-disable */

// 1
console.log(a);
var a = 10;

// Побачимо - undefined. Hoisting відбувається без присвоєння значення.

// 2
myFunction();

function myFunction() {
  console.log("Hello, world!");
}

// Буде працювати.
// Синтаксис Function Declaration дозволяє викликати функцію раніше, ніж вона була створена в коді.
// Коли JavaScript починає свою роботу, він спочатку шукає всі глобальні функції (Function Declaration) і на їх основі запускає процес ініціалізації.

// 3
console.log(b);
let b = 5;

// Помилка - Cannot access 'b' before initialization. Змінна об`явлена, але доступу до неї немає.

// 4
const myArrowFunction = () => {
  console.log("Hello from arrow function");
};

myArrowFunction();

// Буде працювати. Але якщо в правій частині лише одна інструкція, фігурні дужки можна пропустити.
// Дужки дозволяють включити в стрілкову функцію більше однієї інструкції, але при цьому потрібно явно вказати return, щоб щось повернути.

// Приклад помилки:
// Cannot access 'addRequire' before initialization. Оскільки функція створена через Function Expression (записана у змінну),
// спроба викликати її раніше, призведе до помилки, на відміну від Function Declaration.

addRequire("GIT", listOfRequires);
console.log(listOfRequires);

const addRequire = function (skill, requires) {
  requires.push(skill);
};

// Приклад правильного кода:

const userName = "Ula";
const sayBye = "Good night";
console.log(`${userName}! ${sayBye}!`);
