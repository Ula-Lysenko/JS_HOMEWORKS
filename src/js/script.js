'use strict';

const age = prompt('age?');

const city = prompt('ciy?');

const sport = prompt('sport?');

if (age) {
    alert(age);
} else {
    alert ('So sorry, but You didn`t want to enter Your date of birth!');
}

if (city === 'Kyiv') {
    alert('You live in the capital of Ukraine!');
} else if (city === 'London') {
    alert('You live in the capital of United Kingdom!');
} else if (city === 'Washington') {
    alert('You live in the capital of USA!');
} else if (city === '' || city === null) {
    alert ('So sorry, but You didn`t want to enter Your city!');
} else {
    alert(`You live in ${city}!`);
}

if (sport === 'Biathlon') {
    alert('Cool! Do you want to become a new BOE Johannes?');
} else if (sport === 'Swimming') {
    alert('Cool! Do you want to become a new Michael Phelps?');
} else if (sport === 'Poker') {
    alert('Cool! Do you want to become a new Daniel Weinman?');
} else if (sport === '' || sport === null) {
    alert('So sorry, but You didn`t want to enter Your favorite sport!');
} else {
    alert('Cool! This sport is for special people!');
}

