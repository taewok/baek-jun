const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((value) => value.trim());

let answer = 0;
for (let i = 1; i <= parseInt(input[0]); i++) {
  let array = [];
  let isGroupWord = true;
  for (let j = 0; j < input[i].length; j++) {
    if (array.includes(input[i][j])) {
      if (array.indexOf(input[i][j]) !== array.length - 1) {
        console.log(array.indexOf(input[i][j]),input[i][j],i,j+1)
        isGroupWord = false;
        break;
      }
    } else {
      array.push(input[i][j]);
    }
  }
  if (isGroupWord) {
    answer += 1;
  }
}

console.log(answer);
