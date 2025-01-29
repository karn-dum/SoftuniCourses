function solve(inp) {
  let numbers = inp;
  numbers.sort((a, b) => b - a);
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

//solve([2, 1, 3]);
//solve([-2, 1, 3]);
solve([0, 0, 2]);
