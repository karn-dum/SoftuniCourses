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
    //console.log(JSON.stringify(shelfs,null, 2));
    let ent1 = Object.entries(shelfs);
    let ent2 = Object.entries(Object.entries(ent1));
    ent2.sort((a,b) => {
        let x = Object.entries(a[1][1][1])[0][1].length;
        let y = Object.entries(b[1][1][1])[0][1].length;
        return y - x;
    });
    return;
    

    for (const el of ent2) {
        let ent3 = Object.entries(el)
        console.log(ent3[0][0]);
        
        ent3.forEach( x => {
            x[1].sort( (a, b) => {
                let x = a[0];
                let y = b[0];
                return x.localeCompare(y)
            } ) 
            x[1].forEach(y => console.log(y));
        });
        
        
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
