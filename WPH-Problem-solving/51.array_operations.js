let array1 = [78, 67, 98, 45, 97];
let array2 = [45, 90, 34, 23, 34];
let res = Array.isArray(array1);
console.log(res);

let new_array = array1.concat(array2);
console.log(new_array);

let val1 = array1.includes(78);

console.log(val1);

if(array2.indexOf(34) == -1){
    console.log("Not in the array")
}
else{
    console.log("In the array");
}