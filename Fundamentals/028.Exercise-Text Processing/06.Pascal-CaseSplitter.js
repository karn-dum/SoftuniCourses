function solve(text) {
    
    let word = text[0];
    let result = [];
    let len = text.length;
    let last;
    for ( let i = 1; i < len; i++ ) {
        let letter = text[i] ;
        if ( letter != undefined ) {
            if ( !capitalLetter(letter) ) {
                word += letter;
            } else {
                result.push(word);
                word = text[i];
                last = i;
            }
        }              
    }

    result.push(text.substring(last, len));
    console.log(result.join(', '));
}

function capitalLetter(letter) {
    // 65 - 90 
    let code = letter.charCodeAt(0);
    if ( code >= 65 && code <= 90) return true;
    return false;
}

function solve1(text) {

    let result= text[0];
    let lower = text.toLocaleLowerCase();
    for ( let i = 1; i < text.length; i++ ) {
        if ( text[i] !== lower[i] ) {
            result += ', ';
        }
        result += text[i]
    }
    console.log(result);        
}

solve1('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve1('HoldTheDoor');
solve1('ThisIsSoAnnoyingToDo');