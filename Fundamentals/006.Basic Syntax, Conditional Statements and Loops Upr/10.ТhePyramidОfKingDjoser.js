function solve(inp1, inp2) {
    
    let base  = Number(inp1);
    let height = Number(inp2);
    let numebrOfSteps = Math.ceil(base / 2 );
    let stones = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let marble = 0;
    let finalPyramidHeight = 0;
    for (let i = 1; i <= numebrOfSteps; i++){
        
        if(i === numebrOfSteps) {
            finalPyramidHeight += height;
            if( base % 2 === 0) gold = 4;
            else gold = 1;            
            break;
        }
        if(i % 5 === 0){
            lapisLazuli += (base*4 - 4) * height;
        }else{
            marble += (base*4 - 4) * height;
        }

        stones += ((base-2)*(base-2))*height;
        base -= 2;
        finalPyramidHeight += height;                
        
        
    }
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${(Math.ceil(gold))}`);
    console.log(`Final pyramid height: ${(Math.floor(finalPyramidHeight))}`);
        
}

//solve(11, 1);
//solve(11, 0.75);
//solve(12, 1);
solve(23, 0.5);