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
