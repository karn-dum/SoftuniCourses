function solve(inp) {
    let peopleCount = Number(inp[0]);
    let groupType = inp[1];
    let weekDay =  inp[2];
    let price = 0;
    let totalPrice = 0;
    switch (weekDay) {
        case 'Friday'  :
            switch(groupType){
                case 'Students': price =  8.45; break;
                case 'Business': price = 10.90; break;
                case 'Regular' : price = 15.00; break;
            }
        break;
        case 'Saturday':
            switch(groupType){
                case 'Students': price =  9.80; break;
                case 'Business': price = 15.60; break;
                case 'Regular' : price = 20.00; break;
            } break;
        case 'Sunday'  : {
            switch(groupType){
                case 'Students': price = 10.46; break;
                case 'Business': price = 16.00; break;
                case 'Regular' : price = 22.50; break;
            }
        }break;    
    }
    totalPrice = peopleCount * price;
    switch(groupType){
        case 'Students': {
            if(peopleCount >= 30) totalPrice = price * peopleCount * 0.85;            
        } break;
        case 'Business': {
            if(peopleCount >= 100) totalPrice = price * (peopleCount - 10);
        } break;
        case 'Regular' : {
            if(peopleCount >= 10 && peopleCount <= 20) totalPrice = price * peopleCount * 0.95;
        } break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);        
}
solve([30,"Students","Sunday"]);
solve([40, "Regular","Saturday"]);