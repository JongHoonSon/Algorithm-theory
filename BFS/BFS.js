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

// 탐색 시작(1번 노드부터 탐색)
BFS(1);

function BFS(startNode) {
  // BFS는 큐를 기반으로 동작하므로 큐를 생성한다.
  // 여기서 큐는 방문 예정 목록을 뜻한다.
  let queue = new Array();

  // 시작점을 방문 예정 목록(queue)에 넣는다.
  queue.push(startNode);

  // BFS에서 willVisit은 각 정점의 방문 예정 여부를 기록하는 배열이며, 기본 값은 false이다.
  let willVisit = new Array(9).fill(false);

  // 예약 완료 처리를 한다.(willVisit[startNode] = true)
  willVisit[startNode] = true;

  // 탐색 시 큐에서 꺼내야하는 다음 인덱스를 기록하는 변수
  let idx = 0;

  // 각 BFS 단계에서 탐색 시작 범위를 저장할 변수
  let startIndex;

  // 각 BFS 단계에서 탐색 마지막 범위를 저장할 변수
  let lastIndex;

  // BFS 수행 횟수를 기록하는 변수
  let times = 0;

  // queue가 빌 때까지 반복
  while (queue.length !== idx) {
    // 탐색 범위의 시작을 큐에서 다음 번에 탐색해야하는 원소의 인덱스인 idx로 설정한다.
    startIndex = idx;

    // 탐색 범위의 마지막을 큐의 마지막 인덱스로 설정한다.
    lastIndex = queue.length - 1;

    for (let i = startIndex; i <= lastIndex; i++) {
      // 큐의 인덱스 i에 들어 있는 값을 x에 저장한다.
      const x = queue[i];

      // 큐에서 들어 있는 값을 1개 탐색했으므로, idx가 큐의 다음 원소를 가리키도록 한다.
      idx++;

      // x의 인접 노드가 정리되어 있는 graph[x]를 반복문으로 확인
      for (let j = 0; j < graph[x].length; j++) {
        // x의 인접 노드를 변수 y에 저장
        const y = graph[x][j];

        // y번 노드로의 이동 예정이 없다면(=이동 가능히다면)
        if (!willVisit[y]) {
          // y번 노드를 방문 예정 목록(queue)에 넣고,
          queue.push(y);

          // 예약 완료 처리를 한다.(willVisit[y] = true)
          willVisit[y] = true;
        }
      }
    }

    // BFS 수행 횟수를 1 증가
    times++;
  }
}
