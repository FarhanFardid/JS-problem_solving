function finalScore ( scores ) {
    let sum = 0;
    for(var i=0; i< scores.length; i++){
        sum += scores[i];

    }
    return sum;

}

let score = [23, 64, 37];
console.log(finalScore(score));