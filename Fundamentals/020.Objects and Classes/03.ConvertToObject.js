function convertToObject2(stringInJSON ) {
    let parsedObj = JSON.parse(stringInJSON);
    let entries = Object.entries(parsedObj);
    for( let el of entries) console.log(el);
    
    for( let [key, value] of Object.entries(parsedObj) ){
        console.log(`${key}: ${value}`);        
    }
}
convertToObject2('{"name": "George", "age": 40, "town": "Sofia"}');
//------------------------------------------------------
function convertToObject(stringInJSON ) {
    let parsedObj = JSON.parse(stringInJSON);
    console.log(Object.keys(parsedObj));
    
    for( let key of Object.keys(parsedObj) ){
        console.log(`${key}: ${parsedObj[key]}`);        
    }
}

//convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');