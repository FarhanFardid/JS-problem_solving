function secondLargest ( numbers ) {
  let largest = numbers[0];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest =numbers[i];

    }
  }
  let sec_largest = numbers[0];
  for(let i=0;i<numbers.length; i++){
    if(numbers[i] > sec_largest && numbers[i] < largest){
        sec_largest = numbers[i];
    }

  }

    return sec_largest;
    }

    let input = [23, 43, 45, 30, 12,45];
    console.log(secondLargest(input));