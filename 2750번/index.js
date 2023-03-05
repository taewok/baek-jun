const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((value) => Number(value.trim()));

// 배열안에 숫자를 오름차순으로 정렬
let numberList = input.sort((a, b) => a - b);
//중복되지 않은 숫자를 담는 배열
let answer = [];
for (let i = 0; i < numberList.length; i++) {
  //지금 숫자가 answer배열에 없다면 중복이 아니니 push하는 조건
  if (!answer.includes(numberList[i])) {
    answer.push(numberList[i]);
  }
}

for(let index in answer){
    console.log(answer[index]);
}
