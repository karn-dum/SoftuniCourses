function solve(c1, c2) {
  
  charOrder(c1, c2);
}

solve("a", "d");
solve("#", ":");
solve("C", "#");
 //---
 function charOrder(c1, c2) {
    let n1Conv = c1.charCodeAt(0);
    let n2Conv = c2.charCodeAt(0);
    let n1 = Math.min(n1Conv,n2Conv);
    let n2 = Math.max(n1Conv,n2Conv);
    let row = "";
    for ( let i = n1+1; i < n2; i++ ){
        let char = String.fromCharCode(i);
        row += char + ' '
    }
    console.log(row);
    
 }