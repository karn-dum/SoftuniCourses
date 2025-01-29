function solve(num, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
        if(i >= num - 1) break;
    }
    console.log(newArr.join(' '));
    
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);