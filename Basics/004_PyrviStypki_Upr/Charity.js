function solve(inp) {
  const numberOfCharityDays = Number(inp[0]); // 1.	Броят на дните, в които тече кампанията – цяло число в интервала [0 … 365]
  const numberOfChefs = Number(inp[1]); // 2.	Броят на сладкарите – цяло число в интервала [0 … 1000]
  const numberOfCakes = Number(inp[2]); // 3.	Броят на тортите – цяло число в интервала [0… 2000]
  const numberOfGofrets = Number(inp[3]); // 4. Броят на гофретите – цяло число в интервала [0 … 2000]
  const numberOfPancakes = Number(inp[4]); // 5. Броят на палачинките – цяло число в интервала [0 … 2000]

  const priceOfCakes = 45.0; // •	Торта - 45 лв.
  const priceOfGofrets = 5.8; // •	Гофрета - 5.80 лв.
  const priceOfPancakes = 3.2; // •	Палачинка – 3.20 лв

  let totalSum = 0; // Крайна печалба
  let amountPerDayByAChef = 0; // Печалба за един ден от 1 сладкар
  let totalAmountForADay = 0; // Обща сума за един ден

  amountPerDayByAChef =
    priceOfCakes * numberOfCakes +
    priceOfGofrets * numberOfGofrets +
    priceOfPancakes * numberOfPancakes;

    totalAmountForADay = numberOfChefs * amountPerDayByAChef;

    totalSum = totalAmountForADay * numberOfCharityDays;
    totalSum = totalSum - totalSum/8 ;
    console.log(totalSum.toFixed(2));
}

solve(["23", "8", "14", "30", "16"]);

solve(["131", "5", "9", "33", "46"]);
