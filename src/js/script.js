'use strict';

const showPositiveNum = function (array) {
const arrNew = [];
if (!array.length) throw new Error(`parameter 'array' is empty`);
for (let i = 0; i <= array.length; i++) {
    if (array[i] > 0) arrNew.push(array[i]);
}
if (arrNew.length) return arrNew;
return null;
}

const arr = [-2, 4, -5, -77, 8, 6];
console.log(showPositiveNum(arr));