/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('example');

const ctx = canvas.getContext('2d');

// rectangles
// paths

// fillRect , strokeRect, clearRect
ctx.fillStyle = 'purple';

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

drawCircle();
