const fs = require("fs");
//입력된 문자열들을 숫자로 변경
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((value) => Number(value));

//체스 게임에 포지션별 말 갯수
const chess = [
  //King
  { data: 1 },
  //Queen
  { data: 1 },
  //Rook
  { data: 2 },
  //Bishop
  { data: 2 },
  //Knight
  { data: 2 },
  //Pawn
  { data: 8 },
];

//입력값은 킹,퀸,룩,비숍,나이트,폰 순서이므로 input값을 차례대로 chess 객체배열에 값과 -해준다.
for (let i = 0; i < input.length; i++) {
  console.log(chess[i].data-input[i]);
}
