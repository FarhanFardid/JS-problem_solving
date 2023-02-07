
function isLGSeven(number){
    if(typeof number != 'number'){
        return "Please, enter a valid input";
    }
    else{
        let difference = number - 7;
        if(difference < 7){
            return difference;
        }
        else{
            return number * 2;
        }
    }
}
// console.log(isLGSeven(14));