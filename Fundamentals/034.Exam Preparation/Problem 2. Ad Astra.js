function solve(inp) {
    
    let pattern = /(#|\|)(?<itemName>[A-Za-z\s*]+)\1(?<expirationDate>\d\d\/\d\d\/\d\d)\1(?<calories>\d+)\1/g ;
    let totalCalories = 0;
    let printArray = [];
    let item = pattern.exec(inp);
    while (  item  !== null ) {
        let itemName = item.groups.itemName;
        let expirationDate = item.groups.expirationDate;
        let calories = Number(item.groups.calories);
        let printLine = `Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`;
        printArray.push(printLine);
        totalCalories += calories;
        item = pattern.exec(inp);       
    }
    let days = totalCalories / 2000;
    let firstPrintLine = `You have food to last you for: ${Math.floor(days)} days!`;
    console.log(firstPrintLine);
    printArray.forEach( x => console.log(x) );
}

solve('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');
console.log('---------------');

solve('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|');
console.log('---------------');

solve('Hello|#Invalid food#19/03/20#450|$5*(@');