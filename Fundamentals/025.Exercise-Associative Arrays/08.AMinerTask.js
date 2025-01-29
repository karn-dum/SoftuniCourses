function solve(inp) {
    let mine = {}
    for (let i = 0; i < inp.length - 1; i+=2) {
        let resource = inp[i];
        let quantity = Number(inp[i+1]);
        if( !mine.hasOwnProperty(resource) ) {
            mine[resource] = quantity;
        } else{
            mine[resource] += quantity;
        }
    }

    Object.entries(mine).forEach( x => {
        console.log(`${x[0]} -> ${x[1]}`); 
    });
}

solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
