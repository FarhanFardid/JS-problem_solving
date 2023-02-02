function tallestFriend ( height ) {
         let tall = height[0];
         for(let i=0; i< height.length; i++){
            if(height[i]> tall){
                tall = height[i];
            }
         }
         return tall;

    }

    let input = [190, 210, 150, 220];
    console.log(tallestFriend(input));