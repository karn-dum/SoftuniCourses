function solve(radius, height) {
let volume = (1 / 3)*Math.PI*Math.pow(radius, 2)*height;
let area = Math.PI*radius*(radius + Math.sqrt(radius*radius + height*height))
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);


    
}

solve(3, 5);
solve(3.3, 7.8);
