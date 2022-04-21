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

// 처음에는 아직 방문한 곳이 하나도 없으므로 기본 값을 false로 한다.
let visited = new Array(9).fill(false);

// bfs는 큐를 기반으로 동작하므로 큐를 생성한다.
let queue = new Array();

// 탐색 시작(1번 노드부터 탐색)
bfs(1);

// x번 노드의 인접 노드를 탐색하는 함수
function bfs(x) {
  // 큐에 x번 노드를 넣음
  queue.push(x);

  // x번 노드를 방문 처리함 (visited[x]를 true로 변경)
  visited[x] = true;

  // 큐의 맨 앞에 들어 있는 노드를 꺼내서 변수 first에 저장한다.
  while (queue.length !== 0) {
    const first = queue.shift();

    // 큐의 맨 앞에서 꺼낸 노드를 출력한다.
    console.log("first : ", first);

    // 큐의 맨 앞에서 꺼낸 노드의 인접 노드가 정리되어 있는 graph[first]를 반복문으로 확인
    for (let i = 0; i < graph[first].length; i++) {
      // 큐의 맨 앞에서 꺼낸 노드의 인접 노드인 y번 노드를 변수 y에 저장
      const y = graph[first][i];

      // 만약 y번 노드을 방문한 적이 없다면
      if (!visited[y]) {
        // 큐에 y번 노드를 넣고
        queue.push(y);

        // y번 노드를 방문 처리함
        visited[y] = true;
      }
    }
  }
}
