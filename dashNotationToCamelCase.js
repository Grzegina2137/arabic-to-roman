function toCamelCase(str){

  if(str.length < 1) return "";
  
    str = str.replace(/[_-]/g, " ").split(' ');
  
  for(let i = 1; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('')
  }
  return str.join('');
}
