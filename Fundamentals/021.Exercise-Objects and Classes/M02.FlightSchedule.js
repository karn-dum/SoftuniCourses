function solve(inp) {

    let inArr = inp[0].map((x => x.split(' ')));
    let chArr = inp[1].map((x => x.split(' ')));
    class Flights {
        constructor( flRef, destination ){
            this.flRef = flRef;
            this.destination = destination;
            this.status = 'Ready to fly'
        }
    }

    let flyArr = [];
    
    inArr.forEach(element => {
        let [flight, destination] = [element[0], element.join(' ').split(element[0])[1].trim()];
        let flyObj = new Flights(flight, destination)
        flyArr.push(flyObj);        
    });    

    chArr.forEach(el => {
        flyArr.forEach( x =>{
            if( el[0] === x.flRef ){
                x.status = el[1];
            }            
        });        
    });

    let prnArr = [];    
    flyArr.forEach(x => {
        let prnObj = {};
        prnObj[`Destination`] = x.destination;
        prnObj[`Status`] = x.status;
        prnArr.push(prnObj)
    })
    prnArr.forEach( x => {
        if( x.Status === inp[2][0] ){
            console.log(x);            
        }
    });
}

solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
