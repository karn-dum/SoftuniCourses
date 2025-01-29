function solve(inpArr, commandArr) {
  let wArr = [];
  let polluted = false;
  let printLine = '';
  for (let i = 0; i < 5; i++) wArr.push(inpArr[i].split(" ").map(Number));
  while (commandArr.length > 0) {
    let [command, value] = commandArr.shift().split(" ");
    value = Number(value);

    if (command === "breeze") {
      for (let i = 0; i < 5; i++) {
        wArr[value][i] -= 15;
      }
    }
    if (command === "gale") {
      for (let i = 0; i < 5; i++) {
        wArr[i][value] -= 20;
      }
    }

    if (command === "smog") {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          wArr[i][j] += value;
        }
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (wArr[i][j] < 0) wArr[i][j] = 0;
      if (wArr[i][j] >= 50) polluted = true;
    }
  }

  if (!polluted) console.log("No polluted areas");
  else {
    printLine = `Polluted areas: `
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if((wArr[i][j] >= 50) ) {
            printLine += `[${i}-${j}]`;
        }
      }
    }
  }

  //wArr.map((el) => console.log(el));
  console.log(printLine);
  
}
//===============================================================
solve(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
solve(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
solve(
  ["5 7 2 14 4", "21 14 2 5 3", "3 16 7 42 12", "2 20 8 39 14", "7 34 1 10 24"],
  ["breeze 1", "gale 2", "smog 35"]
);
