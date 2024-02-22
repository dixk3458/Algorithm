# 인접행렬

### ⭐ 문제 추상화

- 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로를 출력하라.

### 🔨 알고리즘 구현

```js
function solution(n, arr) {
  let answer = 0;
  const ch = Array(n + 1).fill(0);
  const path = [];

  // 인접행렬을 구현하기위해 먼저 0으로 초기화하자.

  const graph = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // 방향 그래프를 완성시키자.
  for (let [i, j] of arr) {
    graph[i][j] = 1;
  }

  // 1번에서 시작해  갈수 있는 길을 골라야한다.
  function DFS(L) {
    if (L === n) {
      // 정점 5에 오면
      ch[L] = 1;
      path.push(L);
      answer = answer + 1;
      console.log(path);
    } else {
      ch[L] = 1;
      path.push(L);
      for (let i = 1; i <= n; i++) {
        if (graph[L][i] === 1 && ch[i] === 0) {
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  // 1번정점을 처리할것이다.
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
```

