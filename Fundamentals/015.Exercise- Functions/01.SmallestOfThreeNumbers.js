function solve(num1, num2, num3) {
  let smallestNumber = (num1, num2, num3)=>Math.min(num1, num2, num3)
  console.log(smallestNumber(num1, num2, num3));
//console.log((num1, num2, num3)=>Math.min(num1, num2, num3));      //Това не работи

}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);
