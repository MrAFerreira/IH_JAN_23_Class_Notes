// {} ()

// variables

// let , const

// Declaration

let welcome;
let a, b, c;

//Initialization

welcome = 'Hello Ironhackers';

//Declaration + initialization

let greeting = 'Welcome aboard!';

//console.log(welcome);
//console.log(typeof welcome);

//reassigning a variable
welcome = true;
//console.log(welcome);
//console.log(typeof welcome);

//const

const ourPlanet = 'Earth';

//console.log(ourPlanet);

//We can't do this

// ourPlanet = 'Mars';
// const system;

//VsCode shortcut for commenting:
// shift + option + a
// shift + alt + a

// Single Line comment
/*
Multi
Line
Comment
*/

// Data types
// Primitive  - They are immutable

// String
// Number
// Boolean
// Null
// Undefined
// Symbol (new in ES6)

// Numbers

const age = 28;
const price = 10.99;

const name = 'Farid';

let division = name / 2;
// NaN appears when we do an invalid math operation
//console.log(division);
//console.log(typeof division);

// Operators

// + sum
// - subtraction
// * multiplication
// / division

console.log(1000 / 4);

// ** exponential
// % modulos / remainder

//console.log(2 ** 3);
// 2 * 2 * 2

//console.log(11 % 2);

let total = 0;

//total = total + 10;
total += 10;
//-= *= /= %=

// Expression
total + 10;

console.log(total);
console.log(10 * 5);

// Strings

let firstname = 'Lucas';
let lastname = 'Zaquine';

// Concatenation
const oldMessage = 'Hello ' + firstname + ' ' + lastname + ' how are you?';

firstname += 'Zuchinni';
//console.log(firstname);

//String interpolation

const newMessage = `Hello ${firstname} ${lastname}, how are you?`;

//console.log(oldMessage)
//console.log(newMessage);

//escaping
let myFavourite = '"Lord of the Rings" ? It\'s my favourite book';

//console.log(myFavourite);

// length property

//console.log(firstname.length);

//Accessing characters
const myString = 'This is a long message';

//console.log(myString.charAt(2));

let lt = 'André';
//console.log(lt.length);
//console.log(lt.charAt(4));

//console.log(myString[2]);

//Finding a substring

/* console.log(myString.indexOf('is'));
console.log(myString.indexOf('short'));
console.log(myString.indexOf(lt));

console.log(myString.lastIndexOf('is')); */

//repeat

//console.log('ah'.repeat(3));
const lyrics = 'alright ';

//console.log(lyrics.repeat(7));

let message = 'Hey there, how are you?';

//subtring - first number where you start cutting, INCLUSIVE
//second number - where the cut ends, EXCLUDED
//slice

//console.log(message.substring(0, 3));
//console.log(message.slice(-3, -1));

//localeCompare
/* console.log('age'.localeCompare('bonus'));
console.log('bonus'.localeCompare('age'));
console.log('age'.localeCompare('age')); */
console.log('Age'.localeCompare('age'));

let userInput = 'A OMG SO FUNNY CAT VIDEO';
let userComment = 'this is a very amusing cat compilation v.02';

//toLowerCase
console.log(userInput.toLowerCase().localeCompare(userComment.toLowerCase()));
//Be careful when comparing numbers as strings
console.log('2'.localeCompare('10'));

const sentence = 'To be, or not to be, that is the question.';

//startsWith
console.log(sentence.startsWith('not to be'));
console.log(sentence.startsWith('not to be', 10));

//endsWith

console.log(sentence.endsWith('not to be'));
console.log(sentence.endsWith('not to be', 19));

//includes
console.log(sentence.includes('not'));
console.log(sentence.includes('T', 1));

//Numbers

//Math
// Round up

let myNumber = 10.5;

//Round up
console.log(Math.ceil(myNumber));
//Round down
console.log(Math.floor(myNumber));
//Round to nearest integer
console.log(Math.round(myNumber));

const longNumber = 10.87645;

let roundedToOne = Math.round(longNumber * 10) / 10;
console.log(roundedToOne);
let roundedToThree = Math.round(longNumber * 1000) / 1000;
console.log(roundedToThree);

//tofixed - turns the number into a string
/* const twoDecimals = longNumber.toFixed(2);
console.log(typeof twoDecimals); */

//Using Number()
/* const backToNumber = Number(twoDecimals);
console.log(backToNumber);
console.log(typeof backToNumber); */

//using +
const twoDecimals = +longNumber.toFixed(2);
//parseInt - same as Number
parseInt(longNumber.toFixed(2));

//random

console.log(Math.floor(Math.random() * 10 + 1));

// Min and max
console.log(Math.min(10, 789, 5.098, 677));
console.log(Math.max(10, 789, 5.098, 677));
console.log(Math.PI);

//Boolean
let aBool = true;
let bBool = false;

//Operators

// OR ||
//is true if something is true
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || 10 > 1);

// AND && - Only returns true if everything is true
console.log(true && true);
console.log(false && false && true && false && true);

//Short-circuit
//console.log(true || ...)
//console.log(false && ...)

// NOT !
console.log(!true);
console.log(!false);
console.log(!(10 > 1));

//undefined

let user;
console.log(user);

//null
let username = null;
console.log(username);

// Truthy and Falsy
let myNum = 1289;

/* if (true && 'January' && 'false' && '0' && 567 && [] && {} && myNum) {
  console.log('These are all truthy');
}

if (!(false && 0 && '' && undefined && null && NaN)) {
  console.log('These are all falsy');
}
 */

//Immutability

let campus = 'Lisbon';

//console.log(campus[0]);

campus = 'Barcelona';

//console.log(campus);
campus[0] = 'X';
campus = 'Xarcelona';

//console.log(campus);

let x = 10;

let y = x;

x = 20;

/* console.log(y);
console.log(x);
 */

// Conditionals and loops

//if
/* if (10 > 1) {
  console.log('Ten is greater than one');
} else {
  console.log('Ten is not greater than one');
} */

/* let newAge = 45;

if (newAge <= 16) {
  console.log('You have a junior discount');
} else if (newAge >= 60) {
  console.log('You get a senior discount');
} else {
  console.log('No discount for you');
}

 */

//Type coercion
const first = 10;
const second = 20;

if (first === second) {
  console.log('The numbers are the same');
} else {
  if (first > second) {
    console.log('First is bigger');
  } else {
    console.log('First is smaller');
  }
}

// Switch

let pokemon = 'Mewto';
let type = '';

switch (pokemon) {
  case 'Pikachu':
    type = 'Electric';
    break;
  case 'Bulbasaur':
    type = 'Grass';
    break;
  case 'Squirtle':
  case 'Totodile':
  case 'Mudkip':
    type = 'Water';
    break;
  case 'Charizard':
    type = 'Fire';
    break;
  default:
    type = 'Normal';
}

//console.log(`You chose ${pokemon} which is of type ${type}`);

//loops

// while loop
//if the condition never changes to false, we get an infinite loop
//let count = 0;

/* while (count <= 100) {
  console.log(count);
  //count += 1;
  count++
} */

// do ... while
//do while always runs one time at least
/* do {
  console.log(count);
  count++;
} while (count < 0);

 */

//for

/* for (let i = 0; i <= 100; i++) {
  console.log(i);
} */
/* for (let i = 100; i >= 0; i--) {
  console.log(i);
} */

//console.log from 1 to 30
// 10, 20, 30 - "ten", "twenty", "thirty"

//1
//2 ..
//9
//ten
/* let count = 0;
while (count < 30) {
  count++;
  if (count === 10) {
    console.log('ten');
  } else if (count === 20) {
    console.log('twenty');
  } else if (count === 30) {
    console.log('thirty');
  } else {
    console.log(count);
  }
} */

let count = 0;

/* while (count < 5) {
  count++;
  console.log(count);
  if (count === 3) {
    break;
  }
} */

while (count < 5) {
  count++;
  if (count === 3) {
    continue;
  }
  console.log(count);
}

//for of
//iterable

let ourCampus = 'Onions';

for (const value of ourCampus) {
  console.log(value);
}

for (let i = 0; i < ourCampus.length; i++) {
  console.log(ourCampus[i]);
}

//GIT
//DVCS
//Distributed Version Control System
// Git - local
