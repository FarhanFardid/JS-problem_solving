
// problem-5: the gemsToDiamond() function will take three numbers (consider only the positive values) as input and based on the fixed numbers of gems powers it will calculate the total diamond numbers of the three inputs. if the number of diamond is greater than 2000,it will return the extra diamond above that range otherwise it will return the total diamond number. 
function gemsToDiamond(num1, num2, num3){
    if((typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' ) || (num1 < 0 || num2 < 0 || num3 < 0)) {
        return "Please, Enter a valid positive number input type for all the input";
    }
    else{
        let firstFriend_gemspower = 21;
        let secondFriend_gemspower = 32;
        let thirdFriend_gemspower = 43;
        let firstFriend_diamond = firstFriend_gemspower * num1;
        let secondFriend_diamond = secondFriend_gemspower *  num2;
        let thirdFriend_diamond = thirdFriend_gemspower * num3;
        let total_diamond = firstFriend_diamond + secondFriend_diamond + thirdFriend_diamond;
        if(total_diamond < 2000){
            return total_diamond;
        }
        else{
            let diamond = total_diamond - 2000;
            return diamond;
        }
    }
}

console.log(gemsToDiamond(100,1,2));