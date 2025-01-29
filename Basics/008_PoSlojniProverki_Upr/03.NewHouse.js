function solve(inp1, inp2, inp3) {
  const typeOfFlowers = inp1;
  const numberOfFlowers = Number(inp2);
  const budget = Number(inp3);
  let priceForOneFlower = 0;
  let finalPrice = 0;  
  switch(typeOfFlowers){
    case 'Roses'    :{
        priceForOneFlower = 5;
        finalPrice = priceForOneFlower * numberOfFlowers;
        if(numberOfFlowers > 80){ finalPrice -= finalPrice*0.10}
    }break;
    case 'Dahlias'  :{
        priceForOneFlower = 3.80;
        finalPrice = priceForOneFlower * numberOfFlowers;
        if(numberOfFlowers > 90){ finalPrice -= finalPrice*0.15}
    }break;
    case 'Tulips'   :{
        priceForOneFlower = 2.80;
        finalPrice = priceForOneFlower * numberOfFlowers;
        if(numberOfFlowers > 80){ finalPrice -= finalPrice*0.15}
    }break;
    case 'Narcissus':{
        priceForOneFlower = 3;
        finalPrice = priceForOneFlower * numberOfFlowers;
        if(numberOfFlowers < 120){ finalPrice += finalPrice*0.15}
    }break;
    case 'Gladiolus':{
        priceForOneFlower = 2.50;
        finalPrice = priceForOneFlower * numberOfFlowers;
        if(numberOfFlowers < 80){ finalPrice += finalPrice*0.20}
    }break;        
  }  
  
  let difference = Math.abs (budget - finalPrice);
  if(budget >= finalPrice){
    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${difference.toFixed(2)} leva left.`);
  }else{
    console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
  }  
}

solve("Roses", "55", "250");
solve("Tulips", "88", "260");
solve("Narcissus", "119", "360");