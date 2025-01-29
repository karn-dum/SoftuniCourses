function solve(inp) {
    let n = Number(inp);
    let counter = 0;
    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= n; j++){
            for(let k = 0; k <= n; k++){
                if(i+j+k === n){
                    counter++                    
                }
            }
        }

    }
    console.log(counter);
}

solve("25");