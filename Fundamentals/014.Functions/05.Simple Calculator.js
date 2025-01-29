function solve(a, b, operator) {
  let operators = {
    multiply  : (a, b) => a * b,
    divide    : (a, b) => a / b,
    add       : (a, b) => a + b,
    substract : (a, b) => a - b,
  };

  //let result = operators[operator](a,b);
  //console.log(result);

  // Или :
  console.log(operators[operator](a, b));
}

solve(5, 5, "multiply");
solve(40, 8, "divide");
solve(12, 19, "add");
solve(50, 13, "substract");
