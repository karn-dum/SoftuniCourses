function solve(inp1) {
    let n = Number(inp1);
    for (let i = 0; i <= n; i++) {
        if(i%2 === 0) console.log(Math.pow(2, i));
    }
}

solve("3");
solve("4");
solve("5");
solve("6");
solve("7");