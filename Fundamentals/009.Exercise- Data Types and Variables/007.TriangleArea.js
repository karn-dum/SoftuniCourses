function solve(a, b, c) {
    let s = (a + b + c) / 2;
    let S = Math.sqrt( s*(s - a)*(s - b)*(s - c) );
    console.log(S);


}

solve(2, 3.5, 4);
