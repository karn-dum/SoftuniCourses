function solve(inp) {
  let sumArrRows = [];
  let sumArrColumns = [];
  let sumArrLDiagonal = [];
  let sumArrRDiagonal = [];
  let jointSumArray = [];

  let len = inp.length;
  let isMagic = true;

  for (let i = 0; i < len; i++) {
    let sumOfRows = 0;
    let sumOfColumns = 0;
    let sumOfLDiagonal = 0;
    let sumOfRDiagonal = 0;
    let k = 0;
    for (let j = 0; j < len; j++) {
      sumOfRows += inp[i][j];
      sumOfColumns += inp[j][i];
      if (i === j) sumOfLDiagonal += inp[i][j];           // Изваждане на ляв   диагонал в отделен масив
      if (j === len - 1 - i) sumOfRDiagonal += inp[i][j]; // Изваждане на десен диагонал в отделен масив      
    }

    //console.log(sumOfLDiagonal, sumOfRDiagonal);
    
    sumArrRows.push(sumOfRows);
    sumArrColumns.push(sumOfColumns);
    jointSumArray.push(sumOfRows);
    jointSumArray.push(sumOfColumns);
    // sumArrLDiagonal.push(sumOfLDiagonal);
    // sumArrRDiagonal.push(sumOfRDiagonal);
  }
  // console.log(sumArrRows);
  // console.log(sumArrColumns);
  // console.log(jointSumArray);
  for ( i = 0; i < jointSumArray.length - 1; i++){
    if (jointSumArray[i] !== jointSumArray[i + 1]) {
      isMagic = false;
      break;
    }
  }
  
  // console.log(sumArrLDiagonal);
  // console.log(sumArrRDiagonal);
  console.log(isMagic);
  
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
// solve([
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
// solve([
//   [1, 0, 0],
//   [0, 0, 1],
//   [0, 1, 0],
// ]);
