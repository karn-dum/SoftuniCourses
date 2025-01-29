function solve(inp) {
    let num = Number(inp);
    let specialNum = "";
    let currNum = "";
 
    for ( let i = 1111; i <= 9999; i++){
        currNum = i.toString();
        if( num % Number(currNum[0]) === 0 && num % Number(currNum[1]) === 0 &&
            num % Number(currNum[2]) === 0 && num % Number(currNum[3]) === 0) {
        
            specialNum += `${currNum} `;    
        }
    }
    console.log(specialNum);    
}

//solve("3");
//solve("11");
solve("16");
