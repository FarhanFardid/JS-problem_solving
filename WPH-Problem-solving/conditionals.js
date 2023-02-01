// function JimOrDela (marksOfJim, marksOfDela) {
//     if(marksOfJim > marksOfDela){
//       return "Jim";
//     }
//       else{
//           return "Dela"}
//     }
  
  
//   let m = 84;
//   let n =75;
//   console.log(JimOrDela(m,n));


function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
      if(marksOfJim > marksOfDela){
        if(marksOfJim > marksOfChinku){
            return "Jim";
        }
        else{
            return "Chinku";
        }
      }
      else if(marksOfDela > marksOfChinku){
        return "Dela";
      }
      else{
        return "Chinku";
      }
    }

    let x = 75;
let y = 95;
let z = 85;

console.log(JimOrDelaOrChinku(x,y,z));


function stringConcat(str1, str2){
    let string = sr1 + str2;
    console.log(str);
  }
  
  let string1 ="I am going to be";
  let string2 ="an awesome web developer";
  stringConcat(string1, string2);