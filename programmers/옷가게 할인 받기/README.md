# 옷가게 할인 받기

![image](https://user-images.githubusercontent.com/104772259/230851342-e8eb5ba3-a9d2-4505-b248-09439a310741.png)

다른사람들은 배열에 할인율을 담아 반복문을 돌면서, 문제 풀이 했다.
그러한 활용법을 배워야할것같다.

### 자바스크립트 문제풀이
````
function solution(price) {
    let answer = 0;
    if(100000<=price && price<300000){
        answer = price - price*5/100;
    }else if(300000<=price && price<500000){
        answer = price - price*10/100;
    }else if(price >= 500000){
        answer = price - price*20/100;
    }else {
        answer = price;
    }
    return Math.trunc(answer)
}


let price = 150000;

solution(price)
````
