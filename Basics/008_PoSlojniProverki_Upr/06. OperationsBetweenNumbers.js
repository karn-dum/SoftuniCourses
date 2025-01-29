function solve(inp1, inp2, inp3) {
  const N1 = Number(inp1);
  const N2 = Number(inp2);
  const operator = inp3;
  let eo = "";
  switch (operator) {
    case "+":
      {
        let resut = N1 + N2;
        if (resut % 2 === 0) {
          eo = "even";
        } else {
          eo = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${resut} - ${eo}`);
      }
      break;

    case "-":
      {
        let resut = N1 - N2;
        if (resut % 2 === 0) {
          eo = "even";
        } else {
          eo = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${resut} - ${eo}`);
      }
      break;
    case "*":
      {
        let resut = N1 * N2;
        if (resut % 2 === 0) {
          eo = "even";
        } else {
          eo = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${resut} - ${eo}`);
      }
      break;
    case "/":
      {
        if (N2 !== 0) {
          let resut = N1 / N2;
          console.log(`${N1} / ${N2} = ${resut.toFixed(2)}`);
        } else {
          console.log(`Cannot divide ${N1} by zero`);
        }
      }
      break;
    case "%": {
      if (N2 !== 0) {
        let resut = N1 % N2;
        console.log(`${N1} % ${N2} = ${resut}`);
      } else {
        console.log(`Cannot divide ${N1} by zero`);
      }
      break;
    }
  }
}

solve("10", "12", "+");
solve("123", "12", "/");
solve("112", "0", "/");
solve("10", "1", "-");
solve("10", "3", "%");
solve("10", "0", "%");
solve("7", "3", "*");
