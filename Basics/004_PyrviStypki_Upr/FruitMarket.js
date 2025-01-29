function solve(inp) {

    // 1.	Цена на ягодите в лева – реално число в интервала [0.00 … 10000.00]
    // 2.	Количество на бананите в килограми – реално число в интервала [0.00 … 10000.00]
    // 3.	Количество на портокалите в килограми – реално число в интервала [0.00 … 10000.00]
    // 4.	Количество на малините в килограми – реално число в интервала [0.00 … 10000.00]
    // 5.	Количество на ягодите в килограми – реално число в интервала [0.00 … 10000.00]
    
    // •	цената на малините е на половина по-ниска от тази на ягодите;
    // •	цената на портокалите е с 40% по-ниска от цената на малините;
    // •	цената на бананите е с 80% по-ниска от цената на малините.

    const priceOfStrawberries = Number(inp[0]);
    const quantityOfBananas = Number(inp[1]);
    const quantityOfOranges = Number(inp[2]);
    const quantityOfRaspberries = Number(inp[3]);
    const quantityOfStrawberries = Number(inp[4]);

    const priceOfRaspberries =  priceOfStrawberries /2;
    const priceOfOranges =  priceOfRaspberries - priceOfRaspberries * 0.40;
    const priceOfBananas =  priceOfRaspberries - priceOfRaspberries * 0.80;

    const sumOfRaspberies = priceOfRaspberries * quantityOfRaspberries ;
    const sumOfOranges = priceOfOranges * quantityOfOranges ;
    const sumOfBananas = priceOfBananas * quantityOfBananas ;
    const sumOfStrawberries = priceOfStrawberries * quantityOfStrawberries ;
  
    const totalSum = sumOfRaspberies + sumOfOranges + sumOfBananas + sumOfStrawberries
    
    console.log(totalSum);
    
}

solve(["48", "10", "3.3", "6.5", "1.7"]);

solve(["63.5", "3.57", "6.35", "8.15", "2.5"]);
