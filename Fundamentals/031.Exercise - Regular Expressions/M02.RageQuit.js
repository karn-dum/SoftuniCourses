function solve(inp) {
    
    let patt_1 = /.+?\d+/g;
    let patt_2 = /(?<symbols>[^\d+]+)(?<digits>\d+)/g;

    let matches_1 = inp.match(patt_1);
    let prnLine = '';
    let uniq = [];

    for ( el of matches_1 ) {
        let matches_2 = patt_2.exec(el);
        while (  matches_2 !== null) {
            let symbols = matches_2.groups.symbols.toUpperCase();
            let digits = Number(matches_2.groups.digits);
            prnLine += symbols.repeat(digits);
            symbols.split('').forEach(x => uniq.push(x));
            matches_2 = patt_2.exec(el);
        }
    }
    let set = new Set(uniq);
    console.log(`Unique symbols used: ${set.size}`);    
    console.log(prnLine);    
}

solve('a3');
solve('aSd2&5s@1');