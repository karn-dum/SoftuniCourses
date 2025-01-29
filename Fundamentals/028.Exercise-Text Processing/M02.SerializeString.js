function solve(inp) {
    // let set = new Set(inp[0]);
    // let uniqueArr = [...set];
    // console.log(uniqueArr);
    let unique = {}
    let text = inp[0];
    for ( let i = 0; i < text.length; i++) {
        if ( unique[text[i]] == undefined ) {
            unique[text[i]] = [];
        }
        unique[text[i]].push(i);
    }
    let resArr = Object.entries(unique) 
    resArr.forEach( x => {
        console.log(`${x[0]}:${x[1].join('/')}`)
    });        
}

//solve(["abababa"]);
solve(["avjavamsdmcalsdm"]);