function solve(inp) {

// 1.	Дължина в см –число в интервала [10 … 500]
// 2.	Широчина в см –число в интервала [10 … 300]
// 3.	Височина в см –число в интервала [10… 200]
// 4.	Процент  –число в интервала [0.000 … 100.000]

    const length = Number(inp[0]);
    const width = Number(inp[1]);
    const weight = Number(inp[2]);
    const percentage = Number(inp[3]);

    const volume = length*width*weight*0.001;
    let litersNeeded = volume - volume * percentage/100;
    console.log(litersNeeded);
    

}

solve(["85", "75", "47", "17"]);

solve(["105", "77", "89", "18.5"]);
