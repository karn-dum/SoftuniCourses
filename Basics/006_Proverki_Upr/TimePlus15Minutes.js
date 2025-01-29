function solve(inp) {
  let hour = Number(inp[0]);
  let minutes = Number(inp[1]);

  if (minutes > 59 - 15) {
    hour = hour + 1;
    minutes = (minutes + 15) % 60;
  } else {
    minutes += 15;
  }
  if (hour === 24) {
    hour = 0;
  }

  if (minutes < 10) {
    console.log(`${hour}:0${minutes}`);
  } else {
    console.log(`${hour}:${minutes}`);
  }
}

solve(["1", "46"]);
solve(["0", "01"]);
solve(["23", "59"]);
solve(["11", "08"]);
solve(["12", "49"]);
