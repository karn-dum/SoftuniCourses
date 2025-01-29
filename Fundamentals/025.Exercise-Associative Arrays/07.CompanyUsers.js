function solve(inp) {

    let company = {}
    while (inp.length > 0) {
        let [name, ID] = inp.shift().split(' -> ');
        if( !company.hasOwnProperty(name) ){
            company[name] = [];
        }
        if ( !company[name].includes(ID) ){
            company[name].push(ID);
        }
    }
    let companyArr = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));
    companyArr.forEach(x => {
        console.log(x[0]);
        x[1].forEach(y => {
            console.log(`-- ${y}`);            
        })
        
    });
    


}

solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

solve([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
