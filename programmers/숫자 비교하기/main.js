function solution(num1, num2) {
    if(num1 >= 10000 && num1 <=0 && num2 >= 10000 && num2 <=0) return
    let answer = num1 === num2?1:-1
    return answer;
}


let num1 = 2;
let num2 = 3;

solution(num1,num2);
