// 퀵 정렬 : 기준 데이터(Pivot)를 설정하고
// 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법

// 탐색 과정

// <5> 7 9 0 3 1 6 2 4 8      => 0번 index에 들어있는 5를 피벗으로 삼음

// <5> '7' 9 0 3 1 6 2 '4' 8
//                          => 피벗의 오른쪽에 존재하는 요소 중에서
//                             첫번째 index의 값인 5부터 오른쪽으로 진행하면서 피벗인 5보다 더 큰 값인 7을,
//                             마지막 index의 값인 8부터 왼쪽으로 진행하면서 피벗인 5보다 더 작은 값인 4을 찾음
//                             큰 값인 7이 작은 값인 4보다 더 왼쪽에서 발견되었으므로 (index가 작으므로)
//                             서로 교환함
// <5> '4' 9 0 3 1 6 2 '7' 8

// <5> 4 '9' 0 3 1 6 '2' 7 8
//                          => 피벗의 오른쪽에 존재하는 요소 중에서
//                             첫번째 index의 값인 5부터 오른쪽으로 진행하면서 피벗인 5보다 더 큰 값인 9을,
//                             마지막 index의 값인 8부터 왼쪽으로 진행하면서 피벗인 5보다 더 작은 값인 2을 찾음
//                             큰 값인 9가 작은 값인 2보다 더 왼쪽에서 발견되었으므로 (index가 작으므로)
//                             서로 교환함
// 5 4 '2' 0 3 1 6 '9' 7 8

// <5> 4 2 0 3 '1' '6' 9 7 8
//                          => 피벗의 오른쪽에 존재하는 요소 중에서
//                             첫번째 index의 값인 5부터 오른쪽으로 진행하면서 피벗인 5보다 더 큰 값인 6을,
//                             마지막 index의 값인 8부터 왼쪽으로 진행하면서 피벗인 5보다 더 작은 값인 1을 찾음
//                             큰 값인 9가 작은 값인 2보다 더 오른쪽에서 발견되었으므로 (index가 더 크므로)
//                             서로 교환하지 않고, 다음 과정을 따름

// <5> 4 2 0 3 '1' 6 9 7 8
//                          => 1. 작은 값과 피벗의 위치를 교환함
// '1' 4 2 0 3 <5> 6 9 7 8

// 1 4 2 0 3 <5> 6 9 7 8
//                          => 2. 피벗을 기준으로 좌우 배열을 나눔 (좌측은 피벗보다 작은 수로 이루어지고, 우측은 피벗보다 큰 수로 이루어짐)
// [1 4 2 0 3] <5> [6 9 7 8]

// [<1> 4 2 0 3] <5> [<6> 9 7 8]
//                          => 3. 각 배열의 첫 원소를 피벗으로 설정해 또 다시 퀵정렬 수행 (재귀)
// [...] 5 [...]

// 시간복잡도 : 분할이 일어날 때마다 각 배열의 원소의 수 (탐색해야하는 수의 갯수)가 절반씩 줄어들기 때문에
//              => O(N x logN)

// 구현 방식

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function quick_sort(start, end) {
  // 원소가 1개인 경우 재귀 종료
  if (start >= end) {
    return;
  }

  // 피벗은 각 배열의 첫번째 원소로 설정
  let pivot = start;

  // 왼쪽에서부터 오른쪽으로 진행하며 피벗보다 큰 값을 찾는 탐색의 시작점
  left = start + 1;

  // 오른쪽에서부터 오쪽으로 진행하는 피벗보다 작은 값을 찾는 탐색의 시작점
  right = end;

  // 찾은 큰 값의 위치(left)가 더 왼쪽이면(index가 더 작으면) 반복
  while (left <= right) {
    // left는 end까지 증가하면서 피벗보다 큰 수를 찾을 때 까지 반복
    // (찾으면 반복을 종료하는 방식)
    while (left <= end && array[pivot] >= array[left]) {
      left = left + 1;
    }

    // right는 start까지 감소하면서 피벗보다 작은 수를 찾을 때 까지 반복
    // (찾으면 반복을 종료하는 방식)
    while (start < right && array[pivot] <= array[right]) {
      right = right - 1;
    }

    // 만약 두 수가 엇갈렸다면
    // (큰 값(left)이 작은 값(right)보다 왼쪽에서 발견되어야 하는데, 그러지 못했다면)
    if (right < left) {
      // 피벗과 작은 값 교체
      let temp = array[pivot];
      array[pivot] = array[right];
      array[right] = temp;

      // 제대로 발견되었다면
    } else {
      // 큰 값과 작은 값 교체
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }

  // 이번 피벗으로 퀵 정렬을 마친 후, 양쪽으로 나눠진 배열에 대해 재귀 호출

  // 맨앞부터 중앙까지
  quick_sort(start, right - 1);

  // 중앙부터 맨뒤까지
  quick_sort(right + 1, end);
}

quick_sort(0, array.length - 1);

console.log("array : ", array);
