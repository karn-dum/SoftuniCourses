function solve(inp) {    
    let capacity = inp[0];
    
    let index = 1;
    let currentSuitcase = inp[index];

    let totalLoaded = 0;
    let overflow = false;
    
    while(currentSuitcase !== "End" ) {        
        currentSuitcase = Number(currentSuitcase);
        if(index % 3 === 0) currentSuitcase *= 1.1;
        if(totalLoaded + currentSuitcase > capacity){
            console.log(`No more space!`);
            overflow = true;
            break;            
        }else{
            totalLoaded += currentSuitcase;
        }        
        index++;
        currentSuitcase = inp[index];
    }
    if(!overflow) console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${index - 1} suitcases loaded.`);    
}



solve(["550",
    "100",
    "252",
    "72",
    "End"]);
    
// solve(["700.5",
//     "180",
//     "340.6",
//     "126",
//     "220"])
    
// solve(["1200.2",
//     "260",
//     "380.5",
//     "125.6",
//     "305",
//     "End"])
    