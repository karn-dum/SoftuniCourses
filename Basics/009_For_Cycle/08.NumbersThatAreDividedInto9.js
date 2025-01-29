function solve(inp1, inp2) {
    let num1 = Number(inp1);
    let num2 = Number(inp2);
    sum = 0;

    for(i = 100; i <=200; i++){
        if(i % 9 ===0){
            sum += i;
        }
    }
    console.log(sum);
    for(i = 100; i <=200; i++){
        if(i % 9 ===0){
            console.log(i);
        }
    }
    
}

solve("100", "200");