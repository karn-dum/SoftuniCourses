function solve(inp) {

    let inpObjArr = [];
    let gradesArr = [];
    while( inp.length > 0 ){
        let [em1, em2, em3, em4] = inp.shift().split(': ');
        let [sName, foo1] = em2.split(', ');
        let [grade, foo2] = em3.split(', ');
        grade = Number(grade) + 1;
        let score = Number(em4);
        if ( score >= 3.00 ){
            let inpRowObj = {sName, grade, score};
            if( !gradesArr.includes(grade)) { gradesArr.push(grade); }
            inpObjArr.push(inpRowObj);
        }
    }
    //inpObjArr.forEach( el => console.log(el));
    gradesArr = gradesArr.sort( (a, b) => a - b );
    gradesArr.forEach( el => {
        let grade = el;
        let listOfStudents = [];
        let listOfScores   = [];
        inpObjArr.forEach( x => {
            if( x.grade === grade ){
                listOfStudents.push(x.sName);
                listOfScores.push(x.score);
            }
        });
        let averagScore = (listOfScores.reduce((a, v) => a + v, 0) / listOfScores.length).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${listOfStudents.join(', ')}`);
        console.log( `Average annual grade from last year: ${averagScore}`);
        if( !( grade === gradesArr[gradesArr.length - 1] )) console.log(`\n`);
    } );
    //console.log(gradesArr);
    

}

solve([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
