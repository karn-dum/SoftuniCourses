function solve(inp) {
  let player_1_Eggs = Number(inp.shift());
  let player_2_Eggs = Number(inp.shift());
  let len = inp.length;
  let winner = "";
  for (let i = 1; i <= len; i++) {
    winner = inp.shift();
    if (winner === "one") player_2_Eggs--;
    else if (winner === "two") player_1_Eggs--;
    else if (winner === "End") {
      console.log(`Player one has ${player_1_Eggs} eggs left.`);
      console.log(`Player two has ${player_2_Eggs} eggs left.`);
      break;
    }
    if (player_1_Eggs <= 0 || player_2_Eggs <= 0) {
      if (player_1_Eggs <= 0)
        console.log(`Player one is out of eggs. Player two has ${player_2_Eggs} eggs left.`);
      else
        console.log(`Player two is out of eggs. Player one has ${player_1_Eggs} eggs left.`);
      break;
    }
  }
}

//solve([5, 4, "one", "two", "one", "two", "two", "End"]);
//solve([2, 6, 'one', 'two', 'two']);
solve([6, 3, 'one', 'two', 'two', 'one', 'one']);
