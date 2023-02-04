function prime(n){

    let flag = 0;

    if(n == 0 || n == 1){
        flag = 1;
    
    }

    for(let i = 2; i <= n/2; i++ ){
        if(n % i == 0){
            flag = 1;
            break;
        }

    }
    if(flag == 0){
        return " a prime number";
    }
    else{
        return "not a prime number";
    }

}

let number = 4;
console.log( number," is ",prime(number) );