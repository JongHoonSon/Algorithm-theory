// 순차 탐색 : 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 데이터를 하나씩 확인하는 방법
// 이분 탐색 : 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를  탐색하는 방법
// 이분 탐색은 시작점, 끝점, 중간점을 이용하여 탐색 범위를 설정함

// 탐색 과정

// 데이터의 값이 4인 원소 찾기

// 0 2 4 6 8 10 12 14 16 18  => 이미 정렬되어 있는 배열

// 시작점의 인덱스 : 0, 중간점의 인덱스 : 4(내림), 끝점의 인덱스 : 9

// 찾고자 하는 값과 중간점의 값을 비교함

// 값이 같으면 => 탐색 완료
// 찾고자 하는 값이 더 작으면 끝점을 중간점으로 변경
// 찾고자 하는 값이 더 크면 시작점을 중간점으로 변경

// 찾고자 하는 값 4가 중간점의 값 8보다 작으므로
// 끝점의 인덱스 9를 중간점의 인덱스인 4로 변경하고
// 새로운 중간점 1을 생성함

// 위 과정을 반복함

// 시간복잡도 : 단계마다 탐색 범위를 2로 나누기 때문에  => O(log N)

// 구현 방식

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
