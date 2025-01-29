function solve(inp) {

    const figureType = inp[0];
    if(figureType === 'square'){
        let a = Number(inp[1]);
        console.log((a * a).toFixed(3));
    }else if (figureType === "rectangle") {
        let a = Number(inp[1]);
        let b = Number(inp[2]);
        console.log((a * b).toFixed(3));
    }else if(figureType === "circle"){
        let r = Number(inp[1]);
        console.log((Math.PI * Math.pow(r, 2)).toFixed(3));
        let Y = 1;
    }else if(figureType === "triangle"){
        let a = Number(inp[1]);
        let h = Number(inp[2]);
        console.log((a*h/2).toFixed(3));
    }

}

solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);
