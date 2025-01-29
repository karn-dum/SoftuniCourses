function solve(inp1) {
  let word = inp1;
  let sum = 0;
  let letterValue = 0;
  let letter = '';
  for (let i = 0; i < word.length; i++) {    
    
    letter = word[i].toLowerCase();
    if     (letter === 'a') letterValue = 1;
    else if(letter === 'e') letterValue = 2; 
    else if(letter === 'i') letterValue = 3; 
    else if(letter === 'o') letterValue = 4; 
    else if(letter === 'u') letterValue = 5; 
    //else letterValue = 0;
    sum += letterValue;
    letterValue = 0;
    }
    console.log(sum);
    
}
solve("hello");
solve("hi");
solve("bamboo");
solve("beer");
