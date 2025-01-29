function solve(inp) {
    let sum = Number(inp) * 100;
    let coins = 0
    let counter = 0
    while (sum > 0) {
       if(sum >= 200){coins = Math.floor(sum / 200);
        counter = coins;
        sum -= coins * 200 ;
        }
        if(sum >= 100){coins = Math.floor(sum / 100);
            counter += coins;
            sum -= coins * 100 ;
            sum = Math.floor(sum);
        }
        if(sum >= 50){coins = Math.floor(sum / 50);
            counter += coins;
            sum -= coins * 50 ;
            sum = Math.floor(sum);
        }
        if(sum >= 20){coins = Math.floor(sum / 20);
            counter += coins;
            sum -= coins * 20 ;
            sum = Math.floor(sum);
        }
        if(sum >= 10){coins = Math.floor(sum / 10);
            counter += coins;
            sum -= coins * 10 ;
            sum = Math.floor(sum);
        }
        if(sum >= 5){coins = Math.floor(sum / 5);
            counter += coins;
            sum -= coins * 5 ;
            sum = Math.floor(sum);
        }
        if(sum >= 2){coins = Math.floor(sum / 2);
            counter += coins;
            sum -= coins * 2 ;
            sum = Math.floor(sum);
        }
        if(sum >= 1){coins = Math.floor(sum / 1);
            counter += coins;
            sum -= coins * 1 ;
            sum = Math.floor(sum);
        }
    }
    console.log(counter);    
}
solve(["5.73"]);
// solve(["1.23"]);
// solve(["2"]);
// solve(["0.56"]);
// solve(["2.73"]);