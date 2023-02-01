function average (arrOfMarks){
    let sum =0;
    let avg= 0;
let num = arrOfMarks.length;
 for(var i=0; i< num; i++){
   sum += arrOfMarks[i];
   
 }

avg = sum / num;
let result = avg - Math.floor(avg);
if(result !== 0 ){

avg = avg.toFixed(2);
avg = parseFloat(avg);
return avg; 
}
else {
return avg;
}

}

// let input = [75.25, 65, 35.45, 99.50];
let input = [75.25, 65, 80, 35.45, 99.50];
console.log(average(input));