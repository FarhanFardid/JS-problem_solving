function findingSmallest ( numbers ) {
  
    let small = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < small){
            small = numbers[i];
            
        }
        
    }
    return small;
    

    }

    let arr = [29, 70, 67, 2, 67, 1];
    console.log(findingSmallest(arr));