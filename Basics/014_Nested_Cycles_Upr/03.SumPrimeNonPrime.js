function solve(inp) {
  let currElement = inp.shift();
  let i = 2;
  let primesSum = 0;
  let nonPrimesSum = 0;
  while (currElement !== "stop") {
    let currNumber = Number(currElement);
    if (currNumber < 0) console.log("Number is negative.");
    else {
      for (i = 2; i <= currNumber - 1; i++) {
        if (currNumber % i === 0) break;
      }

      if (i === currNumber) primesSum += currNumber;
      else nonPrimesSum += currNumber;
    }
    currElement = inp.shift();
  }
  console.log(`Sum of all prime numbers is: ${primesSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimesSum}`);  
}

//solve(["3", "9", "0", "7", "19", "4", "stop"]);
//solve(["30", "83", "33", "-1", "20", "stop"]);
 solve(["0", "-9", "0", "stop"]);
