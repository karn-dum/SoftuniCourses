function solve(inp) {
  const num = Number(inp[0]);
  const entryUnit = inp[1];
  const exitUnit = inp[2];

  let resInMm = 0;

  if (entryUnit === "mm") {
    resInMm = num;
  } else if (entryUnit === "m") {
    resInMm = num * 1000;
  } else if (entryUnit === "cm") {
    resInMm = num * 10;
  }

  let resInExitUnit = 0;

  if (exitUnit === "mm") {
    resInExitUnit = resInMm;
  } else if (exitUnit === "m") {
    resInExitUnit = resInMm / 1000;
  } else if (exitUnit === "cm") {
    resInExitUnit = resInMm / 10;
  }

  console.log(resInExitUnit.toFixed(3));
   
}

solve(["12", "mm", "m"]);
solve(["150", "m", "cm"]);
solve(["45", "cm", "mm"]);
