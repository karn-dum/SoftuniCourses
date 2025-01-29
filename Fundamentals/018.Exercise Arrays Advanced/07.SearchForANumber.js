function solve(inp1, inp2) {
    let [numsToTake, numsToRemove, numToSearch ] = inp2;
    let resArr = inp1.slice(0, numsToTake);
    resArr.splice(0,numsToRemove);

    let result = resArr.filter(el => el === numToSearch);    
    let numberOfOcurances = result.length;
    
    console.log(`Number ${numToSearch} occurs ${numberOfOcurances} times.`);
    
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
