function solve(inp) {

    let map = new Map();
    inp.forEach(el => {
        let [name, ...grades] = el.split(' ');
        grades = grades.map(Number);
        if ( map.has(name) ) {
            let newGrades = map.get(name);
            grades.forEach( x => {
                newGrades.push(x);
            });            
            map.set(name, newGrades);
        } else {
            map.set(name, grades);
        }                
    });

    let entries = Array.from(map.entries()).sort( (x, y) => {
        let aAverage = x[1].reduce( (a,v) => a + v , 0) / x.length;
        let bAverage = y[1].reduce( (a,v) => a + v , 0) / y.length;
        return aAverage - bAverage;
    } );
    entries.forEach( el => console.log(`${el[0]}: ${el[1].join(', ')}`));
    

}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
