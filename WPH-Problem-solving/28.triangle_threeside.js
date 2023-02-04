function tri_area(x, y, z){
    let s = (x+y+z)/2;
    let result = Math.sqrt(s*(s-x)*(s-y)*(s-z));
    return result ;

}
console.log("The area of the triangle with three side is: ",(tri_area(6,7,8). toFixed(2)));