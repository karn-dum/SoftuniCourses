function solve(inp) {
  let currElement = inp.shift();
  let ticketType = "";
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let totalTickets = 0;  
  
  while (currElement !== "Finish") {
    let movieName = currElement;
    let allPlaces = Number(inp.shift());
    let busyPlaces = 0;
    while (allPlaces - busyPlaces > 0) {
        ticketType = inp.shift();        
        
        if( ticketType !== "End" ) {
            busyPlaces++;
            switch (ticketType) {
                case "student" : studentTickets++  ; break;
                case "standard": standardTickets++ ; break;
                case "kid"     : kidTickets++      ; break;                
            }
        }else{       
            break;          
        }        
    }    
    console.log(`${movieName} - ${(100 / allPlaces * busyPlaces).toFixed(2)}% full.`);         
    currElement = inp.shift();
  }  
  totalTickets = studentTickets + standardTickets + kidTickets;
  console.log(`Total tickets: ${totalTickets}`);
  
  console.log(`${(100 / totalTickets * studentTickets).toFixed(2)}% student tickets.`);
  console.log(`${(100 / totalTickets * standardTickets).toFixed(2)}% standard tickets.`);
  console.log(`${(100 / totalTickets * kidTickets).toFixed(2)}% kids tickets.`);
}

solve(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
    