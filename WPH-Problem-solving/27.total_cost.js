const totalCost = (products) => {
    let total=0;
   for(var i=0; i < products.length; i++){
     let value = products[i].price;
     total +=value;
    
   }
   return total;
     
 
 };
 
//  let input =[{name: "Dano Milk", price: 500}, {name: "Taaza Tea", price: 200}, {name: "Fresh Sugar", price: 300}];

 let input =[{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Huawei Speakers", price:2500}]
 console.log(totalCost(input));