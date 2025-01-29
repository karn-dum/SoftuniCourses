function solve(inp) {
  let armies = {}
  
  for (const element of inp) {
    let command = element.split(' ').pop();
    if ( command === 'arrives' ){
      addLeader(element, armies);
    } else if ( command === 'defeated' ){
      killLeader(element, armies);
    } else {
      leader = element.split(':')[0]
      if ( !leader.includes('+')) {
        addArmy(element, armies);
      } else {
        updateArmy(element, armies);
      }      
    }    
  }

  // console.log(JSON.stringify(armies, null, 2));  
  let entries = Object.entries(armies).sort( (a, b) => {
    let x = Object.values(a[1]).reduce((acc, z) => acc + z, 0);
    let y = Object.values(b[1]).reduce((acc, z) => acc + z, 0);
    return y - x;
  });
  entries.forEach( x => {
    console.log(`${x[0]}: ${Object.values(x[1]).reduce((acc, z) => acc + z, 0)}`);
    Object.entries(x[1]).sort((a, b) => b[1] - a[1] ).forEach( y => {
      console.log(`>>>${y[0]} - ${y[1]}`);      
    });    
  });

}
//---------------------------------------------------------------------------------------------------------------
function addLeader(row, armies) {
  let temp = row.split(' ');
  temp.pop();
  let leader = temp.join(' ');
  if ( !armies.hasOwnProperty(leader) ){
    armies[leader] = {}
  }
}

function killLeader(row, armies) {
  let temp = row.split(' ');
  temp.pop();
  let leader = temp.join(' ');
  delete armies[leader];
}

function addArmy(row, armies) {
  let [ leader, armyProp ] = row.split(': ');
  let [ army, count ] = armyProp.split(', ');
  if ( armies.hasOwnProperty(leader)) {
    if ( !armies[leader].hasOwnProperty(army) ) {
      armies[leader][army] = Number(count);
    }
  }
}

function updateArmy(row, armies) {
  let [ army, count ] = row.split(' + ');
  
  for ( let leader in armies ){
    if ( armies[leader].hasOwnProperty(army) ){
      armies[leader][army] += Number(count);
    }
  }
}
//----------------------------------------------------------------------------------------------------------------
solve([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
