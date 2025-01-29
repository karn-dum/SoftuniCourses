let end = false;

function solve(in1, in2) {
  while (in2.length > 0) {
    let [command, ...params] = in2.shift().split(" ");
    let commands = {
      add: add,
      addMany: addMany,
      contains: contains,
      remove: remove,
      shift: shift,
      sumPairs: sumPairs,
      print: print,
    };
    commands[command](in1, params);
    if (end) { end = false; break}
  }
}

//----------------------
function print(in1) {
  end = true;
  console.log(in1);
}
//----------------------
function add(in1, params) {
  let [index, element] = params.map(Number);
  in1.splice(index, 0, element);
}
//----------------------
function addMany(in1, params) {
  let [index, ...elements] = params.map(Number);
  in1.splice(index, 0, ...elements);
}
//----------------------
function contains(in1, params) {
  let [element] = params.map(Number);
  console.log(in1.indexOf(element));
}

function remove(in1, params) {
  let index = Number(params[0]);
  in1.splice(index, 1);
}
//----------------------
function shift(in1, params) {
  let positions = Number(params[0]);
  for (let i = 1; i <= positions; i++) {
    in1.push(in1.shift());
  }
}
//----------------------
function sumPairs(in1) {
  let tempArr = [];
  let len = in1.length;
  for (let i = 0; i < len; i += 2) {
    let num1 = in1[i],
      num2 = in1[i + 1];

    if (len % 2 === 0) {
      tempArr.push(num1 + num2);
    } else {
      if (i === len - 1) num2 = 0;
      tempArr.push(num1 + num2);
    }
  }
  in1.length = 0;
  for (let el of tempArr) in1.push(el);  
}

solve([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);
solve([1, 2, 3, 4, 5],["addMany 5 9 8 7 6 5","contains 15","remove 3","shift 1","print"]);
solve([1, 2, 3, 4, 5],["addMany 5 9 8 7 6 5","contains 15","remove 3","shift 1","sumPairs","print"]);
