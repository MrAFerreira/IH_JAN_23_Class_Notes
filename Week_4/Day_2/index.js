// HTTP Methods

// GET - fetching resources - "R"
// POST - to create something / secure operations - "C"
// PUT - To update information - "U"
// DELETE - deletes things  -"D"

// CRUD

// Status codes

// 2xx - Success
// 3xx - Redirect
// 4xx - Client errors
// 5xx - Server errors

const myColors = require('colors/safe');
const cowsay = require('cowsay');

console.log(myColors.yellow('Hello there'));
console.log(myColors.red.underline('I am underlined'));
console.log(myColors.rainbow('Unicorn woooooooooooooooo'));
console.log(myColors.trap('Unicorn woooooooooooooooo'));
console.log(myColors.inverse('Unicorn woooooooooooooooo'));

console.log(
  myColors.rainbow(
    cowsay.say({
      text: "I'm a rainbooooow cow",
      e: '-O',
      T: 'Y ',
    })
  )
);
