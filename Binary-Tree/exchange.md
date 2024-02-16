# 동전교환

```js
function solution(arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (answer < L) {
      return;
    }
    if (sum >= m) {
      if (sum === m) {
        answer = Math.min(answer, L);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  // 현재 동전을 한개도 안뽑고, 0원인 상태에서 m을 만들어라.
  DFS(0, 0);

  return answer;
}

const arr = [1, 2, 5];
console.log(solution(arr, 15));
```
