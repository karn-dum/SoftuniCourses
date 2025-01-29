function solve(inp) {

    let food   = Number(inp[0]) * 1000 ;
    let hay    = Number(inp[1]) * 1000 ;
    let cover  = Number(inp[2]) * 1000 ;
    let weight = Number(inp[3]) * 1000 ;

    for (let i = 1; i <= 30 ; i++) {
        food -= 300;
        if ( i % 2 === 0 ) {
            hay -= (food * 0.05);
        }
        if ( i % 3 === 0) {
            cover -= (weight / 3);
        }
    }
    if ( food > 0 && hay > 0 && cover > 0 ){
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    } else {
        console.log('Merry must go to the pet store!');        
    }
    
}

solve(["10", "5", "5.2", "1"]);
solve(["1", "1.5", "3", "1.5"]);
solve(["9", "5", "5.2", "1"]);
