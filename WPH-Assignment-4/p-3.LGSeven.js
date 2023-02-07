// problem-3 : The isLGSeven() function will take a number as input and based on the difference between the number and seven it will return either the difference or the double of the input number.
function isLGSeven(number){
    if(typeof number !== 'number'){
        return "Please, Enter a valid number input";
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
console.log(isLGSeven('-12'));