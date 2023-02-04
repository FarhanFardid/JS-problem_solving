function findOddSum(arrOfNumbers){
    let sum = 0;
    for(let i=0; i<arrOfNumbers.length; i++){
        if(arrOfNumbers[i] % 2 == 1 ){
            sum +=arrOfNumbers[i];
        }
    }
   return sum;
    }

    let input = [5, 7, 45, 60, 70, 1];
    console.log(findOddSum(input));