// 선택 정렬 : 처리되지 않은 데이터 중에서 가장 작은 데이터를 선택해
// 맨 앞에 있는 데이터와 바꾸는 것을 반복하는 정렬 방법

// 탐색 과정

// 7 5 9 0 3 1 6 2 4 8  => 0~9번 index 탐색, 가장 작은 원소 0를 0번 index의 값과 교환함
// 0 5 9 7 3 1 6 2 4 8  => 1~9번 index 탐색, 가장 작은 원소 1를 1번 index의 값과 교환함
// 0 1 9 7 3 5 6 2 4 8  => 2~9번 index 탐색, 가장 작은 원소 2를 2번 index의 값과 교환함
// 0 1 2 7 3 5 6 9 4 8  => 3~9번 index 탐색, 가장 작은 원소 3를 3번 index의 값과 교환함
// ...
// 0 1 2 3 4 5 6 7 9 8  => 8~9번 index 탐색, 가장 작은 원소 8를 8번 index의 값과 교환함
// 0 1 2 3 4 5 6 7 8 9  => 정렬 완료

// 시간복잡도 : N + (N-1) + (N-2) + ... + 2  => O(N^2)

// 구현 방식

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// 이중 반복문을 이용
for (let i = 0; i < array.length - 1; i++) {
  // 일단 최솟값를 갖고 있는 요소의 인덱스를 최솟값을 집어넣을 위치인 i로 정함
  let minIndex = i;

  // i의 뒤쪽에 대해 반복
  for (let j = i + 1; j < array.length; j++) {
    // i의 뒤쪽 수 중에서 현재까지 찾은 최솟값인 array[minIndex]보다
    // 더 작은 값이 있으면, minIndex를 변경함
    if (array[minIndex] > array[j]) {
      minIndex = j;
    }
  }

  // i는 최솟값을 넣을 위치의 index,
  // minIndex는 i부터 array.length-1까지 존재하는 수 중에서 최솟값의 index

  // array[i]와 array[minIndex]값을 교환함
  let temp = array[i];
  array[i] = array[minIndex];
  array[minIndex] = temp;
}

console.log("array : ", array);
