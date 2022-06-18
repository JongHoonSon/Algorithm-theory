// BT case5 : (중복 비허용, 내림차순 비허용, 길이 M, 원소 중에 중복인 원소가 있는 경우)

// ex) 원소가 A, B, C, C 이고, M=2 이면

// A B
// A C
// B C

// 이다.

// 중복 옵션(check) : 사용
// 오름차순 옵션(min) : 사용
// 길이 : 1부터 M까지
// 중복 수열 제거 : 사용

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

BT(0, 0);

// 중복 수열 제거
const answerSet = new Set(answer);
answer = Array.from(answerSet);

console.log(answer.join("\n"));

function BT(step, min) {
  if (step === M) {
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
