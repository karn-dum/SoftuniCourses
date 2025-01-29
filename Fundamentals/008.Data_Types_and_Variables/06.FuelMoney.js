function solve(distance , passengers , pricePerliter ) {
    let fuelConsumptionPer100Km = 7;
    fuelConsumptionPer100Km += passengers * 0.100;  
   
    let neededFuel  = distance * fuelConsumptionPer100Km / 100;    
    let money = neededFuel * pricePerliter;    
    console.log(`Needed money for that trip is ${money.toFixed(2)} lv`);    
}
//solve(200, 9, 2.49);
//solve(260, 9, 2.49);
solve(90, 14, 2.88);