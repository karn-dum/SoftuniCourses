function solve(inp) {
  let purchasedFood = Number(inp[0]) * 1000;
  let totalFood = 0;

  let index = 1;
  let currFood = inp[index];

  while (currFood !== "Adopted") {
    totalFood += Number(currFood);
    index++;
    currFood = inp[index];
  }
  let difference = Math.abs(purchasedFood - totalFood);
  if (purchasedFood >= totalFood) {
    console.log(`Food is enough! Leftovers: ${difference} grams.`);
  } else {
    console.log(`Food is not enough. You need ${difference} grams more.`);
  }
}

solve(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
solve(["3", "1000", "1000", "1000", "Adopted"]);
solve(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
