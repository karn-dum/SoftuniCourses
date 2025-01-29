function solve(inp) {
    
    let pattern = /.{10}/g
    let winSymbols = ['@', '#', '$', '^'];
    inp = inp.split(', ').map( x => x.trim());
    for ( let ticket of inp ) {
        
        if ( ticket.length !== 20 ) console.log(`invalid ticket`);
        else {

            let matches = ticket.match(pattern);
            let noMatches = true;
            let noWinSimbols = true;
            // if ( matches == null) console.log(`ticket \"${ticket}\" - no match`);
            
            for ( char of winSymbols ) {

                let leftPartNum =  matches[0].split('').filter( x => x == char ).length;
                let rightPartNum = matches[1].split('').filter( x => x == char ).length;
                if ( leftPartNum == 0 || rightPartNum == 0 || leftPartNum < 6 || 
                     rightPartNum < 6 || leftPartNum != rightPartNum ) { noMatches = false; continue; }
                let winSymblol = char;
                if ( leftPartNum < 10) { console.log(`ticket \"${ticket}\" - ${leftPartNum}${winSymblol}`); noMatches = false;}
                else { console.log(`ticket \"${ticket}\" - ${leftPartNum}${winSymblol} Jackpot!`); noMatches = false; }
                if ( noMatches ) console.log(`ticket \"${ticket}\" - no match`); 
                if ( matches[0].includes(winSymblol) && matches[1].includes(winSymblol) ) noWinSimbols = false;
            } 
            if ( noWinSimbols ) console.log(`ticket \"${ticket}\" - no match`);            
        }
    }
}

solve('Cash$$$$$$Ca$$$$$$sh');
solve('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
solve('validticketnomatch:(');