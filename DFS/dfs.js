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

// 탐색 시작(1번 노드부터 탐색)
dfs(1);

// x번 노드의 인접 노드를 탐색하는 함수
function dfs(x) {
  // x번 노드를 방문 처리함 (visited[x]를 true로 변경)
  visited[x] = true;

  // 이번에 방문한 x번 노드 출력
  console.log("x : ", x);

  // x번 노드의 인접 노드가 정리되어 있는 graph[x]를 반복문으로 확인
  for (let i = 0; i < graph[x].length; i++) {
    // x번 노드의 인접 노드인 y번 노드를 변수 y에 저장
    const y = graph[x][i];

    // 만약 y번 노드을 방문한 적이 없다면
    if (!visited[y]) {
      // y번 노드 방문
      dfs(y);
    }
  }
}
