function solution(n, m) {
const answer = [];

const tmp = Array(m).fill(0);

function DFS(L, r) {
if (L === m) {
// m번째 칸은 채울수없다.
// 중단점으로 answer에 만든 조합 tmp를 삽입
answer.push(Array.from(tmp));
} else {
// 만들수있는 가지만큼
// 가지를 뻗어야한다.

      for (let i = r; i <= n; i++) {
        // 가지를 뻗었으면 그것을 사용한다고 체크
        tmp[L] = i;

        // 해당 칸에 사용할 숫자를 정했으면 다음 칸을 결정하러 가자.
        // i는 이미 사용했으니 사용할수없다.
        DFS(L + 1, i + 1);
      }
    }

}

// 0번째 칸 부터 채울것이다.
DFS(0, 1);

return answer;
}

console.log(solution(4, 2));
