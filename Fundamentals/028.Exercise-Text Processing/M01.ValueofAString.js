function solve(inp) {
    let commands = {
        'UPPERCASE' : () => console.log(`The total sum is: ${upperSum}`),
        'LOWERCASE' : () => console.log(`The total sum is: ${lowerSum}`),        
    }

    let text    = inp[0];
    let command = inp[1];
    let upperSum = 0;
    let lowerSum = 0;
    
    
    for ( let letter of text.split('')){
        if ( isUpperLetter(letter)) {
            upperSum += letter.charCodeAt(0);       
        } else if( isLowerLetter(letter) ){
            lowerSum += letter.charCodeAt(0);            
        }                
    }
    commands[command]();
    
    
}

function isUpperLetter ( letter ){
    let letterCode = letter.charCodeAt(0);
    if ( (letterCode >= 65 && letterCode <= 90) )
    return true;
    return false;
}

function isLowerLetter ( letter ){
    let letterCode = letter.charCodeAt(0);
    if ( (letterCode >= 97 && letterCode <= 122) )
    return true;
    return false;
}

solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
