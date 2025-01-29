function solve(inp) {
  let totalPrice = Number(inp[0]);
  let numberOfStatistics = Number(inp[1]);
  let priceForClothing = Number(inp[2]);
  let decorPrice = totalPrice * 0.1;
  let finalPrice = 0;
  if (numberOfStatistics > 150) {
    finalPrice = decorPrice + numberOfStatistics * priceForClothing * 0.9;
  } else {
    finalPrice = decorPrice + numberOfStatistics * priceForClothing;
  }

  if (finalPrice <= totalPrice) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(totalPrice - finalPrice).toFixed(2)} leva left.`
    ); 
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(finalPrice - totalPrice).toFixed(2)} leva more.`);
  }
}

solve(["20000", "120", "55.5"]);

solve(["15437.62", "186", "57.99"]);

solve(["9587.88", "222", "55.68"]);
