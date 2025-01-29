function solve(inp) {

    let inpObj = {}
    inp.forEach(el => {
        let [key, value] = el.split(' ');
        if ( inpObj.hasOwnProperty(key) ) console.log(`Conflict on ${key}!`);
        else {
            inpObj[key] = value;
            console.log(`Scheduled for ${key}`);            
        }            
    });
    for (const key in inpObj) {
        console.log(`${key} -> ${inpObj[key]}`);        
    }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
