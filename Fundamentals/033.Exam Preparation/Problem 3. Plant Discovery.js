function solve(inp) {
    let plant, rarity, rating;
    let plants = {}        
    
    let commands = { 
        Rate: rate,
        Update : update,
        Reset: reset
    }
    let validCommands = ['Rate', 'Update', 'Reset'];
    for ( let i = 1 ; i <= Number(inp[0]); i++ ) {
        let [plant, rarityNum] = inp[i].split('<->');
        if ( plants[plant] == undefined){
            plants[plant] = {}
        }
        plants[plant]['rarity'] = Number(rarityNum);
        if (plants[plant]['rating'] == undefined) {
            plants[plant]['rating'] = [];
        }        
    }
    for ( let i = Number(inp[0]) + 1; i < inp.length; i++ ) {
        if( inp[i] == "Exhibition" ) break;
        let [ command, params ] = inp[i].split(': ');
        let [ plant, rat_rar ]  = params.split(' - ');        
        rat_rar = Number(rat_rar);
        if ( !plants.hasOwnProperty(plant) || !validCommands.includes(command)) { 
                console.log('Error'); 
                continue;
            }
        commands[command](plants, plant, rat_rar);        
    }
    console.log(plants);
    return;
    
    let destr = Object.entries(plants);
    // destr.sort( (a, b) => {
    //     let rarityA = a[1]['rarity'];
    //     let rarityB = b[1]['rarity'];
    //     let criteriaA = rarityB - rarityA;
    //     let ratingA = ratingAverage(a);
    //     let ratingB = ratingAverage(b);
    //     let criteriaB = ratingB - ratingA;
    //     return criteriaA || criteriaB;
    // }); 
    console.log('Plants for the exhibition:');
    
    destr.forEach( x => {
        let plant_name = x[0];
        let rarity = x[1]['rarity']
        let rating = ratingAverage(x);
        
        console.log(`- ${plant_name}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
        let  A = 1
    } );    
    function rate(plants, plant, rating ) {
        plants[plant]['rating'].push(rating);    
    }
    function update(plants, plant, new_rarity ) {
        plants[plant]['rarity'] = new_rarity;
        
    }
    function reset(plants, plant ) {
        plants[plant]['rating'] = [];
    }
    function ratingAverage(x){
        let rating = 0;
        if ( x[1]['rating'].length > 0 ){
            rating = x[1]['rating'].reduce( (a, v) => a + v, 0 ) / x[1]['rating'].length;
        }
        return rating;
    }
}


solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'    
]);
console.log('\n-------------\n');

solve([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
