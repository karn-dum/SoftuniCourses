function solve(n){

    printMatrix(n);

}

// solve(3);
// solve(7);
solve(2);
//---
function printMatrix(n) {
    let outherArr = [];
    for ( let i = 0; i < n; i++ ){
        let innerArr = [];    
        for ( let j = 0; j < n; j++ ){
            innerArr.push(n);
        }
    outherArr.push(innerArr)
    }
    for (let i = 0; i < n; i++) {
    console.log(outherArr[i]);
            
    }
    
}