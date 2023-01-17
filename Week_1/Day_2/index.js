//Functions
//Block of reusable code that performs an action
// DRY - Don't repeat yourself
// KISS - Keep it simple stupid

// Function declaration

function functionName(parameters) {
  //perform all the actions
  return something;
}

//Calling / invoking the function
//functionName()

function sayHello(name) {
  console.log(`Hello there ${name}`);
}

/* sayHello('Gabriel');
sayHello('Alex');
sayHello('Pedro'); */

let myName = 'André';
//Parameter vs Argument

//Parameters are the placeholder names of what the function accepts
function meetGreet(name1, name2) {
  console.log(`Hey ${name1}, meet ${name2}`);
}

//Arguments are the values we give the function when we call it
//meetGreet(myName, 'Wagner');
//meetGreet('João', 'André');

//Return

function sayName(name) {
  if (name.length === 0) {
    return 'No name was provided';
  }
  return `Name is ${name}`;
}

let student1 = sayName('Farid');
let invisibleStudent = sayName('');

//console.log(invisibleStudent);
sayName('Caroline');

//console.log(student1);
//console.log(sayName('Paulo'));

/* function sum(a, b) {
  return a + b;
}

console.log(sum(10, 15)); */

function createStudentCard(name, cohort, school) {
  return {
    name,
    cohort,
    campus: school,
  };
}

let student2 = createStudentCard('Maria', 'Webdev', 'Lisbon');
//console.log(student2.name);

function catchEm(poke1, poke2, poke3) {
  const pokedex = [poke1, poke2, poke3];
  return pokedex;
  // return [poke1, poke2, poke3]
}

const caioDex = catchEm('Eevee', 'Ditto', 'Meowth');

//console.log(caioDex);
myAverageArray = [350, 560, 680, 10];

// Create a function called avg (or average)
// This function accepts an array as an argument
// Returns the average value of all the elements in the array
// Sum all the elements and divide by the number of elements

/* function avg(arr) {
  if (!arr) return;

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
} */

function sumArr(arr) {
  if (!arr) return;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
//console.log(sumArr(myAverageArray));

function avg(arr) {
  if (!arr) return;
  let totalSum = sumArr(arr);
  return totalSum / arr.length;
  // return sum(arr) / arr.length
}

//console.log(avg(myAverageArray));

//Create a function called evenOrOdd
//the function accepts a string
// 2 possible returns:
// if the string is even: `The string x has x characters, which is an even number`
// if the string is odd: `The string x has x characters, which is an odd number`
let checkString1 = 'I wonder what you will get';
let checkString2 = 'I mean, there are only two options right?';

function evenOrOdd(str) {
  if (!str) return;

  if (str.length % 2 !== 0) {
    let result = `The string ${str} has ${str.length} characters, which is an odd number`;
    return result;
  } else {
    return `The string ${str} has ${str.length} characters, which is an even number`;
  }
}

/* console.log(evenOrOdd(checkString1));
console.log(evenOrOdd(checkString2)); */

// Reusable code (we can use them as many times as we want)
// Separation of concerns
// Single responsibility
// Abstraction

// Arrays

// collection of values

const emptyArray = [];

const namesArray = ['Miguel', 'Tiago', 'Francisco'];

const mixedArr = [true, 30, 'Hello', {}, [23, null]];

console.log(namesArray[3]);

//Add

namesArray.push('Tomás');
namesArray.unshift('Mariana');

//Remove

let removedStudent = namesArray.pop();
//console.log(removedStudent);

namesArray.shift();

//splice

console.log(namesArray);
//namesArray.splice(1, 1);
console.log(namesArray);

for (let i = 0; i < namesArray.length; i++) {
  console.log(namesArray[i]);
}

// start with an empty array
let myArr = [];
//Have an array with 100 elements, from 0 to 100
//you can't use push

for (let i = 100; i >= 0; i--) {
  myArr.unshift(i);
}

//console.log(myArr);

//const namesArray = ['Miguel', 'Tiago', 'Francisco'];

//forEach
/* namesArray.forEach(function (name, index) {
  console.log(`${name} is going to take seat nº :${index} `);
});
 */
// arrow function
//namesArray.forEach((name) => console.log(name));

//split

let longString = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood ?';

let words = longString.split('wood ');

//console.log(words);

//console.lg('Hello there');
//const planet;

function multiply(a, b) {
  let result = 0;
  result = a * b;
  return result;
}

console.log(multiply(2, 3));

function sumNumbers(a, b) {
  return a + b;
}

function sumMyNumbers() {
  sumNumbers(10, 5);
}

function initialize() {
  sumMyNumbers();
}

initialize();
