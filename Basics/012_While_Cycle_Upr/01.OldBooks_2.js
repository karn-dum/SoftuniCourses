function solve(inp) {
  let counter = 0;
  let wantedBook = inp.shift();
  let currBook = inp.shift();  
  let isFound = false;

  while (currBook !== "No More Books") {
    if (currBook === wantedBook) {        
        isFound = true;
        break;
    }else{
        currBook = inp.shift();
        counter++;
    }
  }
  if(isFound){
    console.log(`You checked ${counter} books and found it.`);
  }else{
    console.log("The book you search is not here!");
    console.log(`You checked ${counter} books.`);    
  }
}
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
    