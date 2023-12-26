'use strict';

// 1

const student = {
    name: 'LanaBanana',
    age: 35,
    grade: 'low',
};

console.log(student);

student.grade = 'high';

console.log(student);

student.course = 'JS';

console.log(student);

// 2

const book = {
    title: 'I See You Are Interested In The Dark',
    author: 'Hilarion Pavlyuk',
    year: '2020',
}

console.log(book);

book.publisher = {
    name: 'Old Lion Publishing House',
    location: 'Lviv',
};

console.log(book);

// 3

const movie = {
    title: 'The Hateful Eight',
    director:'Quentin Jerome Tarantino',
    year:'2015',
    genre: 'Western',
};

console.log(movie);

for (let key in movie) {
    console.log(key);
    console.log(movie[key]);
}

// 4

const personOne = {
    name: 'Kamilla',
    game: 'Hogwarts Legacy',
    hobby: 'stalking',
};

const personTwo = {
    name: 'Kamilla',
    game: 'Hogwarts Legacy',
    hobby: 'stalking',
};

console.log(personOne==personTwo);
console.log(personOne===personTwo);

const personThree = personTwo;

console.log(personThree==personTwo);
console.log(personThree===personTwo);

// 5

const animals =[
    {type:'lion', name:'Simba',},
    {type:'warthog', name:'Pumbaa',},
    {type:'meerkat', name:'Timon',},
    {type:'mandrill', name:'Rafiki',},
];

console.log(animals);

animals.push({type:'horse', name:'BoJack',});

console.log(animals);

animals.unshift({type:'cat', name:'Princess Carolyn',});

console.log(animals);



