function solve(inp) {
  let data = inp.split(" ");
  let invent = {
    Shadowmourne: {shards: 0},
    Valanyr: {fragments: 0},
    Dragonwrath: {motes: 0},
}
let junk = {}        
  for (let i = 0; i < data.length - 1; i += 2) {
    let numb = Number(data[i]);
    let token = data[i + 1].toLowerCase();
    let item;
    
    switch (token) {
      case "shards": item = "Shadowmourne"; break;
      case "fragments": item = "Valanyr"; break;
      case "motes": item = "Dragonwrath"; break;
      default: item = "Junk"; break;
    }        

    if (item !== "Junk") {
        // if NOT Junk
        invent[item][token] += numb;
      
      if (invent[item][token] >= 250) {
        console.log(`${item} obtained!`); 
        invent[item][token] -= 250;
        break;
      }
    } else {
        // if Junk
        if ( !junk.hasOwnProperty(token) ) {
            junk[token] = 0;
        }
        junk[token] += numb;
    }
  }
  let result = [];
  for (let key in invent) {
    result.push(Object.entries(invent[key]));
}

let sorted = result.sort( (a, b) => {
    let cr1 = b[0][1] - a[0][1];
    let cr2 = a[0][0].localeCompare(b[0][0])
    return cr1 || cr2 ;
} );
sorted.forEach(x =>  console.log(`${x[0][0]}: ${x[0][1]}`));

let sortedJunk = Object.entries(junk).sort( (a, b) => a[0].localeCompare(b[0]));
sortedJunk.forEach(x =>  console.log(`${x[0]}: ${x[1]}`));

}


solve("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
