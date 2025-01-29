function solve(inp) {
    let n = Number(inp.shift());    
    let sumOfAllGrades = 0;
    let nextElement = inp.shift();
    let gradesCounter = 0;
    while(nextElement !== "Finish" ){
        let sumOfCurrentGrades = 0;
        let testName = nextElement;
        for (let i = 1; i <= n; i++){
            sumOfCurrentGrades += Number(inp.shift());            
            gradesCounter++;
        }
        sumOfAllGrades += sumOfCurrentGrades;

        let averageCurrGrade = sumOfCurrentGrades / n;
        console.log(`${testName} - ${averageCurrGrade.toFixed(2)}.`);
        nextElement = inp.shift();
    }
    
}

// solve([
//   "2",
//   "While-Loop",
//   "6.00",
//   "5.50",
//   "For-Loop",
//   "5.84",
//   "5.66",
//   "Finish",
// ]);
// solve([
//   "3",
//   "Arrays",
//   "4.53",
//   "5.23",
//   "5.00",
//   "Lists",
//   "5.83",
//   "6.00",
//   "5.42",
//   "Finish",
// ]);
solve([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
