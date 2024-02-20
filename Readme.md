_Парсинг JSON рядка:_

Напишіть функцію, яка приймає JSON рядок та повертає об'єкт JavaScript. Використовуйте конструкцію **try...catch**, 
щоб перехопити помилку у випадку, якщо рядок не є валідним JSON.

**// Приклад використання:**

console.log(parseJSON('{"name": "John", "age": 30}')); // повинно вивести об'єкт { name: 'John', age: 30 }
console.log(parseJSON('{"name": "John", "age":')); // повинно вивести помилку "Invalid JSON string"