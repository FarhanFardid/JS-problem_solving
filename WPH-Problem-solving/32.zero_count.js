function zero_count(binary){
let count=0;
for(var i=0; i<binary.length;i++){
    if(binary[i] == 0){
        count +=1;
        console.log(count);
    }

}
return count;
}

let input ="10110010" ;
let result = zero_count(input);
console.log("The number of zeros in the binary number is: ", result);