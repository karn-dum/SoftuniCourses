function solve(str, char, result) {
    
    //let charToChange = str_1.split('').find((element) => element === '_' );
    //let indexToChange = str_1.split('').indexOf('_');
    //console.log(indexToChange);
    //console.log(endStr);    
    
    // let resultArr = str.split(''); 
    // resultArr.splice(resultArr.indexOf('_'),1,char);    
    // let endStr = resultArr.join('');
    // printStr = endStr === result ? 'Matched' : 'Not Matched';
    // console.log(printStr);    

    let res = str.replace('_', char);
    let output = res === result ?  'Matched' : 'Not Matched';
    console.log(output);    
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');