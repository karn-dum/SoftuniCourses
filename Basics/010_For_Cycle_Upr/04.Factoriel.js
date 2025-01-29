function solve(inp1) {
    let num = Number(inp1);
    let factoriel = 1
    for ( let i = 1; i<= num; i++){
        factoriel *= i;
    }
    console.log(factoriel);
    

}
solve("4");