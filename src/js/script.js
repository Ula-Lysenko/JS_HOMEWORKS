'use strict';

const calcCostOfPotatoes = function (liters, price) {
    const numOfPotatoes = liters * 4;
    const weightOfPotatoes = Math.ceil((numOfPotatoes * 75) / 1000);
    const totalCostOfPotatoes = weightOfPotatoes * price;

    return totalCostOfPotatoes;
}

console.log(calcCostOfPotatoes(48, 13));

