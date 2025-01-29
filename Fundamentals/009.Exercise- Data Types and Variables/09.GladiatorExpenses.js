function solve(lostFightsCount, helmetPrice, swordPrice,  shieldPrice, armorPrice) {
    let gladiatorExpenses = 0;
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;

    for ( let i = 1; i <= lostFightsCount; i++){
        if(i % 2 === 0) {gladiatorExpenses += helmetPrice; trashedHelmet++;}
        if (i % 3 === 0) {gladiatorExpenses += swordPrice; trashedSword++;}
        if(i % 2 === 0 && i % 3 === 0 ) {
            gladiatorExpenses += shieldPrice;
            trashedShield++;
        }        
    }
    //if(trashedShield > 0 && trashedShield % 2 !== 0) trashedArmor += (trashedShield -1) / 2;
    if(trashedShield % 2 !== 0) trashedArmor += (trashedShield -1) / 2;
    else trashedArmor += trashedShield / 2 ;
    gladiatorExpenses += trashedArmor*armorPrice;    
    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
    
}

solve(7,2,3,4,5);
solve(23,12.50,21.50,40,200);