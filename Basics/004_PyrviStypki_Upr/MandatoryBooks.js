function solve(inp) {

// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000];
// 2.	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
// 3.	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];

const numberOfPages = Number(inp[0]);
const numberOfPagesForHour = Number(inp[1]);
const numberOfDays = Number(inp[2]);
let globalTime = numberOfPages/numberOfPagesForHour
HoursNeeded = globalTime/numberOfDays

console.log(HoursNeeded);

}

solve(["212", "20", "2"]);
solve(["432", "15", "4"]);
