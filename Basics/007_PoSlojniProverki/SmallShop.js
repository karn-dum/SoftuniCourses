function solve(inp1, inp2, inp3) {
  let product = inp1;
  let city = inp2;
  let quantity = Number(inp3);

  switch (city) {
    case "Sofia":{
        switch (product){
            case "coffee" :  console.log(quantity * 0.50);  break;
            case "water"  :  console.log(quantity * 0.80);  break;
            case "beer"   :  console.log(quantity * 1.20);  break;
            case "sweets" :  console.log(quantity * 1.45);  break;
            case "peanuts":  console.log(quantity * 1.60);  break;
        }
    }break;
    case "Plovdiv":{
        switch (product){
            case "coffee" :  console.log(quantity * 0.40);  break;
            case "water"  :  console.log(quantity * 0.70);  break;
            case "beer"   :  console.log(quantity * 1.15);  break;
            case "sweets" :  console.log(quantity * 1.30);  break;
            case "peanuts":  console.log(quantity * 1.50);  break;
        }
    }break;
    case "Varna":{
        switch (product){
            case "coffee" :  console.log(quantity * 0.45);  break;
            case "water"  :  console.log(quantity * 0.70);  break;
            case "beer"   :  console.log(quantity * 1.10);  break;
            case "sweets" :  console.log(quantity * 1.35);  break;
            case "peanuts":  console.log(quantity * 1.55);  break;
        }
    }break;
  }
}

solve("coffee", "Varna", "2");
solve("peanuts", "Plovdiv", "1");
solve("beer", "Sofia", "6");
solve("water", "Plovdiv", "3");
solve("sweets", "Sofia", "2.23");
