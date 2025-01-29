function solve(inp) {
    let result = [];
    inp.map((el, index) => {if (!(index % 2===0)) result.push(el*2) });
    console.log(result.reverse().join(' '));
    
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);