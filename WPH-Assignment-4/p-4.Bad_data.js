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

// console.log(findingBadData([76, -90, 0, 56, -34, -32, -45]));