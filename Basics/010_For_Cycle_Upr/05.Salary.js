function solve(inp) {
    let openTabs = Number(inp[0]);
    let salary = Number(inp[1]);
    let tabName = "";
    for ( let i = 2; i <= inp.length; i++ ){
        tabName = inp[i];
        if( tabName === "Facebook") salary -= 150;
        else if( tabName === "Instagram") salary -= 100;
        else if( tabName === "Reddit") salary -= 50;
    }
    if (salary > 0) {
        console.log(salary);
    }else{
        console.log("You have lost your salary.");
    }
}

solve([10,750,"Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);
solve([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
solve([3,500,"Facebook","Stackoverflow.com","softuni.bg"]);
    