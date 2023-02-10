//Destructuring

let student = {
  name: 'André',
  bootcamp: 'WebDev',
  favouriteMusic: 'Rock',
  favouriteBand: 'Linkin Park',
  address: {
    street: 'Javascript avenue',
    number: NaN,
  },
  //city: 'Barcelona',
};

/* 
Old way:
let name = student.name;
let bootcamp = student.bootcamp;
let favouriteMusic = student.favouriteMusic;
let favouriteBand = student.favouriteBand; */

let {
  bootcamp: course,
  favouriteMusic,
  city = 'Lisboa',
  car = 'Lambo',
  address: { street, number },
} = student;

//console.log(`${name} goes to the ${course} course and drives a ${car}`);
/* console.log(course);
console.log(city);
console.log(street);
console.log(number);
console.log(favouriteMusic);
console.log(student); */

const pokemon = {
  name: 'Skarmory',
  types: {
    main: 'Steel',
    secondary: 'Flying',
  },
  generation: 2,
};

const {
  name,
  generation,
  types: { main },
} = pokemon;

//console.log(`${name} is from generation ${generation} and its main type is ${main}`);
// Skarmory is from generation 2 and its main type is Steel

const campuses = ['Lisbon', 'Barcelona', 'Paris', 'Amsterdam'];

/* let [firstCity, secondCity, , fourthCity, fifthCampus = 'Berlin'] = campuses;

let thirdCity = campuses[2];

console.log(firstCity, secondCity, fourthCity, fifthCampus); */

const destinations = [
  ['Lisbon', 'pt'],
  ['Cologne', 'de'],
  ['Ponta Delgada', 'pt'],
  ['Niterói', 'br'],
];
console.log(destinations[2][0]);

const [, , [thirdDestination]] = destinations;

//console.log(thirdDestination);

let [a, b = 2, c, d = '🐙'] = [3, 4];

console.log(a, b, c, d);
// 3, 2 , undefined , 🐙
// 3, 4, undefined, 🐙
//

//Spread and Rest

const reptiles = ['lizard', 'snake', 'iguana'];
const mammals = ['elephant', 'panda', 'cheetah'];

const animals = [...reptiles, ...mammals];
const newStudent = { ...student };

console.log(animals);

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val);
}

console.log(sum(2, 4, 5, 6, 7, 8, 9, 9));
console.log(sum(2, 4));

function showMovie(title, year, ...cast) {
  console.log(
    `${title} is from the year ${year} and includes a cast featuring: ${cast.join(', ')}`
  );
  console.log(cast);
}

showMovie('Die Hard', 1989, 'Bruce Willys', 'Alan Rickman', 'George Clooney');
