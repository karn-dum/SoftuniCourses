function solve(inp) {
    let sortedInp = inp.sort();
    for( let i = 0; i < inp.length; i++ ){
        console.log(`${i+1}. ${sortedInp[i]}`);
    }
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);