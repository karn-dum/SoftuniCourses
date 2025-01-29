function solve(inp) {
  let res = [];
//   for (let el of inp) {
//     if (el < 0) res.unshift(el);
//     else res.push(el);
//   }

  inp.map((el) => {
    if (el < 0) res.unshift(el);
    else res.push(el);
  });
  
  console.log(res);
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
