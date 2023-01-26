/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

//Grab the button
const startButton = document.getElementById('start');

//Creating the player
const player = new Component(0, 200, 75, 75, 'blue', ctx);

startButton.onclick = function () {
  const game = new Game(ctx, canvas.width, canvas.height, player);
  game.start();
};

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;
    case 'ArrowLeft':
      player.speedX -= 1;
      break;
    case 'ArrowRight':
      player.speedX += 1;
      break;
  }
});

document.addEventListener('keyup', () => {
  player.speedX = 0;
  player.speedY = 0;
});

// What is your game idea ?
// What is the game logic?
// How will you implement the logic ?
// How does the game end?
// What is your MVP - Minimum Viable Product?
// What do you expect your biggest difficulties will be ?
// Bonus - music, highscore, multiple enemies, different difficulties
