function solve(inp) {
    let numberOfRotations = Number(inp.pop());
    for (let i = 1; i <= numberOfRotations; i++) {
        let element = inp.pop();
        inp.unshift(element)        
    }
    console.log(inp.join(' ').trim());   
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);