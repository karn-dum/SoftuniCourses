function solve(inp1, inp2, inp3) {

    let num_1 = Number(inp1);
    let num_2 = Number(inp2);
    let magicNum = Number(inp3);
    let comboCounter = 0;
    let message = "";
    let isEnd = false;
    
    for (let i = num_1; i <= num_2; i++){
        for (let j = num_1; j <= num_2; j++){
            comboCounter++;                
            if( i + j === magicNum){
                isEnd = true;
                message = `Combination N:${comboCounter} (${i} + ${j} = ${magicNum})`;
                break;
            }
            if(isEnd) break;
        }    
        if(isEnd) break;
    }
    if(isEnd) console.log(message);
    else console.log(`${comboCounter} combinations - neither equals ${magicNum}`);    
}

solve("1", "10", "5");
//solve(["23", "24", "20"]);
