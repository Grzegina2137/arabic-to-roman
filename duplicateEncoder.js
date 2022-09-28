function duplicateEncode(word){
   
  let arr = word.toLowerCase().split('');
  
  for(let i = 0; i < word.length; i++){
    if((word.toLowerCase().split(arr[i])).length - 1 > 1){
      arr[i] = ")";
      
    }
    else{
      arr[i] = "(";
    }
  }
  return arr.join('');
}
// convert a string to a new string where each character in the new string is 
//"(" if that character appears only once in the original string, or ")" if 
//that character appears more than once in the original string. 
