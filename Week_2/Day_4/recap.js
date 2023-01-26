/**  @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
/* ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100); */

/* ctx.strokeStyle = 'blue';
ctx.strokeRect(100, 100, 100, 100); // blue
ctx.strokeStyle = 'green';
ctx.fillRect(200, 200, 100, 100); // red */

function drawCircle() {
  ctx.beginPath();
  ctx.arc(400, 200, 50, 0, Math.PI, true);
  ctx.fill();
  ctx.closePath();
}

drawCircle();
