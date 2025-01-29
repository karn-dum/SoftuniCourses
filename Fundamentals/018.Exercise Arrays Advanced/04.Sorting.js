function solve(inp) {
    inp.sort((a, b) => a - b );
    let result = [];
    //console.log(inp);
    
    while(inp.length > 0){
        result.push(inp.pop());
        result.push(inp.shift());
    }
    console.log(result);
    
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
