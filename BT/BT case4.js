// BT case4 : (중복 비허용, 내림차순 비허용, 최대 길이 M, 원소 중에 중복인 원소가 없는 경우)

// ex) 원소가 A, B, C, D 이고, M=4 이면

// 길이 1
// A
// B
// C
// D

// 길이 2
// A B
// B C
// C D

// 길이 3
// A B C
// B C D

// 길이 4
// A B C D

// 이다.

// 중복 옵션(check) : 사용
// 오름차순 옵션(min) : 사용
// 길이 : 1부터 M까지
// 중복 수열 제거 : 미사용

let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const N = +input[0];
const M = +input[1];

let arr = [];

let check = [];

let answer = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
  check.push(false);
}

let string = [];

for (let i = 1; i <= M; i++) {
  BT(0, 0, i);
}
console.log(answer.join("\n"));

function BT(step, min, end) {
  if (step === end) {
    answer.push(string.join(" "));
    return;
  }

  for (let i = min; i < N; i++) {
    if (check[i] === true) {
      continue;
    }

    string.push(arr[i]);
    check[i] = true;

    BT(step + 1, i);

    check[i] = false;
    string.pop();
  }
}
