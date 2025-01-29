function solve(inp) {
    const word = inp[0];
    const pass = "s3cr3t!P@ssw0rd";
    if ( word === pass) {
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

solve(["qwerty"]);
solve(["s3cr3t!P@ssw0rd"]);
solve(["s3cr3t!p@ss"]);
