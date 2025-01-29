function solve(inp) {
  let arr = inp.shift().split(" ").map(Number);
  let commands = {
    'Add'      : ( a, b ) => arr.push(a),
    'Remove'   : ( a, b ) => arr = arr.filter(el => el !== a ),
    'RemoveAt' : ( a, b ) => arr.splice(a, 1),
    'Insert'   : ( a, b ) => arr.splice(b, 0, a),
}
  while (inp.length > 0) {
    let [command, firstNum, secondNum] = inp.shift().split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    commands[command](firstNum,secondNum);    
  }
  console.log(arr.join(' '));
}

solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
