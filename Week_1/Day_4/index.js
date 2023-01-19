/* 

RECAP:

const user = {
  name: 'João',
  course: 'WebDev',
};

const user2 = {
  name: 'João',
  course: 'WebDev',
};

console.log(user.name === user2.name);

const myStore = {
  keyboard: 10,
  mouse: 20,
  screen: 30,
};

const userInput = 'keyboard';

/* const joaoStore = {
  name: "João",
  mouse: 20
}
 

const joaoStore = {
  name: user.name,
  mouse: myStore.mouse
}

console.log(userInput in myStore);

for (let product in myStore) {
  if (myStore[product] >= 20) {
    console.log(product, myStore[product]);
  }
}

//it uses the value of the variable
console.log(myStore[userInput]);

//it searches for the specific word
console.log(myStore.userInput);

const myArray = [
  'Hello',
  { name: 'John Cena' },
  null,
  [
    'January',
    {
      title: 'Lord of The Rings',
      publishers: ['Penguin Books'],
    },
  ],
];

console.log(myArray[3][1].publishers[0]);
 */

//Functions
//Function declaration

function sum(a, b) {
  return a + b;
}

//console.log(sum(2, 5));

//we CAN store functions in variables
//But we don't need to
const mySum = sum;
//console.log(mySum(2, 5));

//Function expression

const subtraction = function (a, b) {
  return a - b;
};

//console.log(subtraction(5, 3));

//declaredFunction();

function declaredFunction() {
  console.log('I am using function declaration');
}

//Function declaration gets hoisted

const expressedFunction = function () {
  console.log('I am using function expression');
};

//expressedFunction();

//Callbacks
// Callback is a function passed to another function as an argument

/* 
Without callback:
function doFirst() {
  setTimeout(function () {
    console.log('I run first');
  }, 1000);
} */

function doFirst(callback) {
  setTimeout(function () {
    console.log('I run first');
    callback();
  }, 1000);
}

function doAfter() {
  console.log('I run after');
}
function doAfterwards() {
  console.log('I run afterwards');
}

//doFirst(doAfterwards);

//Anonymous functions
//Nameless functions that we use when we just want to run something once

/* setTimeout(function () {
  console.log("I'll wait for a bit");
}, 2000); */

const namesArray = ['Maria', 'Pedro', 'Miguel'];

/* namesArray.forEach(function (name) {
  console.log(name);
}); */

//Arrow functions
// It only works with function expression

//Non-arrow way
/* const greeting = function (name) {
  return `Hello there ${name}`;
}; */

//Arrow syntax
/* const greeting = (name) => {
  if(something) {
    return `Hello there ${name}`;
  } else {
    return "Nope"
  }
};
 */

//Arrow syntax with a straight return/single action

const greeting = (name) => `Hey there ${name}`;

const arrowSum = (a, b) => a + b;

const hello = () => console.log('Hello world');

//console.log(greeting('Farid'));

//methods are just functions that are inside objects
//In this case, "this" inside setInterval refers to the SetInterval function itself
//Remember, functions are objects
/* const user = {
  name: 'Diogo',
  job: 'PM',
  age: 31,
  getOlder: function () {
    setInterval(function () {
      console.log(this)
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};
 */
const user = {
  name: 'Diogo',
  job: 'PM',
  age: 31,
  getOlder: function () {
    setInterval(() => {
      //console.log(this);
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};

//user.getOlder();

//Array methods

//foreach way
let numArray = [1, 2, 3, 4, 5];

let newArray = [];
numArray.forEach((number) => {
  let multipliedNumber = number * 2;
  newArray.push(multipliedNumber);
});

// map
//map doesn't mutate the original array, so we need to store the result in a variable
const multipliedArray = numArray.map((number) => number * 2);

/* console.log(numArray);
console.log(multipliedArray); */

const silent = ['can', 'you', 'hear', 'me', 'now'];

/* const scream = silent.map((word) => word.toUpperCase() + '!';); */

const scream = silent.map((word) => {
  return word.toUpperCase() + '!';
});

//console.log(scream);
//using map, create a new array which has all of the cities capitalized

const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

/* const capitalCitiesShort = cities.map((city) =>  city[0].toUpperCase() + city.slice(1)
); */

const capitalCities = cities.map((city) => {
  return city[0].toUpperCase() + city.slice(1);
});

//console.log(capitalCities);

//Reduce

//let numArray = [1, 2, 3, 4, 5];

const summedValue = numArray.reduce((acc, val) => {
  //console.log(`The accumulator is: ${acc}, and the value is: ${val}`);
  return acc + val;
}, 0);

//Short-version:
// numArray.reduce((acc, val) => acc + val, 0)

//console.log(summedValue);
//Using reduce, calculate the total value of the products
const products = [
  { name: 'Keyboard', price: 30.0 },
  { name: 'Mouse', price: 64.99 },
  { name: 'Controller', price: 59.8 },
  { name: 'Speakers', price: 43.7 },
];

const productTotal = products.reduce((acc, val) => {
  return acc + val.price;
}, 0);

//console.log(productTotal);
const separate = ['U', 'n', 'i', 't', 'e', 'd'];

const united = separate.reduce((acc, val) => acc + val, 'Manchester ');

//console.log(united);

//Filter
//returns a new array

const evenArr = numArray.filter((number) => {
  return number % 2 === 0;
});

const evenShort = numArray.filter((number) => number % 2 === 0);

//console.log(evenArr);

//Using filter create a new array with only the available items

const products2 = [
  { name: 'Keyboard', price: 30.0, available: true },
  { name: 'Mouse', price: 64.99, available: false },
  { name: 'Controller', price: 59.8, available: true },
  { name: 'Speakers', price: 43.7, available: false },
];

const availableProducts = products2.filter((product) => {
  return product.available === true;
});

//shorterVersion
const available = products2.filter((product) => product.available);
//console.log(available);

//Sort
//sort mutates the array

const numbers = [12, 5432, 56, 98, 934, 987, 23];

//numbers.sort();
console.log(numbers);

// behind the scenes sort uses a compare function like this:

function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
/* 45 - 90 = -45
90 - 45 = 45
90 - 90 = 0
 */

/* numbers.sort(function (a, b) {
  if (a - b < 0) return -1;
  else if (a - b > 0) return 1;
  else return 0;
});
 */
//super short syntax
numbers.sort((a, b) => a - b);

console.log(numbers);

const greetings = ['hello', 'Hola', 'oi', 'Aloha', 'Hey', 'ahoy'];

greetings.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  else if (a.toLowerCase() > b.toLowerCase()) return 1;
  else return 0;
});

console.log(greetings);

//reverse

greetings.reverse();

console.log(greetings);

const randomArr = [12, 45, 67890, 1, null, undefined, []];

randomArr.reverse();

console.log(randomArr);
