function solve(inp) {
    let year = Number(inp);
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) console.log('Yes');
    else console.log('No');
    
}

//solve(1984);
//solve(2003);
solve(2024);