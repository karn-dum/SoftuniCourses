function solve(inp) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g ;
    let listOfNumbers = inp//.split(', ');
    let validNames = [];
    let validName;

    while ( (validName = pattern.exec(listOfNumbers) )  !== null ) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(', '));
    
}

solve('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');