function fibonacci(n){

let fibo =[0, 1];
for(let i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
return fibo;

}

let number = 20;
console.log("The fibonacci series is: ", fibonacci(number));
