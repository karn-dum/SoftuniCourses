//solve();
//solve_1();
//solve_2();
solve_3();
function solve_3() {
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
 });
console.log(greatIDs); // [132, 96]
}


function solve_2() {
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
}
//---------------------------------------------------------------------------------

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
function solve_1() {
    const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);  
    console.log(filtered);

}
//---------------------------------------------------------------------------------

function isBigEnough(value) {
    return value >= 10;
  }

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
function solve() {
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
}
//---------------------------------------------------------------------------------
