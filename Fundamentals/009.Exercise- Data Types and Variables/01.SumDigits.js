function solve(num) {
    let numAsString = num.toString();
    let sumOfDigits = 0;
    for(let i = 0; i < numAsString.length; i++){
        sumOfDigits += Number(numAsString[i]);
    }
    console.log(sumOfDigits);
    
}

solve(245678);
solve(97561);
solve(543);