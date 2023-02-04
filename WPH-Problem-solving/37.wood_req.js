function wood_req(b,c,t){
    let bed = 18;
    let chair = 3;
    let table = 12;
 
    let b_wood = bed * b;
  let c_wood = chair * c;
  let t_wood = table * t;
  let total_wood = b_wood + c_wood + t_wood;
  return total_wood;



}

let bed_quantity = 3;
let chair_quantity = 10;
let table_quantity = 2;
console.log("Total amount of wood required: ",wood_req(bed_quantity,chair_quantity,table_quantity)," Cft");