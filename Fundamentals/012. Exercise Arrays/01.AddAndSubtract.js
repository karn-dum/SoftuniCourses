function solve(inp) {
    let sumOriginal = 0;
    let sumModified = 0; 
    for ( let i = 0; i < inp.length; i++ ){
        let currElement = Number(inp[i]);
        sumOriginal += currElement;
        if ( currElement % 2 === 0 ) inp[i] += i;
        else inp[i] -= i;        
        sumModified += inp[i];
    }
    console.log(inp);
    console.log(sumOriginal);
    console.log(sumModified);        
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);