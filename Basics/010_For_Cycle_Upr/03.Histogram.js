function solve(inp) {
  let numOfNums = Number(inp[0]);
  let n1 = 0; n2 = 0; n3 = 0; n4 = 0; n5 = 0; 
  let p1 = 0; p2 = 0; p3 = 0; p4 = 0; p5 = 0;
  let currenNumber = 0;
  for (let i = 1; i <= numOfNums; i++){
    currenNumber = Number(inp[i]);
    if(currenNumber < 200) n1++;
    else if(currenNumber >= 200 && currenNumber <= 399) n2++;
    else if(currenNumber >= 400 && currenNumber <= 599) n3++;
    else if(currenNumber >= 600 && currenNumber <= 799) n4++;
    else if(currenNumber >= 800) n5++;        
  }
  p1 = n1 / numOfNums * 100;
  p2 = n2 / numOfNums * 100;
  p3 = n3 / numOfNums * 100;
  p4 = n4 / numOfNums * 100;
  p5 = n5 / numOfNums * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
//solve([3, 1, 2, 999]);
// solve([7, 800, 801, 250, 199, 399, 599, 799]);
// solve([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
// solve([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);
