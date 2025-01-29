function solve(inp_1, inp_2, inp_3, inp_4, inp_5) {
  let strawberriesPrice = Number(inp_1);
  let bananasKG = Number(inp_2);
  let orangesKG = Number(inp_3);
  let raspberriesKG = Number(inp_4);
  let strawberriesKG = Number(inp_5);

  let raspberriesPrice = strawberriesPrice / 2;
  let orangesPrice = raspberriesPrice * 0.6;
  let bananasPrice = raspberriesPrice * 0.2;

  let moneyNeeded =
    strawberriesKG * strawberriesPrice +
    bananasKG * bananasPrice +
    orangesKG * orangesPrice +
    raspberriesKG * raspberriesPrice;

  console.log(moneyNeeded.toFixed(2));    
}

solve(48, 10, 3.3, 6.5, 1.7);
solve(63.5, 3.57, 6.35, 8.15, 2.5);
