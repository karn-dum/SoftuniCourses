function solve(inp) {
  let sum = 0;
  let sumArr = [];
  while (inp.length > 2) {
    for (let i = 0; i < inp.length - 1; i++) {
      sum = Number(inp[i]) + Number(inp[i + 1]);
      sumArr.unshift(sum);
    }
    inp = sumArr.reverse();
    sumArr = [];    
  }
  
  if(inp.length > 1) sum = Number(inp[0]) + Number(inp[1]);
  else sum = Number(inp[0]);
  console.log(sum);
}

solve([2,10,3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
