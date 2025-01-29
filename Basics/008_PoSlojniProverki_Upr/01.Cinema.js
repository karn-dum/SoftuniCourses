function solve(inp1, inp2, inp3) {
  let projectionType = inp1;
  let rows = Number(inp2);
  let columns = Number(inp3);

  let ticketPrice = 0;
  if (projectionType === "Premiere") {
    ticketPrice = 12.0;
  } else if (projectionType === "Normal") {
    ticketPrice = 7.5;
  } else if (projectionType === "Discount") {
    ticketPrice = 5.0;
  }

  let totalSeats = rows * columns;
  let revenue = totalSeats * ticketPrice;
  //console.log(`${revenue.toFixed(2)}\nleva`);
  console.log(revenue.toFixed(2));
  console.log("leva");
}

solve("Premiere", "10", "12");
solve("Normal", "21", "13");
solve("Discount", "12", "30");
