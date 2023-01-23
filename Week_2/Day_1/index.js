// Scope

// Global Scope

let name = 'André';

//Function scope

function printNumber() {
  let myNumber = 2;
  console.log(myNumber);
}

// does not work -> console.log(myNumber);

// Block scope
for (let i = 0; i < 2; i++) {
  //new scope
  let total = 0;
}

//console.log(total);

var message = 'Hello from the global scope';

function sayHello() {
  var greeting = 'Hello from function scope';
  return greeting;
}

/* console.log(message);
console.log(greeting);
 */
var outerVar = 1;

function inner() {
  var innerVar = 2;
  console.log(outerVar);
}

//inner();
//console.log(innerVar);

var campus = 'Lisbon';

var campus = 'Barcelona';

//console.log(campus);

let course = 'Webdev';

course = 'Data';

/* for (var i = 0; i < 30; i++) {
  console.log(`Inside the loop: ${i}`);
}
console.log(i); */
/* 
for (let i = 0; i < 30; i++) {
  console.log(`Inside the loop: ${i}`);
}
console.log(i); */

//Creating variables with the same name in  different scopes is not a good idea
let student = 'Duarte';

if (true) {
  let student = 'Erika';
  //console.log('Inside if', student);
}
//console.log('Outside if', student);

//var gets hoisted with the value of undefined
//console.log(city);

var city = 'Lisbon';
//console.log(city);

//Shadowing

let a = 5;
let b = 10;

function shadow() {
  a = 4; // reassigning a value
  let b = 3; // shadowing - using the same name as a variable available in the parent scope
  console.log(b); // 3
}

//shadow();
//console.log(a); // 4
//console.log(b); // 10

//Value vs Reference

let price1 = 10.99;
let price2 = price1;
price1 = 20.99;

//console.log(price1 === price2);

const book1 = { title: 'Moby Dick', author: 'Herman Melville' };
/* const book2 = { title: 'Moby Dick', author: 'Herman Melville' }; */
//When we use an object as the value for a variable, it's pointing to she SAME object in memory
// it does NOT create a copy
const book2 = book1;

//console.log(book1 === book2);

//book3 is not linked to the same value as book1 and book2
const book3 = { title: 'Moby Dick', author: 'Herman Melville' };
/* console.log(book1);
console.log(book2);
console.log(book3);
 */
book2.year = 1840;

/* console.log(book1);
console.log(book2);
console.log(book3);
 */
let students = ['Alex', 'Miguel', 'Marisha'];
let students2 = ['Alex', 'Miguel', 'Marisha'];
let students3 = students;

//console.log(students === students2);
//console.log(students3 === students); //true - point to the same value
//console.log(students3 === students2); //false - point to different arrays (even if they have the same values inside)

const movie = {
  title: 'Die hard',
  cast: ['Bruce Willis', 'Alan Rickman'],
  year: 1989,
};

//Copy an object
//Json Parse and Json stingify

const stringedMovie = JSON.stringify(movie);
//console.log(stringedMovie, typeof stringedMovie);

const parsedMovie = JSON.parse(stringedMovie);
//console.log(parsedMovie, typeof parsedMovie);

//console.log(movie === parsedMovie);
//movie.year = 1989;
//console.log(typeof parsedMovie.year);

//console.log(movie);
//console.log(parsedMovie);

//one line version
//const newMovie = JSON.parse(JSON.stringify(movie));

//Arrays

const classroom = ['Joana', 'Mariana', 'Alex', 'Rafaela'];

//spread operator
const classCopy = [...classroom];
//slice
//const sliceCopy = classroom.slice()

//console.log(classroom === classCopy);

const pokedex = [
  ['Bulbasaur', 'Chikorita'],
  ['Charmander', 'Cyndaquil'],
];

//Shallow copy
//Just copies the parent array
const pokedexCopy = [...pokedex];

//Deep clone /copy
//Json parse/stingify - copies everything inside
const deepCopy = JSON.parse(JSON.stringify(pokedex));

pokedex[0].push('Trecko');
//console.log(pokedexCopy);
//console.log(deepCopy);

//Javascript - a single-threaded synchronous language with some asynchronous behaviours

function someCallback() {
  console.log('I am asynchronous');
}

//setTimeout(someCallback, 10000);

//console.log('I am synchronous');

let timeoutId = setTimeout(() => {
  console.log('Cancel this request');
}, 5000);

//clearTimeout
clearTimeout(timeoutId);

//Game example
/* if(player.lives < 0){
  clearTimeout(timeoutId);
}
 */

//setInterval

const intervalId = setInterval(() => {
  console.log('1 second');
}, 1000);

clearInterval(intervalId);

//create a function called countTen
//When you run the function it's going to console.log the amount of seconds passed, so..
//1
//2
//3 ...
//After 10, it stops

//Paulo's solution
/* let t = 1;

let intervalID = setInterval(function countTen() {
  console.log(t);
  t++;

  if (t > 10) {
    clearInterval(intervalID);
  }
}, 1000);
 */

const countTen = () => {
  let currentTime = 1;

  let intervalId = setInterval(() => {
    if (currentTime >= 10) clearInterval(intervalId);
    console.log(currentTime);
    currentTime++;
  }, 1000);
};

//countTen();

let user = {
  name: 'Diogo',
  age: 31,
  getOlder() {
    setInterval(() => {
      this.age++;
      console.log(this.age);
    }, 1000);
  },
};

user.getOlder();
