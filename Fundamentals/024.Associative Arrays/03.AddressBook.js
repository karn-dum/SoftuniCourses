function solve(inp) {
  let addrBook = {}
  for (const el of inp) {
    let [name, addres] = el.split(':');
    addrBook[name] = addres;
  }
  let sortedArr = Object.entries(addrBook).sort( (a, b) => a[0].localeCompare(b[0]) );
  //let sortedArr = Object.entries(addrBook).sort( ([kA, vA], [kB, vB]) => vA.toLowerCase().localeCompare(vB.toLowerCase()) );
  // let sortedArr = Object.entries(addrBook).sort( ([kA, vA], [kB, vB]) => vA.localeCompare(vB) );
  sortedArr.forEach(el => console.log(`${el[0]} -> ${el[1]}`));
  
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
