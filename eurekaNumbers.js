function sumDigPow(a, b) {
  let results = [];
  
  for(a; a <= b; a++){
    let i = 0;
    if(
      Array.from(String(a), Number).map(function(x){
      i++;
      return Math.pow(x, i);
    }).reduce((a,b) => a + b,0) == a
    ){
      results.push(a);
    } ;
    
  }
  return results;
}
