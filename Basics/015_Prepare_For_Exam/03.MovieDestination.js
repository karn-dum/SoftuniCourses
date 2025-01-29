function solve(inp_1, inp_2, inp_3, inp_4) {
    let budget = Number(inp_1);
    let destination = inp_2;
    let season = inp_3;
    let numDays= Number(inp_4);
    let pricePerDay = 0;
    switch(destination){
        case "Dubai" : {
            if(season === "Winter") pricePerDay = 45000 * 0.70;
            else if(season === "Summer") pricePerDay = 40000 * 0.70;
        }break;
        case "Sofia" : {
            if(season === "Winter") pricePerDay = 17000 * 1.25;
            else if(season === "Summer") pricePerDay = 12500 * 1.25;
        }break;
        case "London": {
            if(season === "Winter") pricePerDay = 24000;
            else if(season === "Summer") pricePerDay = 20250;
        }break;
    }
    
    let totalCost = pricePerDay * numDays;
    let difference = Math.abs((totalCost - budget)).toFixed(2);
    if(budget >= totalCost){
        console.log(`The budget for the movie is enough! We have ${difference} leva left!`);        
    }else{
        console.log(`The director needs ${difference} leva more!`);        
    }
}

solve(400000, "Sofia", "Winter", 20);
solve(1000000, "Dubai", "Summer", 5);
solve(200000, "London", "Summer", 7);