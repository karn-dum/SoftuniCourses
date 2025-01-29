function solve(product, quantity) {
console.log((calculate(product, quantity)).toFixed(2));


}

solve("water", 5);
solve("coffee", 2);

function calculate(product, quantity) {
    switch(product){
        case 'coffee': return quantity*1.50
        case 'coke'  : return quantity*1.40
        case 'water' : return quantity*1.00
        case 'snacks': return quantity*2.00
    }
}
