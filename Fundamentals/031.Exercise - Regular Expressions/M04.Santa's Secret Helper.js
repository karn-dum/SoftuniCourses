function solve(inp) {

    let pattern1 = /@(?<name>[A-Za-z]+).*!(?<behavior>[G|N])!/g
    let key = Number(inp.shift());
    // console.log(key);
    let row;
    let goodChidren = [];
    while ( (  row = inp.shift() ) != 'end' ) {
        row = row.split('').map(x => String.fromCharCode( x.charCodeAt(0)-key)).join('');
        let kid = pattern1.exec(row);
        pattern1.lastIndex = 0;
        // console.log(kid.groups.name, kid.groups.behavior);
        if ( kid.groups.behavior == 'G' ) goodChidren.push(kid.groups.name);
    } 
    console.log(goodChidren.join('\n'));
}

solve(['3',
    'CNdwhamigye@numje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
    ]);
console.log('-------------');
    
solve(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
    ]);
