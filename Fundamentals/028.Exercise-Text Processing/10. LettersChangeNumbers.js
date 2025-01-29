function solve(inp) {
    let inArr = inp.split(' ').filter( x => isValidString(x));
    let totalSum = 0;
    for ( let str of inArr ) {
        //let temp = str.split('');
        let before = str.slice(0,1)  //temp.shift();
        let after  = str.slice(-1) //temp.pop();
        let num    = Number(str.slice(1, str.length -1)) // Number(temp.join(''));
        let sum
        if (isUpper(before)) {
            totalSum += num / position(before);
        } else {
            totalSum += num * position(before);
        }
        if (isUpper(after)) {
            totalSum -= position(after);
        } else {
            totalSum += position(after);
        }
        let a = 1;
    }
    console.log(totalSum.toFixed(2));    
}
/*-----------------------------------------------------------------------------------------------------------------------*/
function isValidString(str) {
    // 65 -  90 Capital letters
    // 97 - 122 Small letters
    let letterCode = str.charCodeAt(0);
    if ( (letterCode >= 65 && letterCode <= 90) || (letterCode >= 97 && letterCode <= 122) )
    return true;
    return false;
}

function isUpper(letter) {
    let letterCode = letter.charCodeAt(0);
    if ( (letterCode >= 65 && letterCode <= 90) )
    return true;
    return false;
}

function position(letter) {
    let letterCode = letter.charCodeAt(0);
    if ( (letterCode >= 65 && letterCode <= 90) )
    return letterCode - 64;
    return letterCode - 96;
}



solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A');