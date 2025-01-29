function solve(input) {
  let TourPrice = Number(input[0]);
  let PuzzleCount = Number(input[1]);
  let DollCount = Number(input[2]);
  let BearCount = Number(input[3]);
  let MinioinsCount = Number(input[4]);
  let TrukCount = Number(input[5]);

  let sum =
    PuzzleCount * 2.6 +
    DollCount * 3 +
    BearCount * 4.1 +
    MinioinsCount * 8.2 +
    TrukCount * 2;
  let ToyCount =
    PuzzleCount + DollCount + BearCount + MinioinsCount + TrukCount;
  if (ToyCount >= 50) {
    sum = sum - (sum * 25) / 100;
  }

  sum = sum - (sum * 10) / 100;

  if (sum >= TourPrice) {
    console.log(`Yes! ${(sum - TourPrice).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(TourPrice - sum).toFixed(2)} lv needed.`);
  }
}

solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);