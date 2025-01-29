function solve(inp) {

    let words = inp[1];
    let text = inp[0];
    let firstStar;
    while ( firstStar != -1){
        let noMoreStars = false;
        firstStar = text.indexOf('_');
        let tempLen = 0;
        for ( let i = firstStar; i < text.length; i++){
            if ( text[i+1] !== '_' ) {
                tempLen = i+1 - firstStar;
                noMoreStars = true;
            }
            if( noMoreStars) {
             for ( let word of words ){
                    if ( word.length == tempLen ){
                        text = text.replace('_'.repeat(tempLen), word);                        
                        noMoreStars = false;
                        firstStar = text.indexOf('_');
                        break;
                    } 
                }
            }
        }               
    }
    console.log(text);    
}

solve([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
