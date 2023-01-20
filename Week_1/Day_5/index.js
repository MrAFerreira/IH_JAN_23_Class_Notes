/* //function declaration
hello();

function hello() {
  console.log('hello');
}

//function expression

const goodbye = () => console.log('goobye');

goodbye();

let user = {
  name: 'Tiago',
  sayName: function () {
    console.log(this.name);
  },
};

user.sayName();

let myNumArr = [1, 2, 3, 4, 5];

let oddNumbers = myNumArr.filter((number) => number % 2 !== 0);

console.log(oddNumbers);

console.log(myNumArr);

let pokemons = [
  { name: 'Bulbasaur', level: 10 },
  { name: 'Charmander', level: 5 },
];

let leveledUp = pokemons.map((pokemon) => {
  return pokemon.level + 5;
});

console.log(leveledUp);
 */

//OOP

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
let dice;

let player1 = {
  name: 'Caroline',
  color: 'black',
  position: 0,
  cash: 1000,
  move: function () {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`${this.name} just lost the game`);
    }
  },
  info: function () {
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  },
};

let player2 = {
  name: 'Duarte',
  color: 'orange',
  position: 0,
  cash: 1000,
  move: function () {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`${this.name} just lost the game`);
    }
  },
  info: function () {
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  },
};
let player3 = {
  name: 'Eveline',
  color: 'green',
  position: 0,
  cash: 1000,
  move: function () {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`${this.name} just lost the game`);
    }
  },
  info: function () {
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  },
};

// Caroline's turn

//Roll the dice
//dice = Math.floor(Math.random() * 6) + 1;

//Calculate the position
//player1.position = (player1.position + dice) % squares.length;

//Update the cash
//player1.cash += squares[player1.position];
//1000
//player1.position = 4
// squares[4] = -40
//player1.cash += -40

//Check if the player loses
/* if (player1.cash <= 0) {
  console.log(`${player1.name} just lost the game`);
}

//Check the game
console.log(`${player1.name} is in position ${player1.position} and has ${player1.cash}`); */

//Duarte's turn
/* dice = Math.floor(Math.random() * 6) + 1;
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash <= 0) {
  console.log(`${player2.name} just lost the game`);
}
console.log(`${player2.name} is in position ${player2.position} and has ${player2.cash}`);
 */
//Eveline's turn
/* dice = Math.floor(Math.random() * 6) + 1;
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash <= 0) {
  console.log(`${player3.name} just lost the game`);
}
console.log(`${player3.name} is in position ${player3.position} and has ${player3.cash}`);
 */

//Turn 1
/* player1.move();
player2.move();
player3.move();

player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();

//Display info
player1.info();
player2.info();
player3.info(); */

//create an object called library

// library has a property called shelf, which is an empty array
//create a method called addBook that receives a string as an argument and adds it to the shelf

//create a method called printLibrary that console.logs all the books in the shelf

// Bonus: When  you print the books, print them as a single string with the titles separated by a comma

//"Lord of the rings, Dracula, Da Vinci code"

const library = {
  shelf: [],
  addBook(book) {
    this.shelf.push(book);
  },
  printLibrary() {
    console.log(this.shelf.join(', '));
  },
};
/* 
library.addBook('Anna Karina');
library.addBook('The little prince');
library.addBook('Varity');

library.printLibrary(); */

//Classes

class Player {
  //constructor can accept variables (if you need it)
  constructor(name, color) {
    this.position = 0;
    this.cash = 1000;
    this.name = name;
    this.color = color;
  }
  //after the constructor we declare the methods
  move() {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`${this.name} just lost the game`);
    }
  }

  info() {
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  }
}

const player4 = new Player('Tomás', 'white');
const player5 = new Player('Pedro', 'red');
const player6 = new Player('Déborah', 'purple');
/* 
const player4 = {}
player4.position = 0;
player.cash = 1000...

*/
/* 
player4.move();
player5.move();
player6.move();

player4.move();
player5.move();
player6.move();

player4.info();
player5.info();
player6.info(); */

//Inheritance

class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

//extends will make the Cat class have the same values as Animal
class Cat extends Animal {
  constructor(name, color, sound, asleep) {
    super(name, color, sound);
    this.asleep = asleep;
  }

  changeState() {
    this.asleep = !this.asleep;
  }
}

const tom = new Cat('Tom', 'blueish gray', 'meow', false);

console.log(tom);
tom.changeState();
console.log(tom);

tom.makeSound();

class Penguin extends Animal {
  constructor(name, fishCaught) {
    super(name, 'black and white', 'Pardon, excuse me');
    this.fishCaught = fishCaught;
  }
}

const happy = new Penguin('Happy', 7);
console.log(happy);
happy.makeSound();

//Create a new class called Whale that extends Animal
//constructor - name , color, sound, belly (empty array)
// method called eat - takes an argument (string) and adds the value to belly
// create a white whale named Moby, sound is "Yum!"
//make the whale eat Ahab and Pequod (separately)

class Whale extends Animal {
  //constructor is just accepting what we want as variables
  constructor(name, color, sound) {
    //super needs what the parent class has
    super(name, color, sound);
    //belly will always be an empty array so we can just add it as such
    this.belly = [];
  }

  eat(food) {
    this.belly.push(food);
    this.makeSound();
  }

  makeSound() {
    console.log(this.sound.toUpperCase());
  }
}

const moby = new Whale('Moby', 'white', 'Yum!');
moby.eat('Ahab');
moby.eat('Pequod');
console.log(moby);

//4 principles of OOP

// Abstraction

// Inheritance

// Encapsulation

//Polymorphism
