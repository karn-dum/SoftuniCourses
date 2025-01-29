function solve(inp) {
    // Regex за разделене на три части - всяка в отдела променлива
    let patt_1 = /[^|]+|/g ;
    let firstPart  = inp.match(patt_1)[0];
    let secondPart = inp.match(patt_1)[2];
    let thirdPart  = inp.match(patt_1)[4];
    // Regex за определяне на валидните главните букви от firstPart: слагаме ги в масив 
    let patt_2 = /([#\$%\*&])(?<Caps>[A-Z]+)(\1)/g ;
    let capsArr = [];
    let reg2Arr = firstPart.match(patt_2).forEach(el => {
        for ( let i = 1; i < el.length -1; i++ ) capsArr.push(el[i]);
    });
    // Regex за определяне на валидните двойки буква:дължина от econdPart: слагаме ги в масив 
    let patt_3 = /\d\d:\d\d/g;
    
    let pairOfNums = {}
    secondPart.match(patt_3).forEach( x => {
        let letter = String.fromCharCode(Number(x.slice(0,2)));
        let len = Number(x.slice(-2)) + 1;
        if ( capsArr.includes(letter) ) {
            if ( pairOfNums[letter] == undefined ) pairOfNums[letter] = len;
        };
    })
    // console.log(capsArr);
    // console.log(pairOfNums);
    // Regex за определяне наличните думи в Third part
    let patt_4 = /[A-Z][^\s]+/g ;
    let wordsArr = thirdPart.match(patt_4);    
    // console.log(wordsArr);
    let resultArr = [];
    wordsArr.forEach(x => {
        if( pairOfNums.hasOwnProperty(x[0]) && pairOfNums[x[0]] == x.length) resultArr.push(x);
    });
    resultArr.forEach( x => console.log(x));
}

solve('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos');
console.log('--------------');

solve(`Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig`);