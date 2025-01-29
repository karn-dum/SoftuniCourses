function solve(inp) {
  let wArr = inp.map((el) => el.split(" | "));
  let register = wArr.reduce((a, v) => {
    const system = v[0];
    a[system] = {};
    return a;
  }, {});
  for (let el in register) {
    wArr.forEach((element) => {
      if (el === element[0]) {
        register[el][element[1]] = [];
      }
    });
  }

  for (let el in register) {
    wArr.forEach((element) => {
      if (el === element[0]) {
        register[el][element[1]].push(element[2]);
      }
    });
  }

  let result = [...Object.entries(register)].sort((a, b) => {
    let firstCriteria = Object.keys(b[1]).length - Object.keys(a[1]).length;
    let secondCriteria = a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    return firstCriteria || secondCriteria;
  });

  result = result.map(x => [x[0], [...Object.entries(x[1])].sort((x, y) => Object.keys(y[1]).length - Object.keys(x[1]).length)]);

  result.forEach(x => {
      console.log(`${x[0]}`)
      x[1].forEach(x1 => {
          console.log(`|||${x1[0]}`)
          x1[1].forEach(x2 => console.log(`||||||${x2}`))
      })
  })
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
  "Indice | Session | Default Security",
]);
