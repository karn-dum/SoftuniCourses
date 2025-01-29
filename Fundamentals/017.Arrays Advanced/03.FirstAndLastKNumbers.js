function solve(inp) {
    let k = inp.shift();
    let arr1 = inp.slice(0,k);
    let arr2 = inp.slice(-k);

    console.log(arr1.join(' '));
    console.log(arr2.join(' '));
    
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
