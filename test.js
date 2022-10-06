function isPrime(n){
  for(let i = 2; i < Math.sqrt(n); i++){
    if(n % i === 0){
      return false
    }
  }
  return true;
}
function isBacwardsPrime(n){
  let reverse = Array.from(String(n), Number);
  
  reverse
}

function backwardsPrime(start, stop){
  
  let answers = [];
  
  for(let i = start; i < stop; i++){
    answers.push(isPrime(i));  
  }
  return answers.filter(x => x !== undefined);
}
