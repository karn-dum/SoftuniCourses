function solve(inp) {
  let index = 0;
  let data = inp[index];
  let smallestNum = Number.MAX_SAFE_INTEGER;

  while (data !== "Stop") {
    let currNum = Number(data);

    if (currNum < smallestNum) {
      smallestNum = currNum;
    }

    index++;
    data = inp[index];
  }
  console.log(smallestNum);
}

solve(["100", "99", "80", "70", "Stop"]);
solve(["-10", "20", "-30", "Stop"]);
solve(["45", "-20", "7", "99", "Stop"]);
solve(["999", "Stop"]);
solve(["-1", "-2", "Stop"]);
