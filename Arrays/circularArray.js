function rotateLeft(a, d) {
  let a2 = [...a];
  let shift = null;

  console.log(a2, d);
  for (let i = 0; i < d; i++) {
    shift = a2.shift();
    a2.push(shift);
    //console.log(shift, a2);
  }
  //console.log(a2);
  return a2;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 4));
