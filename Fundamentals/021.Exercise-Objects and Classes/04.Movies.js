function solve(inp) {
let movies = [];

    while( inp.length > 0 ){

        let currentStr =  inp.shift();
        let currentArr = currentStr.split(' ');
        if ( currentArr[0] === 'addMovie') {
            let movieName = currentStr.split('addMovie')[1].trim();        
            if( !nameExist(movieName, movies) ){
                movies.push({name : movieName});    
            }                         
        }else if (currentArr.includes('directedBy')) {
            let movieName = currentStr.split('directedBy')[0].trim();
            let director  = currentStr.split('directedBy')[1].trim();
            if( nameExist(movieName, movies) ){
                movies.forEach( el => {
                    if (el.name === movieName) {
                        el.director = director;
                    }
                } );    
            }
        }else if(currentArr.includes('onDate')){
            let movieName = currentStr.split('onDate')[0].trim();
            let date  = currentStr.split('onDate')[1].trim();
            if( nameExist(movieName, movies) ){
                movies.forEach( el => {
                    if (el.name === movieName) {
                        el.date = date;
                    }
                } );    
            }
        }
        
    }
    movies.forEach( el => console.log(el));

}
//---------------------------------------------------------------------------------------------------------------------
function nameExist(value, movies) {
   for ( let el of movies ){
    if( el.name === value ) return true;
   }
   return false;
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );