function solve(inp) {
    let n = Number(inp);
    for (let i = 1; i <= n; i++){
        let row = '';
        for (let j = 1; j <= i; j++){
            row += `${i} `;
        }
        console.log(row);        
    }
}

//solve(3);
//solve(5);
 solve(6);