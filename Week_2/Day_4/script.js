/**  @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

// Basic animations

//Repeat an action
//a method to repeat that action
//SetTimeout
//SetInterval
//requestAnimationFrame - 60fps

//Animating with color
const color = {
  red: Math.floor(Math.random() * 256),
  green: Math.floor(Math.random() * 256),
  blue: Math.floor(Math.random() * 256),
  opacity: 0,
  rgb() {
    return `rgb(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`;
  },
};

//The rgb method will return a string with the randomly created color
//ctx.fillStyle = color.rgb();

function updateCanvas() {
  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;
  color.opacity = (color.opacity + 0.01) % 1;

  //clear the whole canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //update the value of the color
  ctx.fillStyle = color.rgb();

  //paint the rectangle
  ctx.fillRect(300, 200, 200, 200);

  requestAnimationFrame(updateCanvas);
}

//updateCanvas();

//Animation with movement

function drawSquare(x, y, w, h, color) {
  //before drawing the square, update the color
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

let speed1 = 1200;
let speed2 = 0;
let speed3 = 600;

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* function updateSquares() {
  speed1 -= 1;
  speed2 += 2;
  speed3 -= 3;

  clear();
  drawSquare(speed1 % canvas.width, 0, 100, 100, 'red');
  drawSquare(0, speed2, 100, 100, 'green');
  drawSquare(speed3, speed3, 100, 100, 'yellow');
} */

//let intervalId = setInterval(updateSquares, 1000 / 60);
//clearInterval(intervalId);

function updateSquares() {
  speed1 -= 10;
  speed2 += 10;
  speed3 -= 10;

  clear();
  drawSquare((((speed1 % canvas.width) + canvas.width) % canvas.width) + 100, 0, 100, 100, 'red');
  drawSquare(0, speed2 % canvas.height, 100, 100, 'green');
  drawSquare(
    ((speed3 % canvas.width) + canvas.width) % canvas.width,
    ((speed3 % canvas.height) + canvas.height) % canvas.height,
    100,
    100,
    'yellow'
  );
}

let intervalId = setInterval(updateSquares, 1000 / 60);
