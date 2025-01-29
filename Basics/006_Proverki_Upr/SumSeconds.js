function solve(inp) {

    let firstTime = Number(inp[0]);
    let secondTime = Number(inp[1]);
    let thirdTime = Number(inp[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = 0;
    let seconds = 0;

    minutes = Math.floor(totalTime/60);
    seconds = totalTime % 60;
    
    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }

}

solve(["35", "45", "44"]);
solve(["22", "7", "34"]);
solve(["50", "50", "49"]);
solve(["14", "12", "10"]);
