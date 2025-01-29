function solve(inp) {
  let record = Number(inp[0]);
  let distance = Number(inp[1]);
  let timeFor1m = Number(inp[2]);

  let timeForDistance = distance * timeFor1m;
  timeForDistance = timeForDistance + Math.floor(distance / 15) * 12.5;
  if (timeForDistance < record) {
    console.log(`Yes, he succeeded! The new world record is ${timeForDistance.toFixed(2)} seconds.`);
  } else {
    console.log(`No, he failed! He was ${(timeForDistance - record).toFixed(2)} seconds slower.`);
  }
}

solve(["10464", "1500", "20"]);

solve(["55555.67", "3017", "5.03"]);
