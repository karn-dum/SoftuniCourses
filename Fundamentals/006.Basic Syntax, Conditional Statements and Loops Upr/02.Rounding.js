function solve(inp1, inp2) {
    let num = parseFloat(inp1);
    let precision  = Number(inp2)
    if (precision > 15) precision = 15;
    console.log(Number(num.toFixed(inp2)));
    
}

solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);