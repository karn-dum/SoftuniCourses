function solve(inp1, inp2) {
  let city = inp1;
  let sales = Number(inp2);
  let salesCase = 0;
  if(sales >=0 && sales <= 500) {salesCase = 1;}
  else if(sales > 50 && sales <= 1000) {salesCase = 2;}
  else if(sales > 1000 && sales <= 10000) {salesCase = 3;}
  else if(sales > 10000) {salesCase = 4;}
  else {salesCase = 0;}


  switch(city){
    case "Sofia":{
        switch(salesCase){
          case 1 : console.log((sales *    5/100).toFixed(2)); break;
          case 2 : console.log((sales *    7/100).toFixed(2)); break;
          case 3 : console.log((sales *    8/100).toFixed(2)); break;
          case 4 : console.log((sales *   12/100).toFixed(2)); break;
          default:console.log("error")      ; break;
        }
    }break;
    case "Varna":{
        switch(salesCase){
            case 1 : console.log((sales *  4.5/100).toFixed(2)); break;
            case 2 : console.log((sales *  7.5/100).toFixed(2)); break;
            case 3 : console.log((sales *   10/100).toFixed(2)); break;
            case 4 : console.log((sales *   13/100).toFixed(2)); break;
            default:console.log("error")      ; break;
          }
    }break;
    case "Plovdiv":{
        switch(salesCase){
            case 1 : console.log((sales *  5.5/100).toFixed(2)); break;
            case 2 : console.log((sales *    8/100).toFixed(2)); break;
            case 3 : console.log((sales *   12/100).toFixed(2)); break;
            case 4 : console.log((sales * 14.5/100).toFixed(2)); break;
            default:console.log("error")      ; break;
          }
    }break;
    default:console.log("error")      ; break;
  }
}

solve("Sofia", "1500");
solve("Plovdiv", "499.99");
solve("Varna", "3874.50");
solve("Kaspichan", "-50");
