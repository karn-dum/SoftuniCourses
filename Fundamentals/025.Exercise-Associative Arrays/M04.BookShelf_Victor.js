function solve(input) {

    let bookShelf = {}

    for ( let line of input ) {

        if ( line.includes(' -> ') ){
            createShelf(bookShelf, line);
        } else {
            storeBook(bookShelf, line);
        }
    }

    let sorted = Object.entries(bookShelf).sort(compareShelf);

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

    function createShelf(bookShelf, line) {
        let [ id, genre ] = line.split(' -> ');
        if ( bookShelf[id] == undefined) {
            bookShelf[id] = {
                genre,
                books : []
            };
        }
    }



    function storeBook(bookShelf, line) {
        let [ name, rest ] = line.split(': ');
        let [ autor, genre ] = rest.split(', ');

        let shelf = Object.entries(bookShelf).find(([ id, b ]) => b.genre == genre);
        if ( shelf != undefined ) {
            shelf[1].books.push({ name, autor });
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
