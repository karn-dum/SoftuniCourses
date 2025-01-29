function solve(nums) {
    let [n1, n2, n3, ...rest] = [... nums];
    console.log( n1, n2, n3 );
    console.log(rest);
    let [...array] = [...nums];
    console.log(nums);
    console.log(array);
    nums[0 ] = 50000
    console.log(nums);
    console.log(Math.min(...nums));
    
    
    
}

solve([1, 21, 3, 52, 69, 63, 31, 2,18, 94]);