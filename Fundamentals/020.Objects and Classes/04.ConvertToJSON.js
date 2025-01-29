function convertToJSON(name, lastName, hairColor) {
  
    let obj = { name, 
                lastName, 
                hairColor };
    let jsonString = JSON.stringify(obj, null, 2);
    console.log(jsonString);
    
}

convertToJSON("George", "Jones", "Brown");
