/* let myArr = ['Lucas', 'John Cena', 'Bruno', 'João'];

myArr.forEach(sayName);

myArr.forEach((name) => console.log(name));

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

function sayName(name) {
  console.log(name);
}
 */

/* Objects */
/* Key /value pairs */

const myStore = {
  laptop: 1000,
  'office chair': null,
  mouse: 15,
  screen: 'Not available',
  keyboard: '',
};

/* dot notation */
//console.log(myStore.screen);

/* bracket notation */
/* console.log(myStore['office chair']);
console.log(myStore['keyboard']); */

let userSearch = 'mouse';

/* With bracket notation we can pass a variable because it will read the value inside ("mouse") and not the name of the variable */
//console.log(myStore[userSearch]);

/* THe line below returns undefined because it's looking for a key with the name userSearch */
//console.log(myStore.userSearch);

console.log(myStore);

/* myStore['super car'] = 10000; */

/* adding a variable value */
let userSellPrice = 10000;
myStore.car = userSellPrice;

/* 
let userItem = "my car"
myStore[userItem] = 1000 
*/
console.log(myStore);

/* edit an object */

console.log(myStore.keyboard);
myStore.keyboard = 15;
console.log(myStore.keyboard);

let user = {
  firstName: 'Duarte',
  email: 'duart.developer@nasa.com',
  password: '1234mybirthday',
};

user.address = 'Lisbon';

/* checking if something exists - in */

console.log('spaceship' in myStore);
console.log('keyboard' in myStore);

//deleting

delete myStore.keyboard;

console.log(myStore);

// Object.keys

let myStoreKeys = Object.keys(myStore);
console.log(myStoreKeys);

//Object.values
let myStoreValues = Object.values(myStore);
console.log(myStoreValues);

//for in loop

for (let product in myStore) {
  console.log(product);
  console.log(`The product: ${product}, is currently: ${myStore[product]}`);
}

// Create an object with 2 keys/values - name and city

const me = {
  name: 'André',
  city: 'Santo Tirso',
};
//We cannot reassign if it's a constant
//objects are different even if the content is the same
/* me = {
  name: 'André',
  city: 'Santo Tirso',
}; */

// create 3 new song objects  - title, artist, genre
const song1 = { title: 'Ride on Time', artist: 'Tatsuro Yamashita', genre: 'City Pop' };
const song2 = { title: 'Song 2', artist: 'Blur', genre: 'Rock' };
const song3 = { title: 'Enter Sandman', artist: 'Metallica', genre: 'Pop' };

// Create a new property/key inside of user called library
// library will be an array with the 3 songs inside

/* me.library = [];
me.library.push(song1);
me.library.push(song2);
me.library.push(song3); */
me.library = [song1, song2, song3];
//console.log(me);

//console.log(me.library[1].genre);

const pokedex = [
  { name: 'Bulbasaur', type: 'Grass' },
  { name: 'Charmander', type: 'Fire' },
  { name: 'Squirtle', type: 'Water' },
];

const snorlax = { name: 'Snorlax', type: 'Normal' };
pokedex.push(snorlax);

//console.log(pokedex);

//Matrix - array with arrays inside
const nameDex = [
  ['Charmander', 'Bulbasaur', 'Squirtle'],
  ['Totodile', 'Cyndaquil', 'Chikorita'],
];

//console.log(nameDex[1][1]);

//to duplicate line:
//shift + option (or alt) + up/down

//To select multiple occurences
// command/ctrl + d
const company = [
  [
    { name: 'Johanna Baldwin', email: 'sootwu@num.je' },
    { name: 'Gordon Williamson', email: 'vegidag@mo.pk' },
    { name: 'Augusta Harper', email: 'kaef@cep.ba' },
  ],
  [
    { name: 'Lelia Morrison', email: 'bebu@kacvekze.dz' },
    { name: 'Stephen Boyd', email: 'el@kezun.vc' },
    { name: 'Ruth Bailey', email: 'cokobkin@uvbizlam.om' },
  ],
  [
    { name: 'Victoria Pearson', email: 'abozo@pozbov.vn' },
    { name: 'May Roberts', email: 'enoseho@rosisa.be' },
    { name: 'Winifred Berry', email: 'vudlamce@uzsoj.ss' },
  ],
];
console.log(company[0][0].name);
console.log(company[2][0].email);

//database example
//const mewto = {}

// pikachu.sprites.versions["generation-i"].yellow.back_default
