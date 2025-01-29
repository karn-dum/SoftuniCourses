function solve(inp) {
  let n = Number(inp[0]);
  let num = Number(inp[1]);
  for (let i = 1; i < inp.length - 1; i++) {
    let nextNum = Number(inp[i + 1]);    
    if (num > nextNum) num = nextNum;    
  }
  console.log(num);
}

solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
solve(["4", "45", "-20", "7", "99"]);
solve(["1", "999"]);
solve(["2", "-1", "-2"]);
