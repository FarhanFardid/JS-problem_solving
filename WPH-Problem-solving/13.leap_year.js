function findLeapYear(arrOfYears){
  let new_year=[];
  for(let i=0; i<arrOfYears.length; i++){
    let yar = arrOfYears[i];
    if(yar % 4 == 0 ){
        new_year.push(yar);
    }
  }
return new_year;
    }

    let year = [2016, 2018, 2020, 2024, 2028, 2032];
    console.log(findLeapYear(year));