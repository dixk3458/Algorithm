#숫자 비교하기

![image](https://user-images.githubusercontent.com/104772259/229799127-bf16cf0f-0ff3-4031-a6e6-e3ea2483bb43.png)

### 자바스크립트 문제 풀이

````
function solution(num1, num2) {
    if(num1 >= 10000 && num1 <=0 && num2 >= 10000 && num2 <=0) return
    let answer = num1 === num2?1:-1
    return answer;
}


let num1 = 2;
let num2 = 3;

solution(num1,num2);
````
