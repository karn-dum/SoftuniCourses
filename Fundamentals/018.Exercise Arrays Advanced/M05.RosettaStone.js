function solve(inp) {
  let n = Number(inp.shift());
  let template = [];
  for (let i = 0; i < n; i++) template.push(inp.shift().split(" ").map(Number));
  let messArr = [];
  let rows = inp.length;
  for (let i = 0; i < rows; i++)
    messArr.push(inp.shift().split(" ").map(Number));
  let cols = messArr[0].length;
  let rightMoves = Math.floor(cols / n);
  let downMoves = Math.floor(rows / n);
  let message = "";
  let rosetteNumber = 0;

  for (let i = 0; i < rows; i += downMoves) {
    for (let j = 0; j < cols; j += rightMoves) {
      for (let k = 0; k < n; k++) {
        for (let v = 0; v < n; v++) {
          if (k + i < rows && v + j < cols) {
            rosetteNumber = messArr[k + i][v + j] + template[k][v];
            messArr[k + i][v + j] = rosetteNumberToChar(rosetteNumber);
          }
        }
      }
    }
  }
  //for (let i = 0; i < rows; i++) console.log(messArr[i]);
  for (let i = 0; i < rows; i ++) {
    for (let j = 0; j < cols; j ++) {
      message += messArr[i][j];
    }
  }
  console.log(message.trim());
  
}

//------------------------------------------------------------------------------------------------------------------------------
function rosetteNumberToChar(rosetteNumber) {
  if (rosetteNumber % 27 === 0) return " ";
  else if (rosetteNumber <= 27) return String.fromCharCode(rosetteNumber + 64);
  else if (rosetteNumber > 27)
    return String.fromCharCode((rosetteNumber % 27) + 64);
}

solve([
  "2",
  "59 36",
  "82 52",
  "4 18 25 19 8",
  "4 2 8 2 18",
  "23 14 22 0 22",
  "2 17 13 19 20",
  "0 9 0 22 22",
]);
solve([
  "2",
  "31 32",
  "74 37",
  "19 0 23 25",
  "22 3 12 17",
  "5 9 23 11",
  "12 18 10 22",
]);
