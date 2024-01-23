'use strict'

const arrRandom = [];
const getNumRandomUniq = function () {
    const numRandom = Math.ceil(Math.random() * 100);
    if (arrRandom.includes(numRandom)) return getNumRandomUniq();
    arrRandom.push(numRandom);
    return numRandom;
}

for (let i = 0; i <= 99; i++) {
    console.log(getNumRandomUniq());
}



