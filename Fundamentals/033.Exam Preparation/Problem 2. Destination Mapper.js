function solve(inp) {
    let pattern = /(=|\/)([A-Z][A-Za-z]+)\1/g;
    // let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
    let destinations = inp.match(pattern);
    if ( destinations !== null ){
        destinations = destinations.map(x => x.slice(1,-1));
        console.log(`Destinations: ${destinations.join(', ')}`);
        let points = destinations.reduce( ( a, v ) => a + v.length , 0);
        console.log(`Travel Points: ${points}`);        
    } else {
        console.log('Destinations:');
        console.log('Travel Points: 0');        
    }    
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
console.log('---------');
solve('ThisIs some InvalidInput');