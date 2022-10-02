function createPhoneNumber(numbers){
  let format = "(nnn) nnn-nnnn";
  
  for(let i = 0; i < numbers.length; i++){
    format = format.replace("n", numbers[i]);
  }
  return format;
}
