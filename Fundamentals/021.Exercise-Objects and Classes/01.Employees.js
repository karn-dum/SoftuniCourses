function solve(inp) {

    class Employee {
        constructor(name, personalNumber){
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }
    let allNames = [];
    while (inp.length > 0) {
        let el = inp.shift();        
        let empl = new Employee(el, el.length);
        allNames.push(empl)
    }
    allNames.forEach(el => {
        console.log(`Name: ${el.name} -- Personal Number: ${el.personalNumber}`);              
    });


}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
