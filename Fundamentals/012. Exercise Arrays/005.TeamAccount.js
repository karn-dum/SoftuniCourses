function solve(inp) {
  let accList = inp.shift().split(" ");
  let commandLine = "";
  while (commandLine !== "Play!") {
    commandLine = inp.shift();
    let commandArea = commandLine.split(" ");
    let command = commandArea[0];
    let game = commandArea[1];
    if (command === "Install") {
      if (!accList.includes(game)) {
        accList.push(game);
      }
    } else if (command === "Uninstall") {
      if (accList.includes(game)) {
        let index = accList.indexOf(game);
        accList.splice(index, 1);
      }
    } else if ((command === "Update")) {
      if (accList.includes(game)) {
        let index = accList.indexOf(game);
        accList.splice(index, 1);
        accList.push(game);
      }
    } else if(command === 'Expansion' ){
        let expArr = game.split('-');
        let gameStr = expArr[0];
        let expStr  = expArr[1];
        
        if(accList.includes(gameStr)){
            let index = accList.indexOf(gameStr);
            gameStr += `:${expStr}`;
            accList.splice(index + 1, 0, gameStr);
        }
    }
  }
  console.log(accList.join(' '));
}

// solve([
//   "CS WoW Diablo",
//   "Install LoL",
//   "Uninstall WoW",
//   "Update Diablo",
//   "Expansion CS-Go",
//   "Play!",
// ]);
solve([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
