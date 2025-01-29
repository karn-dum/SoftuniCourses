
function solve(inp) {
    let minDay = Math.min(...inp);
    let crewCount = inp.length;
    let concrete = 0;
    pesos = 0;
    let daysArr = [];

    while( minDay < 30  ){
        for( let i = 0; i < crewCount; i++ ){
            if( inp[i] < 30){
                concrete += 195 ;
                pesos += 1900 * 195;
                inp[i]++;
            }            
        }
        daysArr.push(concrete);
        concrete = 0;
        minDay++;
    }
    console.log(daysArr.join(', '));
    console.log(pesos + ' pesos');
    
    
}

solve([21, 25, 28]);
solve([17]);
solve([17, 22, 17, 19, 17]);