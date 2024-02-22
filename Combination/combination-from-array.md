function check(target, sum) {
if (sum % target === 0) {
return true;
} else {
return false;
}
}

// function solution(arr, r, target) {
// const answer = [];

// const tmp = Array(r).fill(0);

// function DFS(L, idx) {
// if (L === r) {
// // 6의 배수 검사
// let sum = tmp.reduce((a, b) => a + b, 0);
// console.log(sum);

// if (check(target, sum)) {
// answer.push(Array.from(tmp));
// }
// } else {
// // 뻗을 수 있는 가지만큼 뻗어야한다.
// for (let i = idx; i < arr.length; i++) {
// // 가지를 뻗었으면 사용했다고 체크
// console.log('value:', arr[i]);
// // tmp의 L번째 칸에 arr배열의 idx인덱스 값 사용했다
// tmp[L] = arr[i];
// DFS(L + 1, i + 1);
// // DFS 뒤에 작성된 함수는 돌아올때 수행되는것으로
// // 조합의 완성으로 돌아오는것
// }
// }
// }

// // tmp의 0번째 칸의 숫자를 결정할것이고
// // 첫 숫자를 arr배열의 0번째 인덱스 숫자부터 시작하겠다.
// DFS(0, 0);
// console.log(answer);
// return answer.length;
// }

function solution(arr, r, target) {
const answer = [];

const tmp = Array(r).fill(0);

function DFS(L, idx, sum) {
if (L === r) {
// 6의 배수 검사
if (check(target, sum)) {
answer.push(Array.from(tmp));
}
} else {
// 뻗을 수 있는 가지만큼 뻗어야한다.
for (let i = idx; i < arr.length; i++) {
// 가지를 뻗었으면 사용했다고 체크
console.log('value:', arr[i]);
// tmp의 L번째 칸에 arr배열의 idx인덱스 값 사용했다
tmp[L] = arr[i];
DFS(L + 1, i + 1, sum + arr[i]);
// DFS 뒤에 작성된 함수는 돌아올때 수행되는것으로
// 조합의 완성으로 돌아오는것
}
}
}

// tmp의 0번째 칸의 숫자를 결정할것이고
// 첫 숫자를 arr배열의 0번째 인덱스 숫자부터 시작하겠다.
DFS(0, 0, 0);
console.log(answer);
return answer.length;
}

const arr = [2, 4, 5, 8, 12];
console.log(solution(arr, 3, 6));
