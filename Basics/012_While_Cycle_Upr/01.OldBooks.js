function solve(inp) {
  let index = 0;  
  let wantedBook = inp[index++];
  let currBook = inp[index++];
  let isFound = false;

  while (currBook !== "No More Books") {
    if (currBook === wantedBook) {        
        isFound = true;
        break;
    }else{
        currBook = inp[index++];
    }
  }
  if(isFound){
    console.log(`You checked ${index - 2} books and found it.`);
  }else{
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 2} books.`);    
  }
}

// solve(["Troy", "Stronger", "Life Style", "Troy"]);
// solve([
//     "The Spot",
//     "Hunger Games",
//     "Harry Potter",
//     "Torronto",
//     "Spotify",
//     "No More Books",
//   ]);
solve(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
    