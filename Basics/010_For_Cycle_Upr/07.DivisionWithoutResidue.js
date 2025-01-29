function solve(inp) {
  let numOfNumbers = Number(inp[0]);
  let p1 = 0; 
  let p2 = 0; 
  let p3 = 0;  
  for (let i = 1; i < inp.length; i++) {
    let currentNum = Number(inp[i]);
    if( currentNum % 2 === 0 ) p1++;
    if( currentNum % 3 === 0 ) p2++;
    if( currentNum % 4 === 0 ) p3++;
  }
  console.log(`${(p1/numOfNumbers * 100).toFixed(2)}%`);
  console.log(`${(p2/numOfNumbers * 100).toFixed(2)}%`);
  console.log(`${(p3/numOfNumbers * 100).toFixed(2)}%`);
}
solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
//solve(["3", "3", "6", "9"]);
