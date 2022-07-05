// BFS에서 그래프 상에서 넓이를 구하는 방법
// 아래 그래프에 0이 들어간 부분의 넓이를 각각 구하는 과정
// 0은 총 4가지 구역에 존재하며, 각각 길이는 순서대로 1, 3, 5, 7 임

// BFS에서 queue = 방문한 모든 곳인 것에 착안하여, BFS 수행 후 queue의 길이를 리턴하면 됨
// 같은 곳을 중복해서 방문하지 않도록 하기 위해서 graph 상의 0이 들어간 부분의 값을 3으로 변경하거나 willVisit 사용하기
// (값을 변경해버리는 것이 구현하기 더 쉬움, willVisit을 사용하려면, 1과 2가 들어있는 모든 부분을 true 처리해놔야 함)
// 각 구역에 대해 BFS 수행 시 queue를 새로 생성해야한다는 점에서 메모리 효율이 떨어지기 때문에, 메모리 관련 에러가 뜰 경우 DFS 방식 사용하기
// 구역이 적고, 각 구역 마다 넓이가 넓을 경우 사용하는 것을 추천

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

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph.length; j++) {
    // 큐의 길이를 BFS의 결과로 받음
    result = BFS(i, j);

    // BFS의 결과를 resultArr에 넣음
    if (result !== false) {
      resultArr.push(result);
    }
  }
}

function BFS(startNodeI, startNodeJ) {
  if (graph[startNodeI][startNodeJ] !== 0) {
    return false;
  }

  let queue = [];
  queue.push([startNodeI, startNodeJ]);

  // 현재 방문한 곳(startNodeI, startNodeJ)을 다시 방문하지 않도록 graph에서 (startNodeI, startNodeJ) 좌표의 값 변경
  graph[startNodeI][startNodeJ] = 3;

  let idx = 0;
  let startIndex;
  let lastIndex;

  let times = 0;

  while (queue.length !== idx) {
    startIndex = idx;
    lastIndex = queue.length - 1;

    for (let a = startIndex; a <= lastIndex; a++) {
      let [i, j] = queue[a];
      idx++;

      for (let b = 0; b < 4; b++) {
        let ni = i + move[b][0];
        let nj = j + move[b][1];

        if (
          ni < 0 ||
          nj < 0 ||
          ni > graph.length - 1 ||
          nj > graph[0].length - 1
        ) {
          continue;
        }

        if (graph[ni][nj] === 0) {
          queue.push([ni, nj]);

          // 현재 방문한 곳(ni, nj)을 다시 방문하지 않도록 graph에서 (ni, nj) 좌표의 값 변경
          graph[ni][nj] = 3;
        }
      }
    }
    times++;
  }

  // 큐의 길이를 BFS의 결과로 리턴함
  return queue.length;
}

for (let i = 0; i < graph.length; i++) {
  console.log(graph[i].join(""));
}

console.log(resultArr);
