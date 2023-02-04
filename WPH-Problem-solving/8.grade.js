function findGrade(marks){
    if( marks >= 80){
        return "A";
    }
    else if(marks >= 60 && marks < 80)
    {
        return "B";

    }
    else if(marks >= 50 && marks < 60)
    {
        return "C";

    }
    else if(marks >= 40 && marks < 50)
    {
        return "D";

    }
    else{
        return "F";
    }
}


let marks = 35;
console.log(findGrade(marks));