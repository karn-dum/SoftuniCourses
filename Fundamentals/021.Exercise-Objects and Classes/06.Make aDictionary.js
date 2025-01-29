function solve(inp) {
 
 
    let dictionary = {};
    while( inp.length > 0 ){
        let item = JSON.parse(inp.shift());
        let keys = Object.keys(item);
        let values = Object.values(item);
        dictionary[keys[0]] = values[0];                  
    }
    let arr =  Object.entries(dictionary);
    arr.sort(( a, b ) => a[0].localeCompare(b[0]));
    dictionary = Object.fromEntries(arr);
    Object.entries(dictionary).forEach(el => {
        console.log(`Term: ${el[0]} => Definition: ${el[1]}`);        
    });
    console.log(JSON.stringify(dictionary, null, 2));     
    
    }
    

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );