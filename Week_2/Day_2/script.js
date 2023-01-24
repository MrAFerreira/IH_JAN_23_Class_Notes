/* /* DOM manipulation 

// Target by Id

// document
//console.log(document);

let branchDiv = document.getElementById('branch');
//console.log(branchDiv);

//innerHTML
branchDiv.innerHTML = '<h1>Hello there</h1>';

//style

branchDiv.style.backgroundColor = 'green';
branchDiv.style.border = '5px solid blue';

let changeColor = (element) => {
  if (element.style.backgroundColor === 'green') {
    element.style.backgroundColor = 'yellow';
  } else {
    element.style.backgroundColor = 'green';
  }
};

//When a callback accepts an argument, we cannot invoke it so we pass the argument as the last one
//WRONG-> setInterval(changeColor(branchDiv), 1000) <-NO BUENO
// CORRECT VERSION-> setInterval(changeColor, 1000, branchDiv);

let leaves = document.getElementsByClassName('leaf');
//getElementsByClassName returns an array-like object - it has index and length BUT you cannot use array methods
//console.log(leaves);

const randomNumbers = () => {
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].innerHTML = Math.floor(Math.random() * 11);
  }
};

//setInterval(randomNumbers, 1000);

//Tag

let allDivs = document.getElementsByTagName('div');
//console.log(allDivs);

//querySelector
//accepts a valid css selector and returns THE FIRST element it finds
let firstLeaf = document.querySelector('.leaf');
//console.log(firstLeaf);
firstLeaf.innerHTML = "I'm first";

//querySelectorAll
let fourDivs = document.querySelectorAll('.leaf, .twig');
//console.log(fourDivs);

//getElementById - returns one thing
//getElementsByClassName - returns everything with that class in an array-like object
//getElementsByTagName - returns everything with that tag
//querySelector - returns the first thing that matches the query
//querySelectorAll - returns everything that matches the query

//let twigDiv = document.getElementsByClassName('twig')[0];
let twigDiv = document.querySelector('.twig');
console.log(twigDiv);

//changing id
twigDiv.id = 'green';

//classname
console.log(twigDiv.className);

//classList methods
//add remove toggle

twigDiv.classList.add('fruit');
console.log(twigDiv.className); //twig fruit
twigDiv.classList.remove('twig');
console.log(twigDiv.className); // fruit
twigDiv.classList.toggle('dark');
console.log(twigDiv.className); // fruit dark
 */

//let link = document.getElementsByClassName('google-link')[0];
let link = document.querySelector('.google-link');

//attributes

//getAttribute
console.log(link.getAttribute('href'));

//setAttribute - 2 arguments : what attribute, what value
//The attribute doesn't need to be in HTML first
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

//removeAttribute
link.removeAttribute('id');

//createElement - the element gets created in JS

let h2tag = document.createElement('h2');
console.log(h2tag);
//Adding content to that element
h2tag.innerHTML = "I'm an h2";

//appendChild
//we need to select a parent element

//document.getElementById('content').appendChild(h2Tag)
let contentDiv = document.getElementById('content');
//contentDiv.appendChild(h2tag);

//insertBefore
let h1Title = contentDiv.querySelector('#main-title');
//first what to insert, second: before what you want to insert
contentDiv.insertBefore(h2tag, h1Title);

let body = document.querySelector('body');
let paragraphToRemove = document.getElementById('question');

//removeChild

body.removeChild(paragraphToRemove);

//Clear an element
//body.innerHTML = '';

//Events
let list = document.getElementById('item-list');
let button = document.getElementById('add-item');

// we could use a control variable - let count = 0;
//or we can check how many li's exist

let allLi = list.getElementsByTagName('li');

button.onclick = function () {
  //Everytime the button is clicked:
  //add an <li></li> to the list
  //with the content: `Item number x`

  //using createElement
  let newLi = document.createElement('li');
  newLi.innerHTML = `Item number: ${allLi.length + 1} `;

  //add a function that listens to the click
  newLi.onclick = function (e) {
    console.log(e.currentTarget);
  };

  list.appendChild(newLi);

  //changing innerHTML
  /* list.innerHTML += `<li>Item number: ${allLi.length + 1} </li>`; */
};

/* let count = 0;
//adding a function the onclick event
button.onclick = function () {
  count++;
  console.log(count);
  h1Title.innerHTML = count;
};
 */

//inputs
let input = document.getElementById('username');
let userButton = document.getElementById('create-user');

let username = '';
userButton.onclick = function () {
  console.log(input.value);
  username = input.value;
  h1Title.innerHTML = input.value;
};
