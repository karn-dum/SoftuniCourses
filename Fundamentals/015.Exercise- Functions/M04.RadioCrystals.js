function solve(inp) {
  let targetTickness = inp.shift();
  let tickness = 0;
  let numberOfProcedures = 0;

  let tempCounter = 0;

  while (inp.length > 0) {
    tickness = inp.shift();
    
    while (tickness !== targetTickness) {
      console.log(`Processing chunk ${tickness} microns`);
      
      if (targetTickness * 4 <= tickness    )  { cut  (tickness); }
      if (targetTickness <=  tickness * 0.80)  { lap  (tickness); }
      if (targetTickness <=  tickness - 20  )  { grind(tickness); }
      if (targetTickness <=  tickness - 2   )  { etch (tickness); }
      if (targetTickness >  tickness        )  { x_ray(tickness); }

      //-----------------------------
      if (++tempCounter > 100) {
        console.log("Infilnity loop");
        break;
      }
    }
    console.log(`Finished crystal ${tickness} microns`);
    
  }

  //---
  function cut() {
    while(targetTickness * 4 <= tickness){
      tickness = tickness / 4;
      numberOfProcedures++;
    }
    console.log(`Cut x${numberOfProcedures}`);
    tickness = Math.floor(tickness);
    numberOfProcedures = 0;
    console.log('Transporting and washing');    
  }
  //---
  function lap() {
    while(targetTickness <= tickness * 0.80){
      tickness = tickness *0.80;
      numberOfProcedures++;
    }
    console.log(`Lap x${numberOfProcedures}`);
    tickness = Math.floor(tickness);
    numberOfProcedures = 0;
    console.log('Transporting and washing');    
  }
  //---
  function grind() {
    while(targetTickness <= tickness - 20){
      tickness = tickness - 20;
      numberOfProcedures++;
    }
    console.log(`Grind x${numberOfProcedures}`);
    tickness = Math.floor(tickness);
    numberOfProcedures = 0;
    console.log('Transporting and washing');    
  }
  //---
  function etch() {
    while(targetTickness <= tickness - 2 || tickness === targetTickness + 1) {
      tickness = tickness - 2;
      numberOfProcedures++;
    }
    console.log(`Etch x${numberOfProcedures}`);
    tickness = Math.floor(tickness);
    numberOfProcedures = 0;
    console.log('Transporting and washing');    
  }
  //---
  function x_ray() {
    if(targetTickness > tickness){
      tickness = tickness + 1 ;
      numberOfProcedures++;
    }
    console.log(`X-ray x${numberOfProcedures}`);
    tickness = Math.floor(tickness);
    numberOfProcedures = 0;
    console.log('Transporting and washing');  
  }
}

solve([1375, 50000]);
