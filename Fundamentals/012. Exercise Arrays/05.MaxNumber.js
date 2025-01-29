function solve(arr) {
  let biggerElement;
  let resultArr = [];
  let isBigger = false;
  for (let i = 0; i < arr.length - 1; i++) {
    let num = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j]
      if (num > nextNum) {
        biggerElement = num;
        isBigger = true;
      }else{
        isBigger = false;
        break;
      }
    }
    if (!resultArr.includes(num) && isBigger) resultArr.push(biggerElement);
    isBigger = false;
  }
  resultArr.push(arr[arr.length-1]);
  console.log(resultArr.join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([41, 34 , 41, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);

