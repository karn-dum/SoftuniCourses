function solve(inp) {
  let index = 0;
  let data = inp[index];
  let biggestNum = Number.MIN_SAFE_INTEGER ;

  while (data !== "Stop") {
    let currNum = Number(data);
    
    if (currNum > biggestNum) {
      biggestNum = currNum;
    }
    
    index++;
    data = inp[index];
  }
  console.log(biggestNum);
}

solve(["100", "99", "80", "70", "Stop"]);
solve(["-10", "20", "-30", "Stop"]);
solve(["45", "-20", "7", "99", "Stop"]);
solve(["999", "Stop"]);
solve(["-1", "-2", "Stop"]);
