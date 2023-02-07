
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

// problem-2: The evenOdd() function will take a string as an input and based on the number of characters of the string it will return either even or odd. 

function evenOdd(input_string){
    if(typeof input_string !== 'string'){
        return "Please, enter a valid string input ";
    }
    else{
        let string_length = input_string.length;
        if(string_length % 2 == 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
}

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

// problem-4: The findingBadData() function takes an array as input and if there are bad data that is negative number then the function will return the number of negative numbers that are is in the array.
function findingBadData(input_data){
    if(Array.isArray(input_data)){

    let bad_data = 0;
    for(let i = 0; i <input_data.length; i++){
    let data = input_data[i];
    if(data < 0){
        bad_data =  bad_data + 1;

    }    

    }
    return bad_data;
}
else{
    return "please, enter the valid array input type";
}
}


// problem-5: the gemsToDiamond() function will take three numbers (consider only the positive values) as input and based on the fixed numbers of gems powers it will calculate the total diamond numbers of the three inputs. if the number of diamond is greater than 2000,it will return the extra diamond above that range otherwise it will return the total diamond number. 
function gemsToDiamond(num1, num2, num3){
    if((typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' ) || (num1 < 0 || num2 < 0 || num3 < 0)) {
        return "Please, Enter a valid positive number input type for all the input";
    }
    else{
        let firstFriend_gemspower = 21;
        let secondFriend_gemspower = 32;
        let thirdFriend_gemspower = 43;
        let firstFriend_diamond = firstFriend_gemspower * num1;
        let secondFriend_diamond = secondFriend_gemspower *  num2;
        let thirdFriend_diamond = thirdFriend_gemspower * num3;
        let total_diamond = firstFriend_diamond + secondFriend_diamond + thirdFriend_diamond;
        if(total_diamond < 2000){
            return total_diamond;
        }
        else{
            let diamond = total_diamond - 2000;
            return diamond;
        }
    }
}


console.log(mindGame(50));
console.log(evenOdd('hio'));
console.log(isLGSeven(-6));
console.log(findingBadData('[87, 981,475,48, -69, -57, -378, -90]'));
console.log(gemsToDiamond(7,-9,'0'));