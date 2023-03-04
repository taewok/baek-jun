const fs = require("fs");
const inputData = fs.readFileSync("input.txt").toString().trim().split("\n");

// 반복문 실행 횟수
const numberCount = Number(inputData[0]);
for(let i=1; i<numberCount+1; i++){
    console.log(inputData[i][0]+inputData[i].replace(/\r/g,"")[inputData[i].replace(/\r/g,"").length-1]);
}


