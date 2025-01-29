function solve(num1, num2, num3) {
    
    console.log(check(num1, num2, num3));
    
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-5, 1, 1);

//---
function check(a, b, c) {
    if     ( a >= 0 && b >= 0 && c >= 0) return 'Positive';
    else if( a <  0 && b >= 0 && c >= 0) return 'Negative';
    else if( a <  0 && b <  0 && c >= 0) return 'Positive';
    else if( a <  0 && b <  0 && c <  0) return 'Negative';
    else if( a >= 0 && b >= 0 && c <  0) return 'Negative';
    else if( a >= 0 && b <  0 && c <  0) return 'Negative';
    
}