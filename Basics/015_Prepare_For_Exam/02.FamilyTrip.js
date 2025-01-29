function solve(inp_1, inp_2, inp_3, inp_4) {
    let budget = Number(inp_1);
    let nightsNumber = Number(inp_2);
    let nightsPrice = Number(inp_3);
    let additionalCost = budget*Number(inp_4)/100;    
    
    if(nightsNumber > 7){
        nightsPrice = nightsPrice * 0.95 ;
    }

    let totalCost = nightsNumber * nightsPrice;
    totalCost += additionalCost;
    
    let difference = Math.abs(totalCost - budget);
        
    if(budget >= totalCost){
        console.log(`Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`);        
    }else{
        console.log(`${difference.toFixed(2)} leva needed.`);        
    }    
}

solve(800.50, 8, 100, 2); 
solve(500, 7, 66, 15);