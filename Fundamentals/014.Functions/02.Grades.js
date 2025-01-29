function solve(grade) {
    let result = formatGrade(grade);
    console.log(result);    
}

solve(3.33);
solve(4.50);
solve(2.99);

//---
function formatGrade(grd) {
    if(grd < 3.00) return 'Fail';
    else if( grd >= 3.00 && grd < 4.50 ) return 'Poor';
    else if( grd >= 4.50 && grd < 5.50 ) return 'Very good';
    else if( grd >= 5.50 ) return 'Excellent';

}