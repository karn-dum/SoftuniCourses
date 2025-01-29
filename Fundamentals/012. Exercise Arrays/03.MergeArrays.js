function solve(arr1, arr2) {
    let thirdArrea = [];
    for ( let i = 0; i < arr1.length; i++ ){
        if( i % 2 === 0 ) thirdArrea.push(Number(arr1[i]) + Number(arr2[i]));
        else thirdArrea.push(arr1[i] + arr2[i]);
    }
    console.log(thirdArrea.join(" - "));
    
}

solve(['5', '15', '23', '56', '35'],
      ['17', '22', '87', '36', '11']
    );
solve(['13', '12312', '5', '77', '4'],
      ['22', '333', '5', '122', '44']
    );