const deleteProperty =(arr)=>{
    for(var i=0; i< arr.length; i++){
         let prop = arr[i+1];
          if (arr[i].hasOwnProperty(prop)){
            delete arr[i].prop;
            return "YES";
          }
      else {
        return "NO";
      }
    }
  
  }
  
  let input = [{lname:'john',}, 'lname'];
  console.log(deleteProperty(input));