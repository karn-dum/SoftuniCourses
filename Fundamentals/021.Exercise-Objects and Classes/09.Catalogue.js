function solve(inp) {
    //let arr = [];
    let arr = inp.map(el => el.split(' : '));
    arr.map(el => el[1] = Number(el[1]));
    arr.sort(( a, b ) => a[0].localeCompare(b[0]));
    let obj = Object.fromEntries(arr);
    console.log(JSON.stringify(obj, null, 2));
    

}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
