function breakingRecords(scores) {
  // Write your code here

  let lowScore = 0;
  let highScore = 0;
  let minCount = 0;
  let maxCount = 0;

  if (lowScore === 0) {
    lowScore = scores[0];
  }
  if (highScore === 0) {
    highScore = scores[0];
  }

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < lowScore) {
      lowScore = scores[i];
      minCount += 1;
    }
    if (scores[i] > highScore) {
      highScore = scores[i];
      maxCount += 1;
    }
  }
  //   console.log(maxCount, minCount);
}
breakingRecords([12, 24, 10, 24, 7]);
// breakingRecords([12, 24, 10, 24, 9, 30, 20]);

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
