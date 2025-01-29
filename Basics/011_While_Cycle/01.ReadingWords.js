function solve(inp) {
  let i = 0;
  let word = inp[i];
  while (word !== "Stop") {
    console.log(inp[i]);
    i++;
    word = inp[i];
  }
}

solve([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
solve([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
