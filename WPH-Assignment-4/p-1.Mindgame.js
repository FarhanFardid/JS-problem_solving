function mindGame(pos_number){
    if(typeof pos_number != 'number' || pos_number < 0){
        return "Please, enter a valid input";
    }
   else{
    let multiplication_result = pos_number * 3;
    let addition_result = multiplication_result + 10;
    let division_result = addition_result / 2;
    let final_result = division_result - 5;

    return final_result;
   }
    
}


// console.log(mindGame(33));