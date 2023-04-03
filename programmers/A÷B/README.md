# A÷B

#### 자바스크립트 풀이 방법:

```
function solution(num1, num2) {
    if(num1 <= 0 && num1 >= 100 && num2 <= 0 && num2 >= 100){
        return;
    }
    let answer = Math.trunc((num1/num2) * 1000);
    return answer;
}


let num1 = 50;
let num2 = 30;


solution(num1,num2)
```
