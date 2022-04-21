// 미로 탈출 : 문제 설명

// 동빈이는 N x M 크기의 직사각형 형태의 미로에 갇혔습니다. 미로에는
// 여러 마리의 괴물이 있어 이를 피해 탈출해야 합니다. 동빈이의 위치는
// (1, 1)이며 미로의 출구는 (N, M)의 위치에 존재하며 한 번에 한 칸씩
// 이동할 수 있습니다. 이때 괴물이 있는 부분은 0으로, 괴물이 없는 부분은
// 1로 표시되어 있습니다. 미로는 반드시 탈출할 수 있는 형태로 제시됩니다.
// 이때 동빈이가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하세요.
// 칸을 셀 때는 시작 칸과 마지막 칸을 모두 포함해서 계산합니다.

// 출처 : https://youtu.be/7C9RgOcvkvo?t=3077 (유튜브 나동빈)

const N = 5;
const M = 6;

const graph = new Array(N);
let check = new Array(N);
const queue = [];
let di = [];
let dj = [];

for (let i = 0; i < N; i++) {
  check[i] = new Array(M);
}

// 방문한적 있는지 check하는 배열 (기본 값 false)
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    check[i][j] = false;
  }
}

// 이동 가능한 곳 (di, dj의 index 값 이용)
di = [-1, 1, 0, 0];
dj = [0, 0, -1, 1];

// 값 넣기
graph[0] = [1, 0, 1, 0, 1, 0];
graph[1] = [1, 1, 1, 1, 1, 1];
graph[2] = [0, 0, 0, 0, 0, 1];
graph[3] = [1, 1, 1, 1, 1, 1];
graph[4] = [1, 1, 1, 1, 1, 1];

for (let i = 0; i < N; i++) {
  console.log("check[i]", check[i]);
  console.log("graph[i]", graph[i]);
}

console.log(BFS(0, 0));

function BFS(firstI, firstJ) {
  // 큐에 현재 위치(첫 시작 위치)를 방문 처리 (BFS에서 방문 처리 = 큐에 넣기)
  // BFS는 어차피 1번 수행되는 함수이므로 첫 시작 위치를 큐에 넣는 것은
  // 함수 밖에서 미리 수행해도 상관 없음
  queue.push(firstI);
  queue.push(firstJ);

  // 큐가 빌 때까지 진행
  while (queue.length !== 0) {
    // 큐의 맨 앞에서 값 꺼내기
    const i = queue.shift();
    const j = queue.shift();

    // di와 dj 대로 값 이동한 곳 (ni, nj)
    for (let k = 0; k < 4; k++) {
      const ni = i + di[k];
      const nj = j + dj[k];

      // (ni, nj)가 탐색 범위에서 벗어난 곳이면
      if (ni <= -1 || ni >= N || nj <= -1 || nj >= M) {
        // 넘어감
        continue;
      }

      // (ni, nj)가 탐색할 수 없는 곳이면 (괴물이 있는 곳)
      if (graph[ni][nj] === 0) {
        // 넘어감
        continue;
      }

      // (ni, nj)가 탐색할 수 있는 곳이면
      if (graph[ni][nj] === 1) {
        // (0,0)부터 이전 위치(i,j)까지 이동하는 거리에 +1한 만큼을
        // (ni, nj)까지 이동하는 거리로 설정
        graph[ni][nj] = graph[i][j] + 1;

        // 해당 위치를 방문처리함 (BFS에서 방문 처리 = 큐에 넣기)
        queue.push(ni);
        queue.push(nj);
      }
    }
  }

  // 오른쪽 맨 밑까지의 최단 거리 반환
  return graph[N - 1][M - 1];
}
