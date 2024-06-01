const fs = require("fs");
const data = fs.readFileSync("input.txt").toString();

const n = parseInt(data);
let str = [];

// 위에 다섯개
for (i = 1; i <= n; i++) {
  for (j = 1; j < n + i; j++) {
    if (j <= n - i) {
      str += " ";
    } else {
      str += "*";
    }
  }
  str += "\n";
}
// 아래 4개
for (i = n; i > 1; i--) {
  for (j = 1; j < n + i - 1; j++) {
    if (j <= n + 1 - i) {
      str += " ";
    } else {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);

/*
문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.
*/
