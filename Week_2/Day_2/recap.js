//Recap:

let a = 10;

function recap() {
  a = 5; // reassigning value
  console.log('first', a); // 5
}
//recap();
//console.log('second', a); // 5

const game1 = { title: 'Pokemon Violet', publisher: 'Nintendo' };
const game2 = { title: 'Pokemon Violet', publisher: 'Nintendo' };
const game3 = game2;

console.log(game1 === game2); // false
console.log(game1 === game3); // false
console.log(game3 === game2); // true

//changing game3 is the same as changing game2 (they point to the same value)
game3.year = 2022;

//console.log(game2);

function first() {
  const timeoutId1 = setTimeout(() => {
    console.log('Who is first');
  }, 4000);
  console.log('Hello there');
}

function second() {
  const timeoutId2 = setTimeout(() => {
    console.log('I wonder');
  }, 3000);
  console.log('Hello everyone');
}

//first();
//second();
//Hello there
//Hello everyone
// I wonder
//Who is first
