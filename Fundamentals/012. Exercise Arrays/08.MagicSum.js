function solve(inpArr, num) {
    for(let i = 0; i < inpArr.length - 1; i++){
        for ( let j = i+1; j < inpArr.length; j ++){
            if (i !== j && inpArr[i] + inpArr[j] === num) {
                console.log(`${inpArr[i]} ${inpArr[j]}`);
                
            }
        }
    }

}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);
