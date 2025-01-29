function solve(inp) {
  let index = 0;
  let data = inp[index];

  let total = 0;

  while (data !== "NoMoreMoney") {
    let currSum = Number(data);
    if (currSum < 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log(`Increase: ${currSum.toFixed(2)}`);
    total += currSum;
    index++;
    data = inp[index];
  }
  console.log(`Total: ${total.toFixed(2)}`);
}

solve(["5.51", "69.42", "100", "NoMoreMoney"]);
solve(["120", "45.55", "-150"]);
