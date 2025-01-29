function solve(inp1, inp2) {
  let firstYear = Number(inp1);
  let secondYear = Number(inp2);

  for( let i = firstYear; i <= secondYear; i+=4){
    console.log(i);
  }
}

solve("1908", "1919");
solve("2000", "2011");
solve("1584", "1597");
solve("2020", "2032");
