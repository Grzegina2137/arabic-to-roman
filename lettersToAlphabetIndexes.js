function alphabetPosition(text) {
  let a = "abcdefghijklmnopqrstuvwxyz".split('');
  let b = [],c = /[a-zA-Z]/;
  text = text.toLowerCase().split('').map(function(x){
    if(c.test(x)){
      b.push(a.indexOf(x) + 1);
    }
  });
  return b.join(' ');
}
