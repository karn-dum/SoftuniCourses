function solve(inp) {
    let volume = Number(inp.shift()) * Number(inp.shift()) * Number(inp.shift());
    let currVolume = "";
    while(volume > 0){        
        currVolume = inp.shift();
        if(currVolume === "Done") break;
        volume -= Number(currVolume);
    }    
    
    if(volume >= 0) {
        console.log(`${volume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${volume * -1} Cubic meters more.`);
    }
}

solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
solve(["10", "1", "2", "4", "6", "Done"]);
