function bestFriends(list){
 let longest_name = list[0];
 for(var i=0; i < list.length;i++){
    if(list[i].length > longest_name.length){
        longest_name = list[i];
    }
 }
return longest_name;

}

let friends = ['saddam', 'zahid', 'toufique', 'sojol', 'yazdani cikus', 'saif'];

console.log("The longest name among the friends list is: ",bestFriends(friends));