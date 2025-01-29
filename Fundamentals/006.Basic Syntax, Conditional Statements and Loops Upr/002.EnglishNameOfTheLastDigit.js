function solve(inp) {
  let digit = Number(Number(inp).toString().split('').pop());
  switch(digit){
    case 0 : console.log('Zero');  break;
    case 1 : console.log('One');   break;
    case 2 : console.log('Two');   break;
    case 3 : console.log('three'); break;
    case 4 : console.log('four');  break;
    case 5 : console.log('five');  break;
    case 6 : console.log('six');   break;
    case 7 : console.log('seven'); break;
    case 8 : console.log('eight'); break;
    case 8 : console.log('nine');  break;    
  }
}

solve(512);
solve(1);
solve(1643);
