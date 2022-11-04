let snail = function(arr) {
   let lvl = 0;
   let left = 0;
   let width = arr.length - 1;
   let bottom = 0;
   let right = width;
   let leftToRight = 0;
   let rightToLeft = width-1;
   let result = []
  
  while(result.length <= arr.length * arr.length){
     
    if(result.length == arr.length * arr.length) break
    
    while(leftToRight <= width){
      result.push(arr[lvl][leftToRight]);
      leftToRight++;
    }
    bottom++;
    lvl++;
    if(result.length == arr.length * arr.length) break
    
    while(lvl <= width){
      result.push(arr[lvl][right])
      lvl++;
    }
    right--;
    width--;
    lvl--;
    if(result.length == arr.length * arr.length) break
    
    while(rightToLeft > left){
      result.push(arr[lvl][rightToLeft]);
      rightToLeft--;
    }
    rightToLeft = right - 1;
    if(result.length == arr.length * arr.length) break
    
    while(lvl >= bottom ){
      result.push(arr[lvl][left]);
      lvl--;
    }
    lvl++;
    left++;
    leftToRight = left;
  }
  return result[0] == undefined ? [] : result
}

//console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
