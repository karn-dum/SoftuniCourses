function solve(inp) {
    let text = inp[0];
    let pattern = inp[1];
    // console.log(text);
    let len = pattern.length
    let noShake = false;
    while (len > 0 && noShake == false) {
        
        let firstIndex = text.indexOf(pattern);
        if( firstIndex == -1 ) {noShake = true; break; }

        text = text.split('');
        text.splice(firstIndex, len);
        text = text.join('');
        //console.log(text);
    
        let lastIndex = text.lastIndexOf(pattern);
        if( lastIndex == -1 ) {noShake = true; break; }

        text = text.split('');
        text.splice(lastIndex, len);
        text = text.join('');
        //console.log(text);
    
        console.log('Shaked it.');
        

        let removeIndex = Math.floor(len / 2);
        pattern = pattern.split('');
        pattern.splice(removeIndex,1) ;
        pattern = pattern.join('');
        len = pattern.length;
        //console.log(pattern);
    }

    if (noShake) console.log('No shake.');
    console.log(text);

}

solve(["astalavista baby",
    "sta"]
    );

    console.log('-------------------');
    
solve(["##mtm!!mm.mm*mtm.#",
    "mtm"]
    );