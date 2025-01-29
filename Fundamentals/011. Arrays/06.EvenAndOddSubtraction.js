function solve(inp) {
    let evenSum = 0;
    let oddSum = 0;
    let difference = 0;
    for (let i = 0; i < inp.length; i++){
        let currentNUmber = (Number(inp[i]));
        if (currentNUmber % 2 === 0) evenSum += currentNUmber;
        else oddSum += currentNUmber;
    }
    difference = evenSum - oddSum ;
    console.log(difference);
    
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);