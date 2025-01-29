function solve(inpArr) {
    
    for(let i = 0; i < inpArr.length; i++){
        //console.log(checkIfPalindrom  (inpArr[i]));
        console.log(checkIfPalindrom_2(inpArr[i]));

    }   

    // ----------   Това надолу вече работи -------------
    // let checkIfPal = (number) => {
    //     let numberAsString = number.toString();
    //     for (let i = 0; i < Math.floor(numberAsString.length / 2); i++){
    //         if (numberAsString[i] !== numberAsString[numberAsString.length - 1 - i]) {
    //             return false;
    //         }
    //     } 
    //     return true;
    // }
    // console.log(checkIfPal(inpArr[2]));
     

}

//solve([123,323,421,121]);
solve([32,2,232,1010]);

//---
function checkIfPalindrom(number) {
    let numberAsString = number.toString();
    for (let i = 0; i < Math.floor(numberAsString.length / 2); i++){
        if (numberAsString[i] !== numberAsString[numberAsString.length - 1 - i]) {
            return false;
        }
    } 
    return true;
}
//---
function checkIfPalindrom_2(num) {
    let numAsSting = num.toString();
    let reversedNumAsString = numAsSting.split('').reverse().join('');
    // console.log(numAsSting);
    // console.log(reversedNumAsString);
    if( numAsSting === reversedNumAsString) return true;
    return false;
    

}