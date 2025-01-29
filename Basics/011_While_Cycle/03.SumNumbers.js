function solve(inp) {

    let num = Number(inp[0]);
    let index = 1;
    let currNum = Number(inp[index]);
    let sum = 0;

    while(sum < num){        
        
        sum += currNum;
        index++;
        currNum = Number(inp[index]);
                        
    }
    
    console.log(sum);

}

solve(["100", "10", "20", "30", "40"]);
solve(["20", "1", "2", "3", "4", "5", "6"]);
