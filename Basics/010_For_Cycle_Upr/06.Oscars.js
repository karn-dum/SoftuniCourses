function solve(inp) {
  let actorName = inp[0];
  let initPoints = Number(inp[1]);
  let numOfEvaluates = Number(inp[2]);
  let nameOfEvaluator = "";
  let pointsFromEvaluator = 0;
  let finalPoints = 0;
  let endOfProgram = false;
  finalPoints += initPoints;  

  for (let i = 3; i < inp.length - 1; i += 2) {
    nameOfEvaluator = inp[i];
    pointsFromEvaluator = Number(inp[i + 1]);
    finalPoints += nameOfEvaluator.length * pointsFromEvaluator / 2;
    if (finalPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${finalPoints.toFixed(1)}!`
      );
      endOfProgram = true;
    }
    if (endOfProgram) break;
  }
  if (!endOfProgram)
    console.log(`Sorry, ${actorName} you need ${(1250.5 - finalPoints).toFixed(1)} more!`);
}

solve(["Zahari Baharov","205",4,"Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
solve(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);
