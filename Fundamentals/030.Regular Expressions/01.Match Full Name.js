function solve(inp) {
    
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let listOfNames = inp//.split(', ');
    let validNames = [];
    let validName;
    // for ( let name of listOfNames ) {
    //     let validName = pattern.exec(name);
    //     if ( validName !== null ) validNames.push(validName[0]);
    // }

    while ( (validName = pattern.exec(listOfNames) )  !== null ) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
    

    
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");