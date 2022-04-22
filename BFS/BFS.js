// 0번째 노드는 비운 후 1번 인덱스를 1번 노드로 사용하는 것이 편하다.
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// BFS에서 willVisit은 각 정점의 방문 예정 여부를 기록하는 배열이며, 기본 값은 false이다.
let willVisit = new Array(9).fill(false);

// BFS는 큐를 기반으로 동작하므로 큐를 생성한다.
// 여기서 큐는 방문 예정 목록을 뜻한다.
let queue = new Array();

// 탐색 시작(1번 노드부터 탐색)
BFS(1);

function BFS(start) {
  // 시작점을 방문 예정 목록(queue)에 넣고,
  queue.push(start);
  // 예약 완료 처리를 한다.(willVisit[start] = true)
  willVisit[start] = true;

  // queue가 빌 때까지 반복
  while (queue.length !== 0) {
    // 큐의 맨 앞에 들어 있는 값을 빼고 x에 저장한다.
    const x = queue.shift();

    // x를 방문했음을 기록한다.
    console.log("x : ", x);

    // x의 인접 노드가 정리되어 있는 graph[x]를 반복문으로 확인
    for (let i = 0; i < graph[x].length; i++) {
      // x의 인접 노드를 변수 y에 저장
      const y = graph[x][i];

      // y번 노드로의 이동 예정이 없다면(=이동 가능히다면)
      if (!willVisit[y]) {
        // y번 노드를 방문 예정 목록(queue)에 넣고,
        queue.push(y);

        // 예약 완료 처리를 한다.(willVisit[y] = true)
        willVisit[y] = true;
      }
    }
  }
}
