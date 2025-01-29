function solve(inp) {
  let wArr = inp.split(" ").map( x => x.toLowerCase());
  let wObj = {};
  wArr.forEach((x) => {
    if (!wObj.hasOwnProperty(x)) {
        wObj[x] = 0;
    } 
    wObj[x] = wObj[x] + 1;
  });
  
  let result = [];
  for (const key in wObj) {
    if ( wObj[key] % 2 !== 0) result.push(key)  }

    console.log(result.join(' '));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
