function solve(inp) {
    let num1 = Number(inp[0]);
    let num2 = Number(inp[1]);

    if(num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);    
    }
    

}


solve(["5", "3"]);
solve(["3", "5"]);
solve(["10", "10"]);
solve(["-5", "5"]);