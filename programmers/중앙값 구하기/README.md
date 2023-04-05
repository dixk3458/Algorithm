# 중앙값 구하기

Array.sort(comparefunction)
comparefunction 의 return값이 0보다 클 때 a가 먼저오고, 0일때는 그대로 , 0보다 작을때는 b를 먼저 오게 한다.

![image](https://user-images.githubusercontent.com/104772259/230120436-69ad03c0-3227-49eb-a12d-838afb65848b.png)

### 자바스크립트 문제풀이
````
function solution(array) {
    return array.sort((a,b)=>a-b)[Math.trunc(array.length/2)]
}
````
