function solve(inp) {
  let name = inp[0];
  let pass = inp[1];

  let i = 2;
  let password = inp[i];

  while (pass !== password) {
    i++;
    password = inp[i];
  }
  console.log(`Welcome ${name}!`);  
}

solve(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
solve(["Gosho",
    "secret",
    "secret"])
        