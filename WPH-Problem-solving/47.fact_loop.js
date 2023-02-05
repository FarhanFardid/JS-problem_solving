function factorial(n){
        let result =1;
        if(n == 0 ){
            return result;
        }
        else{
            for(i = 1;i <= n;i++){
                result = result * i;
            
            } 

              return result;
        }
       

}

let number = 0;
console.log("The factorial of ", number , " is : ", factorial(number));