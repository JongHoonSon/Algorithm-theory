// <트리>

// 이진 트리 : 자식 노드가 최대 2개인 트리

// 완전 이진 트리 : 같은 층에 데이터가 추가될 때,
//                 가장 왼쪽에 위치한 자식노드부터 순서대로 채워진 이진 트리

// <힙>

// 힙 : 완전 이진 트리를 기반으로 하는 트리
// 최대 힙 : 완전 이진 트리 중에서 부모 노드가 자식 노드보다 무조건 큰 수를 갖는 트리
// 최소 힙 : 완전 이진 트리 중에서 자식 노드가 부모 노드보다 무조건 큰 수를 갖는 트리

// 힙 생성 알고리즘 (Heapify Alogorihtm) : 완전 이진 트리 중에서 특정 부모 노드의 자식 노드에 의해 힙을 만족하지 못한 경우,
//                                        해당하는 특정 부모 노드를 힙을 완성하지 못하는 원인이 되는 자식 노드와 교환하여
//                                        힙을 만드는 알고리즘

// 힙 생성 알고리즘의 시간복잡도 : 완전 이진 트리의 끝에 새로운 노드 1개가 추가되었을 때,
//                               해당 노드가 최상위 노드까지 힙 생성 알고리즘으로 정렬되기 위해서는
//                               최대 총 logN개의 층(완전 이진 트리의 높이)에 대해 최대 1번씩 교환을 수행해야한다.
//                               따라서 힙 생성 알고리즘의 시간복잡도는 때문에 O(logN)이다.

// 힙을 만드는데 까지 시간복잡도 : 총 N개의 노드를 갖는 완전 이진 트리의 높이는 logN이고,
//                               최대 총 N개의 노드에 대해 힙 생성 알고리즘(logN)을 수행하므로
//                               힙 생성 알고리즘의 시간복잡도는 O(N x logN) 이다.

// 힙 정렬 : 힙에서 가장 최상단의 노드와 가장 끝의 노드를 변경하고, 다시 힙 생성 알고리즘으로 힙을 만드는 과정을 반복하면서
//           힙의 모든 노드 중에 큰 수부터 작은 수까지 추출하면서 정렬하는 과정

// 힙 정렬의 동작 과정 : 1. 힙(최대 힙)에서 가장 최상단에 있는 노드 중를 가장 끝의 노드와 변경한다.
//                     2. 힙에서 가장 끝의 노드(최상단에 있던 노드)를 제거한다.
//                     3. 힙 생성 알고리즘으로 또 다시 힙 상태를 만든다.
//                     모든 노드를 제거할 때 까지 1, 2, 3번 과정을 계속 반복하면,
//                     모든 노드 중에서 가장 큰 값부터 작은 값까지 순서대로 꺼낼 수 있다.
//                     (최대 힙이 아닌 최소 힙으로 하면 작은값부터 꺼낼 수 있음)

// 힙 정렬의 시간복잡도 : 전체 노드(O(N))에 대해 각 힙에서 제일 큰 노드를 제거한 뒤에
//                      힙 생성 알고리즘(O(logN)을 사용해 다시 힙 구조로 만드는 과정을 반복하므로
//                      힙 정렬의 시간복잡도는 O(N x logN) 이다.

// 구현 방식

let array = [7, 6, 5, 8, 3, 5, 9, 1, 6];

// 1. 최대 힙 만드는 과정

// 1번 index부터 마지막 index인 8번 index까지 반복
for (let i = 1; i < array.length; i++) {
  // 1부터 8까지의 index에 대해 힙 정렬 알고리즘 수행
  let child = i;

  while (child !== 0) {
    // root는 child의 부모 노드
    let root = Math.floor((child - 1) / 2);

    // 만약 child의 값이 root보다 크면
    if (array[root] < array[child]) {
      // 서로의 값 변경
      let temp = array[root];
      array[root] = array[child];
      array[child] = temp;
    }
    child = root;
  }
}

console.log("after first", array);

// 힙 정렬 수행
for (let i = array.length - 1; i >= 0; i--) {
  // 가장 최상단의 값과 가장 끝의 값을 교환함
  let temp = array[0];
  array[0] = array[i];
  array[i] = temp;

  let root = 0;
  let child = 1;

  while (child < i) {
    child = 2 * root + 1;

    // 자식 노드 중에서 큰 노드의 index를 child에 저장
    if (child < i - 1 && array[child] < array[child + 1]) {
      child = child + 1;
    }

    // 자식 노드가 부모 노드보다 크면
    if (child < i && array[root] < array[child]) {
      // 교환함
      let temp = array[root];
      array[root] = array[child];
      array[child] = temp;
    }
    root = child;
  }
}

console.log("array : ", array);
