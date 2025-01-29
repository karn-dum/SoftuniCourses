function solve(inp) {
    let numDays = Number(inp.shift());
    let totalFood = Number(inp.shift());
    let sumEatenByCat = 0;
    let sumEatenByDog = 0;
    let sumEatenByTwo = 0;
    let eatenByDog = 0;
    let eatenByCat = 0;
    let eatenByTwo = 0;
    let cookies = 0;
    let dayCounter = 0;
    for(let i = 1; i <= numDays; i++){
        eatenByDog = Number(inp.shift());
        eatenByCat = Number(inp.shift());
        eatenByTwo = eatenByDog + eatenByCat;
        sumEatenByDog += eatenByDog;
        sumEatenByCat += eatenByCat;
        sumEatenByTwo += eatenByTwo;
        dayCounter++;
        if(dayCounter % 3 === 0) cookies += eatenByTwo * 0.10;        
    }
    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    console.log(`${(100 / totalFood * sumEatenByTwo).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(100 / sumEatenByTwo * sumEatenByDog).toFixed(2)}% eaten from the dog.`);
    console.log(`${(100 / sumEatenByTwo * sumEatenByCat).toFixed(2)}% eaten from the cat.`);    
}

solve([3, 1000, 300, 20, 100, 30, 110, 40]);
solve([3, 500, 100, 30, 110, 25, 120, 35]);
