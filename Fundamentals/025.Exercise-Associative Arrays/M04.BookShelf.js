function solve(inp) {

    let shelfs = {}

    for (const el of inp) {
        if ( el.includes('->') ) {
            let [ id, genre ] = el.split(` -> `);
            addShelf(shelfs, id, genre);
        } else if ( el.includes(':') ){
            let [ title, autorGenre ] = el.split(': ');
            addBook(shelfs, title, autorGenre);
        }
        
    }
    // console.log(JSON.stringify(shelfs));
    let ent1 = Object.entries(shelfs);
    let ent2 = ent1.map( x => {
        let ret = [x[0], Object.entries(x[1])];
        return ret;
    } )

    ent2.sort((a,b) => {
        let x = a[1][0][1].length;
        let y = b[1][0][1].length;;
        return y - x;
    });

    for (const el of ent2) {
        let id = el[0];
        let genre = el[1][0][0];
        let count = el[1][0][1].length;
        el[1][0][1].sort( (a, b) => a[0].localeCompare(b[0]) );
        console.log(`${id} ${genre}: ${count}`);
        el[1][0][1].forEach( x => console.log(`--> ${x[0]}`));                
    }
    
    
}
/*-----------------------------------------------------------------------------------------------------------------------*/
function addShelf(shelfs, id, genre) {
    
    if ( !shelfs.hasOwnProperty(id) ) {
        shelfs[id] = {};
        if ( !shelfs[id].hasOwnProperty(genre) ) {
            shelfs[id][genre] = [];
        }

    }   
    
}
function addBook(shelfs, title, autoGenre) {

    let [ autor, genre ] = autoGenre.split(', ');
    for ( let shelf in shelfs) {
        if ( shelfs[shelf].hasOwnProperty(genre)) {
            let temparr = [];
            temparr.push(title);
            temparr.push(autor);
            shelfs[shelf][genre].push(temparr);            
        }
    }
    
}
solve([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
