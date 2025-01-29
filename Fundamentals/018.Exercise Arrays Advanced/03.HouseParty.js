function solve(inp) {
  let list = [];
  while (inp.length > 0) {
    let [name, is, not, going] = inp.shift().split(" ");
    if (not === "going!") {
      if (!list.includes(name)) {
        list.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
        if (!list.includes(name)){
            console.log(`${name} is not in the list!`);            
        } else{
            list.splice(list.indexOf(name), 1);
        }
    }
  }
  console.log(list.join('\n'));
}

// solve([
//   "Allie is going!",
//   "George is going!",
//   "John is not going!",
//   "George is not going!",
// ]);
solve([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
