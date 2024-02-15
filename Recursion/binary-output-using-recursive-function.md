# 재귀함수를 이용한 이진수 출력

### ⭐ 문제 추상화

- 10진수 N이 입력되면 2진수로 변환하라.
- 재귀함수를 이용해야한다.

### 🔧 알고리즘 설계

- 2진수로 변환하기위해서는 N이 2로 나누었을때 몫이 0이 될때까지 나누어야한다.

### 🔨 알고리즘 구현

```js
function solution(n) {
  // 정답을 반환할 answer
  let answer = '';

  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      DFS(Math.floor(L / 2));
      answer = answer + String(L % 2);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11));
```
