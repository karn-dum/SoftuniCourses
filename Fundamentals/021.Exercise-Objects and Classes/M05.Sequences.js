function solve(inp) {
  let storage = [];
  while (inp.length > 0) {
    // let arr = inp.shift();
    let arr = JSON.parse(inp.shift()).sort((a, b) => b - a);
    // arr = arr.sort((a, b) => b - a);
    let include = false;
    storage.forEach(el => {
        if(arraysCompare(arr, el)) include =true;
    });
    if( !include ) storage.push(arr);
  }
  storage = storage.sort((a, b) => a.length - b.length)
  storage.forEach(el => {
    console.log(el);    
  })  
  
}

function arraysCompare(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

solve([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
// solve([
//   "[7.14, 7.180, 7.339, 80.099]",
//   "[7.339, 80.0990, 7.140000, 7.18]",
//   "[7.339, 7.180, 7.14, 80.099]"
// ]);
