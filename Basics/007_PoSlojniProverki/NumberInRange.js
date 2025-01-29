function solve(inp1) {
  let num = Number(inp1);
  if(num >= -100 && num <=100 && num != 0)  {
    console.log("Yes");    
  }else{
    console.log("No");
  }
}

solve("-25");
solve("0");
solve("25");
