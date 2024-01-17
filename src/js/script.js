'use strict';

const getNumRandomUniq = function () {
    const arrRandom = [];
    let numRandom = null;
    while (arrRandom.length < 100) {
       numRandom = Math.ceil(Math.random() * 100);
       let numFound = false;
        for (let i = 0; i < arrRandom.length; i++) {
            if (arrRandom[i] === numRandom) numFound = true;
        }
        if (!numFound) arrRandom.push(numRandom);
    }
    return arrRandom[numRandom];
}


console.log(getNumRandomUniq());
