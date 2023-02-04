function cheapest_phone(phones){
    let cheapest = phones[0];
    for(let i = 0; i <phones.length; i++){
        let phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;


}

const mobile =[{ name: "samsung", price:50000}, { name: 'iphone', price:90000},{ name: 'Xiomi', price:30000},{ name: 'huawei', price:40000},{ name: 'walton', price:20000}];

console.log("The cheapest phone is: ", cheapest_phone(mobile));