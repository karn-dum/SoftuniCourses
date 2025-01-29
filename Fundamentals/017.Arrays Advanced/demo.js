let myArr = [5, 8, -3, 11, 44, 13, -8];

//let nums = myMap(myArr, x => x + 1);
let nums = myMap(myArr, increment);
console.log(nums);

function myMap(arr, operation) {
    let result = [] ;
    for (let element of arr) {
        result.push(operation(element))
    }
    return result;    
}

//---

function increment(x) {
    x++;
    return x;
}