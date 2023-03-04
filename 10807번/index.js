const fs = require("fs");
const inputData = fs.readFileSync("input.txt").toString().split("\n");

const numberList = inputData[1].split(" ");
const number = inputData[2];

//행당하는 숫자가 나올때마다 +1
let answer = 0;
for(let index in numberList){
    if(numberList[index] === number) answer++;
}

console.log(answer);
