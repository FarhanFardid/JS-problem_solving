function swap1(num1, num2){
    [num1, num2] = [num2, num1];

    console.log(num1, num2);

}

swap1(6, 7);


function swap2(num1 , num2){
    num1 = num1 + num2; 
    num2 = num1 - num2;
    num1= num1 - num2;
    console.log(num1, num2);

}

swap2(7, 9);