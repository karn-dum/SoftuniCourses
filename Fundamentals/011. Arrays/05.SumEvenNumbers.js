function solve(inp) {
    let sum = 0;
    for ( i = 0; i< inp.length; i++ ){
        let currentNumber = Number(inp[i]);
        if(currentNumber % 2 === 0){
            sum += currentNumber;
        }
    }
    console.log(sum);
    
}
solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);