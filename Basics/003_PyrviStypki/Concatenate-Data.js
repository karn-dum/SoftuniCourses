function concatenateData(input) {
    
    let firstName = input[0];
    let lastName  = input[1];
    let age       = input[2].toString();
    let town      = input[3];

    
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}`);

    
}

concatenateData(["Maria", "ivanova", 19, "Pleven"]);