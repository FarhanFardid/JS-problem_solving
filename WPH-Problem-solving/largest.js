function findMax(arr){
    let max = -1;
    for(var i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }

    }
    return max;
   
    }

    let input = [96, 56, 99, 60, 99.5];
    console.log(findMax(input));