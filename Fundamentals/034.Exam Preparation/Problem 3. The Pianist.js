function solve(inp) {
    let pieces = {}

    let actions = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': changeKey
    }

    let n = Number(inp.shift());
    for ( i = 0; i < n; i++  ) {
        let [piece, composer, key] = inp.shift().split('|');
        if ( pieces[piece] == undefined ) {
            pieces[piece] = {
                'composer': composer,
                'key': key
            }

        }
    }
    while(  inp[0] !==  'Stop' ) {
        let [ command, ...params  ] = inp.shift().split('|');

        actions[command](params);
    }

    let sorted = Object.entries(pieces);
    sorted = sorted.sort( ( a, b ) => {

        let criteria1 =  a[0].localeCompare(b[0]);
        let criteria2 =  a[1]['composer'].localeCompare(b[1]['composer']);

        return criteria1 || criteria2;
    }  )
    sorted.forEach( x => {
        console.log(`${x[0]} -> Composer: ${x[1].composer}, Key: ${x[1].key}`);
    })

    /*----------------------*/
    function add([piece, composer, key]) {
        if ( pieces[piece] == undefined ) {
            pieces[piece] = {
                'composer': composer,
                'key': key
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);            
        } else {
            console.log(`${piece} is already in the collection!`);            
        }   
    
        
    }
    function remove( [piece] ) {
        if ( pieces[piece] == undefined ) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);            
        } else {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);            
        }
    }
    function changeKey([ piece, newKey ]) {
        if ( pieces[piece] == undefined ) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);            
        } else {
            pieces[piece]['key'] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);            
        }
    }        
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
// solve([
//   "4",
//   "Eine kleine Nachtmusik|Mozart|G Major",
//   "La Campanella|Liszt|G# Minor",
//   "The Marriage of Figaro|Mozart|G Major",
//   "Hungarian Dance No.5|Brahms|G Minor",
//   "Add|Spring|Vivaldi|E Major",
//   "Remove|The Marriage of Figaro",
//   "Remove|Turkish March",
//   "ChangeKey|Spring|C Major",
//   "Add|Nocturne|Chopin|C# Minor",
//   "Stop",
// ]);
