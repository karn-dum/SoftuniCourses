function solve(inp) {
  // •	Пъзел - 2.60 лв.
  // •	Говореща кукла - 3 лв.
  // •	Плюшено мече - 4.10 лв.
  // •	Миньон - 8.20 лв.
  // •	Камионче - 2 лв.

  // 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
  // 2.	Брой пъзели - цяло число в интервала [0… 1000]
  // 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
  // 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
  // 5.	Брой миньони - цяло число в интервала [0 … 1000]
  // 6.	Брой камиончета - цяло число в интервала [0 … 1000]

  const puzzlePrice = 2.6;
  const speakingDollPrice = 3;
  const teddyBearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2;

  const priceOfExcursion = Number(inp[0]);
  const numberOfPuzzles = Number(inp[1]);
  const numberOfSpeakingDolls = Number(inp[2]);
  const numberOfTeddyBears = Number(inp[3]);
  const numberOfminions = Number(inp[4]);
  const numberOfTrucks = Number(inp[5]);

  const numberOfToys =
    numberOfPuzzles +
    numberOfSpeakingDolls +
    numberOfTeddyBears +
    numberOfminions +
    numberOfTrucks;

  let totalPrice =
    numberOfPuzzles * puzzlePrice +
    numberOfSpeakingDolls * speakingDollPrice +
    numberOfTeddyBears * teddyBearPrice +
    numberOfminions * minionPrice +
    numberOfTrucks * truckPrice;
  if(numberOfToys >= 50)  {
    totalPrice = totalPrice*0.75;
  }
  totalPrice = totalPrice*0.9;
  if(totalPrice >= priceOfExcursion){
    console.log(`Yes! ${(totalPrice - priceOfExcursion).toFixed(2)} lv left.`);
  }else{
    console.log(`Not enough money! ${(priceOfExcursion - totalPrice).toFixed(2)} lv needed.`);
  }

}

solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);
