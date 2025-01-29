function solve(inp1, inp2, inp3) {
  let numberOfNights = Number(inp1) - 1;
  let typeOfRoom = inp2;
  let rating = inp3;

  let roomForOnePerson = 18;
  let apartment = 25;
  let presidentApartment = 35;

  let totalCost = 0;
  if (typeOfRoom === "room for one person") {
    totalCost = numberOfNights * roomForOnePerson;
  } else if (typeOfRoom === "apartment") {
    totalCost = numberOfNights * apartment;
  } else {
    totalCost = numberOfNights * presidentApartment;
  }

  //console.log(totalCost);
  switch (typeOfRoom) {
    case "apartment":
      {
        if (numberOfNights++ < 10) {
          totalCost -= (totalCost * 30) / 100;
        } else if (numberOfNights++ >= 10 && numberOfNights++ <= 15) {
          totalCost -= (totalCost * 35) / 100;
        } else if (numberOfNights++ > 15) {
          totalCost -= (totalCost * 50) / 100;
        }
      }
      break;
    case "president apartment":
      {
        if (numberOfNights++ < 10) {
          totalCost -= (totalCost * 10) / 100;
        } else if (numberOfNights++ >= 10 && numberOfNights++ <= 15) {
          totalCost -= (totalCost * 15) / 100;
        } else if (numberOfNights++ > 15) {
          totalCost -= (totalCost * 20) / 100;
        }
      }
      break;
  }
  if (rating === "negative") {
    totalCost = totalCost - totalCost * 0.1;
  } else {
    totalCost += totalCost * 0.25;
  }
  console.log(totalCost.toFixed(2));
}

solve("14", "apartment", "positive");
solve("30", "president apartment", "negative");
solve("12", "room for one person", "positive");
solve("2", "apartment", "positive");
