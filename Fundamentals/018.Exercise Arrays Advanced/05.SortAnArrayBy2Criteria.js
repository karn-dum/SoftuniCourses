function solve(inp) {
  console.log(
    inp.sort((a, b) => a.localeCompare(b)).
        sort((a, b) => a.length - b.length)
  );
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
