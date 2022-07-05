// DFS에서 그래프 상에서 넓이를 구하는 방법
// 아래 그래프에 0이 들어간 부분의 넓이를 각각 구하는 과정
// 0은 총 4가지 구역에 존재하며, 각각 길이는 순서대로 1, 3, 5, 7 임

// DFS는 1회 호출 시 1곳을 방문하므로, 전체 DFS 호출 횟수 = 방문한 곳의 넓이인 것에 착안하여
// DFS의 마지막 부분에 DFS 수행 횟수를 누적하는 변수(cnt)의 값을 +1 시킨다.
// 같은 곳을 중복해서 방문하지 않도록 하기 위해서 graph 상의 0이 들어간 부분의 값을 3으로 변경하거나 visited 사용하기
// (값을 변경해버리는 것이 구현하기 더 쉬움, visited을 사용하려면, 1과 2가 들어있는 모든 부분을 true 처리해놔야 함)
// 구역이 적고 범위가 넓을 경우 재귀호출이 10000번 이상 호출되면 콜스택 초과 오류가 발생할 수 있기 때문에, 콜스택 관련 에러가 뜰 경우 BFS 방식 사용하기
// 구역이 많고, 각 구역마다의 넓이가 적을 경우 사용하는 것을 추천

let graph = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 0, 0, 0, 1, 0, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 0, 0, 0, 0, 0, 1, 1, 2],
  [2, 1, 0, 0, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let result;
let resultArr = [];
let cnt;

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph.length; j++) {
    // 각 구역마다 DFS 수행횟수를 초기화 함
    cnt = 0;
    result = DFS(i, j);

    // cnt의 값을 resultArr에 넣음
    if (result !== false) {
      resultArr.push(cnt);
    }
  }
}

function DFS(i, j) {
  if (graph[i][j] !== 0) {
    return false;
  }

  // 현재 방문한 곳(i, j)을 다시 방문하지 않도록 graph에서 (i, j) 좌표의 값 변경
  graph[i][j] = 3;

  for (let b = 0; b < 4; b++) {
    let ni = i + move[b][0];
    let nj = j + move[b][1];

    if (graph[ni][nj] === 0) {
      DFS(ni, nj);
    }
  }

  // DFS 수행 횟수 카운트
  cnt++;
  return true;
}

for (let i = 0; i < graph.length; i++) {
  console.log(graph[i].join(""));
}

console.log(resultArr);
