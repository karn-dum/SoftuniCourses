function solve(number, power) {
    
console.log(pow(number, power));     



}

solve(2, 8);
solve(3, 4);
// ---
function pow(number, power) {
    let result = number;
    for( let i = 1; i < power; i++ ){
        result = result * number;
    }
    return result;
}