function solve(inp) {

    let source = (inp[0] + inp[1]).split('');
    let temlpate = inp[2].split('');
    // console.log(source);
    
    for ( let  letter = 0; letter < source.length; letter ++){
        if ( isVowel(source[letter]) ) {
            source[letter] = temlpate.shift().toUpperCase();
            temlpate.push(source[letter]);
        }
    }

    console.log(source.reverse().join(''));
    

}

/*---------------------------------------------------------------------------------------------------------------------------*/
function isVowel(letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(letter) ) return true;
    return false;
}

solve(["ilovepizza", "ihatevegetables", "orange"]);
solve(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
solve(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
