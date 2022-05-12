// 계수 정렬 : 가장 작은 데이터부터 가장 큰 데이터까지의 범위가 모두 담길 수 있는 배열을 만들고,
// 정렬할 데이터를 앞에서부터 확인하면서 등장한 값을 index로 갖는 배열 상의 요소의 값을 +1 시키는 방식으로 정렬한다.

// 탐색 과정

// 7 5 9 0 3 1 6 2 9 1 4 8 0 5 2

// => max값이 9이므로 크기가 10인 배열 count을 만듬 (0부터 9까지 사용하기 위해)

// '7' 5 9 0 3 1 6 2 9 1 4 8 0 5 2
// => count[7] = count[7] + 1 수행

// 7 '5' 9 0 3 1 6 2 9 1 4 8 0 5 2
// => count[5] = count[5] + 1 수행

// ...

// 7 5 9 0 3 1 6 2 9 1 4 8 0 5 '2'
// => count[2] = count[2] + 1 수행

// 최종적으로 count의 0번 index부터 마지막 index까지 그 값을 출력하면 됨

// 0 0 1 1 2 2 3 4 5 5 6 7 8 9 9
// => 정렬 결과

let array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

let maxNum = 9;

let count = new Array(maxNum + 1).fill(0);

for (let i = 0; i < array.length; i++) {
  count[array[i]]++;
}

let sortResult = [];

for (let i = 0; i < count.length; i++) {
  for (let j = 0; j < count[i]; j++) {
    sortResult.push(i);
  }
}

console.log("sort result : ", sortResult);
