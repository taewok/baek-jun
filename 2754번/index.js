const fs = require("fs");
const data = fs.readFileSync("input.txt").toString();

const array = {
    "A+":4.3,
    "A0":4.0.toFixed(1),
    "A-":3.7,
    "B+":3.3,
    "B0":3.0.toFixed(1),
    "B-":2.7,
    "C+":2.3,
    "C0":2.0.toFixed(1),
    "C-":1.7,
    "D+":1.3,
    "D0":1.0.toFixed(1),
    "D-":0.7,
    "F":0.0.toFixed(1),
}

console.log(array[data]);

/*
문제
어떤 사람의 C언어 성적이 주어졌을 때, 평점은 몇 점인지 출력하는 프로그램을 작성하시오.

A+: 4.3, A0: 4.0, A-: 3.7

B+: 3.3, B0: 3.0, B-: 2.7

C+: 2.3, C0: 2.0, C-: 1.7

D+: 1.3, D0: 1.0, D-: 0.7

F: 0.0

입력
첫째 줄에 C언어 성적이 주어진다. 성적은 문제에서 설명한 13가지 중 하나이다.

출력
첫째 줄에 C언어 평점을 출력한다.
*/
