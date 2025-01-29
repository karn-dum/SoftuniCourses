function solve(input) {

    let shelfsById = {}
    let shelfsByGenre = {}
    
    for ( let line of input ) {

        if ( line.includes(' -> ') ){
            createShelf(line);
        } else {
            storeBook(line);
        }
    }
    // console.log(shelfsById);
    // console.log(shelfsByGenre);
    let sorted = Object.entries(shelfsById).sort(compareShelf);

    for ( let [ id, shelf ] of sorted ) {
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);

        let sortedBooks = shelf.books.sort( (a, b) => a.name.localeCompare(b.name) );
        for ( let book of shelf.books ) {
            console.log( `--> ${book.name}: ${book.autor}`);
            
        }
    }

    //----------------------------------
    function compareShelf( a, b ) {
        let CountA = a[1].books.length;
        let CountB = b[1].books.length;

        return CountB - CountA;
    }

    function createShelf(line) {
        let [ id, genre ] = line.split(' -> ');
        if ( shelfsById[id] == undefined) {
            let books = [];
            shelfsById[id] = {
                genre,
                books
            };
            shelfsByGenre[genre] = {
                id,
                books
            }
        }
    }



    function storeBook(line) {
        let [ name, rest ] = line.split(': ');
        let [ autor, genre ] = rest.split(', ');

        let shelf = shelfsByGenre[genre];
        if ( shelf != undefined ) {
            shelf.books.push({ name, autor });
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
