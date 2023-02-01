function temperatureConverter(valNum) {
    let c = ((valNum - 32)/1.8);
    let result = c - Math.floor(c);
    if(result !== 0){
      c = c.toFixed(2); 
      c = parseFloat(c);
      return c;   }


     else {
  return c;
     }
  
}

console.log(temperatureConverter(102));