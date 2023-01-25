/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('example');

const ctx = canvas.getContext('2d');

// rectangles
// paths

// fillRect , strokeRect, clearRect
ctx.fillStyle = 'green';

function drawSquares() {
  //fill rect fills with color
  ctx.fillRect(400, 200, 200, 200);
  //clearRect takes out color
  ctx.clearRect(450, 250, 100, 100);
  //strokeRect creates the outline of a rectangle
  ctx.strokeRect(450, 250, 250, 250);
}

//drawSquares();

//paths
// beginPath, closePath, stroke, fill, moveTo, lineTo

function drawPath() {
  //tell js that we'll start drawing the path
  ctx.beginPath();

  //move the "pen" to these coordinates
  ctx.moveTo(50, 50);

  //draw a straigt line ending at these coordinates
  ctx.lineTo(250, 50);

  ctx.lineTo(250, 150);

  //actually paint the line in the canvas
  ctx.stroke();

  //close tha path so we can start one later
  ctx.closePath();
}

//drawPath();

function drawTriangle() {
  ctx.beginPath();

  ctx.moveTo(250, 150);
  ctx.lineTo(150, 100);
  ctx.lineTo(350, 100);

  ctx.fill();
  ctx.closePath();
}

//drawTriangle();

//arc arcTo

//ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise)

function drawCircle() {
  ctx.beginPath();

  ctx.arc(500, 300, 100, 0, Math.PI * 2);
  ctx.lineWidth = 20;
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'red';

  //ctx.stroke();
  ctx.fill();

  ctx.closePath();
}

//drawCircle();
/* 
//Main Field (green )
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 900, 450);

//Styles
ctx.strokeStyle = 'white';
ctx.lineWidth = 20;

//outer rectangle
ctx.strokeRect(0, 0, 900, 450);

//area
ctx.strokeRect(0, 125, 100, 200);
ctx.strokeRect(800, 125, 100, 200);

//centerfield
ctx.beginPath();
ctx.arc(450, 225, 75, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

//smaller centerfield
ctx.beginPath();
ctx.arc(450, 225, 25, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();

//middlefield line
ctx.beginPath();
ctx.moveTo(450, 0);
ctx.lineTo(450, 450);
ctx.stroke();
ctx.closePath();

//half-circles
//left
ctx.beginPath();
ctx.arc(100, 225, 45, Math.PI / 2, (Math.PI * 3) / 2, 'clockwise');
ctx.stroke();
ctx.closePath();

//right
ctx.beginPath();
ctx.arc(800, 225, 45, Math.PI / 2, (Math.PI * 3) / 2);
ctx.stroke();
ctx.closePath(); */

/* let img = new Image(); // Create new img element
img.addEventListener(
  'load',
  function () {
    // execute drawImage statements here
    ctx.drawImage(img, 200, 100, 100, 200);
  },
  false
); */
//img.src = 'images/cris.jpeg'; // Set source path

//fillStyle, strokeStyle

//ctx.fillStyle = 'red';
//ctx.fillStyle = '#ff0000';
//ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillStyle = 'rgb(255, 0, 0, 0.9)';
//ctx.fillRect(100, 100, 200, 200);

//lineWidth

ctx.lineWidth = 20;
ctx.strokeStyle = 'green';
//ctx.strokeRect(100, 100, 250, 250);

ctx.lineWidth = 10;
ctx.strokeStyle = 'blue';
//ctx.strokeRect(150, 150, 200, 200);

//Text

//first we define the font

ctx.font = '46px sans-serif';

ctx.fillStyle = 'black';
//ctx.fillText('Score:', 700, 50);

ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
//ctx.strokeText('Score:', 700, 150);

//Images

//create a new img object
const tileImg = new Image();

//loading the image
/* tileImg.addEventListener('load', function () {
  ctx.drawImage(tileImg, 0, 0, 50, 50);
});
 */
//define the path/src of the image
tileImg.src = '/images/tile.jpg';

let tileX = 0;

/* function draw() {
  ctx.clearRect(0, 0, 900, 450);
  ctx.drawImage(tileImg, tileX % 900, 0, 50, 50);
  tileX += 10;

  //recursion
  setTimeout(draw, 30);
} */

function draw() {
  let tilePattern = ctx.createPattern(tileImg, 'repeat');

  ctx.fillStyle = tilePattern;

  ctx.fillRect(0, 0, 900, 450);
}
