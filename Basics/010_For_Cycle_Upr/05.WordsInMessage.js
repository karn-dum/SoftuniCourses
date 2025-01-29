function solve(inp1) {
    let mess = inp1.trim();
    let countOfWords = 0;
    for( let i = 0; i < mess.length; i++){
        if(mess[i] === " " && mess[i+1] !== " "){
            countOfWords++;
        }
    }
    countOfWords++;
    
    if(countOfWords > 10){
    console.log(`The message is too long to be send! Has ${countOfWords} words.`);
    } else {
    console.log(`The message was sent successfully!`);
    }
}

solve("This message has exactly eleven words. One more as it's allowed!");
solve("This message has ten words and you can send it!");