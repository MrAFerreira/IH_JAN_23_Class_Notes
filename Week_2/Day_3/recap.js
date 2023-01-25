/* RECAP */

//let mainDiv = document.querySelector('#main');
let mainDiv = document.getElementById('main');

let paragraph = mainDiv.querySelector('.bold');

//paragraph.innerHTML = '<b>Hello</b>';

paragraph.style.fontWeight = 'bold';
paragraph.style.color = 'red';

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Happy Wednesday everyone';

//appendChild
//insertBefore

//mainDiv.insertBefore(h2Tag, paragraph);
//first, the parent
//what we want to insert
//before what
mainDiv.appendChild(h2Tag);

let button = document.getElementById('alert');

/* button.onclick = function (){

} */

button.addEventListener('click', () => {
  alert('Hello Tomás');
});
