function solve(day, month , year, dayNew, monthNew, yearNew) {
    // По някаква неясна причина месеците се броят от 0 до 11
    let currDay = new Date(year, month-1 , day)
    let futuDay = new Date(yearNew, monthNew-1 , dayNew)
    
    let yyOld = currDay.getFullYear();
    let mmOld = (currDay.getMonth()+1).toString().padStart(2, '0');
    let ddOld = (currDay.getDate()).toString().padStart(2, '0');

    let yyNew = futuDay.getFullYear();
    let mmNew = (futuDay.getMonth()+1).toString().padStart(2, '0');
    let ddNew = (futuDay.getDate()).toString().padStart(2, '0');
    
    console.log(`${ddOld}:${mmOld}:${yyOld}`);
    console.log(`${ddNew}:${mmNew}:${yyNew}`);

    console.log(((futuDay - currDay)/1000/60/60) / 24) ;
    
    let nextDay = new Date(currDay);
    nextDay.setDate(currDay.getDate() + 1);

    let yy = nextDay.getFullYear();
    let mm = (nextDay.getMonth()+1).toString().padStart(2, '0');
    let dd = (nextDay.getDate()).toString().padStart(2, '0');

    console.log(`Next day: ${dd}:${mm}:${yy}`);
}

solve(1, 1, 2024, 1, 1, 2025);