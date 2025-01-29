function solve(inp) {
    let name = inp[0];
    let index = 1;
    let grade = Number(inp[index]);
    let breakCounter = 0 ;
    let total = 0;

    while(index <= 12){
        let currentGrade = grade;
        if( currentGrade < 4) {
            breakCounter++;
            if(breakCounter > 1) break;                
        }
        total += currentGrade;
        index ++;
        grade = Number(inp[index]);
    }
    if (breakCounter < 2) {
        console.log(`${name} graduated. Average grade: ${(total/12).toFixed(2)}`);        
    }else{
        console.log(`${name} has been excluded at ${index-1} grade`);
    }
}

solve(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);
solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
