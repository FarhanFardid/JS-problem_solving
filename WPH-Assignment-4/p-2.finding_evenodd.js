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

 console.log(evenOdd('hell'));