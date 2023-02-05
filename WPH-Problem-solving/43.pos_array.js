function pos_value(numbers){
    let pos = [];
    for (let i=0; i< numbers.length; i++){
        number = numbers[i];
        if(number >= 0){
            pos.push(number);

        }
        else{
            break;
        }
    }
    return pos;

}

let input  = [ 56, 87, 45, 34, 90, 87, -45, -23];
console.log("The positive numbers from the array is: ",pos_value(input));
