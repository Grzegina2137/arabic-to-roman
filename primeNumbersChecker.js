
function isPrime(num) {
  if(num <= 1)
  {
    return false;
  }
  for(let i = 2, sqr = Math.sqrt(num); i <= sqr; i++){
    if(num % i === 0) return false;
  }
return true;
}
