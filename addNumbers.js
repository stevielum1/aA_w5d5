const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Choose a number:", (response) => {
      let input = parseInt(response);
      let newSum = sum + input;
      console.log(newSum);
      addNumbers(newSum, --numsLeft, completionCallback);
    });
  }
  else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
