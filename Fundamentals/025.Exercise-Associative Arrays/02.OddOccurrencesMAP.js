function solve(inp) {
  let wArr = inp.split(" ").map( x => x.toLowerCase());
  let wMap = new Map();
  wArr.forEach((x) => {
    if (!wMap.has(x)) {
        wMap.set(x, 0);
    } 
    wMap.set(x, wMap.get(x) + 1);
  });
  
  let result = [] ;
  let iterable = wMap.keys();
    for(let key of iterable) {
        if ( wMap.get(key) % 2 !== 0) result.push(key)
    }
    console.log(result.join(' '));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
