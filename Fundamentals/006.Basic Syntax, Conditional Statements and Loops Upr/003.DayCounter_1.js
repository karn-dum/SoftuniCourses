function solve(day, month , year, dayNew, monthNew, yearNew) {
    // const date1 = new Date('7/13/2010');
    // const date2 = new Date('12/15/2010');
    let date1 = new Date(year, month-1 , day)
    let date2 = new Date(yearNew, monthNew-1 , dayNew)
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
}

solve(1, 1, 2024, 1, 1, 2025);