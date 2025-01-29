function solve(inp) {
    let garages = {}
    while( inp.length > 0){
        let [ garage, carInfo ] = inp.shift().split(' - ');
        garage = Number(garage);
        carInfo = carInfo.split(', ');
        if( !garages.hasOwnProperty(garage) ){
            garages[garage] = []
        }
        garages[garage].push(carInfo);
    }
    for (const key in garages) {
        console.log(`Garage № ${key}`);
        garages[key].forEach( x => console.log(`---${x}`))        ;        
    }    
    // console.log(JSON.stringify(garages, null, 2));
}

solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
