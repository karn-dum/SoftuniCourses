function solve(inp) {
  let numOfTournaments = Number(inp[0]);
  let initPoints = Number(inp[1]);
  let finalPoints = initPoints;  
  let tournamentsEarned = 0;  
  for (let i = 2; i < inp.length; i++) {
    let currentPoints = 0;
    if      (inp[i] === "W" ){ currentPoints = 2000; tournamentsEarned++ ;}
    else if (inp[i] === "F" ) currentPoints = 1200;
    else if (inp[i] === "SF") currentPoints =  720;
    finalPoints += currentPoints;
  }
  let averagePoints = Math.floor( (finalPoints - initPoints) / numOfTournaments  );
  let percentageOfTournamentsEarned = (tournamentsEarned / numOfTournaments * 100).toFixed(2);
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${percentageOfTournamentsEarned}%`);  
}
solve(["5", "1400", "F", "SF", "W", "W", "SF"]);
solve(["4", "750", "SF", "W", "SF", "W"]);
solve(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
