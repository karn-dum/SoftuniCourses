function solve(percentage) {
  let answer = (percentage) => {
    let end = percentage / 10;
    let printString = `${percentage}%[`;
    for (let i = 1; i <= 10; i++) {
      if (i <= end) {
        printString += "%";
      }else{
        printString += '.'
      }
    }
    printString += ']'
    console.log(printString);    
    if( percentage < 100 ){
        console.log(`Still loading...`);
    }else{
        console.log(`Complete!`);
        
    }
  };
  answer(percentage);
}

solve(30);
solve(50);
solve(100);
