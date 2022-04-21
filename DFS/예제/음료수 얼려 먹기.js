// 음료수 얼려 먹기 : 문제 설명 (DFS, BFS 연결 요소 찾기 문제)

// N x M 크기의 얼음 틀이 있습니다. 구멍이 뚫려 있는 부분은 0,
// 칸막이가 존재하는 부분은 1로 표시됩니다. 구멍이 뚫려 있는 부분끼리
// 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주합니다.
// 이때 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는
// 프로그램을 작성하세요. 다음의 4 x 5 얼음 틀 예시에서는 아이스크림이 총 3개
// 생성됩니다.

// 출처 : https://youtu.be/7C9RgOcvkvo?t=2564 (유튜브 나동빈)

const N = 4;
const M = 5;

const arr = new Array(N);
let check = new Array(N);
let count = 0;

for (let i = 0; i < N; i++) {
  check[i] = new Array(M);
}

// 방문한적 있는지 check하는 배열 (기본 값 false)
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    check[i][j] = false;
  }
}

// 값 넣기
arr[0] = [0, 0, 1, 1, 0];
arr[1] = [0, 0, 0, 1, 1];
arr[2] = [1, 1, 1, 1, 1];
arr[3] = [0, 0, 0, 0, 0];

for (let i = 0; i < N; i++) {
  console.log("check[i]", check[i]);
  console.log("arr[i]", arr[i]);
}

for (let i = 0; i < N; i++) {
  // 각 행
  for (let j = 0; j < M; j++) {
    // 각 행의 각 열
    console.log("-------------------");

    // 여기 호출에서는 리턴 값 확인 (얼음이 만들어지는 곳인지 확인하기 위함)
    if (DFS(i, j) === true) {
      count = count + 1;
    }
  }
}

console.log(count);

// function DFS(i, j) {
//   console.log("i,j : ", i, j);

//   // 이전에 이미 방문했던 곳이면 (다른 구역과 같이 탐색되어 카운트된 적이 있음)
//   if (check[i][j] === true) {
//     // 탐색 종료
//     return false;
//   }

//   // 처음 방문하는 곳이면

//   // (i,j) 방문 처리
//   check[i][j] = true;

//   // 얼음이 만들어질 수 있는 곳 => 이어진 곳을 모두 탐색
//   if (arr[i][j] === 0) {
//     // 상하좌우 중에서 아직 탐색안한 곳이면서 0인 곳을 찾아 탐색한다.

//     여기 호출에서는 리턴값 확인 x, 단순히 근처에 연결된 0에 방문 처리를 하기 위함
//     // 상
//     if (i > 0) {
//       if (check[i - 1][j] === false && arr[i - 1][j] === 0) {
//         DFS(i - 1, j);
//       }
//     }

//     // 하
//     if (i < N - 1) {
//       if (check[i + 1][j] === false && arr[i + 1][j] === 0) {
//         DFS(i + 1, j);
//       }
//     }

//     // 좌
//     if (j > 0) {
//       if (check[i][j - 1] === false && arr[i][j - 1] === 0) {
//         DFS(i, j - 1);
//       }
//     }

//     // 우
//     if (j < M - 1) {
//       if (check[i][j + 1] === false && arr[i][j + 1] === 0) {
//         DFS(i, j + 1);
//       }
//     }

//     return true;

//     // 얼음이 만들어질 수 없는 곳
//   } else if (arr[i][j] === 1) {
//     // 바로 종료한다.
//     return false;
//   }
// }

// 탐색 가능한 곳 (상하좌우)를 찾을 때는 위처럼
// 현재 위치인 (i,j)을 기준으로 갈 수 있는 곳인지 판단해도 되고(선판단 후진입, 위에 작성된 로직)

// 일단 이동한 후, 현재 범위가 벗어났는지 판단해도 된다.(선진입 후판단, 아래 작성된 로직)

function DFS(i, j) {
  console.log("i,j : ", i, j);

  // 탐색할 수 없는 곳 (범위를 벗어난 곳)
  if (i <= -1 || i >= N || j <= -1 || j >= M) {
    return false;
  }

  if (check[i][j] === true) {
    // 이전에 이미 방문했던 곳이면 (다른 구역과 같이 탐색되어 카운트된 적이 있음)
    // 탐색 종료
    return false;
  }

  // 처음 방문하는 곳이면

  // (i,j) 방문 처리
  check[i][j] = true;

  // 얼음이 만들어질 수 있는 곳 => 이어진 곳을 모두 탐색
  if (arr[i][j] === 0) {
    // 상하좌우 중에서 아직 탐색안한 곳이면서 0인 곳을 찾아 탐색한다.

    // 여기 호출에서는 리턴값 확인 x, 단순히 근처에 연결된 0에 방문 처리를 하기 위함
    // 상
    DFS(i - 1, j);

    // 하
    DFS(i + 1, j);

    // 좌
    DFS(i, j - 1);

    // 우
    DFS(i, j + 1);

    return true;

    // 얼음이 만들어질 수 없는 곳
  } else if (arr[i][j] === 1) {
    // 바로 종료한다.
    return false;
  }
}
