function solve(inp) {

    let guestList = {};
    let currGuest = inp.shift();
    while ( currGuest !== "PARTY" ){
        if ( currGuest[0].charCodeAt(0) >= 48 &&  currGuest[0].charCodeAt(0) <= 57 ) {
            guestList[currGuest] = 'VIP';
        } else {
            guestList[currGuest] = 'regular';
        }
        currGuest = inp.shift();
    }    
    while( inp.length > 0 ) {
        let visitingGuest = inp.shift();        
        if ( guestList.hasOwnProperty(visitingGuest) ) {
            delete guestList[visitingGuest];
        }
    }
    let guestListArr = Object.entries(guestList).sort( (a, b) => b[1].localeCompare(a[1]));
    console.log(guestListArr.length);
    guestListArr.forEach(x => console.log(x[0]));
    
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
