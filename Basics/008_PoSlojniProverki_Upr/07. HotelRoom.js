function solve(inp1, inp2) {
  const month = inp1;
  const numberOfNights = Number(inp2);

  let pairOfMonths = "";
  let priceOfApartment = 0.00;
  let priceOfStudio = 0.00;
  
  if(month === "May" || month === "October") pairOfMonths = 1;
  else if(month === "June" || month === "September") pairOfMonths = 2;
  else if(month === "July" || month === "August") pairOfMonths = 3;

  switch(pairOfMonths){
    case 1:{ priceOfStudio = 50.00; priceOfApartment = 65.00 } break;
    case 2:{ priceOfStudio = 75.20; priceOfApartment = 68.70 } break;
    case 3:{ priceOfStudio = 76.00; priceOfApartment = 77.00 } break;
  }
  priceOfStudio *= numberOfNights;
  priceOfApartment *= numberOfNights;
  if(pairOfMonths === 1 && numberOfNights > 7 && numberOfNights <= 14) priceOfStudio -= priceOfStudio*0.05;
  else if(pairOfMonths === 1 && numberOfNights > 14) priceOfStudio -= priceOfStudio*0.30;
  else if(pairOfMonths === 2 && numberOfNights > 14) priceOfStudio -= priceOfStudio*0.20;

  if(numberOfNights > 14) priceOfApartment -= priceOfApartment*0.10;

  console.log(`Apartment: ${priceOfApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceOfStudio.toFixed(2)} lv.`);    
}

solve("May", "15");
solve("June", "14");
solve("August","20");
  
