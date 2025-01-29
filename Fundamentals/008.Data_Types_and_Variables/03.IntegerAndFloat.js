function solve(num_1, num_2, num_3) {
    let sum = num_1 + num_2 + num_3;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float' ;
    console.log(sum);
    
}

solve(9, 100, 1.1);
solve(100, 200, 303);