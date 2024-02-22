# 조합

### 🔨 알고리즘 구현

```js
function solution(n, r) {
  let answer;

  function DFS(n, r) {
    if (r === 0 || n === r) {
      return 1;
    } else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
```

### 메모이제이션

```js
function solution(n, r) {
  let answer;

  const dy = Array.from(Array(n), () => Array(n).fill(0));

  function DFS(n, r) {
    if (dy[n - 1][r - 1] > 0) {
      return dy[n - 1][r - 1];
    }
    if (r === 0 || n === r) {
      return 1;
    } else {
      dy[n - 1][r - 1] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return dy[n - 1][r - 1];
    }
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
```
