// const readline = require('readline');
//
// reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function between(num,start,end) {
  if (num >= start && num <= end) {
    return true;
  }
  return false;
}

class Game {
  constructor() {
    this.towers = [[1,2,3],[],[]];
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Select START tower:", startTowerIdx => {
      reader.question("Select END tower:", endTowerIdx => {
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (!between(startTowerIdx,0,2) || !between(endTowerIdx,0,2)) {
      return false;
    }
    if (this.towers[startTowerIdx].length === 0) {
      return false;
    }
    if (this.towers[endTowerIdx].length === 0) {
      return true;
    }
    if (this.towers[startTowerIdx][0] < this.towers[endTowerIdx][0]) {
      return true;
    }
    return false;
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].unshift(this.towers[startTowerIdx].shift());
      return true;
    }
    return false;
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    }
    return false;
  }

  run(reader, completionCallback) {
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid Move");
      }
      if (!this.isWon()) {
        this.run(reader, completionCallback);
      } else {
        completionCallback();
      }
    });
  }

}

// let game = new Game();
// game.promptMove((startTowerIdx, endTowerIdx) => {
//   console.log(startTowerIdx, endTowerIdx);
// });

// game.run(() => {
//   console.log("complete");
//   reader.close();
// });

module.exports = { Game };
