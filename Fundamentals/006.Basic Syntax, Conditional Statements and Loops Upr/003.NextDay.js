function solve(year, month , day) {
    let currDay = new Date(year, month-1 , day)
    // По някаква неясна причина месеците се броят от 0 до 11
    
    let nextDay = new Date(currDay);
    nextDay.setDate(currDay.getDate() + 1);
    
    let yy = nextDay.getFullYear();
    let mm = nextDay.getMonth()+1;
    let dd = nextDay.getDate();
    console.log(`${yy}-${mm}-${dd}`);
    
}

solve(2016, 12, 31);