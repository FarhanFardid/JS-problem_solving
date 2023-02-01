function checkTriangle(side1, side2, side3){
    if(side1 == side2 && side1 == side3){
        return "No";

    }
    else if(side1 == side2 || side1 == side3 || side2 == side3){
        return "Yes";
    }
   
    }

console.log(checkTriangle(8,8,8));