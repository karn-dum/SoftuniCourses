function solve(inp) {
  let bombsLoc = inp.pop().split(" ");
  let wArr = []; // Работен масив. В него са преработените входни данни, така че да стане на матрица
  let rows = inp.length; // Брой редове - в работния масив ще са същите като във входния, без последния ред
  let explodedBombsList = []; // Списък с координатите на вече експлоадиралите бомби, за да не гръмнат втори път.
  let bombPositionInList = -1; // Позиция на бомбата в листа с изгърмелите - за да я изтрием от там
  let totalDamage = 0;
  let killedBunnies = 0;
  for (let i = 0; i < rows; i++) {
    // Попълвне на работния масив
    let currRow = inp[i].split(" ").map(Number);
    wArr.push(currRow);
  }
  let cols = wArr[0].length; // Брой колони в работния масив
  
  // Граници - Bounders
  // let up = 0,
  //   left = 0,
  //   down = rows,
  //   right = cols;
  while (bombsLoc.length > 0) {
    let [row, col] = bombsLoc.shift().split(",").map(Number); // Вземаме координатите на текущата бомба

    // Говедо : първо провери дали бомбата вече не е гръмнала т.е. дали я има в explodedBombsList
    //isExploded = checkIfExploded(row, col);
    //if (!isExploded) {
      // После ако не е, я гръмни и я вкарай там
      //putBombInExplodedBombsList(row, col);
      explodeBomb(row, col);
    //}
    //explodedBombsList.map((el) => console.log(el));
    for( let i = 0; i < rows; i++ ) console.log(wArr[i]);        
    
  }

  //-----------Накрая, три функции :
  //--------------1. За превръщане на отрицателните числа в масива в нули
  //--------------2. За сумиране на нанесените щети - сума от всички останали в масива чила
  //--------------3. За преброяване на избитите зайци - броя на всички клетки по-големи от нула

  //----------------------------------------------

  function explodeBomb(row, col) {
    let bombDamage = wArr[(row, col)];
    if( bombDamage > 0 ) {
      
    }
  }
  //----------------------------------------------

  function putBombInExplodedBombsList(row, col) {
    let bombArr = [row, col];
    explodedBombsList.push(bombArr);
  }
  //----------------------------------------------

  function checkIfExploded(row, col) {
    let currArray = [row, col];
    for (let i = 0; i < explodedBombsList.length; i++) {
      if (equalArrays(currArray, explodedBombsList[i])) {
        bombPositionInList = i;
        return true;
      }
    }
    return false;
  }
  //----------------------------------------------

  function equalArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] === arr2[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}
//===================================================
solve(["5 10 15 20", "10 10 10 10", "10 15 10 10", "10 10 10 10", "2,2 0,1"]);
// solve([ '10 10 10',
//         '10 10 10',
//         '10 10 10',
//      '0,0']
//     );
