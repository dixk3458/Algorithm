# 피자 나눠 먹기(2)

![image](https://user-images.githubusercontent.com/104772259/230724381-099f60c1-fd68-4e59-90b5-4fd4a5739748.png)


### 자바스크립트 문제 풀이
````
// 피자 6조각
// 나눠 먹을 수 있는 사람 n
// n명이 피자를 안남기고 (피자수 % 사람수 = 0)
// 모두 같은 수 피자 먹어야함
// 최소 몇판?

function solution(n) {
 let pieces = 6;
    while(true){
        if(pieces % n === 0){
            break;
        }
        pieces = pieces +6;
    }
    return pieces/6;
}

````
