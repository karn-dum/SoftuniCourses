function solve(inp) {

    let map = new Map();
    inp.forEach(el => {
        let [product, quantity] = el.split(' ');
        quantity = Number(quantity);
        if( map.has(product) ){
            quantity += map.get(product)
        }
        map.set(product, quantity);        
    });
    
    let entries = Array.from(map.entries());
    entries.forEach( el => console.log(`${el[0]} -> ${el[1]}`));
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
