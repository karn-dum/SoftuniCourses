function solve(inp1, inp2, inp3) {
  const budget = Number(inp1);
  const season = inp2.toLowerCase();
  const numberOffishermen = Number(inp3);
  let fishingPrice = 0;

  if(season === "spring" ) {fishingPrice = 3000}
  else if(season === "summer" || season === "autumn") {fishingPrice = 4200}
  else if(season === "winter") {fishingPrice = 2600};
  
  if(numberOffishermen <= 6) {fishingPrice -= fishingPrice*0.10}
  else if(numberOffishermen > 6 && numberOffishermen <= 11) {fishingPrice -= fishingPrice*0.15}
  else {fishingPrice -= fishingPrice*0.25}
  if(numberOffishermen % 2 === 0 && season !== "autumn")  {fishingPrice -= fishingPrice*0.05}

  let difference = Math.abs(fishingPrice - budget);

  if(fishingPrice <= budget){
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
  }
}

solve("3000", "Summer", "11");
solve("3600", "Autumn", "6");
solve("2000", "Winter", "13");
