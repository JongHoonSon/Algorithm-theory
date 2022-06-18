// BT case2 : (중복 비허용, 내림차순 허용, 길이 M, 원소 중에 중복인 원소가 없는 경우)

// ex) 원소가 A, B, C, D 이고, M=3 이면

// A B C
// A B D
// A C B
// A C D
// A D B
// A D C

// B A C  => 내림차순 허용 (B -> A)
// B A D
// B C A
// B C D
// B D A
// B D C

// C A B
// C A D
// C B A
// C B D
// C D A
// C D B

// D A B
// D A C
// D B A
// D B C
// D C A
// D C B

// 이다.

// 중복 옵션(check) : 사용
// 오름차순 옵션(min) : 미사용
// 길이 : M
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

BT(0);
console.log(answer.join("\n"));

function BT(step) {
  if (step === M) {
    answer.push(string.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (check[i] === true) {
      continue;
    }

    string.push(arr[i]);
    check[i] = true;

    BT(step + 1);

    check[i] = false;
    string.pop();
  }
}
