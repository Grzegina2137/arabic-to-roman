function convertToRoman(num) {
  let nr = num.toString().split('').map(x => parseInt(x)).reverse()
  const arab = [1,2,3,4,5,7,8,9];
  const rom9 = ['I','II','III','IV','V','VI','VII','VIII','IX']
  const rom90 = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
  const rom900 = ['C','CC','CCC','CD','D','DC','DCC','DCCC', 'CM']
 
  for(let i = 0; i < nr.length; i++)
  {
    if(i==0) nr[0] = rom9[nr[0]-1]
    if(i==1) nr[1] = rom90[nr[1]-1]
    if(i==2) nr[2] = rom900[nr[2]-1]
    if(i>=3) nr[3] = 'M'.repeat(nr[3])
  }
  
  return nr.reverse().join('');

}
