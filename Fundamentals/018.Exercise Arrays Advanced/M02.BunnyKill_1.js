function solve(inp) {
  let bombsLoc = inp.pop().split(" ");
  let wArr = [];         // Работен масив. В него са преработените входни данни, така че да стане на матрица
  let rows = inp.length; // Брой редове - в работния масив ще са същите като във входния, без последния ред
  let totalDamage = 0;
  let killedBunnies = 0;
  for (let i = 0; i < rows; i++) {
    let currRow = inp[i].split(" ").map(Number); // Попълвне на работния масив
    wArr.push(currRow);
  }
  let cols = wArr[0].length; // Брой колони в работния масив

  while (bombsLoc.length > 0) {
    let [row, col] = bombsLoc.shift().split(",").map(Number); // Вземаме координатите на текущата бомба
    let bombDamage = wArr[row][col];
    if (bombDamage > 0) {
        if(isValid(row-1, col-1)) wArr[row-1][col-1] -= wArr[row][col]; 
        if(isValid(row-1, col  )) wArr[row-1][col  ] -= wArr[row][col]; 
        if(isValid(row-1, col+1)) wArr[row-1][col+1] -= wArr[row][col]; 
        if(isValid(row  , col-1)) wArr[row  ][col-1] -= wArr[row][col]; 
        if(isValid(row  , col+1)) wArr[row  ][col+1] -= wArr[row][col]; 
        if(isValid(row+1, col-1)) wArr[row+1][col-1] -= wArr[row][col]; 
        if(isValid(row+1, col  )) wArr[row+1][col  ] -= wArr[row][col]; 
        if(isValid(row+1, col+1)) wArr[row+1][col+1] -= wArr[row][col]; 
    }
  }
  for (let i = 0; i < rows; i++) {
    for(let j = 0; j < rows; j++){
        if(wArr[i][j] > 0) {
            totalDamage += wArr[i][j];
            killedBunnies ++;
        }
    }
  }
  console.log(totalDamage);
  console.log(killedBunnies);
  
  //for (let i = 0; i < rows; i++) console.log(wArr[i]);

  //---
  function isValid(row, col) {
    if( row >= 0 && row <= rows && col >= 0 && col <= cols ){
        return true;
    }
    return false;
  }
}

//-----------Накрая, три функции :
//--------------1. За превръщане на отрицателните числа в масива в нули
//--------------2. За сумиране на нанесените щети - сума от всички останали в масива чила
//--------------3. За преброяване на избитите зайци - броя на всички клетки по-големи от нула

//===================================================
solve(["5 10 15 20", "10 10 10 10", "10 15 10 10", "10 10 10 10", "2,2 0,1"]);
solve([ '10 10 10',
        '10 10 10',
        '10 10 10',
     '0,0']
    );
