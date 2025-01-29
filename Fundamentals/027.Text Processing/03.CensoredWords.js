function solve(text, word) {
    let cenz = "*".repeat(word.length);
    while ( text.includes(word) ) {
        text = text.replace(word,cenz);
    }
    console.log(text);    
}

function solve1(text, word) {
    let cenz = "*".repeat(word.length);
    text = text.split(word).join(cenz);
    console.log(text);    
}

solve1("A small sentence with some words small", "small");