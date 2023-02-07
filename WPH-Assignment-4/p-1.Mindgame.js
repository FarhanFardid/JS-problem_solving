
//problem-1: This mindGame function will take a positive number as a input parameter and will perform some mathematical operation on that number. after that the function will return only the final output when all the mathematical operations are done.

function mindGame(positive_number){
    if(typeof positive_number !== 'number' || positive_number < 0){
        return "Please, Enter a positive number as an input";
    }
   else{
    let multiplication_result = positive_number * 3;
    let addition_result = multiplication_result + 10;
    let division_result = addition_result / 2;
    let final_result = division_result - 5;

    return final_result;
   }
    
}


console.log(mindGame(0));