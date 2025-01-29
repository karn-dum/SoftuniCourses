function solve(inp) {
  let goalSteps = 10000;
  let steps = 0;
  let goodJob = false;
  let currSteps = inp.shift();
  let diff = 0;
  while (currSteps !== "Going home") {
    currSteps = Number(currSteps);
    steps += currSteps;
    diff = Math.abs(goalSteps - steps);
    if (steps >= goalSteps) {
      goodJob = true;
      break;
    }
    currSteps = inp.shift();
  }

  if (currSteps === "Going home") {
    currSteps = inp.shift();
    currSteps = Number(currSteps);
    steps += currSteps;
    diff = Math.abs(goalSteps - steps);
    if (steps >= goalSteps) {goodJob = true;}
  }
  if (!goodJob) {
    console.log(`${diff} more steps to reach goal.`);
  } else {
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
  }
}

//solve(["1000", "1500", "2000", "6500"]);
//solve(["1500","300","2500","3000","Going home","200"]);
//solve(["1500","3000","250","1548","2000","Going home","2000"]);
solve(["125", "250", "4000", "30", "2678", "4682"]);
