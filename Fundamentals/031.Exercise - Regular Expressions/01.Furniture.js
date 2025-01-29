function solve(inp) {
    let row = inp.shift();
    let pattern = />>(?<name>\w+)<<(?<price>\d+\.*\d+)!(?<quantity>\d+)/g
    let names = [] ;
    let totalMoneySpend = 0;
    console.log('Bought furniture:');
    
    while( row !== 'Purchase' ){
        let validRow;
        if ( (validRow = pattern.exec(row) )  !== null) {
            totalMoneySpend += validRow.groups.price * validRow.groups.quantity;
            console.log(validRow.groups.name);
            pattern.lastIndex = 0;    
        }                
        row = inp.shift();
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);    
}

solve([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]
    );