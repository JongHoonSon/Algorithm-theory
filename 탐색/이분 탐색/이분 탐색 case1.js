// 이분 탐색 case1 : 찾아야 하는 값을 알고 있는 경우 (값 찾기)

// 찾아야 하는 값(=target)의 값이 4이고, 배열이 아래와 같을 때
// arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// 각 포인터의 인덱스
// left : 0, mid : 4(내림), right : 9

// target과 arr[mid] 값을 비교함

// 1. 값이 같은 경우 (target === arr[mid])
// => 탐색 종료

// 2. target가 더 작은 경우 (target < arr[mid])
// => right를 mid-1로 변경 (right = mid-1)
// => mid 재계산

// 3. target가 더 큰 경우 (target > arr[mid])
// => left를 mid+1로 변경 (left = mid+1)
// => mid 재계산

// 위 과정을 target를 찾을 때까지 반복함

// 구현 코드

let array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
let target = 4;

let time = 0;

function binary_search(start, end) {
  while (start <= end) {
    time++;
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    }
  }
  return false;
}

let result = binary_search(0, array.length - 1);

if (result === false) {
  console.log(
    `배열에 원소 ${target}가(이) 존재하지 않습니다. (탐색 횟수 : ${time}회)`
  );
} else {
  console.log(
    `배열 상에서 원소 ${target}의 인덱스는 ${result} 입니다. (탐색 횟수 : ${time}회)`
  );
}
