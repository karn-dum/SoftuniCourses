function solve(inp) {
  let r = inp[1],
    c = inp[0],
    x = inp[2],
    y = inp[3];
  let arr = [];
  let fillNumber = 1;

  for (let i = 0; i < r; i++) {
    let innerArr = [];
    for (let j = 0; j < c; j++) {
      if (i === x && j === y) innerArr.push(fillNumber);
      else {
        innerArr.push(0);
      }
    }
    arr.push(innerArr); // console.log(innerArr);
  }

  for( let k = 1; k <= Math.max(r,c); k++){

    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (!(i === x && j === y)) {
          if (Math.abs(i - x) === fillNumber || Math.abs(j - y) === fillNumber ) {
            arr[i][j] = fillNumber+1;
          }        
        }
      }
    }

    fillNumber++;
  }
  
  for (let i = 0; i < r; i++) {
      console.log(arr[i].join(' '));
  }
}

//solve([4, 4, 0, 0]);
//solve([5, 5, 2, 2]);
 solve([3, 3, 2, 2]);
