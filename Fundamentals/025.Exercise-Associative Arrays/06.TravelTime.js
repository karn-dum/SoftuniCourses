function solve(inp) {
  let destination = {};
  inp.forEach((x) => {
    let [country, town, cost] = x.split(" > ");
    cost = Number(cost);
    if (!destination.hasOwnProperty(country)) {
      destination[country] = {};
    }
    if (!destination[country].hasOwnProperty(town)) {
      destination[country][town] = [];
    }
    destination[country][town].push(cost);
    destination[country][town].sort((a, b) => a - b);
  });
  let destAsArr = Object.entries(destination).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  destAsArr.forEach((x) => {
    let townArr = Object.entries(x[1]).sort( (a, b) => a[1][0] - b[1][0] );
    let printLine = x[0] + ' -> ';
    townArr.forEach( y => printLine += y[0] + ' -> ' + y[1][0] + ' -> ');
    printLine = printLine.split(' -> ');
    printLine.pop();
    console.log(printLine.join(' -> '));
  });

   //console.log(JSON.stringify(destination, null, 2));
}

solve([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
