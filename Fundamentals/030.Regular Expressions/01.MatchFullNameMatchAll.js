function solve(inp) {
    
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result = [...inp.matchAll(pattern)].map( x => x[0])
    console.log(result.join(' '));    
}
function solve_1(inp) {
    
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result = inp.match(pattern);
    console.log(result.join(' '));    
}


solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
solve_1("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");