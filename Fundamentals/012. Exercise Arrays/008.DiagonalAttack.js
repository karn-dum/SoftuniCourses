function solve(inp) {
  let leftSum = 0;
  let rightSum = 0;
  let len = inp.length;
  let matrix = [];
  for (let i = 0; i < len; i++) {
    matrix.push(inp[i].split(" "));
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) leftSum += Number(matrix[i][j]);
      if (len - 1 - i === j) rightSum += Number(matrix[i][j]);
    }
  }
  if (leftSum === rightSum) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (i !== j && len - 1 - i !== j) matrix[i][j] = leftSum;
        else matrix[i][j] = Number(matrix[i][j]);
      }
    }
  } else {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        matrix[i][j] = Number(matrix[i][j]);
      }
    }
  }

  //console.log(leftSum, rightSum);
  for (let i = 0; i < len; i++) {
    console.log(matrix[i]);
  }
}
solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
solve(["1 1 1", "1 1 1", "1 1 0"]);
