function solve(inp1, inp2, inp3) {
  let age = Number(inp1);
  let washingMachinePrice = Number(inp2);
  let toyPrice = Number(inp3);
  let moneySaved = 0;  
  let moneyEarned = 0;
  let evenDays = 0;
  for (i = 1; i <= age; i++)  {
    if(i % 2 === 0){
        evenDays ++ ;
        moneySaved += 10*evenDays;        
    }else{
        moneyEarned += toyPrice;
    }
  }
  moneySaved -= evenDays;
  let totalMoney =  moneySaved + moneyEarned;
  let difference = Math.abs(totalMoney - washingMachinePrice).toFixed(2);
  if (totalMoney >= washingMachinePrice) {
    console.log(`Yes! ${difference}`);
  }else{
    console.log(`No! ${difference}`);    
  }
}

solve("10", "170", "6");
solve("21", "1570.98", "3");
