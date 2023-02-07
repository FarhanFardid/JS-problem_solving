function evenOdd(input_string){
    if(typeof input_string != 'string'){
        return "Please, enter a valid input type";
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

// console.log(evenOdd('true '));