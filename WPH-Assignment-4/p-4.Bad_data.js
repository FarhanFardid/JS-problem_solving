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

console.log(findingBadData(['-76']));