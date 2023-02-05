function paperRequirements(a,b,c){
    book1_pages = 100;
    book2_pages = 200;
    book3_pages = 300;
     
    let p1 = book1_pages * a;
    let p2 = book2_pages * b;
    let p3 = book3_pages * c;
    
let total = p1 + p2 + p3;
return total;

}

let book1 = 4;
let book2 = 5;
let book3 = 7;

console.log("The Total number of pages required is: ",paperRequirements(book1,book2,book3));