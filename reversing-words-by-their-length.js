function spinWords(string){
  return string.split(" ").map(function(x){
    return x.length > 4? x.split('').reverse().join('') : x;
  }).join(' ');
}
