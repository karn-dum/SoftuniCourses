function solve(inp) {
  let biggestOne = Number.MIN_SAFE_INTEGER;
  let result = inp.filter((element) => {
    if (element >= biggestOne) {
      biggestOne = element;     
      return true;
    }    
  });
  console.log(result.join(' '));  
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
