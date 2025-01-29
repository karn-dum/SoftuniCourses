function solve(inp) {

    let keys = inp.shift().split(' ').map(Number);
    let keysOrg = keys.slice();
    while (inp.length > 0) {
        let row;
        if ( (row = inp.shift()) === 'find' ) continue;
        row = row.split('').map(x => x.charCodeAt(0));
        for ( let i = 0; i < row.length; i++ ){
            let temp = keys.shift();
            row[i] -= temp;
            keys.push(temp);
        }
        row = row.map( x => String.fromCharCode(x)).join('');
        let type = row.slice((row.indexOf('&') + 1), row.lastIndexOf('&'));
        let coordinates = row.slice((row.indexOf('<') + 1), row.lastIndexOf('>'));
        console.log(`Found ${type} at ${coordinates}`);
        keys = keysOrg.slice();        
    }    
}

solve([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
