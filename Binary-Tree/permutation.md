# 순열 구하기

### ⭐ 문제 추상화

- N개의 자연수중에 M개를 뽑아 순열을 구하라.

### 🔨 알고리즘 구현

```js
function solution(m, arr) {
  const answer = [];

  const n = arr.length;

  const ch = Array(n).fill(0);
  const tmp = Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      // 중단지점으로 순열이 하나 만들어진 지점
      answer.push(Array.from(tmp));
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          // back하는 지점
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

const arr = [3, 6, 9];
console.log(solution(2, arr));
```
