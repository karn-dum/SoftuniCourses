function solve(inp) {

    let map = new Map();
    let arr = inp.shift().split(', ')
    arr.forEach(el => { map.set(el,[]) });
    inp.forEach( el => {
        let [house, person] = el.split(' - ');
        if ( map.has(house) ) {
            let temp = map.get(house);
            temp.push(person);
            map.set(house, temp);
        }
    });

    let entries = Array.from(map.entries()).sort( (a, b) => b[1].length - a[1].length )
    entries.forEach(el => {
        console.log(`${el[0]}: ${el[1].length}`);
        el[1].forEach( x => console.log(`--${x}`));        
    });
}

solve([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
