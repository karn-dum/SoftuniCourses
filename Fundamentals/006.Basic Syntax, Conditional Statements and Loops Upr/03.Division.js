function solve(inp) {
    let num = Number(inp);
    let dividers = [2,3,6,7,10];
    let divider  = 0;
    for (let i = 0; i < dividers.length; i++){
        if (num % dividers[i] === 0){
            divider = dividers[i];            
        }
    }
    if(divider === 0) console.log('Not divisible');
    else console.log(`The number is divisible by ${divider}`);
    
}

solve(30);
solve(15);
solve(12);
solve(1643);