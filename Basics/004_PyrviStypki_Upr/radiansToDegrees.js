function solve(inp) {
  const radians = Number(inp[0]);

  let degrees = (radians * 180) / Math.PI;

  console.log(degrees);
}

solve(["3.1416"]);
solve(["6.2832"]);
solve(["0.7854"]);
solve(["0.5236"]);
