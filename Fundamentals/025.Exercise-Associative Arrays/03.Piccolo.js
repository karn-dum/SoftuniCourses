function solve(inp) {
    let parkLot = {};
    inp.forEach(el => {
        let [ direction, carNumber ] = el.split(', ');
        if ( direction === 'IN'){
            if( !parkLot.hasOwnProperty(carNumber)) {
                parkLot[carNumber] = direction;
            }

        } else if( direction === 'OUT' ) {
            if( parkLot.hasOwnProperty(carNumber)) {
                delete parkLot[carNumber];
            }
        }
    });
    
    let result = Object.keys(parkLot).sort( (a, b) => a.localeCompare(b) );
    if (result.length > 0){
        result.forEach(el => console.log(el));        
    } else {
        console.log('Parking Lot is Empty');        
    }    
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
