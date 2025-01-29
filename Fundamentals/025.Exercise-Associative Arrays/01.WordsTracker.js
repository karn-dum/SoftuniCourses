function solve(inp) {

    let wordsToCount = inp.shift().split(' ');
    let workObj = {};
    for (const el of wordsToCount) {
        workObj[el] = 0;
    }
    
    for (const el of inp) {
        for (const x of wordsToCount) {
            if (el === x) {
                workObj[el] = workObj[el] + 1;                                
            }
        }
    }
    for (const key in workObj) {
        console.log(`${key} - ${workObj[key]}`);        
    }    
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
