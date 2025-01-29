function solve(inp) {
    let allObjects = [];
    let a = 24.2953;
    
    while(inp.length > 0){
        let [ town, latitude, longitude ] = inp.shift().split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        allObjects.push({town, latitude, longitude});
    }
    allObjects.forEach( (el) => console.log(el));
    
    
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
