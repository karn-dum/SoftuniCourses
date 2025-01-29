function solve(inp) {
    priceOfRent = Number(inp[0]);
// •	Торта  – цената ѝ е 20% от наема на залата
// •	Напитки – цената им е 45% по-малко от тази на тортата
// •	Аниматор – цената му е 1/3 от цената за наема на залата

    let priceOfCake = priceOfRent * 0.2 ;
    let pricoOfDrings = priceOfCake - priceOfCake * 0.45 ;
    let priceOfAnimator = priceOfRent / 3 ;

    let finalPrice = priceOfRent + priceOfCake + pricoOfDrings + priceOfAnimator ;
    console.log(finalPrice);
    

}

solve(["2250"]);
solve(["3720"]);