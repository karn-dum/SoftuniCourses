function solve(input) {
  // TAKE THE INPUT
  const depositSum = Number(input[0]);
  const depositAmountPerMonth = Number(input[1]);
  const yearInteresPercent = Number(input[2]);
  // LOGIC FOR SOLOVING THE PROBLEM
  const interstSum = (depositSum * yearInteresPercent) / 100;
  const sumOfInterest = interstSum / 12;
  const totalSum = depositSum + depositAmountPerMonth * sumOfInterest;
  // OUTPUTING RESULT
  console.log(totalSum.toFixed(2));
}

solve(["200", "3", "5.7"]);
solve(["2350", "6", "7"]);
