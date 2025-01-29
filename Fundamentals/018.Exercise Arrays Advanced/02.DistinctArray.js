function solve(inp) {
    let len = inp.length;
    let result = [] ;
    for( let el of inp){
        if( !result.includes(el) ) result.push(el)
    }
    console.log(result);
    
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);