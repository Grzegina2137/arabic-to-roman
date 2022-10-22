function solution(list){
 let arr = list;
  let j = [];
  
  for(let i = 0; i < list.length; i++){
    while(arr[i] === arr[i + 1] - 1){
      i++;
      if(arr[i] == arr[i + 1] - 1){
        j.push(i);
      }
    }
  }
  for(let i = 0; i < j.length; i++){
    arr[j[i]
       ] = "-";
    if(arr[j[i]-1] == "-"){
      arr[j[i] - 1] = "";
    }
  }
  
  arr = arr.filter(function(x){
    return x != "";
  });
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == "-"){
      arr[i - 1] += "-" + arr[i + 1];
      arr[i] = "";
      arr[i+1] = "";
    }
  }
  
  return arr.filter(function(x){
    return x != "";
  }).join(',');
  
}
