function centiToMeter(centi){
    let meter = centi / 100;
    return meter.toFixed(2);
}

let centimeter = 567;
console.log("The" ,centimeter, "centimeters in meter is : ", centiToMeter(centimeter),"meters");