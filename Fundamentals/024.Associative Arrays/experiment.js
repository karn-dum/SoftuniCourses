let set = new Set([1, 2, 2, 4, 5]);
// Set(4) { 1, 2, 4, 5 }
console.log(set);

let result = Array.from(set.values())
result.forEach(el => console.log(el)) 
// console.log(Array.from(set.entries()));


// set.add(7); // Add value
// console.log(set);

// console.log(set.has(1)); 
// Expected output: true

