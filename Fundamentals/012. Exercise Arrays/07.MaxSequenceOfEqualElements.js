function solve(inpArr) {
    let noSequence = true;
    let comparisonArray = [];
    let lastSqueceLength = 0;
    for( let i = 0; i < inpArr.length; i ++ ){
        let currSequenceLength = 0;
        for ( j = i+1; j < inpArr.length; j ++ ){           
            
            if (inpArr[i] === inpArr[j]) {
                noSequence = false;
                currSequenceLength ++;
            }else{
                break;
            }
        }
        currSequenceLength++;
        if ( !noSequence && currSequenceLength > lastSqueceLength ) {
            comparisonArray.push(currSequenceLength);
            comparisonArray.push(inpArr[i]);
            lastSqueceLength = currSequenceLength;
        }
    }
    let printLine = '';
    let char = comparisonArray.pop();
    let len = comparisonArray.pop();
    
    for( i = 1; i <= len; i++){
        printLine += char + ' '
    }
    console.log(printLine.trim());    
}

solve([3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 1]);

// solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// solve([1, 1, 1, 2, 3, 1, 3, 3]);
// solve([4, 4, 4, 4]);
// solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);