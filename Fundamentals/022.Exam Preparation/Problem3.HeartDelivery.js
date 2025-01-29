function solve(inp) {
  let houses = inp.shift().split("@");
  let isLove = false;
  let successfulMission = true;
  let happyPlaces = 0;
  let houseIndex = 0;
  let lastIndex = 0;
  houses = houses.map(x => Number(x));
  while (houses.length > 0) {
    let row = inp.shift();
    if (row === "Love!") {
      isLove = true;
      break;
    }
    let [command, jumpsNum] = row.split(" ");
    jumpsNum = Number(jumpsNum);
    if (houseIndex + jumpsNum >= houses.length) {
      houseIndex = 0;
    } else {
      houseIndex += jumpsNum;
    }
    if (houses[houseIndex] <= 0) {
      console.log(`Place ${houseIndex} already had Valentine's day.`);
    } else {
      houses[houseIndex] -= 2;
      if (houses[houseIndex] <= 0) {
        console.log(`Place ${houseIndex} has Valentine's day.`);
      }
    }
    lastIndex = houseIndex;
  }
  console.log(`Cupid's last position was ${lastIndex}.`);
  houses.map((x) => {
    if (x <= 0) {
      happyPlaces++;
    } else {
        successfulMission = false;
    }
  });

  if(successfulMission) {
    console.log('Mission was successful.');    
  } else {
    console.log(`Cupid has failed ${houses.length - happyPlaces} places.`);    
  }
}

solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
