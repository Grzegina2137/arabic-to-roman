function narcissistic(value) {
  let i = Array.from(String(value), Number).length;
  return Array.from(String(value), Number).map(x => Math.pow(x,i))
    .reduce((x,y) => x + y,0) === value? true: false;
}
