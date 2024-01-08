'use strict';

const userAge = prompt('Your year of birth?');

const userCity = prompt('Your ciy?');

const userSport = prompt('Your favorite sport?');


const date = new Date();
let age = 0;

if (userAge) {
    age = date.getFullYear() - userAge;
} else {
    alert ('So sorry, but You not enter Your year of birth!');
}


let city = null;

if (userCity === 'Kyiv') {
    city = 'You live in the capital of Ukraine!';
} else if (userCity === 'London') {
    city = 'You live in the capital of United Kingdom!';
} else if (userCity === 'Washington') {
    city = 'You live in the capital of USA!';
} else if (userCity === '' || userCity === null) {
    alert ('So sorry, but You not enter Your city!');
} else {
    city = `You live in ${userCity}!`;
}


let sport = null;

if (userSport === 'Biathlon') {
    sport = 'Cool! Do you want to become a new BOE Johannes?';
} else if (userSport === 'Swimming') {
    sport = 'Cool! Do you want to become a new Michael Phelps?';
} else if (userSport === 'Poker') {
    sport = 'Cool! Do you want to become a new Daniel Weinman?';
} else if (userSport === '' || userSport === null) {
    alert('So sorry, but You not enter Your favorite sport!');
} else {
    sport = 'Cool! This sport is for special people!';
}


alert(`Your age ${age} years old, great! \n 
Your city: ${city} \n
Your favorite sport: ${sport}`);
