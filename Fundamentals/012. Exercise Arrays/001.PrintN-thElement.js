function solve(inp) {
    let printLine = '';
    for ( let i = 0; i < inp.length - 1; i += Number(inp[inp.length-1])  ){
        printLine += inp[i] + ' ';
    }
    console.log(printLine.trim());    
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);