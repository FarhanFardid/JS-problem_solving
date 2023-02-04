function ticket_discount(n){

    if(n<=100){
     let p = 100 * n;
     return p;

    }
    else if( n > 100 && n <= 200){
        let p1 = 100 * 100;
        let p2 = 90 * (n-100);
        let total = p1 + p2;
        return total;
    }
    else {
        let p1 = 100 * 100;
        let p2 = 90 * 100;
        let p3 = 75 * (n - 200);
        let total = p1 + p2 + p3;
        return total;

    }



}

let tickets = 250;

console.log("The total ticket costing is taka: ", ticket_discount(tickets));