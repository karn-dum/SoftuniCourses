function solve(inp1) {
  let num   = inp1;
  let digit = 0;
  let sum   = 0;
  
  for(let i = 0; i < num.length; i++){    
    digit = Number(num[i]);
    sum += digit;
    digit = 0;
  }
  console.log(`The sum of the digits is:${sum}`);
}

solve("1234");
solve("564891");
