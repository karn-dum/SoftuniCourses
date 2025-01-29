function solve(inp) {
  let n = Number(inp);
  let k = 0;
  let isEnd = false;
  
  for (let i = 1; i <= n; i++) {

    if(isEnd) break;
    let row = "";
    
    for (let j = 1; j <= i; j++) {
      k++;
      if (k <= n) {
        row += `${k} `;
      }else{
        isEnd = true;
        break;
      }
    }
    
    console.log(row);

  }
}

solve("7");
