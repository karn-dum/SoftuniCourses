function solve(input) {
  let index = 0;
  let row = input[index];

  while (row !== "End") {
    let destination = row; //"Greece"
    index++;
    let budget = Number(input[index]); //1000

    let savingsSum = 0;
    index++;

    while (savingsSum < budget) {
      let moneyToSave = Number(input[index]);

      savingsSum += moneyToSave;
      index++;
    }
    if (savingsSum >= budget) {
      console.log(`Going to ${destination}!`);
    }
    row = input[index];
  }
}

solve(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
    