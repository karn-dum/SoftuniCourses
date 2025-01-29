function solve(inp1, inp2, inp3) {
  let isLeap = inp1;
  let holidays = Number(inp2);
  let weekends = Number(inp3);

  let weekendsForPlay = (48 - weekends) * 3 / 4 + weekends;
  let holidaysForPlay = holidays * 2 / 3;
  let totalPlayDays = weekendsForPlay + holidaysForPlay;
  
  if(isLeap === "leap") {totalPlayDays += totalPlayDays * 0.15;}
  console.log(Math.floor( totalPlayDays));  
}
solve("leap", "5", "2");
solve("normal", "3", "2");
solve("leap", "2", "3");
solve("normal", "11", "6");
solve("leap", "0", "1");
solve("normal", "6", "13");
