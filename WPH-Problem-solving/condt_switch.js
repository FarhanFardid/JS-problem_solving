function getLetter(s) {
    let letter = s[0];
    switch(letter){
        case 'a':
        case 'e':
         case 'i':    
         case 'o':   
         case 'u':   
                  return 'A';
                  break;
        case 'b':
          case 'c':
           case 'd':    
           case 'f':   
           case 'g':   
                    return 'B';
                              break;
               
          case 'h':
            case 'j':
             case 'k':    
             case 'l':   
             case 'm': 
                    return 'C';
                    break;
         default:
                return 'D';
                        
    }
}
     
    // Write your code here
    
    


let input = "vbgdtdh";
console.log(getLetter(input));