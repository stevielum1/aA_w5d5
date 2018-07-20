const { Game } = require("./game.js");

const readline = require('readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback() {
  console.log("YOU WIN!");
  reader.question("Play again? ", response => {
    if (response === "yes") {
      const game = new Game();
      game.run(reader, this);
    } else {
      reader.close();
    }
  });
}

const game = new Game();
game.run(reader, completionCallback);
