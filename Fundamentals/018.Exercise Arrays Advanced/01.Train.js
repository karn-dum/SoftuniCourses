function solve(inp) {

    let wagons = inp.shift().split(' ').map(Number);
    let capacity  = Number(inp.shift());
    while(inp.length > 0){
        let [command, passengers] = inp.shift().split(' ');
        if (command === 'Add') wagons.push(Number(passengers));
        else {
            for (let i = 0; i < wagons.length; i++){
                let passengers = Number(command);
                if( wagons[i] + passengers <= capacity ){
                 wagons[i] +=  passengers;
                 break;
                }    
            }
        }
    }    
    console.log(wagons.join(' '));    
}

solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
solve(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
