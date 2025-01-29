function solve(numberOfCenturies) {
    let years = numberOfCenturies*100;
    let days = Math.trunc(numberOfCenturies * 100 * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`1 centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}

solve(1);
solve(5);