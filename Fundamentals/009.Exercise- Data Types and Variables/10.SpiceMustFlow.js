function solve(yield ) {
    let spiceAmount = 0;
    let days = 0;
    while(yield >= 100){
        days++;
        spiceAmount += yield;
        yield -= 10;
        spiceAmount -= 26;
        
    }
    spiceAmount-=26;
    if(spiceAmount<0) spiceAmount = 0;

    console.log(days);
    console.log(spiceAmount);
    
    
}

solve(111);