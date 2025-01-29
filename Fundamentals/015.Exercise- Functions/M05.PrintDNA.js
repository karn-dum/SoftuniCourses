function solve(helixlen) {
  let source = ["AT", "CG", "TT", "AG", "GG"];
  let prnLine = "-".repeat(source.length + 1).split("");
  let finalArr = [];
  let lLp = 2; //left Letter Position
  let rLp = 3; //right Letter Position
  let positionCounter = 1;
  let reverse = false;

  while (helixlen > 0) {
    for (j = 0; j < source.length; j++) {
      if (helixlen <= 0) break;
      let leftLetter = source[j][0];
      let rightLetter = source[j][1];
      helixlen--;
      prnLine = "-".repeat(source.length + 1).split("");
      prnLine.splice(lLp, 1, leftLetter);
      prnLine.splice(rLp, 1, rightLetter);
      starsFill(prnLine);
      finalArr.push(prnLine);

      if (!reverse) {
        lLp--;
        rLp++;
      } else {
        lLp++;
        rLp--;
      }

      positionCounter++;
      if (positionCounter >= 3) {
        positionCounter = 1;
        if (reverse) reverse = false;
        else reverse = true;
      }
    }
  }
  for (let i = 0; i < finalArr.length; i++) {
    console.log(finalArr[i].join(""));
  }
}
//---------------------------
function starsFill(prnLine) {
  for (let i = 0; i < 3; i++) {
    if (prnLine[i] !== "-") break;
    else prnLine[i] = "*";
  }
  for (let i = 5; i > 2; i--) {
    if (prnLine[i] !== "-") break;
    else prnLine[i] = "*";
  }
  return;
}

//solve(4);
solve(10);
//solve(2);
