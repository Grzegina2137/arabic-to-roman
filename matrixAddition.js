function matrixAddition(a, b){
  let arr = [];
  
  for(let i = 0; i < a.length; i++){
    arr.push([]);
    for(let j = 0; j < a[0].length; j++){
      arr[i].push(a[i][j] + b[i][j]);
    }
  }
  
  return arr;
}

//   [ [1, 2],
//     [1, 2] ],
// //    +
//   [ [2, 3],
//     [2, 3] ] ),
// //    =
//   [ [3, 5],
//     [3, 5] ] );
//bazowy output na bazie dwóch inputów 
