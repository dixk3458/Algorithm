# 중복순열

### 🔨 알고리즘 구현

```js
function solution(n, m) {
  let answer = [];

  let tmp = Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push(Array.from(tmp));
    } else {
      // n개 만큼 가지를 뻗어야한다.
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  // DFS(0) : tmp배열의 0번째 칸을 처리하겠다.
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
```
