function solve(inp) {
  let map = new Map();
  for (const el of inp) {
    if (!map.has(el)) { map.set(el, 0); }
    map.set(el, map.get(el) + 1);
  }
  let entries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  entries.forEach((x) => console.log(`${x[0]} -> ${x[1]} times`));
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
