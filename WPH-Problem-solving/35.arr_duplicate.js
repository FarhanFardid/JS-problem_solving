function array_duplicate(arr){
    let arr1 = [];
    for(var i=0; i < arr.length; i++ ){
    let name = arr[i];
    if(arr1.includes(name) != true){
        arr1.push(name);

    }
    }
    return arr1;



}

let array = ['john', 'kabir', 'jonathon', 'krake', 'drake','john', 'jack',  'kabir', 'bell', 'john', 'krake'];

console.log("The array after removing the duplicates is: ",array_duplicate(array) );