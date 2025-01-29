function solve(n1, n2) {
let fact_1 = factorial(n1);
let fact_2 = factorial(n2);

  let result = (fact_1 / fact_2).toFixed(2);
  console.log(result);
}

solve(5, 2);
solve(6, 2);
//---
function factorial(n) {
  let res = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) res = res * i;
  return res;
}
