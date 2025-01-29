
// Не ще да е така !!!!!
function calc(a, b, operator) => console.log(({
        'multiply'  : ( a, b ) => a * b,
        'divide'    : ( a, b ) => a / b,
        'add'       : ( a, b ) => a + b,
        'substract' : ( a, b ) => a - b
    })[operator](a, b));
    
    

    //let result = operators[operator](a,b);
    //console.log(result);  
    
    // Или :
    //console.log(operators[operator](a,b));
    


calc( 5, 5, 'multiply');
calc( 40, 8, 'divide');
calc( 12, 19, 'add');
calc( 50, 13, 'substract');