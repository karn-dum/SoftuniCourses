function solve(inp) {
    let area = Number(inp[0]) * Number(inp[1]);
    let index = 2;
    let currElement = inp[index];
    while (area > 0) {
        if (currElement === "STOP") break;        
        currElement = Number(currElement);
        area -= currElement;        
        index++;        
        currElement = inp[index];
    }
    
    if (area >= 0) console.log(`${area} pieces are left.`);
    else console.log(`No more cake left! You need ${area * -1} pieces more.`);
}

solve(["10", "10", "20", "20", "20", "20", "21"]);
solve(["10", "2", "2", "4", "6", "STOP"]);
