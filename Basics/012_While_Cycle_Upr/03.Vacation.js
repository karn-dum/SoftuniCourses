function solve(inp) {
    let neededMoney = Number(inp.shift());
    let availableMoeny = Number(inp.shift());
    let badCounter = 0;
    let daysCounter = 0;
    let previosAction = "save";
    let badLuck = false;
    while (availableMoeny < neededMoney) {
        let action = inp.shift();
        let money  = Number(inp.shift());    
        daysCounter++;
        if(action === "spend") {
            availableMoeny -= money;
            if(availableMoeny <= 0) availableMoeny = 0;
            badCounter++;        
            if(badCounter >= 5){
                badLuck = true;
                break;
            }            
        }else{
            badCounter = 0;
            availableMoeny += money;                                    
            if(availableMoeny >= neededMoney) break;
        }        
        previosAction = action;        
    }
    if(badLuck || availableMoeny < neededMoney){
        console.log(`You can't save the money.`);
        console.log(`${daysCounter}`);                
    }else{
        console.log(`You saved the money for ${daysCounter} days.`);        
    }
}

//solve(["2000", "1000", "spend", "1200", "save", "2000"]);
solve(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
// solve(["250",
//     "150",
//     "spend",
//     "50",
//     "spend",
//     "50",
//     "save",
//     "100",
//     "save",
//     "100"]);
    
    