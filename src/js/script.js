'use strict';

const userAge = prompt('Your date of birth?');

const userCity = prompt('Your ciy?');

const userSport = prompt('Your favorite sport?');


let answerAge;

if (userAge) {
    // alert(userAge);
    answerAge = userAge.getFullYear() - userAge;
} else {
    alert ('So sorry, but You didn`t want to enter Your date of birth!');
}

let answerCity;
// let answerCityLondon;
// let answerCityWashington;
// let answerCityElse;


if (userCity === 'Kyiv') {
    // alert('You live in the capital of Ukraine!');
    answerCity = 'You live in the capital of Ukraine!';
} else if (userCity === 'London') {
    // alert('You live in the capital of United Kingdom!');
    answerCity = 'You live in the capital of United Kingdom!';
} else if (userCity === 'Washington') {
    // alert('You live in the capital of USA!');
    answerCity = 'You live in the capital of USA!';
} else if (userCity === '' || userCity === null) {
    alert ('So sorry, but You didn`t want to enter Your city!');
} else {
    // alert(`You live in ${userCity}!`);
    answerCity = `You live in ${userCity}!`;
}

let answerSport;
// let answerSportSwimming;
// let answerSportPoker;
// let answerSportElse;

if (userSport === 'Biathlon') {
    // alert('Cool! Do you want to become a new BOE Johannes?');
    answerSport = 'Cool! Do you want to become a new BOE Johannes?';
} else if (userSport === 'Swimming') {
    // alert('Cool! Do you want to become a new Michael Phelps?');
    answerSport = 'Cool! Do you want to become a new Michael Phelps?';
} else if (userSport === 'Poker') {
    // alert('Cool! Do you want to become a new Daniel Weinman?');
    answerSport = 'Cool! Do you want to become a new Daniel Weinman?';
} else if (userSport === '' || userSport === null) {
    alert('So sorry, but You didn`t want to enter Your favorite sport!');
} else {
    // alert('Cool! This sport is for special people!');
    answerSport = 'Cool! This sport is for special people!';
}

alert(`Your age ${answerAge} years old \n 
Your city ${answerCity} \n
Your favorite sport ${answerSport}`)
