# 부분집합 구하기(DFS)

### ⭐ 문제 추상화

- 자연수 N이 주어질때 1부터 N까지의 부분집합을 구하라
- 공집합은 출력하지 않는다.

### 🔧 알고리즘 설계

- 재귀함수를 이용해 v가 n보다 커지면 순회를 멈추고 출력한다.

### 🔨 알고리즘 구현

```js
function solution(n) {
  const answer = [];
  const ch = Array(n + 1).fill(0);
  function DFS(v) {
    if (v > n) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          tmp = tmp + String(i) + ' ';
        }
      }

      if (tmp) {
        answer.push(tmp.trim(''));
      }
    } else {
      // 두 갈래로 뻗는다.
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);

  return answer;
}

console.log(solution(3));
```

### ✅ 검증 및 트러블 슈팅

- 오답
