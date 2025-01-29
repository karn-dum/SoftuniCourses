function solve(words, text) {
    words = words.split(', ');
    for (const word of words) {
        let firstStar;
        while ( firstStar != -1){
            let noMoreStars = false;
            firstStar = text.indexOf('*');
            let tempLen = 0;
            for ( let i = firstStar; i < text.length; i++){
                if ( text[i+1] !== '*' ) {
                    tempLen = i+1 - firstStar;  
                    noMoreStars = true;
                    break;                    
                }                
            }
            text = text.replace('*'.repeat(tempLen), word);
            if (noMoreStars) break;
        }
    }
    console.log(text);    
}

solve("great", "softuni is ***** place for learning new programming languages");
console.log('------------------------------------------------------------------');

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
