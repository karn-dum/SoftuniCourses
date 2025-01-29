function solve(inpArr) {
  noElements = true;
  for (let i = 0; i < inpArr.length; i++) {
    let sumLeft = 0,
      sumRight = 0;
    for (let j = 0; j < inpArr.length; j++) {
      if (j < i) sumLeft  += inpArr[j];
      if (j > i) sumRight += inpArr[j];
    }
    if (sumLeft === sumRight) {
      console.log(i);
      noElements = false;
      break;
    }    
  }
  if (noElements) console.log('no');
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
