function highestRank(arr){
  return arr.sort((x,y) => arr.filter(a => a === y).length - 
                 arr.filter(a => a === x).length )[0]
}
