function solve(inp) {
    inp = inp.split(', ').map(x => x.trim());
    let pattern_1 = /[^\d+\-\*\/\.']/g;
    let pattern_2 = /(\-*\d+\.*\d*)|(\+*\d+\.*\d*)*[\*+|\/+]/g;
    //let pattern_2 = /(?<digits>(\-*\d+\.*\d*)|(\+*\d+\.*\d*))*(?<signs>[\*+|\/+]*)/g;

    let resultArr = [];
    let priintLine;
    while ( inp.length > 0 ) {

        let demonsName = inp.shift();
        let demonsHealth = demonsName.match(pattern_1).reduce( ( a, v) => a + v.charCodeAt(0), 0 );
        let numbers = demonsName.match(pattern_2);
        priintLine = `${demonsName} - ${demonsHealth} health`;
        let damage = 0;
        if (numbers !== null){
            numbers.forEach( x => {
                if( x == '/' ) {
                    damage /= 2;
                } else if ( x == '*' ) {
                    damage *= 2;
                } else {
                    damage += Number(x);
                }                    
            } ) ;                               
        }
        priintLine += `, ${damage.toFixed(2)} damage`;
        resultArr.push(priintLine);
        pattern_2.lastIndex = 0;
    }
    resultArr = resultArr.sort( (a, b) => a.localeCompare(b) );
    resultArr.forEach( x => console.log((x))) ;
}

solve(`M3ph-0.5s-0.5t0.0**`);
solve(`M3ph1st0**, Azazel`);
solve(`Gos/ho`);