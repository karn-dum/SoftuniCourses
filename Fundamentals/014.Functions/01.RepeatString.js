function solve(string, numberOfRepeats) {
//   let result = (string, numberOfRepeats) => {
//     let res = "";
//     for (let i = 1; i <= n; i++) {
//       res += str;
//     }
//     return res;
//   }
//   console.log(result);
  
  console.log(repeat(string, numberOfRepeats));
}

solve("abc", 3);
solve("String", 2);
// ---
function repeat(str, n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += str;
  }
  return result;
}
// ---
