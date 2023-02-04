

function secondLargest ( numbers ) {

numbers = numbers.sort();
console.log(numbers);

let sec_largest =0;
for(let i = numbers.length - 2; i >= 0; i--){
    if(numbers[i] != numbers[i-1] ){
        sec_largest = numbers[i];
        break;
    
    }


}
return sec_largest;


}

 let input = [23, 43, 45, 30, 12];
 console.log(secondLargest(input));