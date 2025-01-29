function solve(inp) {
    let players = {};
    while (inp.length > 0) {
        let [ name, ...cards ] = inp.shift().split(': ');
        cards = cards[0].split(', ')
        if ( !players.hasOwnProperty(name)) {
            players[name] = [];
        }
        for (const el of cards) {
            if( !players[name].includes(el) ) players[name].push(el);
        }
    }

    for (const key in players) {
        let result = [ key, 0 ];
        result[1] = calcPower(players[key]);
        console.log(`${key}: ${result[1]}`);
    }
}

//----------------------------------------------------------------------------------------------------------------------
function calcPower(arr) {
    let total = 0;
    arr.forEach(el => {
        let power = el[0];
        let type  = el[1];
        if ( !isDigit(power) ) {
            switch(power){
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
            }
        } else {
            power = Number(power);
        }
        
        switch(type){
            case 'C': power *= 1; break;
            case 'D': power *= 2; break;
            case 'H': power *= 3; break;
            case 'S': power *= 4; break;
        }
        total += power;          
    });
    return total;
}
//----------------------------------------------------------------------------------------------------------------------
function isDigit(character) {
    if ( character.charCodeAt(0) >= '0'.charCodeAt(0) && character.charCodeAt(0) <= '9'.charCodeAt(0)){
        return true;
    }
    return false;
    
}

solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
