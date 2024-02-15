# 최대점수 구하기

### ⭐ 문제 추상화

- 주어진 시간안에 N개의 문제중 M개의 문제를 풀어 최대점수를 구해야한다.
- 주어진 시간안에 문제를 풀지 말지를 정해 풀 문제에 대한 부분집합을 구해야한다.
- 즉 재귀를 이용한 부분집합 구하기

### 🔧 알고리즘 설계

- 배열이 주어지면, 배열을 순회하면서 재귀함수를 호출해 해당 배열 요소를 처리할지 말지 결정해주자.
- 재귀를 탈출할때(부분집합을 구했을때) 최대값을 판단하자.

###

```js
function solution(time, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(L, s, t) {
    // 탈출 조건 : L이 arr.length번째를 처리하겠다하고 가지를 뻗는다.
    // 가지를 뻗지만 arr.length를 처리하지 못하고 위로 올라간다.
    if (t > time) {
      // 제한시간 초과
      return;
    }
    if (L === arr.length) {
      // 조합을 완성했으니, 최대값 판단
      answer = Math.max(answer, s);
    } else {
      // 가지를 뻗어야한다.
      // 처리하는 경우

      DFS(L + 1, s + arr[L][0], t + arr[L][1]);

      // 처리하지 못하는 경우
      DFS(L + 1, s, t);
    }
  }

  // 0번째 레벨을 처리할거고 현재 0점 , 0분을 소요했다.
  DFS(0, 0, 0);

  return answer;
}

const arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(20, arr));
```

### ✅ 검증 및 트러블 슈팅
- 오답

