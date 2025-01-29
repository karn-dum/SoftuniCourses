function solve(inp1, inp2) {
  let hour = Number(inp1);
  let dayOfWeek = inp2;

  if(dayOfWeek !== "Sunday" && hour >= 10 && hour <= 18){
    console.log("open");    
  }else{
    console.log("closed");    
  }
}

solve("11", "Monday");
solve("19", "Friday");
solve("11", "Sunday");
