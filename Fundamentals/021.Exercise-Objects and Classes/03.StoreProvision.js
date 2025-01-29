function solve(inp1, inp2) {
  let store = {};
  for (let i = 0; i < inp1.length; i += 2) {
    store[inp1[i]] = Number(inp1[i + 1]);
  }

  for (let i = 0; i < inp2.length; i += 2) {
    if (Object.keys(store).includes(inp2[i])) {
      store[inp2[i]] += Number(inp2[i + 1]);
    } else {
      store[inp2[i]] = Number(inp2[i + 1]);
    }
  }
  Object.entries(store).forEach((el) => console.log(`${el[0]} -> ${el[1]}`));
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
