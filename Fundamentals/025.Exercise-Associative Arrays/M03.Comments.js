function solve(inp) {

    let storage = {
        users : [],
        articles : {            
        },
    }

    for (const row of inp) {
        let [word1, word2, word3, word4, ...comment] = row.split(' ');
        
        if ( word1 === 'user' )         addUser    (storage, word2);
        else if ( word1 === 'article' ) addArticle (storage, word2);
        else if ( word2 === 'posts'  ) addComments(storage, word1, word4, comment);        
    }
    // console.log(JSON.stringify(storage, null, 2));
    let arr1 = Object.entries(storage.articles).sort((a,b) => b[1].length - a[1].length);
    arr1.forEach( x => {
        console.log(`Comments on ${x[0]}`);
        
        let arr2 = x[1].sort( (a, b) => a[0].localeCompare(b[0]) );        
        arr2.forEach( y => console.log(`--- From user ${y[0]}: ${y[1]}`));
    });
    
}
/*-----------------------------------------------------------------------------------------------------------------*/

function addUser( storage, user ){
    storage.users.push(user);
}

function addArticle( storage, article ){
    if (!storage.articles.hasOwnProperty(article)) {
        storage.articles[article] = {};
    }
}

function addComments( storage, user,article, comment ){
    article = article.split('');
    article.pop();
    article = article.join('');
    comment = comment.join(' ')
    let tempArr = [];
    if ( storage.users.includes(user) && storage.articles.hasOwnProperty(article) ){
        let len = Object.keys(storage.articles[article]).length;
        if ( len === 0){
            storage.articles[article] = [];
        }
        tempArr.push(user);
        tempArr.push(comment);
        storage.articles[article].push(tempArr);
    }
}



solve([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
