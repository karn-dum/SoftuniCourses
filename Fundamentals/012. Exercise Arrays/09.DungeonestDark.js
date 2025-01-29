function solve(inp) {

    let inpArr = inp[0].split('|');

    let health = 100;
    let coins = 0;

    for ( let i = 0; i < inpArr.length; i ++){
        let currentRoom = inpArr[i].split(' ');
        let item   = currentRoom[0];
        let number = Number(currentRoom[1]);
        if (item === 'potion') {
            health += number;
            if(health >= 100) health = 100;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);            
        }else if(item === 'chest'){
            coins += number;
            console.log(`You found ${number} coins.`);
            
        }else{
            health -= number;
            if (health <= 0) {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);                
                break;
            }else{
                console.log(`You slayed ${item}.`);                
            }
        }

    }
    if(health > 0) console.log(`You've made it!", "Coins: ${coins}", "Health: ${health}`);
    
}

//solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);