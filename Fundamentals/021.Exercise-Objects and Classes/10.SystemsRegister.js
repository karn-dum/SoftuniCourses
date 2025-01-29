function solve(inp) {
    let wArr = inp.map(el => el.split(' | '));
    
    let registerIn = wArr.reduce((a, v) => {
        a[v[1]]=[];
        return a;
    },{});

    for ( let i = 0; i < wArr.length; i++ ){
        Object.keys(registerIn).forEach( el => {
            if (wArr[i][1] === el) {
                registerIn[el].push(wArr[i][2]);
            }
        })
    }

    //Object.entries(registerIn).forEach(el => console.log(el));
    let wArr2 = Object.entries(registerIn)
    wArr2.map( el => console.log(el));
    // let register = wArr.reduce((a, v) => {
    //     a[v[0]]={};
    //     return a;
    // },{});

    


    //register = Object.entries(register);

    //console.log(register);
    //registerIn.map(el => console.log(el));
    //console.log(JSON.stringify(register,null,2));


        
       
}

solve([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security"
]);
