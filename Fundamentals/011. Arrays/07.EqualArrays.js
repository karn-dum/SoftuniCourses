function solve(inp1, inp2) {
    let sum = 0;
    let isIdentical = true;
    let index;
    for ( let i = 0; i < inp1.length; i++ ){
        let element1 = inp1[i];
        let element2 = inp2[i];
        if( element1 !== element2 ) {isIdentical = false; index = i; break;}
        sum += Number(element1);
    }
    if(!isIdentical) console.log(`Arrays are not identical. Found difference at ${index} index`);
    else console.log(`Arrays are identical. Sum: ${sum}`);
    
    
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);