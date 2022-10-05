function rot13(str) {
  let arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let arr2 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM".split('');
  
  return str.split('').map(x => {
    if(/[a-z]/ig.test(x)){
      return x.replace(x, arr2[arr.indexOf(x)])
    }else{
      return x;
    }
  }).join('');
}
