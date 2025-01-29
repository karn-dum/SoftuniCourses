function solve(n) {
    let special = false;
    let sum = 0;
    for (let i = 1; i <= n; i++){
        let num = i.toString();
        for (let j = 0; j < num.length; j++){
            sum += Number(num[j]);
        }
        if(sum === 5 || sum === 7 || sum === 11) special = true;
        else special = false;
        sum = 0;
        console.log(`${i} -> ${special}`);        
    }
}

solve(15);