function sum(n){
    if(n==1){
        return 1;
    }
    else{
        return n + sum(n-1);
    }
}
let result = sum(10);
console.log(result);