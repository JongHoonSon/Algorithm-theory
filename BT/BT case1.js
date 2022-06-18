// BT case1 : (중복 허용, 내림차순 허용, 길이 M, 원소 중에 중복인 원소가 없는 경우)

// ex) 원소가 A, B, C, D 이고, M=2 이면

// A A
// A B
// A C
// A D

// B A
// B B
// B C
// B D

// C A
// C B
// C C  => 중복 허용 (C = C)
// C D

// D A  => 내림차순 허용 (D -> A)
// D B
// D C
// D D

// 이다.

// 중복 옵션(check) : 미사용
// 오름차순 옵션(min) : 미사용
// 길이 : M
// 중복 수열 제거 : 미사용

let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const N = +input[0];
const M = +input[1];

let arr = [];

let answer = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let string = [];

BT(0);
console.log(answer.join("\n"));

function BT(step) {
  if (step === M) {
    answer.push(string.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    string.push(arr[i]);

    BT(step + 1);

    string.pop();
  }
}
