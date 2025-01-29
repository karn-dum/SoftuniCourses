function solve( num ){
    let sum = 0;
    // num = num.toString();
    // console.log(num.length);
    
    for (let i = 0; i < num.toString().length; i++){ sum += num[i]; }
    
    // if(sum.toString().split('').includes('9')) console.log(`${num} Amazing? True` ) ; 
    // else                                       console.log(`${num} Amazing? False`);

    let result = sum.toString().split('').includes('9');
    console.log(result
        ? `${num} Amazing? True`
        : `${num} Amazing? False`
    );
    
}

solve(1233);
solve(999);