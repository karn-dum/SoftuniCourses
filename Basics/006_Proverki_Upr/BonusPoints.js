function solve(inp) {
    
    let num = Number(inp[0]);
    let bonusPoints = 0;
    if(num > 0 && num <= 100){
        bonusPoints = 5;
    }else if(num>100 && num <= 1000){
        bonusPoints = num * 0.20;
    }else{
        bonusPoints = num * 0.10;
    }


    if(num%2 === 0 ){
        bonusPoints = bonusPoints + 1;
    }else if(num%5 === 0){
        bonusPoints = bonusPoints + 2;
    }

    console.log(bonusPoints);
    console.log(bonusPoints + num);

}

solve(["20"]);
solve(["175"]);
solve(["2703"]);
solve(["15875"]);