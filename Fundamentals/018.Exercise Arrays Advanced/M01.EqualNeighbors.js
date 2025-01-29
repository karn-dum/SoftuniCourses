function solve(inp) {
  let rows = inp.length;
  let cols = inp[0].length;
  let numberOfEquals = 0;

  for (let i = 0; i < rows - 1; i++) {
    for( let j = 0; j < cols - 1; j++){
      if( inp[i][j] === inp[i][j + 1] )     numberOfEquals ++;
      if( inp[i][j] === inp[i + 1][j] )     numberOfEquals ++;
    }
  }
  console.log(numberOfEquals);
}

// solve([
//   ["2", "3", "4", "7", "0"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"]
// ]);
solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
