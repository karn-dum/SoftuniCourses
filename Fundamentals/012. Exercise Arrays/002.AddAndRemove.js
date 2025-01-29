function solve(inp) {
    
    let arr = [];
    for (let i = 0; i < inp.length; i++){        
        if(inp[i] === 'add'){
            arr.push(i+1);
        }else if(inp[i] === 'remove'){
            arr.pop();
        }
    }
    console.log(arr.join(' '));
    
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);