const fs = require("fs");
const inputData = fs.readFileSync("input.txt").toString();

let answer = [];

const number = Number(inputData)/4;
for(let i=0; i<number; i++){
    answer.push("long");
}
answer.push("int");

console.log(answer.join(" "));


