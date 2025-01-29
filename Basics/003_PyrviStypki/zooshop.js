function zooshop(inp) {  
    let dogs1 = parseFloat(inp[0]);
    let dogs2 = parseFloat(inp[1]);
    let sum = (2.5 * dogs1) + (4 *  dogs2) ;
    console.log(`${sum} lv.`);
}

zooshop(["13", "9"]);