function solve(inp1) {
    const product = inp1;
    switch (product) {
        case "banana":
        case "apple": 
        case "kiwi":  
        case "cherry":
        case "lemon":
        case "grapes":  console.log("fruit");     break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":  console.log("vegetable"); break;            
        default:        console.log("unknown");   break;
    }
}

solve("banana");
solve("apple");
solve("tomato");
solve("water");
