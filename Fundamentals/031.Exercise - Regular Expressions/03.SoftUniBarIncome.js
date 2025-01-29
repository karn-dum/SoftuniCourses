function solve(inp) {

    // let pat1 = /[^\|\$%\.]*%(?<name>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>[^\|\$%\.]*[A-Z][a-z]+)>[^\|\$%\.]*\|(?<count>\d+)\|(?<price>\d+\.*\d+)\$[^\|\$%\.]*/gm
    // let part = /[^\|%\$\.]*/g

    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|%\$\.]*<(?<product>[A-Z][a-z]+)>[^\|%\$\.]*\|(?<count>\d+)\|[^\|%\$\.\d]*(?<price>-?\d+\.*\d*)\$/ //g
    rowString = '';
    let totalIncome = 0;
    let row = inp.shift();
    while( ( row !== 'end of shift' )  ) {
        let validRow = pattern.exec(row);

        if ( validRow   !== null) {
            let customerName = validRow.groups.name;
            let product = validRow.groups.product;
            let count =  Number(validRow.groups.count);
            let price = Number(validRow.groups.price);
            let totalPrice = (count * price).toFixed(2);
            totalIncome += Number(totalPrice) ;
            console.log(`${customerName}: ${product} - ${totalPrice}`);
            //pattern.lastIndex = 0;
                        
        }    
        row = inp.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);    
}

solve([
'%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'
]);
console.log('------------------');

solve([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
