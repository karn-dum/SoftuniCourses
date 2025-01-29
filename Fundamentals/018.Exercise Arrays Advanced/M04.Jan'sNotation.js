function solve(inp) {
  let end = false;
  let savedArr = [];
  while (inp.length > 0) {
    let el = inp.shift();
    if (typeof el == "number") savedArr.push(el);
    else {
      if (savedArr.length < 2) {
        console.log("Error: not enough operands!");
        end = true;
        break;
      } else {
        let len = savedArr.length;
        let a = savedArr[len - 2];
        let b = savedArr[len - 1];
        let temp = operation(a, b, el);
        savedArr.splice(len - 2, 2, temp);
      }
    }
  }
  if (!end) {
    if (savedArr.length === 1) {
      console.log(savedArr[0]);
    } else {
      console.log("Error: too many operands!");
    }
  }

  //-------------------------
  function operation(a, b, operator) {
    switch (operator) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return a / b;
    }
  }
}

solve([3, 4, "+"]);
solve([5, 3, 4, "*", "-"]);
solve([7, 33, 8, "-"]);
solve([15, "/"]);
solve([31, 2, "+", 11, "/"]);
solve([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);

