function solve(inp1, inp2) {
  const budget = Number(inp1);
  const season = inp2;
  let typeOfRest = "";  
  let destination = "";
  if (budget <= 100)      {destination = "Bulgaria"}
  else if(budget <= 1000) {destination = "Balkans"}
  else if(budget > 1000)  {destination = "Europe"}
  let price = 0;  
  switch(destination){
    case "Bulgaria": {
        switch(season){
            case "summer": {price = budget*0.30; typeOfRest = "Camp" ;} break;
            case "winter": {price = budget*0.70; typeOfRest = "Hotel";} break;
        }
    }break;
    case "Balkans": {
        switch(season){
            case "summer": {price = budget*0.40; typeOfRest = "Camp" ;} break;
            case "winter": {price = budget*0.80; typeOfRest = "Hotel";} break;
        }
    }break;
    case "Europe": {price = budget*0.90; typeOfRest = "Hotel";}break;    
  }

console.log(`Somewhere in ${destination}`);
console.log(`${typeOfRest} - ${price.toFixed(2)}`);
}

solve("50", "summer");
solve("75", "winter");
solve("312", "summer");
solve("678.53", "winter");
solve("1500", "summer");
