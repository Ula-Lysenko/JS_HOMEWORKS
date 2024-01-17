'use strict';

const askNum = +prompt('Число, будь ласка:');

if (isNaN(askNum) || askNum === 0 || askNum === null) alert('Ні-ні! Тільки число!');
else if (askNum % 10 === 1 && askNum % 100 !== 11) alert(askNum + ' рік');
else if (askNum % 10 >= 2 && askNum % 10 <= 4 && askNum % 100 !== 12 && askNum % 100 !== 13 && askNum % 100 !== 14 ) alert (askNum + ' роки');
else alert(askNum + ' років');

