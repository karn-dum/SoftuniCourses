function solve(inp) {
    let size = Number(inp.shift());
    let arrangementArrea = inp.shift().split(' ');
    let workArr = [];
    for(let i = 0; i < size; i++){
        workArr[i] = 0;        
    }
    for(let j = 0; j < arrangementArrea.length; j++){
        workArr[Number(arrangementArrea[j])] = 1;
    }    
    // console.log(`size: ${size}  arrangementArrea : ${arrangementArrea}`);
    // console.log(workArr);
    for( let i = 0; i < inp.length; i++ ){
        let commandLine = inp[i].split(' ');
        let currentBugLocation = Number(commandLine[0]);
        let command = commandLine[1];
        let flyLength = Number(commandLine[2]);
        
        if( currentBugLocation >= 0 && currentBugLocation <= size){
            
            workArr[currentBugLocation] = 0;
            if( command === 'right' ){
                let newPlace = currentBugLocation + flyLength;
                if(newPlace <= size && workArr[newPlace] === 0){
                    workArr[newPlace] = 1;
                }else{
                    for(let j = newPlace+1; j < size; j++){
                        if(workArr[j] === 0) workArr[j] = 1;
                    }
                }                
            }else if(command === 'left'){                
                newPlace = currentBugLocation - flyLength;
                if(newPlace >= 0 && workArr[newPlace] === 0){
                    workArr[newPlace] = 1;
                }else{
                    for(let j = newPlace-1; j >= 0; j--){
                        if(workArr[j] === 0) workArr[j] = 1;
                    }
                }
            }            
        }                        
    }
    console.log(workArr.join(' '));    
}

//solve([3, "0 1", "0 right 1", "2 right 1"]);
// solve([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
 solve([5, "3", "3 left 2", "1 left -2"]);
