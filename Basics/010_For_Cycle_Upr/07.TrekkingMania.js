function solve(inp) {
  let numOfGroups = Number(inp[0]);
  let climbingMusala = 0;
  let climbingMontBlanco = 0;
  let climbingKilimanjaro = 0;
  let climbingK2 = 0;
  let climbingEverest = 0;
  let participants = 0;
  let groupNum = 0;
  for (let i = 1; i <= numOfGroups; i++) participants += Number(inp[i]);
  for (let i = 1; i <= numOfGroups; i++){
    groupNum = Number(inp[i]);
    if( groupNum  <= 5) climbingMusala += groupNum;
    else if( groupNum >= 6 && groupNum <= 12)climbingMontBlanco += groupNum;
    else if( groupNum >= 13 && groupNum <= 25)climbingKilimanjaro += groupNum;
    else if( groupNum >= 26 && groupNum <= 40)climbingK2 += groupNum;
    else if(groupNum >= 41 ) climbingEverest += groupNum;
  }
  
  console.log(`${(climbingMusala / participants * 100).toFixed(2)}%`);
  console.log(`${(climbingMontBlanco / participants * 100).toFixed(2)}%`);
  console.log(`${(climbingKilimanjaro / participants * 100).toFixed(2)}%`);
  console.log(`${(climbingK2 / participants * 100).toFixed(2)}%`);
  console.log(`${(climbingEverest / participants * 100).toFixed(2)}%`);
  
}

//solve(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
solve(["5", "25", "41", "31", "250", "6"]);
