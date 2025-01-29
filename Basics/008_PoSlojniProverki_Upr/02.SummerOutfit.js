function solve(inp0, inp1) {
  let degrees = Number(inp0);
  let dayTime = inp1;
  let outfit = "";
  let shoes = ""; 
  let degCase = 0 ;
  if(degrees >= 10 && degrees <= 18){ degCase = 1; }
  else if(degrees > 18 && degrees <= 24) {degCase = 2;}
  else if(degrees >=25) {degCase = 3;}

  switch (dayTime) {
    case "Morning":   {
        switch (degCase) {
          case 1: {outfit = "Sweatshirt"; shoes = "Sneakers"; } break;
          case 2: {outfit = "Shirt"     ; shoes = "Moccasins";} break;
          case 3: {outfit = "T-Shirt"   ; shoes = "Sandals";  } break;
        }
      } break;
    case "Afternoon": {
        switch (degCase) {
            case 1: {outfit = "Shirt"    ; shoes = "Moccasins";} break;
            case 2: {outfit = "T-Shirt"  ; shoes = "Sandals";  } break;
            case 3: {outfit = "Swim Suit"; shoes = "Barefoot"; } break;
          }
    } break;
    case "Evening": {
        switch (degCase) {
            case 1: {outfit = "Shirt"; shoes = "Moccasins";} break;
            case 2: {outfit = "Shirt"; shoes = "Moccasins";} break;
            case 3: {outfit = "Shirt"; shoes = "Moccasins";} break;
          }
    }  break; 
   }

   console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);   
   
}  

solve("16", "Morning");
solve("22", "Afternoon");
solve("28", "Evening");