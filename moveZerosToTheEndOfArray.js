function moveZeros(arr) {
  let arr1 = [];
  
  arr1 = arr.filter( x => x !== 0);
  let zeros = arr.length - arr1.length;
  for(let i = 0; i < zeros; i++){
    arr1.push(0);
  }
  
  return arr1;
  
}
