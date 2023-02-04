// using empty array
// function str_rev(str){
//     let rev =[];
//     for(let i = str.length - 1; i >= 0; i--){
//         let char = str[i];
//         rev.push(char);
//     }
//     rev = rev.join('');
//     return rev;
    
// }
// using empty string 
function str_rev(str){
    let rev ='';
    for(let i = str.length - 1; i >= 0; i--){
        let char = str[i];
        rev = rev + char;
    }
   
    return rev;
    
}
let string = " This is a String";
console.log("The reversed string is: ", str_rev(string));