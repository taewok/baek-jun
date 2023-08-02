const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((value) => value.trim());

let answer = [];
for (let i = 1; i <= parseInt(input[0]); i++) {
  answer.push(`${input[i]}`);
}

console.log(answer.sort((a, b) => a - b).join("\n"));
