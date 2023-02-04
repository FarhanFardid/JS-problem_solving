function arr_slice(arr){
    let array = arr.slice(3,8);
    console.log("Initial array:", arr)
    
    console.log("Sliced array: ", array);

}

function arr_splice(arr){
    let array1= arr.splice(2,4);
    console.log("Spliced array: ", array1);
    console.log("main array after spliced:", arr)
 
} 

let input = [34, 56, 76, 67, 90, 85, 46, 56, 23, 45];

 arr_slice(input);
arr_splice(input);
