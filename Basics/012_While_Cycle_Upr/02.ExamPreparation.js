function solve(inp) {
let badGrades = Number(inp.shift());
let currElement = inp.shift();

let taskName = "";
let badGradesCounter = 0;
let gradesCounter = 0;
let sumOfGrades = 0;
let needARest = false;
    while (currElement !== "Enough") {
        taskName = currElement;
        let grade = Number(inp.shift());
        sumOfGrades += grade;
        gradesCounter++;
        if(grade <= 4 ) badGradesCounter ++;
        if(badGradesCounter < badGrades){
            currElement = inp.shift();    
        }else{
            needARest = true;
            break;
        }        
    }
    if(!needARest){
        console.log(`Average score: ${(sumOfGrades/gradesCounter).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCounter}`);
        console.log(`Last problem: ${taskName}`);
    }else{
        console.log(`You need a break, ${badGrades} poor grades.`);   
    }
}

//solve(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
