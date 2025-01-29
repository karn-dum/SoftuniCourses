function solve(num) {
    let result = '';

    sums(num);
}

solve( 1000435);
solve( 3495892137259234);

//---
function sums(num) {
    let arr = num.toString().split('');
    let evenSum = 0, oddSum = 0;
    //for(let i = 0; i < arr.length; i++){
    for(let i of arr){
        let currentNum = Number(i);
        if(currentNum % 2  === 0 ){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

