function solve(inp1, inp2, inp3) {
  let numOfNights = Number(inp1) - 1;
  let typeOfRoom = inp2;
  let rating = inp3;
  let singlePrice = 18.00;
  let midlePrice = 25.00;
  let hiPrice = 35.00
  let price = 0.00;  

  switch(typeOfRoom){
    case "room for one person": {
        price = singlePrice * numOfNights;
    } break;
    case "apartment"          : {
        price = midlePrice * numOfNights;
        if(numOfNights < 10) { price -= price*0.30}
        else if(numOfNights >= 10 && numOfNights <= 15) {price -= price*0.35}
        else if(numOfNights > 15) { price -= price*0.50}
    } break;
    case "president apartment": {
        price = hiPrice * numOfNights;
        if(numOfNights < 10) { price -= price*0.10}
        else if(numOfNights >= 10 && numOfNights <= 15) {price -= price*0.15}
        else if(numOfNights > 15) { price -= price*0.20}
    } break;
  }
  if(rating === "positive") price += price*0.25;
  else if(rating === "negative") price -= price*0.10;

  console.log(price.toFixed(2));
  

}

solve(14, "apartment", "positive");
solve(30, "president apartment", "negative");
solve(12, "room for one person", "positive");
solve(2, "apartment", "positive");
