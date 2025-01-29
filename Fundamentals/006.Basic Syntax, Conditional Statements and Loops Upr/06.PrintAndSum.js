function solve(inp1, inp2) {
    let num_1 = Number(inp1);
    let num_2 = Number(inp2);
    let sum = 0; 
    let resultStr = '' ;

    for( let i = num_1; i <= num_2; i++ ){
        resultStr += `${i} `;
        sum += i
    }
    console.log(resultStr.trim());
    console.log(`Sum: ${sum}`);
    
    
}

solve(5, 10);
solve(0, 26);
solve(50, 60);