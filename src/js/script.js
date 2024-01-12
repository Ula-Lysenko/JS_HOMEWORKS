'use strict';

function generateKey(length, characters) {
    let passwordRandom = '';
    while (passwordRandom.length < length) {
        passwordRandom += characters[Math.floor(Math.random() * characters.length)];
    }
    return passwordRandom;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(7, characters);

console.log(key);