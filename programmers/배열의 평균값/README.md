# 배열의 평균값

![image](https://user-images.githubusercontent.com/104772259/230845827-d812ff45-0086-47df-9e4f-46c9c3cacd67.png)

더 간략하게 작성하는 방법을 알아야할것같다.
ex) 
- for~of
- answer +=i;

### 자바스크립트 문제풀이
````
function solution(numbers) {
    let sum = 0;
    for(let i =0;i<numbers.length;i++){
        sum = sum+numbers[i];
    }
    
    return sum/numbers.length;
}


const numbers = [1,2,3,4,5,6,7,8,9,10];

solution(numbers)
````
