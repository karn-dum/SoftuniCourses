
/* Връща true, ako подаденият символ е цифра и false, ако НЕ е цифра */
/* Returns true if the passed character is a digit and false if it is NOT a digit */
function isDigit(character) {
    if ( character.charCodeAt(0) >= '0'.charCodeAt(0) && character.charCodeAt(0) <= '9'.charCodeAt(0)){
        return true;
    }
    return false;    
}