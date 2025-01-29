function solve(text, word) {

    let textArr = text.split(' ').filter( x => x == word);
    console.log(textArr.length);
    


}

solve("This is a word and it also is a sentence", "is");
