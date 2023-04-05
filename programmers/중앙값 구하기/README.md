# 중앙값 구하기

![image](https://user-images.githubusercontent.com/104772259/230120436-69ad03c0-3227-49eb-a12d-838afb65848b.png)

### 자바스크립트 문제풀이
````
function solution(array) {
    return array.sort((a,b)=>a-b)[Math.trunc(array.length/2)]
}
````
