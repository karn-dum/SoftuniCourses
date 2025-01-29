function solve(inp) {
    let value = 0;
    let result = 0;
    let actions = {
        'soap'          : (value)=> value += 10, 
        'vacuum cleaner': (value)=> value + value*0.20,
        'water'         : (value)=> value + value*0.25,
        'mud'           : (value)=> value - value*0.10
    }

    for ( let i = 0; i < inp.length; i++){
        let currentAction = inp[i];
        
        result = actions[currentAction](value);
        value = result;
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
    

}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);