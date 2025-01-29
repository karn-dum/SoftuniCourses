function solve(inp) {
  let list = inp.shift().split("!");
  while (inp.length > 0) {
    let [command, product, newProduct] = inp.shift().split(" ");
    if (command === "Go") {
      break;
    }
    if (command === "Urgent") {
      if (!list.includes(product)) list.unshift(product);
    } else if (command === "Unnecessary") {
      if (list.includes(product)) list.splice(list.indexOf(product), 1);
    } else if (command === "Correct") {
      if (list.includes(product))
        list.splice(list.indexOf(product), 1, newProduct);
    } else if (command === "Rearrange") {
      if (list.includes(product)) {
        list.splice(list.indexOf(product), 1);
        list.push(product);
      }
    }
  }
  console.log(list.join(', '));
}

solve([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes ",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
