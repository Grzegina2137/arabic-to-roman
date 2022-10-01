function isPangram(string){
  let arr = [];
   let str = string.toLowerCase().replace(/[^a-z]/g, "");
  for(let i = 0; i < str.length; i++){
    if(arr.includes(str.charAt(i))){
      
    }else{
      arr.push(str.charAt(i))
    }
  }
  return arr.length == 26? true: false;
}
