function solve(inp1,inp2) {
  let rowNum = Number(inp1);
  let colNum = Number(inp2);

  for (let i = rowNum; i > 0; i--) {
    let rowStr = "";
    for (let j = 0; j < colNum; j++) {
        if( i === rowNum) rowStr += `L${i}${j} `;
        else if(i % 2 === 0) rowStr += `O${i}${j} `;
        else rowStr += `A${i}${j} `;            
    }
    console.log(rowStr);
  }
}

//solve(["6", "4"]);
//solve(["9", "5"]);
solve("4", "4");
