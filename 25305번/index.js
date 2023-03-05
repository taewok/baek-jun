const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

//상을 받는 커트라인 등수
const index = Number(input[0].split(" ")[1])-1;
console.log(
  input[1]
    .split(" ")
    .map((value) => Number(value))
    .sort((a, b) => b - a)[index]
);
