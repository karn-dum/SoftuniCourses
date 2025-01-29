function solve(inp) {
  let animalType = inp;

  switch (animalType) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}

solve("dog");
solve("snake");
solve("cat");
