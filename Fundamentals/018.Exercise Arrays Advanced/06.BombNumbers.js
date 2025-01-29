function solve(inp1, inp2) {
            
    let [bomb, power] = inp2;
    let isMoreBombs = true;
    while(isMoreBombs) {
        if( inp1.includes(bomb) ){
            for (let i = 0; i < inp1.length; i++) {
                const element = inp1[i];
                if ( element === bomb){
                   inp1.splice(inp1.indexOf(bomb) - power, 2*power +1)
                }
            }
        } else {
        isMoreBombs = false;
        }
    }
    console.log(inp1.reduce((acc, el) => acc + el, 0));

}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
