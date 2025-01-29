function solve(inp) {
    let arr = {};
    inp.forEach(el => {
        let [key, value] = el.split(' ');
        arr[key] = value;
    });    

    for (let key in arr) {
        console.log(`${key} -> ${arr[key]}`);
    }
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344"
]);
