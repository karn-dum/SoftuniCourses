function solve(inp) {

    let [ firstNum, lastNum, middle ] = [inp[0], inp[1], inp[2]];
    firstNum = firstNum.charCodeAt(0);
    lastNum  = lastNum.charCodeAt(0);
    middle = middle.split('').map( x => x.charCodeAt(0))
    let sum = 0;
    middle.forEach(el => {
        if ( el > Math.min(firstNum, lastNum) && el < Math.max(firstNum, lastNum) ) {
            sum += el;
        }
    });
    console.log(sum);

}

solve([".", "@", "dsg12gr5653feee5"]);
solve(["?", "E", "@ABCEF"]);
solve(["a", "1", "jfe392$#@j24ui9ne#@$"]);
