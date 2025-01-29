function solve(inp) {
    let sortedInp = inp.sort((a, b) => a - b);
    sortedInp = sortedInp.slice(0,2);
    console.log(sortedInp.join(' '));
    
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);