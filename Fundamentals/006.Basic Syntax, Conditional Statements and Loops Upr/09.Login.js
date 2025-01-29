function solve(inp) {
    let userName = inp[0];
    // let passArr = userName.split('');
    // let pass = passArr.reverse().join('');    
    let pass = inp[0].split('').reverse().join('');
    
    // for (let i = 0; i < len; i++) {
    //     password[len -1 - i] = userName[i];                    
    // }
    // for (let i = 0; i < len; i++) {
    //     pass += userName[len -1- i];
    // }
    
    let badCounter = 0;
    for( let i = 1; i <= inp.length; i ++){
        currElement = inp[i];
        if (currElement === pass) {
            console.log(`User ${userName} logged in.`);
            isLogin = true;
            break;
        }else{          
            badCounter++;
            if (badCounter > 3) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}

//solve(['Acer','login','go','let me in','recA']);
// solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);