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
