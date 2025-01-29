function solve(inp) {

    let patt_1 = /[starSTAR]/g;
    let patt_2 = /([^@\-!:>]*)@(?<planetName>[A-Za-z]+)([^@\-!:>]*):(?<population>\d+)([^@\-!:>]*)!(?<attackType>[A|D])!([^@\-!:>]*)->(?<soldierCount>\d+)/g
    let part = /([^@\-!:>]*)/g

    let attackedPlanets  = [];
    let destroyedPlanets = []
    let numMess = Number(inp.shift());
    for ( let i = 0; i < numMess; i++ ) {
        
        let row = inp[i]
        let key = row.match(patt_1).length;
        
        row = row.split('').map( x => String.fromCharCode(x.charCodeAt(0) - key)).join('');
        let validRow = patt_2.exec(row);
        if ( validRow !== null ) {

            let planetName = validRow.groups.planetName;
            // let population = Number( validRow.groups.population );
            let attackType = validRow.groups.attackType;
            // let soldierCount = Number( validRow.groups.soldierCount );
            if ( attackType == 'A' ) attackedPlanets.push(planetName);
            if ( attackType == 'D' ) destroyedPlanets.push(planetName);
    
            patt_2.lastIndex = 0;
        }        
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets = attackedPlanets.sort( (a,b) => a.localeCompare(b) );
    attackedPlanets.forEach( x => console.log(`-> ${x}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets = destroyedPlanets.sort( (a, b) => a.localeCompare(b) );
    destroyedPlanets.forEach( x => console.log(`-> ${x}`));

    
}

//solve(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
solve([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
