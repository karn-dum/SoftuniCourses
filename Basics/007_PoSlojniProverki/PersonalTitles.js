function solve(inp1, inp2) {
  const age = Number(inp1);
  const gender = inp2;

    if(gender === "f"){
        if (age >= 16){
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }else{
        if (age >= 16){
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }
}

solve("12", "f");
solve("17", "m");
solve("25", "f");
solve("13.5", "m");
