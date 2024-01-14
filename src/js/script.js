'use strict';

const calcCostOfPotatoes = function () {
    const numOfLiters = 48;
    const numOfPotatoes = numOfLiters * 4;
    const weightOfPotatoes = Math.ceil((numOfPotatoes * 75) / 1000);
    const pricePerKgPotatoes = 13;
    const totalCostOfPotatoes = weightOfPotatoes * pricePerKgPotatoes;

    return totalCostOfPotatoes;
}

console.log(calcCostOfPotatoes());

