function solve(inp) {
    let curr;
    let wObj = {}
    while ( (curr = inp.shift()) !== 'end') {
        let wArr = curr.split(':');
        let letter  = wArr[0];
        let indexes = wArr[1].split('/').map(Number) ;
        for ( let index of indexes ) {
            wObj[index] = letter;
        }
    }

    let sorted = Object.entries(wObj).sort( ([key1, value1], [key2, value2] ) => key1 - key2 );
    let result = '';
    sorted.forEach( x => result += x[1] ) ;
    console.log(result);        
}

// solve(["a:0/2/4/6",
//     "b:1/3/5",
//     "end"]
//     );
solve(["a:0/3/5/11",
    "v:1/4",
    "j:2",
    "m:6/9/15",
    "s:7/13",
    "d:8/14",
    "c:10",
    "l:12",
    "end"]
    );