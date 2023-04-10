# 피자 나눠 먹기1

![image](https://user-images.githubusercontent.com/104772259/230615421-e7bfe777-b521-4bfe-a65c-666de39b426c.png)

Math.ceil() 함수를 사용하면 , 더욱 효과적으로 문제가 풀어진다.
ceil()함수는 매개변수보다 크거나 같은 정수중 제일 작은 수를 반환해준다.



function solution(n) {
    return Math.ceil(n / 7)
}

### 자바스크립트 문제풀이
````
function solution(n) {
    return n%7?Math.trunc(n/7)+1:Math.trunc(n/7);
}
````
