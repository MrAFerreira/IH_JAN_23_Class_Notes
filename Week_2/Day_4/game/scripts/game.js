/** @type {HTMLCanvasElement} */

class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
  }

  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  //update needs to be an arrow function because "this" needs to refer to the class and not the update method itself
  update = () => {
    //Game logic here
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.updateEnemies();
    this.checkGameOver();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].x -= 1;
      this.enemies[i].draw();
    }

    //the if statement is to create the enemies
    //which we only want to do every 120 frames (2 seconds)
    if (this.frames % 120 === 0) {
      //150 is the maximum square size
      // 10 is the minimum size
      let randomSize = Math.floor(Math.random() * 150 - 10) + 10;

      let randomY = Math.floor(Math.random() * this.height - randomSize) + randomSize;

      this.enemies.push(new Component(1200, randomY, randomSize, randomSize, 'green', this.ctx));
    }
  }

  checkGameOver() {
    const crashed = this.enemies.some((enemy) => {
      return this.player.crashWith(enemy);
    });

    if (crashed) {
      this.stop();
      //this.ctx.fillText('Game Over', 200, 100)
    }
  }
}

/* if you want the enemies to come frokm the right in columns (flappy bird style) you can use this update enemies function isntead of the current one:
  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].x -= 1;
      this.enemies[i].draw();
    }

    if (this.frames % 180 === 0) {
      let x = 1200;

      //calculate the height of the columns/enemies
      let minHeight = 20;
      let maxHeight = 400;

      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

      //these variables control the size of the gap between obstacles
      let minGap = 75;
      let maxGap = 200;

      //this creates the gap
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      //add the obstacles to the array
      //top obstacle
      this.obstacles.push(new Component(x, 0, 50, height, 'green', this.ctx));

      //bottom obstacle
      this.obstacles.push(new Component(x, height + gap, 50, x - height - gap, 'blue', this.ctx));
    }
  }
*/
