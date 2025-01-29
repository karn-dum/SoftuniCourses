function solve(inp) {
    let isBattle = false;
    let workObj = {};
    let totalPoints = 'Total Points';

    while( inp.length > 0 ){
        let row = inp.shift();
        if( row === 'Ave Cesar') break;
        let [empty, action] = row.split(' ');
        if (action === 'vs') isBattle = true; else isBattle = false;

        if (!isBattle) {
            let [gname, skill, points ] = row.split(' -> ');
            points = Number(points);
            if ( !workObj.hasOwnProperty(gname) ){
                workObj[gname] = {};                
            }
            if( !workObj[gname].hasOwnProperty(skill) ){
                workObj[gname][skill] = points;
            }
            if ( workObj[gname][skill] < points ){
                workObj[gname][skill] = points;
            } 
            if( !workObj[gname].hasOwnProperty(totalPoints) ){
                workObj[gname][totalPoints] = 0;
            }
            workObj[gname][totalPoints] += points;

        } else {
            // if Battle
            let validBattle = true;
            let [ gname1, vs, gname2 ] = row.split(' ');
            if ( !workObj.hasOwnProperty(gname1)) validBattle = false;
            else if ( !workObj.hasOwnProperty(gname2)) validBattle = false;
            if(validBattle){
                for (let key1 in workObj[gname1]){
                    if(key1 === totalPoints) continue;
                    
                    for (let key2 in workObj[gname2]){
                        if(key2 === totalPoints) continue;
                        if ( key1 === key2 && key1 !== totalPoints && key2 !== totalPoints){
                            if ( workObj[gname1][totalPoints] >  workObj[gname2][totalPoints] ){
                                delete workObj[gname2];
                            }
                            else if ( workObj[gname1][totalPoints] <  workObj[gname2][totalPoints] ){
                                delete workObj[gname1];
                            }
                        }                        
                    }
                }
            }
        }        
    }
    let entries = Object.entries(workObj).sort((a, b) => { 
        let cr1 =  b[1][totalPoints] - a[1][totalPoints] ;
        let cr2 =  a[0].localeCompare(b[0]);
        return  cr1  || cr2 ;
    });
    
    entries.forEach(x => {
        console.log(`${x[0]}: ${x[1][totalPoints]} skill`);
        let skills = Object.entries(x[1]);
        skills.sort((a, b) => b[1] - a[1]);
        skills.forEach( z => {
            if ( z[0] !== totalPoints ) console.log(`- ${z[0]} <!> ${z[1]}`) 
        });
    });
}

solve([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
console.log('--------------------');

solve([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
