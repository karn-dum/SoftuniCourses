function solve(inp) {
    
    let patternN = /[A-Z|a-z]/g ;
    let patternD = /\d/g ;
    let listOfNames = inp.shift().split(', ');
    let row ;
    let racers = {}
    while( (row = inp.shift()) !== `end of race` ) {
        let racer = '';
        // row.match(patternN).forEach( x => racer += x);
        racer = row.match(patternN).join('');
        if( !listOfNames.includes(racer) ) continue
        if ( racers[racer] == undefined ){
            racers[racer] = 0;
        }
        let sum = row.match(patternD).map(Number).reduce((a, v) => a+v, racers[racer]);
        racers[racer] += sum;        
    }
    let sorted = Object.entries(racers).sort( ( a, b ) => b[1] - a[1] );
    // console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}"`);    
    if(sorted[0]) console.log(`1st place: ${sorted[0][0]}`);
    if(sorted[1]) console.log(`2nd place: ${sorted[1][0]}`);
    if(sorted[2]) console.log(`3rd place: ${sorted[2][0]}`);
    
}

solve(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]
    );