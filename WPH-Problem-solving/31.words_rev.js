function words_rev(str){
str = str.split(' ');
str = str.reverse();
str = str.join(' ');
return str;

}

function words_rev_loop(str){
   let words = str.split(' ');
    let rev = [];
    for(let i = words.length -1; i >= 0; i--){
        let wrd = words[i];
        rev.push(wrd);
    }
    rev  = rev.join(' ');
    return rev;
}
let string = "Reverse the words in the sentence";
console.log("The reversed words are: ", words_rev(string));
let string1= "This is reversed using loop";
console.log("The reversed words are: ", words_rev_loop(string1));